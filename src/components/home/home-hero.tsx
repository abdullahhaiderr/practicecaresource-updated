"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  CircleDollarSign,
  BadgeCheck,
  ClipboardCheck,
  Headset,
  Play,
} from "lucide-react";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { HeroVisual } from "@/components/home/hero-visual";

const features = [
  { label: "Medical Billing & Coding", icon: ClipboardCheck },
  { label: "Credentialing", icon: BadgeCheck },
  { label: "AR & Denial Recovery", icon: CircleDollarSign },
  { label: "Dedicated Support", icon: Headset },
];

const rotatingHeroTerms = ["run", "grow", "get paid"] as const;

type HomeHeroProps = {
  heroImage?: string;
};

export function HomeHero({ heroImage }: HomeHeroProps) {
  const reducedMotion = useReducedMotion();
  const [activeHeroTerm, setActiveHeroTerm] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;

    const intervalId = window.setInterval(() => {
      setActiveHeroTerm((current) => (current + 1) % rotatingHeroTerms.length);
    }, 2400);

    return () => window.clearInterval(intervalId);
  }, [reducedMotion]);

  return (
    <section className="relative isolate overflow-hidden border-b border-brand-border/70 bg-brand-background">
      <div
        className="pointer-events-none absolute -left-28 top-1/2 hidden size-72 -translate-y-1/2 rounded-full border-[3rem] border-brand-accent/10 lg:block"
        aria-hidden="true"
      />
      <Container className="relative grid items-center gap-6 py-5 sm:py-7 lg:min-h-[calc(100svh-4.75rem)] lg:grid-cols-[1.04fr_0.96fr] lg:gap-5 lg:py-4 xl:gap-8">
        <div className="relative z-10 max-w-2xl">

          <motion.h1
            initial={reducedMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.62, delay: reducedMotion ? 0 : 0.08, ease: "easeOut" }}
            className="mt-1 max-w-2xl text-balance font-display text-[clamp(2.75rem,4.35vw,4.5rem)] font-semibold leading-[0.96] tracking-[-0.045em] text-brand-dark"
          >
            <span aria-hidden="true">
              <span className="block">Everything your</span>
              <span className="block">practice needs to</span>
              <span className="relative mt-1 block h-[1.3em] overflow-hidden whitespace-nowrap leading-[1.1] text-brand-accent">
                {reducedMotion ? (
                  <span className="flex h-full items-center">run.</span>
                ) : (
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={rotatingHeroTerms[activeHeroTerm]}
                      initial={{ y: "0.16em", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: "-0.16em", opacity: 0 }}
                      transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0 flex items-center whitespace-nowrap will-change-transform"
                    >
                      {rotatingHeroTerms[activeHeroTerm]}.
                    </motion.span>
                  </AnimatePresence>
                )}
              </span>
            </span>
            <span className="sr-only">
              Everything your practice needs to run, grow and get paid.
            </span>
          </motion.h1>

          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.52, delay: reducedMotion ? 0 : 0.17, ease: "easeOut" }}
            className="mt-3 max-w-xl text-base leading-relaxed text-brand-slate sm:text-lg"
          >
            Billing, credentialing, AR recovery and more, all under one roof. We
            handle the revenue cycle so US healthcare providers can focus on
            patients.
          </motion.p>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.48, delay: reducedMotion ? 0 : 0.23, ease: "easeOut" }}
            className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Button href="/contact" size="lg" showArrow>
              Book a Free Audit
            </Button>
            <a
              href="#process"
              className="group inline-flex min-h-12 items-center gap-3 self-start rounded-pill px-2 text-sm font-bold text-brand-dark underline decoration-brand-accent/75 decoration-2 underline-offset-4 transition-colors hover:text-brand-accent-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-ink"
            >
              <span className="grid size-10 place-items-center rounded-full border border-brand-slate/35 transition-colors group-hover:border-brand-accent-ink group-hover:bg-brand-background-wash/60">
                <Play size={15} fill="currentColor" aria-hidden="true" />
              </span>
              See How It Works
            </a>
          </motion.div>

          <motion.ul
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.48, delay: reducedMotion ? 0 : 0.3, ease: "easeOut" }}
            className="home-hero-features mt-4 grid grid-cols-2 border-t border-brand-border/80 sm:grid-cols-4 lg:mt-5"
          >
            {features.map(({ label, icon: Icon }, index) => (
              <li
                key={label}
                className={[
                  "flex min-h-20 flex-col items-start gap-2 py-3 pr-3",
                  index % 2 === 0 ? "border-r border-brand-border/80" : "pl-4",
                  index < 2 ? "border-b border-brand-border/80 sm:border-b-0" : "",
                  index === 2 ? "sm:border-l sm:border-brand-border/80 sm:pl-4" : "",
                  index === 3 ? "sm:pl-4" : "",
                ].join(" ")}
              >
                <span className="hero-feature-icon grid size-9 place-items-center rounded-xl border border-brand-accent/15 bg-brand-peach/65 text-brand-accent-ink shadow-sm">
                  <Icon size={17} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span className="text-xs font-bold leading-snug text-brand-dark sm:text-sm">
                  {label}
                </span>
              </li>
            ))}
          </motion.ul>


        </div>

        <HeroVisual heroImage={heroImage} />
      </Container>
    </section>
  );
}

