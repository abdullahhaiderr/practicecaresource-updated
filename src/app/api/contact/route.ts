import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { contactFormSchema, contactFormSimpleSchema } from "@/lib/contact-schema";

export const runtime = "nodejs";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MAX_TRACKED_CLIENTS = 2000;
const MAX_BODY_BYTES = 16_000;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const rateLimitEntries = new Map<string, RateLimitEntry>();

function getClientKey(request: NextRequest) {
  const directIp = request.headers.get("x-real-ip")?.trim();
  const forwardedIp = request.headers
    .get("x-forwarded-for")
    ?.split(",")[0]
    ?.trim();

  return directIp || forwardedIp || "unknown-client";
}

function checkRateLimit(clientKey: string, now = Date.now()) {
  for (const [key, entry] of rateLimitEntries) {
    if (entry.resetAt <= now) rateLimitEntries.delete(key);
  }

  const current = rateLimitEntries.get(clientKey);
  if (!current || current.resetAt <= now) {
    if (rateLimitEntries.size >= MAX_TRACKED_CLIENTS) {
      const oldestKey = rateLimitEntries.keys().next().value;
      if (oldestKey) rateLimitEntries.delete(oldestKey);
    }
    rateLimitEntries.set(clientKey, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return { allowed: true, retryAfter: 0 };
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return {
      allowed: false,
      retryAfter: Math.max(1, Math.ceil((current.resetAt - now) / 1000)),
    };
  }

  current.count += 1;
  return { allowed: true, retryAfter: 0 };
}

async function readJsonBody(request: NextRequest): Promise<unknown> {
  const reader = request.body?.getReader();
  if (!reader) throw new SyntaxError("Missing request body.");

  const chunks: Uint8Array[] = [];
  let byteCount = 0;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    byteCount += value.byteLength;

    if (byteCount > MAX_BODY_BYTES) {
      await reader.cancel();
      throw new RangeError("Request body is too large.");
    }

    chunks.push(value);
  }

  const bodyBytes = new Uint8Array(byteCount);
  let offset = 0;
  for (const chunk of chunks) {
    bodyBytes.set(chunk, offset);
    offset += chunk.byteLength;
  }

  return JSON.parse(new TextDecoder().decode(bodyBytes)) as unknown;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export async function POST(request: NextRequest) {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return NextResponse.json(
      { message: "Send the form using the website contact form." },
      { status: 415 },
    );
  }

  const contentLength = Number(request.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
    return NextResponse.json(
      { message: "Your message is too large. Please shorten it and try again." },
      { status: 413 },
    );
  }

  const rateLimit = checkRateLimit(getClientKey(request));
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { message: "Too many messages were sent. Please wait a few minutes and try again." },
      {
        status: 429,
        headers: { "Retry-After": String(rateLimit.retryAfter) },
      },
    );
  }

  let body: unknown;
  try {
    body = await readJsonBody(request);
  } catch (error) {
    if (error instanceof RangeError) {
      return NextResponse.json(
        { message: "Your message is too large. Please shorten it and try again." },
        { status: 413 },
      );
    }
    return NextResponse.json(
      { message: "We couldn't read the form. Please review it and try again." },
      { status: 400 },
    );
  }

  if (isRecord(body) && typeof body.website === "string" && body.website.trim()) {
    return NextResponse.json({ success: true });
  }

  const parsed = z.union([contactFormSchema, contactFormSimpleSchema]).safeParse(body);
  if (!parsed.success) {
    const errors = Object.fromEntries(
      parsed.error.issues
        .filter((issue) => typeof issue.path[0] === "string")
        .map((issue) => [String(issue.path[0]), issue.message]),
    );

    return NextResponse.json(
      {
        message: "Please review the fields marked on the form and try again.",
        errors,
      },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_TO_EMAIL;
  const sender = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !recipient || !sender) {
    return NextResponse.json(
      { message: "Contact email is not configured yet. Please try again later." },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const { data, error } = await resend.emails.send({
    from: sender,
    to: [recipient],
    replyTo: parsed.data.email,
    subject: `CareSource website inquiry from ${parsed.data.fullName.replace(/[\r\n]+/g, " ")}`,
    text: [
      "New CareSource website contact request",
      "",
      `Name: ${parsed.data.fullName}`,
      ...("practiceName" in parsed.data ? [`Practice: ${parsed.data.practiceName}`] : []),
      `Email: ${parsed.data.email}`,
      `Phone: ${parsed.data.phone}`,
      ...("specialty" in parsed.data ? [`Specialty: ${parsed.data.specialty}`] : []),
      ...("serviceInterestedIn" in parsed.data ? [`Service of interest: ${parsed.data.serviceInterestedIn}`] : []),
      ...("monthlyClaimVolume" in parsed.data && parsed.data.monthlyClaimVolume ? [`Monthly claim volume: ${parsed.data.monthlyClaimVolume}`] : []),
      ...("consent" in parsed.data && parsed.data.consent ? ["Contact permission: Yes"] : []),
      "",
      "Message:",
      parsed.data.message,
    ].join("\n"),
  });

  if (error || !data) {
    console.error("CareSource contact email delivery failed.");
    return NextResponse.json(
      { message: "We couldn't send your message right now. Please email us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({
    success: true,
    message: "Thanks for reaching out. Your message has been sent to CareSource.",
  });
}
