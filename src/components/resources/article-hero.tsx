"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, ChevronRight, Clock3 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/container";

type ArticleHeroProps = {
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  readingMinutes: number;
  coverImage: string;
  coverAlt: string;
};

export function ArticleHero({
  title,
  description,
  category,
  publishedAt,
  readingMinutes,
  coverImage,
  coverAlt,
}: ArticleHeroProps) {
  const reducedMotion = useReducedMotion();

  return (
    <section className="overflow-hidden border-b border-brand-border/75 bg-brand-background-wash/35 py-7 sm:py-9 lg:py-11">
      <Container>
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-2 text-sm font-semibold text-brand-slate">
            <li><Link href="/" className="hover:text-brand-accent-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-ink">Home</Link></li>
            <li aria-hidden="true"><ChevronRight size={15} /></li>
            <li><Link href="/resources" className="hover:text-brand-accent-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-ink">Resources</Link></li>
            <li aria-hidden="true"><ChevronRight size={15} /></li>
            <li aria-current="page" className="max-w-[14rem] truncate text-brand-dark sm:max-w-none">{category}</li>
          </ol>
        </nav>

        <div className="grid items-center gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <p className="text-xs font-extrabold uppercase tracking-[0.17em] text-brand-accent-ink sm:text-sm">{category}</p>
            <h1 className="mt-3 text-balance font-display text-4xl font-semibold leading-[1.02] tracking-tight text-brand-dark sm:text-5xl lg:text-6xl">{title}</h1>
            <div className="my-5 h-1 w-16 rounded-full bg-brand-accent" aria-hidden="true" />
            <p className="max-w-xl text-base leading-relaxed text-brand-slate sm:text-lg">{description}</p>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-brand-slate sm:text-sm">
              <span className="inline-flex items-center gap-2"><CalendarDays size={15} aria-hidden="true" />{publishedAt}</span>
              <span className="inline-flex items-center gap-2"><Clock3 size={15} aria-hidden="true" />{readingMinutes} min read</span>
              <span>By Irtiza Hassan</span>
            </div>
            <Link href="/resources" className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-pill border border-brand-accent/25 bg-brand-background px-5 text-sm font-bold text-brand-accent-ink shadow-sm transition-[transform,box-shadow,border-color] hover:-translate-y-0.5 hover:border-brand-accent/50 hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-ink motion-reduce:transition-none">
              Browse all resources <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </motion.div>

          <motion.div
            initial={reducedMotion ? false : { clipPath: "polygon(100% 0,100% 0,100% 100%,100% 100%)" }}
            animate={{ clipPath: "polygon(12% 0,100% 0,100% 100%,0 100%)" }}
            transition={{ duration: reducedMotion ? 0 : 1, delay: reducedMotion ? 0 : 0.12, ease: [0.76, 0, 0.24, 1] }}
            className="relative aspect-[16/10] min-h-56 overflow-hidden rounded-3xl border border-brand-border bg-brand-background shadow-card sm:min-h-72"
          >
            <Image src={coverImage} alt={coverAlt} fill priority sizes="(max-width: 1024px) 100vw, 54vw" className="object-cover" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-brand-accent-ink/20 via-transparent to-brand-background/10" aria-hidden="true" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
