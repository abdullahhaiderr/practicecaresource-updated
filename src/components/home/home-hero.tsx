"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardCheck,
  Headset,
  Play,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { HeroVisual } from "@/components/home/hero-visual";

const features = [
  { label: "Medical Billing & Coding", icon: ClipboardCheck },
  { label: "Credentialing", icon: BadgeCheck },
  { label: "AR & Denial Recovery", icon: ArrowRight },
  { label: "Dedicated Support", icon: Headset },
];

type HomeHeroProps = {
  heroImage?: string;
};

export function HomeHero({ heroImage }: HomeHeroProps) {
  const reducedMotion = useReducedMotion();
  const reveal = reducedMotion
    ? { initial: false as const, animate: { opacity: 1, y: 0 } }
    : {
        initial: { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <section className="relative isolate overflow-hidden border-b border-brand-border/70 bg-brand-background">
      <div
        className="pointer-events-none absolute -left-28 top-1/2 hidden size-72 -translate-y-1/2 rounded-full border-[3rem] border-brand-accent/10 lg:block"
        aria-hidden="true"
      />
      <Container className="relative grid items-center gap-8 py-12 sm:py-16 lg:min-h-[calc(100svh-5.5rem)] lg:grid-cols-[0.96fr_1.04fr] lg:gap-3 lg:py-10 xl:gap-8">
        <div className="relative z-10 max-w-2xl">
          <motion.div
            {...reveal}
            transition={{ duration: reducedMotion ? 0 : 0.45, ease: "easeOut" }}
            className="inline-flex min-h-10 items-center gap-2 rounded-pill border border-brand-accent/35 bg-brand-background-wash/40 px-4 text-sm font-bold tracking-wide text-brand-dark"
          >
            <span className="grid size-6 place-items-center rounded-full bg-brand-accent text-brand-dark">
              <ShieldCheck size={15} aria-hidden="true" />
            </span>
            Accurate. Reliable. Transparent.
          </motion.div>

          <motion.h1
            initial={reducedMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.62, delay: reducedMotion ? 0 : 0.08, ease: "easeOut" }}
            className="mt-6 text-balance font-display text-[clamp(3.25rem,7.1vw,6.3rem)] font-semibold leading-[0.9] tracking-[-0.045em] text-brand-dark"
          >
            <span className="block">The Source of</span>
            <span className="block">Care</span>
            <span className="block text-brand-accent">For Your Practice</span>
          </motion.h1>

          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.52, delay: reducedMotion ? 0 : 0.17, ease: "easeOut" }}
            className="mt-6 max-w-xl text-base leading-relaxed text-brand-slate sm:text-lg"
          >
            Billing, credentialing, AR recovery and more, all under one roof. We
            handle the revenue cycle so US healthcare providers can focus on
            patients.
          </motion.p>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.48, delay: reducedMotion ? 0 : 0.23, ease: "easeOut" }}
            className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center"
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
            className="mt-9 grid grid-cols-2 border-t border-brand-border/80 sm:grid-cols-4 lg:mt-10"
          >
            {features.map(({ label, icon: Icon }, index) => (
              <li
                key={label}
                className={[
                  "flex min-h-24 flex-col items-start gap-2 py-4 pr-3",
                  index % 2 === 0 ? "border-r border-brand-border/80" : "pl-4",
                  index < 2 ? "border-b border-brand-border/80 sm:border-b-0" : "",
                  index === 2 ? "sm:border-l sm:border-brand-border/80 sm:pl-4" : "",
                  index === 3 ? "sm:pl-4" : "",
                ].join(" ")}
              >
                <span className="grid size-8 place-items-center rounded-lg bg-brand-dark text-brand-accent">
                  <Icon size={17} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span className="text-xs font-bold leading-snug text-brand-dark sm:text-sm">
                  {label}
                </span>
              </li>
            ))}
          </motion.ul>

          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.5, delay: reducedMotion ? 0 : 0.38 }}
            className="relative mt-5 inline-block font-script text-2xl font-semibold text-brand-dark sm:ml-1 sm:text-3xl"
          >
            Let&apos;s grow your practice together.
            <svg
              viewBox="0 0 360 16"
              className="absolute -bottom-2 left-0 h-3 w-full text-brand-accent"
              aria-hidden="true"
            >
              <path
                d="M4 10C74 2 181 3 268 8c31 2 58 3 88 0"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="4"
              />
            </svg>
          </motion.p>
        </div>

        <HeroVisual heroImage={heroImage} />
      </Container>
    </section>
  );
}

