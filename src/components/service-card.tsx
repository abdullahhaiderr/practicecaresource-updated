import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ServiceCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  icon: LucideIcon;
  href?: string;
  compact?: boolean;
};

export function ServiceCard({
  title,
  description,
  imageSrc,
  imageAlt,
  icon: Icon,
  href = "/services",
  compact = false,
}: ServiceCardProps) {
  return (
    <article className="card-accent-line group relative flex h-full flex-col overflow-hidden rounded-2xl border border-brand-border bg-brand-background shadow-card transition-[transform,box-shadow,border-color] duration-300 ease-brand-out hover:-translate-y-1.5 hover:border-brand-accent/50 hover:shadow-card-hover active:scale-[0.995] motion-reduce:transition-none">
      <Link
        href={href}
        className="flex h-full flex-col rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-accent-ink"
        aria-label={"Learn more about " + title}
      >
        <div className={`relative overflow-hidden bg-brand-background-wash ${compact ? "aspect-[16/9]" : "aspect-[16/10]"}`}>
          {/* Service illustration */}
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-brand-out group-hover:scale-[1.04] motion-reduce:transition-none"
          />
          <span
            className={`absolute bottom-3 right-4 z-10 grid place-items-center rounded-full border border-[#d7e6fb] bg-[#eaf2ff] text-brand-accent-ink shadow-md ring-2 ring-brand-background transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105 motion-reduce:transition-none ${compact ? "size-10" : "size-12"}`}
            aria-hidden="true"
          >
            <Icon size={20} strokeWidth={1.8} />
          </span>
        </div>
        <div className={`flex flex-1 flex-col ${compact ? "px-5 pb-5 pt-5" : "px-6 pb-6 pt-9 sm:px-7 sm:pb-7"}`}>
          <h3 className={`font-display font-semibold leading-tight text-brand-dark ${compact ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl"}`}>
            {title}
          </h3>
          <p className={`mt-3 flex-1 line-clamp-3 leading-relaxed text-brand-slate ${compact ? "min-h-[3.5rem] text-sm" : "min-h-[4rem] text-base"}`}>
            {description}
          </p>
          <span className={`mt-4 inline-flex items-center gap-2 font-bold text-brand-accent-ink ${compact ? "text-xs" : "text-sm"}`}>
            Learn more
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
            >
              <ArrowRight size={17} />
            </span>
          </span>
        </div>
      </Link>
    </article>
  );
}
