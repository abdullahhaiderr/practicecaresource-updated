import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { CookieSettingsButton } from "@/components/cookie-consent";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "See how Practice Care Source uses cookies and manage your cookie choice.",
};

export default function CookiesPolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      description="This page describes the cookies and similar browser storage used by the Practice Care Source website and how to update your choice."
      sections={[
        {
          title: "What cookies are",
          content: <p>Cookies are small text files that a website can store in your browser. Similar browser storage can remember a setting between visits. Website infrastructure may also process technical request information needed to deliver and secure pages.</p>,
        },
        {
          title: "What this website uses",
          content: <>
            <p>The website currently uses one first-party cookie named <code className="rounded bg-brand-background-wash px-1.5 py-0.5 text-sm text-brand-accent-ink">practice-care-source-cookie-consent</code> to remember whether you accepted or rejected optional cookies. It is set for 180 days, uses the same-site setting, and contains only that choice.</p>
            <p>The current site code does not load analytics, advertising, or social-media tracking cookies. The social icons do not embed social-media feeds or load third-party tracking scripts. Hosting providers may process technical request information to deliver and protect the site.</p>
          </>,
        },
        {
          title: "Your choice",
          content: <>
            <p>You can accept or reject optional cookies in the choice panel. There are no optional analytics or advertising cookies active in the current version of the site; the stored choice records your preference. You can reopen the panel at any time.</p>
            <div className="not-prose"><CookieSettingsButton /></div>
          </>,
        },
        {
          title: "Browser controls and updates",
          content: <>
            <p>You can also clear cookies in your browser settings. Clearing the preference cookie removes the saved choice, so the website will ask again the next time you visit.</p>
            <p>If the website adds optional cookies in the future, this policy and the choice panel will be updated to describe them before they are used.</p>
          </>,
        },
      ]}
    />
  );
}
