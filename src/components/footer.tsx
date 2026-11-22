import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { Container } from "@/components/container";
import { SocialIcons } from "@/components/social-icons";
import { CookieSettingsButton } from "@/components/cookie-consent";
import { footerContact, footerQuickLinks, services } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-background-wash text-brand-dark">
      <Container className="py-10 sm:py-14 lg:py-16">
        <div className="grid gap-10 border-b border-brand-border pb-10 sm:gap-12 md:grid-cols-[1.25fr_0.75fr_0.9fr_1fr] md:gap-8 lg:pb-12">
          <div className="max-w-sm">
            <Link href="/" aria-label="CareSource home" className="inline-block rounded-md">
              <Image src="/logo.png" alt="Practice Care Source" width={219} height={60} className="h-auto w-[194px]" />
            </Link>
            <div className="mt-4">
              <SocialIcons />
            </div>
            <p className="mt-5 max-w-xs text-base leading-relaxed text-brand-slate">
              {footerContact.tagline}
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-pill bg-brand-accent px-5 text-sm font-bold text-brand-background shadow-card transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-card-hover focus-visible:outline-none"
            >
              Book a Free Audit <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-brand-dark">Quick links</h2>
            <ul className="mt-4 space-y-2.5">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-brand-slate transition-colors hover:text-brand-accent-ink focus-visible:outline-none">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-brand-dark">Services</h2>
            <ul className="mt-4 space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={"/services/" + service.slug} className="text-sm text-brand-slate transition-colors hover:text-brand-accent-ink focus-visible:outline-none">
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-brand-dark">Contact</h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={"mailto:" + footerContact.email} className="inline-flex items-start gap-2.5 text-sm text-brand-slate transition-colors hover:text-brand-accent-ink focus-visible:outline-none">
                  <Mail size={17} className="mt-0.5 shrink-0 text-brand-accent-ink" aria-hidden="true" />
                  <span>{footerContact.email}</span>
                </a>
              </li>
              <li>
                <a href={"tel:" + footerContact.phoneHref} className="inline-flex items-center gap-2.5 text-sm text-brand-slate transition-colors hover:text-brand-accent-ink focus-visible:outline-none">
                  <Phone size={17} className="shrink-0 text-brand-accent-ink" aria-hidden="true" />
                  <span>{footerContact.phoneDisplay}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-sm text-brand-slate">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} CareSource. All rights reserved.</p>
            <p>The source of care for your practice.</p>
          </div>
          <nav aria-label="Legal and privacy links" className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-brand-border pt-4">
            <Link href="/privacy-policy" className="transition-colors hover:text-brand-accent-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-ink">Privacy policy</Link>
            <Link href="/cookies-policy" className="transition-colors hover:text-brand-accent-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-ink">Cookie policy</Link>
            <Link href="/terms-of-service" className="transition-colors hover:text-brand-accent-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-ink">Terms of service</Link>
            <CookieSettingsButton />
          </nav>
        </div>
      </Container>
    </footer>
  );
}
