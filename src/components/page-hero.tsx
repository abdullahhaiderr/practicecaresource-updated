import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/container";

export type PageHeroFact = {
  title: string;
  detail: string;
};

type PageHeroProps = {
  breadcrumb: string;
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  primaryAction: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  facts: PageHeroFact[];
};

export function PageHero({
  breadcrumb,
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  primaryAction,
  secondaryAction,
  facts,
}: PageHeroProps) {
  const factColumns = facts.length === 4 ? "md:grid-cols-4" : "md:grid-cols-3";

  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-accent-ink text-brand-background">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="hero-image-enter object-cover object-[72%_center]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-brand-accent-ink/90 [clip-path:polygon(0_0,66%_0,50%_100%,0_100%)] max-[1100px]:[clip-path:none] max-[1100px]:bg-brand-accent-ink/85"
        />

        <Container className="relative z-10 flex min-h-[34rem] items-center pb-28 pt-10 sm:min-h-[38rem] sm:pb-32 sm:pt-12">
          <div className="hero-enter-stagger max-w-[42rem]">
            <nav aria-label="Breadcrumb" className="mb-7 flex items-center gap-2 text-sm font-semibold text-brand-background/75">
              <Link href="/" className="transition-colors hover:text-brand-background focus-visible:rounded-sm">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{breadcrumb}</span>
            </nav>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.13em] text-brand-peach">
              {eyebrow}
            </p>
            <h1 className="text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight text-brand-background sm:text-5xl lg:text-[3.25rem]">
              {title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-background/85 sm:text-lg">
              {description}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link
                href={primaryAction.href}
                className="group inline-flex min-h-14 items-center gap-3 rounded-xl bg-brand-background px-6 text-base font-bold text-brand-accent-ink shadow-card transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-brand-background-wash hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-background focus-visible:ring-offset-2 focus-visible:ring-offset-brand-accent-ink"
              >
                {primaryAction.label}
                <ArrowRight size={18} strokeWidth={2.2} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              {secondaryAction ? (
                <Link
                  href={secondaryAction.href}
                  className="inline-flex min-h-12 items-center gap-2 text-sm font-bold text-brand-background underline decoration-brand-background/70 underline-offset-4 transition-colors hover:text-brand-peach focus-visible:rounded-sm"
                >
                  {secondaryAction.label}
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              ) : null}
            </div>
          </div>
        </Container>
      </section>

      <div className="relative z-20 -mt-[3.25rem] pb-4 sm:pb-6">
        <Container>
          <div className={`card-accent-line grid overflow-hidden rounded-xl border border-brand-border bg-brand-background shadow-card ${factColumns} divide-y divide-brand-border md:divide-y-0 md:divide-x`}>
            {facts.map((fact) => (
              <div key={fact.title} className="min-h-[5.75rem] px-5 py-4 sm:px-6 sm:py-5">
                <p className="font-display text-lg font-semibold leading-tight text-brand-dark sm:text-xl">
                  {fact.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-brand-slate">{fact.detail}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
