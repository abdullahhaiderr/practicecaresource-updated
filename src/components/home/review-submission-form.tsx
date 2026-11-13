"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, LoaderCircle, Send } from "lucide-react";
import { Button } from "@/components/button";

type SubmitStatus =
  | { type: "success"; message: string }
  | { type: "error"; message: string }
  | null;

const fieldClass =
  "mt-2 min-h-12 w-full rounded-xl border border-brand-border bg-brand-background px-4 py-3 text-brand-dark placeholder:text-brand-slate/65 transition-colors focus:border-brand-accent-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/25";
const labelClass = "block text-sm font-bold text-brand-dark";

export function ReviewSubmissionForm() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitStatus(null);
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const values = {
      fullName: String(formData.get("fullName") ?? ""),
      email: String(formData.get("email") ?? ""),
      practiceName: String(formData.get("practiceName") ?? ""),
      review: String(formData.get("review") ?? ""),
      consent: formData.get("consent") === "on",
      website: String(formData.get("website") ?? ""),
    };

    try {
      const response = await fetch("/api/testimonial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = (await response.json().catch(() => ({}))) as {
        message?: string;
      };

      if (!response.ok) {
        setSubmitStatus({
          type: "error",
          message:
            result.message ??
            "We couldn't send your review right now. Please try again.",
        });
        return;
      }

      setSubmitStatus({
        type: "success",
        message:
          result.message ??
          "Thank you. Your review has been sent to CareSource for review.",
      });
      form.reset();
    } catch {
      setSubmitStatus({
        type: "error",
        message:
          "We couldn't send your review right now. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="review-full-name">
            Name to display <span aria-hidden="true">*</span>
          </label>
          <input
            id="review-full-name"
            name="fullName"
            autoComplete="name"
            maxLength={100}
            required
            className={fieldClass}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="review-email">
            Email for follow-up <span aria-hidden="true">*</span>
          </label>
          <input
            id="review-email"
            name="email"
            type="email"
            autoComplete="email"
            maxLength={254}
            required
            aria-describedby="review-email-hint"
            className={fieldClass}
          />
          <p id="review-email-hint" className="mt-2 text-xs leading-relaxed text-brand-slate">
            This stays private and is only used to follow up with you.
          </p>
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="review-practice">
            Practice name <span className="font-normal text-brand-slate">(optional)</span>
          </label>
          <input
            id="review-practice"
            name="practiceName"
            autoComplete="organization"
            maxLength={160}
            className={fieldClass}
          />
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="review-text">
            Your medical billing review <span aria-hidden="true">*</span>
          </label>
          <textarea
            id="review-text"
            name="review"
            rows={4}
            minLength={20}
            maxLength={1200}
            required
            placeholder="Share your own experience with CareSource's medical billing support."
            aria-describedby="review-text-hint"
            className={fieldClass + " min-h-32 resize-y"}
          />
          <p id="review-text-hint" className="mt-2 text-sm leading-relaxed text-brand-slate">
            Please do not include patient names or protected health information.
          </p>
        </div>
      </div>

      <div className="absolute left-[-9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="review-website">Leave this field blank</label>
        <input
          id="review-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="review-consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1 size-5 shrink-0 rounded border-brand-border accent-brand-accent-ink focus-visible:ring-2 focus-visible:ring-brand-accent-ink"
        />
        <label htmlFor="review-consent" className="text-sm leading-relaxed text-brand-dark">
          This review reflects my own experience, and CareSource may contact me to confirm the wording before publishing it.
        </label>
      </div>

      {submitStatus ? (
        <p
          role={submitStatus.type === "error" ? "alert" : "status"}
          aria-live={submitStatus.type === "error" ? "assertive" : "polite"}
          className={[
            "flex items-start gap-2 rounded-xl px-4 py-3 text-sm font-semibold",
            submitStatus.type === "success"
              ? "bg-emerald-50 text-emerald-900"
              : "bg-red-50 text-red-800",
          ].join(" ")}
        >
          {submitStatus.type === "success" ? (
            <CheckCircle2 size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
          ) : (
            <AlertCircle size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
          )}
          <span>{submitStatus.message}</span>
        </p>
      ) : null}

      <Button type="submit" disabled={isSubmitting} className="disabled:cursor-not-allowed disabled:opacity-60">
        {isSubmitting ? (
          <span className="inline-flex items-center gap-2">
            <LoaderCircle size={17} className="animate-spin" aria-hidden="true" />
            Sending review
          </span>
        ) : (
          <span className="inline-flex items-center gap-2">
            <Send size={16} aria-hidden="true" />
            Submit review
          </span>
        )}
      </Button>
    </form>
  );
}
