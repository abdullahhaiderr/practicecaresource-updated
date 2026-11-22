import Link from "next/link";
import { ArrowRight, BookOpenText, Clock3 } from "lucide-react";

export type ResourceCardData = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  coverImage: string;
  coverAlt: string;
  readingMinutes: number;
};

type ResourceCardProps = {
  article: ResourceCardData;
  featured?: boolean;
  compact?: boolean;
  duplicate?: boolean;
};

export function ResourceCard({ article, featured = false, compact = false, duplicate = false }: ResourceCardProps) {
  return (
    <article
      aria-hidden={duplicate || undefined}
      className={[
        "group relative h-full overflow-hidden rounded-[18px] border border-brand-border bg-brand-background shadow-card transition-[transform,box-shadow,border-color,background-color] duration-300 ease-brand-out hover:-translate-y-2 hover:border-brand-accent/60 hover:bg-brand-background-wash/30 hover:shadow-card-hover hover:ring-2 hover:ring-brand-accent/15 focus-within:-translate-y-2 focus-within:border-brand-accent/60 focus-within:shadow-card-hover motion-reduce:transition-none",
        featured ? "md:min-h-[17rem]" : "",
        compact ? "min-h-[17rem]" : "",
      ].join(" ")}
    >
      <span aria-hidden="true" className="absolute inset-x-0 top-0 z-10 h-1 origin-left scale-x-0 bg-brand-accent transition-transform duration-500 group-hover:scale-x-100 group-focus-within:scale-x-100 motion-reduce:transition-none" />
      <Link
        href={`/resources/${article.slug}`}
        tabIndex={duplicate ? -1 : undefined}
        className={[
          "flex h-full rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-accent-ink",
          featured ? "flex-col md:flex-row" : "flex-col",
        ].join(" ")}
        aria-label={`${featured ? "Read featured article" : "Read article"}: ${article.title}`}
      >
        {featured ? (
          <div className="flex min-h-36 shrink-0 items-center justify-center border-b border-brand-border bg-brand-background-wash/60 p-6 md:w-56 md:border-b-0 md:border-r lg:w-64">
            <span className="grid size-[4.5rem] place-items-center rounded-2xl bg-brand-peach/60 text-brand-accent-ink shadow-sm transition-[transform,background-color,color] duration-300 group-hover:rotate-[-6deg] group-hover:bg-brand-accent group-hover:text-brand-background motion-reduce:transition-none">
              <BookOpenText size={34} strokeWidth={1.6} aria-hidden="true" />
            </span>
          </div>
        ) : null}

        <div className={[
          "flex flex-1 flex-col p-5 sm:p-6",
          compact ? "p-4 sm:p-4" : "",
          featured ? "lg:p-8" : "",
        ].join(" ")}>
          {!featured ? (
            <span className={`mb-3 grid place-items-center rounded-[14px] bg-brand-peach/60 text-brand-accent-ink transition-[transform,background-color,color] duration-300 group-hover:rotate-[-6deg] group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-brand-background motion-reduce:transition-none ${compact ? "size-10" : "size-[3.125rem]"}`}>
              <BookOpenText size={compact ? 20 : 23} strokeWidth={1.8} aria-hidden="true" />
            </span>
          ) : null}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-bold text-brand-slate">
            <span className="text-brand-accent-ink">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>{article.publishedAt}</span>
          </div>
          <h3 className={[
            "mt-3 line-clamp-2 min-h-[3rem] font-display font-semibold leading-tight text-brand-dark sm:min-h-[3.5rem]",
            featured ? "text-2xl sm:text-3xl lg:text-4xl" : compact ? "min-h-[2.75rem] text-lg sm:min-h-[2.75rem] sm:text-xl" : "text-xl sm:text-2xl",
          ].join(" ")}>
            {article.title}
          </h3>
          <p className={`mt-3 flex-1 line-clamp-3 leading-relaxed text-brand-slate ${compact ? "min-h-[3.75rem] text-sm" : "min-h-[4.25rem] text-sm sm:min-h-[4.95rem] sm:text-base"}`}>
            {article.excerpt}
          </p>
          <div className="mt-5 flex items-center justify-between gap-4 border-t border-brand-border pt-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-slate">
              <Clock3 size={14} aria-hidden="true" /> {article.readingMinutes} min read
            </span>
            <span className="inline-flex items-center gap-2 text-sm font-bold text-brand-accent-ink">
              Read article
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1.5" aria-hidden="true" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
