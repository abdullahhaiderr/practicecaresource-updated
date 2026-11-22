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
      className="cookie-consent-enter fixed inset-x-2 bottom-2 z-[100] mx-auto max-w-5xl rounded-xl border border-brand-border bg-brand-background px-2.5 py-2 text-brand-dark shadow-card-hover sm:inset-x-5 sm:bottom-4 sm:rounded-full sm:px-4 sm:py-2.5"
    >
      <div className="flex min-h-10 items-center gap-1.5 sm:gap-3">
        <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-peach/65 text-brand-accent-ink sm:size-9" aria-hidden="true">
          <Cookie size={17} />
        </span>
        <div className="min-w-0 flex-1">
          <h2 id="cookie-consent-title" className="sr-only">Cookie choices</h2>
          <p id="cookie-consent-description" className="truncate text-[0.68rem] font-medium leading-tight text-brand-slate sm:text-xs md:text-sm">
            <span className="sm:hidden">Cookie choices · essential only</span>
            <span className="hidden sm:inline">Essential preference cookie; no analytics or advertising cookies are active.</span>
          </p>
        </div>
        <Link href="/cookies-policy" className="hidden shrink-0 px-2 text-xs font-bold text-brand-accent-ink underline decoration-brand-accent/50 underline-offset-4 hover:text-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-ink md:inline-flex">
          Policy
        </Link>
        <button type="button" onClick={() => choose("rejected")} className="min-h-9 shrink-0 rounded-full border border-brand-border px-2.5 text-[0.68rem] font-bold text-brand-accent-ink transition-colors hover:border-brand-accent/45 hover:bg-brand-background-wash focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-ink sm:px-3 sm:text-xs">
          Reject
        </button>
        <button type="button" onClick={() => choose("accepted")} className="min-h-9 shrink-0 rounded-full bg-brand-accent px-2.5 text-[0.68rem] font-bold text-brand-background shadow-sm transition-colors hover:bg-brand-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-ink sm:px-3 sm:text-xs">
          Accept
        </button>
        <button type="button" onClick={() => setOpen(false)} className="grid size-8 shrink-0 place-items-center rounded-full text-brand-slate transition-colors hover:bg-brand-background-wash hover:text-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-ink" aria-label="Close cookie choices">
          <X size={16} aria-hidden="true" />
        </button>
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
