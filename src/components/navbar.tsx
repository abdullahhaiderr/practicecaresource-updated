"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { navigationLinks, serviceNavLinks } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const dropdownId = useId();
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
          ? "bg-brand-background shadow-sm"
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
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                      setServicesOpen(false);
                    }
                  }}
                >
                  <button
                    type="button"
                    className={linkClass(link.href) + " gap-1.5"}
                    aria-haspopup="true"
                    aria-expanded={servicesOpen}
                    aria-controls={dropdownId}
                    onClick={() => setServicesOpen((open) => !open)}
                    onFocus={() => setServicesOpen(true)}
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
                  <AnimatePresence>
                    {servicesOpen ? (
                      <motion.div
                        id={dropdownId}
                        initial={reducedMotion ? false : { opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: reducedMotion ? 0 : 0.18 }}
                        className="absolute left-1/2 top-full z-50 mt-0 w-72 -translate-x-1/2 rounded-2xl border border-brand-border bg-brand-background p-2 shadow-card"
                      >
                        {serviceNavLinks.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="flex min-h-11 items-center justify-between rounded-xl px-4 text-sm font-semibold text-brand-dark transition-colors hover:bg-brand-background-wash/60 hover:text-brand-accent-ink focus-visible:outline-none"
                          >
                            {service.label}
                            <ArrowRight size={15} aria-hidden="true" />
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
                            {serviceNavLinks.map((service) => (
                              <Link
                                key={service.href}
                                href={service.href}
                                className="flex min-h-10 items-center rounded-lg px-3 text-sm text-brand-slate hover:bg-brand-background-wash/60 hover:text-brand-accent-ink"
                              >
                                {service.label}
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
    </header>
  );
}