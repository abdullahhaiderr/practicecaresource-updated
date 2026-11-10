"import Image from \"next/image\";
import Link from \"next/link\";
import { ArrowRight } from \"lucide-react\";
import type { LucideIcon } from \"lucide-react\";

export type ServiceCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  icon: LucideIcon;
  href?: string;
};

export function ServiceCard({
  title,
  description,
  imageSrc,
  imageAlt,
  icon: Icon,
  href = \"/services\",
}: ServiceCardProps) {
  return (
    <article className=\"group relative overflow-hidden rounded-2xl border border-brand-border bg-brand-background shadow-card transition-[transform,box-shadow,border-color] duration-300 ease-brand-out hover:-translate-y-1.5 hover:border-brand-accent/50 hover:shadow-card-hover active:scale-[0.995] motion-reduce:transition-none\">
      <Link
        href={href}
        className=\"block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-accent-ink\"
        aria-label={\"Learn more about \" + title}
      >
        <div className=\"relative aspect-[16/10] overflow-hidden bg-brand-background-wash\">
          {/* Replaceable Unsplash placeholder image. Use a licensed project image before launch. */}
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes=\"(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw\"
            className=\"object-cover transition-transform duration-700 ease-brand-out group-hover:scale-[1.04] motion-reduce:transition-none\"
          />
          <span
            className=\"absolute -bottom-5 right-5 z-10 grid size-14 place-items-center rounded-full bg-brand-accent text-brand-dark shadow-lg ring-4 ring-brand-background transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105 motion-reduce:transition-none\"
            aria-hidden=\"true\"
          >
            <Icon size={24} strokeWidth={1.8} />
          </span>
        </div>
        <div className=\"px-6 pb-6 pt-9 sm:px-7 sm:pb-7\">
          <h3 className=\"font-display text-2xl font-semibold leading-tight text-brand-dark sm:text-3xl\">
            {title}
          </h3>
          <p className=\"mt-3 line-clamp-3 min-h-[4.8rem] text-base leading-relaxed text-brand-slate\">
            {description}
          </p>
          <span className=\"mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-accent-ink\">
            Learn more
            <span
              aria-hidden=\"true\"
              className=\"transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none\"
            >
              <ArrowRight size={17} />
            </span>
          </span>
        </div>
      </Link>
    </article>
  );
}
