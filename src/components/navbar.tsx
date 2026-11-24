"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, LayoutGrid, Menu, X } from "lucide-react";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { navigationLinks, serviceNavLinks } from "@/lib/site";

const getServicesInOrder = (slugs: string[]) =>
  slugs.flatMap((slug) => {
    const service = serviceNavLinks.find((item) => item.slug === slug);
    return service ? [service] : [];
  });

const serviceMenuGroups = [
  {
    title: "Revenue cycle",
    services: getServicesInOrder([
      "revenue-cycle-management",
      "medical-billing",
      "medical-coding",
      "ar-recovery",
      "denial-management",
    ]),
  },
  {
    title: "Practice operations",
    services: getServicesInOrder([
      "credentialing",
      "virtual-assistant",
      "eligibility-verification",
      "prior-authorization",
      "website-development",
    ]),
  },
];

export function Navbar() {
  const pathname = usePathname();
  const dropdownId = useId();
  const servicesCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 8);
    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => () => {
    if (servicesCloseTimer.current) clearTimeout(servicesCloseTimer.current);
  }, []);

  const openServices = () => {
    if (servicesCloseTimer.current) clearTimeout(servicesCloseTimer.current);
    setServicesOpen(true);
  };

  const scheduleServicesClose = () => {
    if (servicesCloseTimer.current) clearTimeout(servicesCloseTimer.current);
    servicesCloseTimer.current = setTimeout(() => setServicesOpen(false), 350);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const linkClass = (href: string) =>
    [
      "relative inline-flex min-h-11 items-center px-1 text-sm font-bold transition-colors",
      "after:absolute after:inset-x-1 after:bottom-1 after:h-0.5 after:origin-left after:rounded-full after:bg-brand-accent after:transition-transform after:duration-200",
      isActive(href)
        ? "text-brand-accent-ink after:scale-x-100"
        : "text-brand-dark hover:text-brand-accent-ink after:scale-x-0 hover:after:scale-x-100",
    ].join(" ");

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b border-brand-border/80 transition-[background-color,box-shadow,backdrop-filter] duration-300",
        scrolled
          ? "bg-brand-background/90 shadow-sm backdrop-blur-xl"
          : "bg-brand-background",
      ].join(" ")}
    >
      <Container className="relative">
        <div className="flex min-h-[76px] items-center justify-between gap-5 lg:min-h-[76px]">
          <Link
            href="/"
            aria-label="CareSource home"
            className="shrink-0 rounded-md focus-visible:outline-none"
          >
            <Image
              src="/logo.png"
              alt="Practice Care Source"
              width={219}
              height={60}
              priority
              className="h-auto w-[174px] sm:w-[200px] lg:w-[219px]"
            />
          </Link>

          <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
            {navigationLinks.map((link) =>
              link.label === "Services" ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={openServices}
                  onMouseLeave={scheduleServicesClose}
                >
                  <button
                    type="button"
                    className={linkClass(link.href) + " gap-1.5"}
                    aria-haspopup="true"
                    aria-expanded={servicesOpen}
                    aria-controls={dropdownId}
                    onClick={() => {
                      if (servicesCloseTimer.current) clearTimeout(servicesCloseTimer.current);
                      setServicesOpen((open) => !open);
                    }}
                    onFocus={openServices}
                  >
                    Services
                    <ArrowDown
                      size={14}
                      aria-hidden="true"
                      className={[
                        "transition-transform duration-200",
                        servicesOpen ? "rotate-180" : "",
                      ].join(" ")}
                    />
                  </button>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={linkClass(link.href)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden shrink-0 lg:block">
            <Button href="/contact" size="md" showArrow>
              Book a Free Audit
            </Button>
          </div>

          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-brand-border text-brand-dark transition-colors hover:bg-brand-background-wash focus-visible:outline-none lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen ? (
            <motion.nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              initial={reducedMotion ? false : { opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.22 }}
              className="overflow-hidden border-t border-brand-border lg:hidden"
            >
              <div className="grid gap-1 py-4">
                {navigationLinks.map((link) =>
                  link.label === "Services" ? (
                    <div key={link.href} className="rounded-xl">
                      <button
                        type="button"
                        className={[
                          "flex min-h-12 w-full items-center justify-between rounded-xl px-3 text-left font-bold",
                          isActive(link.href)
                            ? "text-brand-accent-ink"
                            : "text-brand-dark",
                        ].join(" ")}
                        aria-expanded={servicesOpen}
                        aria-controls="mobile-service-links"
                        onClick={() => setServicesOpen((open) => !open)}
                      >
                        Services
                        <ArrowDown
                          size={16}
                          aria-hidden="true"
                          className={[
                            "transition-transform",
                            servicesOpen ? "rotate-180" : "",
                          ].join(" ")}
                        />
                      </button>
                      <AnimatePresence>
                        {servicesOpen ? (
                          <motion.div
                            id="mobile-service-links"
                            initial={reducedMotion ? false : { opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="grid overflow-hidden pl-4"
                          >
                            <Link
                              href="/services"
                              className="flex min-h-11 items-center gap-2 rounded-xl bg-brand-background-wash/65 px-3 text-sm font-bold text-brand-accent-ink hover:bg-brand-peach/50"
                            >
                              <LayoutGrid size={16} aria-hidden="true" /> All services
                              <ArrowRight size={14} className="ml-auto" aria-hidden="true" />
                            </Link>
                            {serviceMenuGroups.flatMap((group) => group.services).map((service) => (
                              <Link key={service.href} href={service.href} className="flex min-h-10 items-center gap-2 rounded-lg px-3 text-sm text-brand-slate hover:bg-brand-background-wash/60 hover:text-brand-accent-ink">
                                <service.icon size={15} aria-hidden="true" /> {service.label}
                              </Link>
                            ))}
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={[
                        "flex min-h-12 items-center rounded-xl px-3 font-bold",
                        isActive(link.href)
                          ? "text-brand-accent-ink"
                          : "text-brand-dark hover:bg-brand-background-wash/60",
                      ].join(" ")}
                      aria-current={isActive(link.href) ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  ),
                )}
                <Button
                  href="/contact"
                  size="md"
                  showArrow
                  className="mt-3 w-full"
                >
                  Book a Free Audit
                </Button>
              </div>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </Container>
      <AnimatePresence>
        {servicesOpen ? (
          <motion.div
            key="services-menu"
            initial={reducedMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: reducedMotion ? 0 : 0.18 }}
            className="absolute left-0 right-0 top-full z-[60] flex justify-center px-4 pt-2 sm:px-6"
          >
            <div
              id={dropdownId}
              onMouseEnter={openServices}
              onMouseLeave={scheduleServicesClose}
              className="max-h-[calc(100vh-6rem)] w-full max-w-[64rem] overflow-y-auto rounded-3xl border border-brand-border bg-brand-background p-4 shadow-card sm:p-5 lg:p-6"
            >
              <div className="grid min-w-0 gap-5 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)_minmax(0,1fr)] md:gap-6">
                <div className="flex min-w-0 flex-col rounded-2xl bg-brand-background-wash/65 p-4 sm:p-5">
                  <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.15em] text-brand-accent-ink">Practice support</p>
                  <h2 className="mt-2 font-display text-2xl font-semibold leading-tight text-brand-dark sm:text-3xl">Explore our services</h2>
                  <p className="mt-2 text-sm leading-relaxed text-brand-slate">Choose the support that fits your team and workflow.</p>
                  <Link href="/services" className="mt-4 inline-flex min-h-10 items-center gap-2 self-start rounded-pill bg-brand-accent px-4 text-sm font-bold text-brand-background transition-colors hover:bg-brand-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-ink">
                    <LayoutGrid size={16} aria-hidden="true" /> All services <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </div>
                {serviceMenuGroups.map((group) => (
                  <div key={group.title} className="min-w-0">
                    <h3 className="border-b border-brand-border pb-3 text-xs font-extrabold uppercase tracking-[0.13em] text-brand-slate">{group.title}</h3>
                    <ul className="mt-2">
                      {group.services.map((service) => {
                        const Icon = service.icon;
                        return (
                          <li key={service.href}>
                            <Link href={service.href} className="group flex min-h-12 items-center gap-3 rounded-xl px-2.5 text-sm font-semibold text-brand-dark transition-colors hover:bg-brand-background-wash/70 hover:text-brand-accent-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-ink">
                              <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-brand-peach/65 text-brand-accent-ink transition-colors group-hover:bg-brand-accent/15" aria-hidden="true">
                                <Icon size={16} strokeWidth={1.9} />
                              </span>
                              <span className="min-w-0 flex-1">{service.label}</span>
                              <ArrowRight size={14} className="shrink-0 text-brand-slate transition-transform group-hover:translate-x-0.5 group-hover:text-brand-accent-ink" aria-hidden="true" />
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
