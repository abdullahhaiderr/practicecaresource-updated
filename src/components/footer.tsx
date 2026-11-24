import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { Container } from "@/components/container";
import { SocialIcons } from "@/components/social-icons";
import { CookieSettingsButton } from "@/components/cookie-consent";
import { footerContact, footerQuickLinks } from "@/lib/site";

const footerServices = [
  { label: "View all", href: "/services" },
  { label: "Revenue Cycle Management", href: "/services/revenue-cycle-management" },
  { label: "Credentialing & Enrollment", href: "/services/credentialing" },
  { label: "Accounts Receivable Recovery", href: "/services/ar-recovery" },
  { label: "Denial Management", href: "/services/denial-management" },
  { label: "Medical Coding", href: "/services/medical-coding" },
];

const linkClassName =
  "text-sm leading-relaxed text-brand-slate transition-colors hover:text-brand-accent-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-ink sm:text-base";

const headingClassName =
  "font-display text-lg font-semibold uppercase tracking-[0.08em] text-brand-dark";

export function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-background-wash text-brand-dark">
      <Container className="pt-10 pb-5 sm:pt-14 sm:pb-6 lg:pt-16 lg:pb-7">
        <div className="grid gap-10 border-b border-brand-border pb-10 sm:gap-12 md:grid-cols-2 md:gap-9 xl:grid-cols-[1.3fr_1.1fr_0.85fr_1fr] xl:gap-8 lg:pb-12">
          <div className="max-w-sm">
            <Link href="/" aria-label="Practice Care Source home" className="inline-block rounded-md">
              <Image
                src="/logo.png"
                alt="Practice Care Source"
                width={219}
                height={60}
                className="h-auto w-[194px]"
              />
            </Link>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-brand-slate">
              The source of care for your practice. Medical billing, coding,
              credentialing, and revenue cycle support for healthcare practices
              across the United States.
            </p>
            <span className="mt-5 inline-flex rounded-full border border-brand-accent/25 bg-brand-accent/5 px-3.5 py-2 text-sm font-semibold text-brand-accent-ink">
              Serving U.S. healthcare practices
            </span>
            <div className="mt-5">
              <SocialIcons />
            </div>
          </div>

          <div className="min-w-0">
            <h2 className={headingClassName}>Main services</h2>
            <ul className="mt-5 space-y-3">
              {footerServices.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className={linkClassName}>
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <h2 className={headingClassName}>Company</h2>
            <ul className="mt-5 space-y-3">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClassName}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <h2 className={headingClassName}>Get in touch</h2>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href={"mailto:" + footerContact.email}
                  className="inline-flex min-w-0 items-start gap-2.5 text-sm leading-relaxed text-brand-slate transition-colors hover:text-brand-accent-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-ink sm:text-base"
                >
                  <Mail size={19} className="mt-0.5 shrink-0 text-brand-accent-ink" aria-hidden="true" />
                  <span className="break-all">{footerContact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={"tel:" + footerContact.phoneHref}
                  className="inline-flex items-center gap-2.5 text-sm leading-relaxed text-brand-slate transition-colors hover:text-brand-accent-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-ink sm:text-base"
                >
                  <Phone size={19} className="shrink-0 text-brand-accent-ink" aria-hidden="true" />
                  <span>{footerContact.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-brand-accent px-5 text-sm font-bold text-brand-background shadow-card transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-ink"
                >
                  Schedule a Consultation
                  <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-5 text-sm text-brand-slate sm:flex-row sm:items-center sm:justify-between">
          <p className="shrink-0">© {new Date().getFullYear()} Practice Care Source. All rights reserved.</p>
          <nav
            aria-label="Legal and privacy links"
            className="flex flex-wrap items-center gap-x-5 gap-y-2 sm:ml-auto sm:justify-end"
          >
            <Link href="/privacy-policy" className="shrink-0 transition-colors hover:text-brand-accent-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-ink">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="shrink-0 transition-colors hover:text-brand-accent-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-ink">
              Terms and Conditions
            </Link>
            <Link href="/cookies-policy" className="shrink-0 transition-colors hover:text-brand-accent-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-ink">
              Cookie Policy
            </Link>
            <CookieSettingsButton />
          </nav>
        </div>

        <p className="mt-5 max-w-6xl text-xs leading-relaxed text-brand-slate sm:text-sm">
          Practice Care Source provides medical billing and revenue cycle
          management services. This website is for business inquiries and is
          not intended to collect patient health information. Please do not
          submit patient details or protected health information through
          website forms. Practice Care Source does not claim to be HIPAA
          certified.
        </p>
      </Container>
    </footer>
  );
}
