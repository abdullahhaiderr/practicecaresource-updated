import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { PlatformLogo } from "@/components/platforms/platform-logo";
import { softwarePlatforms, softwarePlatformCount } from "@/data/software-platforms";

export const metadata: Metadata = {
  title: "Software Platforms",
  description:
    "Explore EHR, EMR, practice management, billing, clearinghouse, and workspace platforms that Practice Care Source works across.",
};

export default function SoftwarePlatformsPage() {
  return (
    <main id="main-content">
      <section className="border-b border-brand-border bg-brand-background-wash/45 py-12 sm:py-16 lg:py-20">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-7 text-sm font-semibold text-brand-slate">
            <Link href="/" className="transition-colors hover:text-brand-accent-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-ink">
              Home
            </Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span aria-current="page" className="text-brand-dark">Software platforms</span>
          </nav>

          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-brand-accent/15 bg-brand-accent/8 px-4 py-2 text-sm font-bold text-brand-accent-ink">
              EHR · EMR · Practice Management · RCM
            </span>
            <h1 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight text-brand-dark sm:text-5xl lg:text-6xl">
              Software platforms our team works across.
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-brand-slate sm:text-lg">
              From electronic health records and practice management to billing,
              clearinghouse, and remote workspace tools, our team works across
              the platforms used to keep healthcare practices moving.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-background px-4 py-2 text-sm font-semibold text-brand-slate">
                <CheckCircle2 size={16} className="text-brand-accent-ink" aria-hidden="true" />
                {softwarePlatformCount} platforms listed
              </span>
              <span className="inline-flex rounded-full border border-brand-border bg-brand-background px-4 py-2 text-sm font-semibold text-brand-slate">
                US healthcare practice workflows
              </span>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-12 lg:py-16">
        <Container>
          <ScrollReveal>
            <SectionHeading
              align="center"
              eyebrow="Platform experience"
              title={
                <>
                  Familiar with the systems{" "}
                  <span className="text-brand-accent-ink">behind your practice.</span>
                </>
              }
              description="These are the platforms you can discuss with our team. Each practice has its own setup, permissions, and workflows, so we confirm the relevant scope with you before work begins."
              className="mb-8 sm:mb-10"
            />
          </ScrollReveal>

          <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {softwarePlatforms.map((platform, index) => (
              <ScrollReveal key={platform.id} delay={(index % 4) * 0.035} className="h-full">
                <article className="card-accent-line group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-border bg-brand-background p-5 shadow-card transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-brand-accent/45 hover:shadow-card-hover motion-reduce:transition-none sm:p-6">
                  <div className="flex min-h-[5.5rem] items-center justify-center rounded-xl border border-brand-border/70 bg-brand-background-wash/55 px-4 py-3">
                    <PlatformLogo platform={platform} />
                  </div>
                  <div className="mt-5 flex flex-1 flex-col">
                    <span className="self-start rounded-full bg-brand-accent/8 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.08em] text-brand-accent-ink">
                      {platform.category}
                    </span>
                    <h2 className="mt-3 font-display text-xl font-semibold leading-tight text-brand-dark sm:text-2xl">
                      {platform.name}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-slate sm:text-base">
                      {platform.description}
                    </p>
                    <a
                      href={platform.website}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex min-h-10 items-center gap-2 self-start text-sm font-bold text-brand-accent-ink transition-colors hover:text-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-ink"
                    >
                      Official website
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-4xl text-center text-xs leading-relaxed text-brand-slate sm:text-sm">
            Software names and marks belong to their respective owners and are
            shown for identification only. Their appearance here does not imply
            sponsorship or endorsement.
          </p>
        </Container>
      </section>

      <section className="border-y border-brand-border/70 bg-brand-background-wash/35 py-10 sm:py-12 lg:py-16">
        <Container>
          <div className="grid items-center gap-6 rounded-3xl border border-brand-accent/15 bg-brand-background p-6 shadow-card sm:p-8 lg:grid-cols-[1fr_auto] lg:p-10">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-accent-ink">
                Have a different system?
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-brand-dark sm:text-4xl">
                Tell us what your practice uses.
              </h2>
              <p className="mt-3 text-base leading-relaxed text-brand-slate sm:text-lg">
                Healthcare technology environments vary. Share the platform
                and workflow you have in mind, and we can discuss the relevant
                experience, access, and scope.
              </p>
            </div>
            <Button href="/contact" size="lg" showArrow className="shrink-0 justify-self-start lg:justify-self-end">
              Talk with our team
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
