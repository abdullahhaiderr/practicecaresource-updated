import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ServiceOverviewCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
};

export function ServiceOverviewCard({ title, description, icon: Icon, href }: ServiceOverviewCardProps) {
  return (
    <article className="group relative h-full overflow-hidden rounded-[18px] border border-brand-border bg-brand-background p-6 shadow-card transition-[transform,box-shadow,border-color] duration-300 ease-brand-out hover:-translate-y-2 hover:border-brand-accent/60 hover:shadow-card-hover focus-within:-translate-y-2 motion-reduce:transition-none sm:p-7">
      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-brand-accent transition-transform duration-500 group-hover:scale-x-100 group-focus-within:scale-x-100 motion-reduce:transition-none" />
      <Link href={href} className="flex h-full flex-col rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-ink" aria-label={`Learn more about ${title}`}>
        <span className="grid size-[3.125rem] shrink-0 place-items-center rounded-[14px] bg-brand-peach/60 text-brand-accent-ink transition-[transform,background-color,color] duration-300 group-hover:rotate-[-6deg] group-hover:scale-110 group-hover:bg-brand-accent group-hover:text-brand-background motion-reduce:transition-none">
          <Icon size={23} strokeWidth={1.8} aria-hidden="true" />
        </span>
        <p className="mt-5 text-xs font-bold uppercase tracking-[0.12em] text-brand-accent-ink">Practice support</p>
        <h3 className="mt-2 min-h-[3.5rem] font-display text-2xl font-semibold leading-tight text-brand-dark sm:text-[1.7rem]">{title}</h3>
        <p className="mt-3 flex-1 text-base leading-relaxed text-brand-slate">{description}</p>
        <span className="mt-6 flex items-center justify-between gap-4 border-t border-brand-border pt-4 text-sm font-bold text-brand-slate">
          Learn more
          <ArrowRight size={17} className="transition-[transform,color] duration-200 group-hover:translate-x-1.5 group-hover:text-brand-accent-ink" aria-hidden="true" />
        </span>
      </Link>
    </article>
  );
}
