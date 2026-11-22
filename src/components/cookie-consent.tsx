"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

const consentCookieName = "practice-care-source-cookie-consent";
const settingsEventName = "practice-care-source:open-cookie-settings";
const consentMaxAge = 60 * 60 * 24 * 180;

type ConsentChoice = "accepted" | "rejected";

function hasSavedChoice() {
  return document.cookie.split(";").some((cookie) => cookie.trim().startsWith(`${consentCookieName}=`));
}

function saveChoice(choice: ConsentChoice) {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${consentCookieName}=${choice}; Max-Age=${consentMaxAge}; Path=/; SameSite=Lax${secure}`;
}

export function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(!hasSavedChoice());
    const openSettings = () => setOpen(true);
    window.addEventListener(settingsEventName, openSettings);
    return () => window.removeEventListener(settingsEventName, openSettings);
  }, []);

  if (!open) return null;

  function choose(choice: ConsentChoice) {
    saveChoice(choice);
    setOpen(false);
  }

  return (
    <section
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      className="cookie-consent-enter fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-4xl rounded-2xl border border-brand-border bg-brand-background p-5 text-brand-dark shadow-card-hover sm:inset-x-6 sm:p-6"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2.5">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-brand-accent/15 bg-brand-peach/65 text-brand-accent-ink">
              <Cookie size={19} aria-hidden="true" />
            </span>
            <h2 id="cookie-consent-title" className="font-display text-2xl font-semibold">Cookie choices</h2>
          </div>
          <p id="cookie-consent-description" className="mt-3 text-sm leading-relaxed text-brand-slate">
            This site uses an essential cookie to remember your choice. It does not currently load analytics or advertising cookies. Choose whether to allow optional cookies; your choice is saved for 180 days.
          </p>
          <Link href="/cookies-policy" className="mt-2 inline-flex min-h-9 items-center text-sm font-bold text-brand-accent-ink underline decoration-brand-accent/50 underline-offset-4 hover:text-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-ink">
            Read the cookie policy
          </Link>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2 sm:max-w-[17rem] sm:justify-end">
          <button type="button" onClick={() => choose("rejected")} className="min-h-11 rounded-pill border border-brand-border px-4 text-sm font-bold text-brand-accent-ink transition-colors hover:border-brand-accent/45 hover:bg-brand-background-wash focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-ink">
            Reject optional
          </button>
          <button type="button" onClick={() => choose("accepted")} className="min-h-11 rounded-pill bg-brand-accent px-4 text-sm font-bold text-brand-background shadow-sm transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-brand-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-ink">
            Accept optional
          </button>
          <button type="button" onClick={() => setOpen(false)} className="absolute right-3 top-3 grid size-9 place-items-center rounded-full text-brand-slate transition-colors hover:bg-brand-background-wash hover:text-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-ink sm:hidden" aria-label="Close cookie choices">
            <X size={17} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(settingsEventName))}
      className="text-sm text-brand-slate underline decoration-brand-border underline-offset-4 transition-colors hover:text-brand-accent-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-ink"
    >
      Cookie settings
    </button>
  );
}
