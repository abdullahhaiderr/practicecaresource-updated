"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BadgeCheck, ClipboardCheck, Coffee, Sprout, Stethoscope } from "lucide-react";

type HeroVisualProps = {
  heroImage?: string;
};

const floatCards = [
  { title: "Claims Paid", value: "[SAMPLE]", className: "left-0 top-[14%]" },
  { title: "Denials Resolved", value: "[SAMPLE]", className: "right-0 top-[41%]" },
  { title: "Faster Collections", value: "[SAMPLE]", className: "bottom-[13%] left-[5%]" },
];

function BillingDashboard() {
  return (
    <div className="relative z-20 mx-auto w-[91%] max-w-[34rem] -rotate-2 rounded-t-2xl border border-brand-background/30 bg-brand-dark p-2 shadow-card sm:w-[88%] sm:p-3">
      <div className="overflow-hidden rounded-t-xl border border-brand-background/10 bg-brand-dark-soft">
        <div className="flex items-center justify-between border-b border-brand-background/10 px-3 py-2 sm:px-4 sm:py-3">
          <div className="flex items-center gap-2">
            <span className="grid size-7 place-items-center rounded-lg bg-brand-accent text-brand-background">
              <ClipboardCheck size={15} aria-hidden="true" />
            </span>
            <span className="text-[10px] font-bold text-brand-background sm:text-xs">Practice dashboard</span>
          </div>
          <span className="rounded-pill border border-brand-accent/35 px-2 py-1 text-[8px] font-bold uppercase tracking-[0.12em] text-brand-accent sm:text-[9px]">
            Sample data
          </span>
        </div>

        <div className="grid grid-cols-[1.15fr_0.85fr] gap-2 p-3 sm:gap-3 sm:p-4">
          <div className="rounded-xl border border-brand-background/10 bg-brand-background/[0.06] p-3 sm:p-4">
            <p className="text-[9px] font-semibold text-brand-background/60 sm:text-[10px]">Total Collections</p>
            <p className="mt-1 font-display text-xl font-semibold tracking-tight text-brand-background sm:text-3xl">$[SAMPLE]</p>
            <svg viewBox="0 0 220 58" className="mt-3 h-10 w-full sm:h-14" role="img" aria-label="Illustrative sample trend line">
              <path d="M4 46C28 43 28 31 53 34s28-18 51-13 29 7 48-3 38-8 64-15" fill="none" stroke="rgb(var(--cs-accent))" strokeLinecap="round" strokeWidth="3" />
              <path d="M4 46C28 43 28 31 53 34s28-18 51-13 29 7 48-3 38-8 64-15v54H4Z" fill="rgb(var(--cs-accent) / 0.12)" />
            </svg>
            <div className="mt-2 flex justify-between text-[8px] font-semibold text-brand-background/45 sm:text-[9px]">
              <span>[SAMPLE PERIOD]</span><span>Illustration only</span>
            </div>
          </div>

          <div className="rounded-xl border border-brand-background/10 bg-brand-background/[0.06] p-3 sm:p-4">
            <p className="text-[9px] font-semibold text-brand-background/60 sm:text-[10px]">Claims status</p>
            <div className="mx-auto mt-3 grid size-16 place-items-center rounded-full border-[9px] border-brand-accent border-r-brand-background/20 border-b-brand-background/10 sm:size-20 sm:border-[11px]">
              <span className="text-[8px] font-bold text-brand-background/75">[SAMPLE]</span>
            </div>
            <ul className="mt-3 space-y-1.5 text-[8px] font-semibold text-brand-background/75 sm:text-[9px]">
              <li className="flex items-center justify-between gap-1"><span className="flex items-center gap-1.5"><i className="size-1.5 rounded-full bg-brand-accent" />Submitted</span><span>[SAMPLE]</span></li>
              <li className="flex items-center justify-between gap-1"><span className="flex items-center gap-1.5"><i className="size-1.5 rounded-full bg-brand-background/65" />Paid</span><span>[SAMPLE]</span></li>
              <li className="flex items-center justify-between gap-1"><span className="flex items-center gap-1.5"><i className="size-1.5 rounded-full bg-brand-slate-light" />Denied</span><span>[SAMPLE]</span></li>
            </ul>
          </div>
        </div>

        <div className="mx-3 mb-3 grid grid-cols-3 gap-2 sm:mx-4 sm:mb-4">
          {["Submitted", "Paid", "Denied"].map((status) => (
            <div key={status} className="rounded-lg border border-brand-background/10 bg-brand-background/[0.04] px-2 py-2">
              <p className="text-[8px] text-brand-background/55 sm:text-[9px]">{status}</p>
              <p className="mt-1 text-[10px] font-bold text-brand-background sm:text-xs">[SAMPLE]</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto h-3 w-[110%] -translate-x-[4.5%] rounded-b-xl border border-brand-border/80 bg-brand-background-wash shadow-sm sm:h-4" />
    </div>
  );
}

export function HeroVisual({ heroImage }: HeroVisualProps) {
  const reducedMotion = useReducedMotion();

  return (
    <figure className="relative mx-auto w-full max-w-[38rem] lg:ml-auto lg:mr-0">
      <div className="relative aspect-[1.02/1] min-h-[20rem] sm:min-h-[25rem] lg:min-h-[30rem]">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, scale: 0.94, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.8, ease: "easeOut" }}
          className="absolute right-[5%] top-[2%] size-[68%] rounded-[45%_55%_56%_44%/44%_42%_58%_56%] bg-brand-dark"
          aria-hidden="true"
        />
        <div className="absolute right-[2%] top-[13%] size-[30%] rounded-full border-[1.1rem] border-brand-accent/80 sm:border-[1.6rem]" aria-hidden="true" />
        <div className="absolute left-[9%] top-[20%] size-[58%] rounded-full bg-brand-peach/55" aria-hidden="true" />
        <div
          className="absolute right-[8%] top-[4%] size-24 opacity-40 sm:size-32"
          style={{ backgroundImage: "radial-gradient(rgb(var(--cs-slate) / 0.7) 1px, transparent 1px)", backgroundSize: "12px 12px" }}
          aria-hidden="true"
        />

        <div className="absolute bottom-[11%] left-[2%] z-10 h-[17%] w-[85%] -rotate-3 rounded-[2rem] border border-brand-border/70 bg-gradient-to-r from-brand-background-wash/40 via-brand-background-wash/75 to-brand-peach/40 shadow-card" aria-hidden="true" />
        <div className="absolute bottom-[6%] left-[11%] z-30 hidden items-center gap-3 sm:flex" aria-hidden="true">
          <span className="grid size-11 place-items-center rounded-b-xl rounded-t-lg border border-brand-border bg-brand-background-wash/70 text-brand-dark shadow-sm">
            <Coffee size={21} strokeWidth={1.5} />
          </span>
          <span className="grid size-11 place-items-center rounded-full border border-brand-border bg-brand-background/80 text-brand-accent-ink shadow-sm">
            <Stethoscope size={21} strokeWidth={1.5} />
          </span>
          <Sprout size={28} className="text-brand-accent-ink" strokeWidth={1.5} />
        </div>

        {heroImage ? (
          <div
            role="img"
            aria-label="CareSource practice support dashboard illustration"
            className="absolute bottom-[20%] left-[3%] z-20 h-[54%] w-[83%] -rotate-2 rounded-2xl border border-brand-background/35 bg-brand-background bg-cover bg-center shadow-card"
            style={{ backgroundImage: `url("${heroImage}")` }}
          />
        ) : (
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 26, rotate: -4 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: reducedMotion ? 0 : 0.72, delay: reducedMotion ? 0 : 0.12, ease: "easeOut" }}
            className="absolute bottom-[21%] left-[2%] z-20 w-[84%]"
          >
            <BillingDashboard />
          </motion.div>
        )}

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, x: 18, y: 12 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.55, delay: reducedMotion ? 0 : 0.35 }}
          className="absolute bottom-[19%] right-[2%] z-30 w-[26%] min-w-20 rounded-[1.25rem] border-[3px] border-brand-dark bg-brand-background p-1.5 shadow-card sm:w-[25%] sm:rounded-[1.5rem] sm:border-4 sm:p-2"
          role="img"
          aria-label="Illustrative phone showing a sample claim notification"
        >
          <div className="rounded-[0.9rem] bg-brand-background-wash/45 p-2 sm:rounded-[1.1rem] sm:p-3">
            <div className="mx-auto mb-3 h-1 w-7 rounded-full bg-brand-slate/40" />
            <span className="grid size-7 place-items-center rounded-full bg-brand-accent text-brand-background sm:size-9">
              <BadgeCheck size={18} aria-hidden="true" />
            </span>
            <p className="mt-2 text-[8px] font-bold leading-tight text-brand-dark sm:text-[10px]">Claim Approved</p>
            <p className="mt-1 text-[7px] leading-tight text-brand-slate sm:text-[8px]">Sample notification</p>
          </div>
        </motion.div>

        {floatCards.map(({ title, value, className }, index) => (
          <motion.div
            key={title}
            initial={reducedMotion ? false : { opacity: 0, y: 10 }}
            animate={reducedMotion ? { opacity: 1 } : { opacity: 1, y: [0, -7, 0] }}
            transition={reducedMotion ? { duration: 0 } : { opacity: { duration: 0.45, delay: 0.45 + index * 0.12 }, y: { duration: 4.5 + index * 0.6, repeat: Infinity, ease: "easeInOut", delay: 0.4 + index * 0.25 } }}
            className={`absolute z-40 hidden min-w-32 rounded-2xl border border-brand-background/50 bg-brand-background/90 p-3 shadow-card backdrop-blur-sm sm:block ${className}`}
          >
            <p className="text-[9px] font-semibold text-brand-slate sm:text-[10px]">{title}</p>
            <p className="mt-1 font-display text-base font-semibold text-brand-dark sm:text-lg">{value}</p>
            <p className="mt-0.5 text-[8px] font-bold uppercase tracking-wide text-brand-accent-ink">Sample</p>
          </motion.div>
        ))}

        <figcaption className="absolute bottom-0 right-1 text-right text-[10px] font-semibold text-brand-slate sm:text-xs">
          Illustrative dashboard · Sample data only
        </figcaption>
      </div>
    </figure>
  );
}

