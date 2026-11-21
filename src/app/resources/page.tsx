import type { Metadata } from "next";
import { ArrowDown, BookOpenText } from "lucide-react";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { ResourcesExplorer } from "@/components/resources/resources-explorer";
import { PageHeroImage } from "@/components/page-hero-image";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { resourceArticles, resourceCategories, getReadingMinutes } from "@/data/resources/articles";

export const metadata: Metadata = {
  title: "Practice Resources",
  description:
    "Practical, general information about medical billing, credentialing, denials, accounts receivable, and practice support.",
  alternates: { canonical: "/resources" },
  openGraph: {
    title: "Practice Resources | CareSource",
    description:
      "Explore practical resources about medical billing, credentialing, denials, AR follow-up, and practice support.",
    type: "website",
  },
};

const resourceCards = resourceArticles.map((article) => ({
  slug: article.slug,
  title: article.title,
  excerpt: article.excerpt,
  category: article.category,
  publishedAt: article.publishedAt,
  coverImage: article.coverImage,
  coverAlt: article.coverAlt,
  readingMinutes: getReadingMinutes(article),
}));

export default function ResourcesPage() {
  return (
    <main id="main-content">
      <section className="relative isolate overflow-hidden border-b border-brand-border/70 bg-brand-background py-8 sm:py-10 lg:py-12 lg:pb-6">

        <Container className="relative grid items-start gap-10 lg:min-h-[25rem] lg:grid-cols-[1.15fr_0.85fr]">
          <ScrollReveal className="max-w-3xl lg:max-w-none">
            <div className="mb-6 inline-flex min-h-10 items-center gap-2 rounded-pill border border-brand-border bg-brand-background/70 px-4 text-sm font-bold text-brand-dark">
              <BookOpenText size={17} className="text-brand-accent-ink" aria-hidden="true" />
              CareSource resource library
            </div>
            <h1 className="max-w-3xl text-balance font-display text-5xl font-semibold leading-[0.98] tracking-tight text-brand-dark sm:text-6xl lg:min-h-[2em] lg:text-7xl">
              Clear answers for the work behind <span className="text-brand-accent-ink">your practice.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-slate sm:text-lg lg:min-h-[5.5rem]">
              Practical, general information to help your team understand billing, enrollment, denials, and the workflows that support a practice.
            </p>
            <div className="mt-6 flex min-h-14 items-center">
              <a href="#resource-library" className="inline-flex min-h-12 items-center gap-2 rounded-pill border border-brand-slate/35 px-5 text-sm font-bold text-brand-dark transition-colors hover:border-brand-accent-ink hover:bg-brand-background/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-ink">
                Browse articles <ArrowDown size={16} aria-hidden="true" />
              </a>
            </div>
          </ScrollReveal>
          <PageHeroImage src={resourceArticles[0].coverImage} alt={resourceArticles[0].coverAlt} variant="resources" />
        </Container>
      </section>

      <section id="resource-library" className="scroll-mt-24 py-10 sm:py-12 lg:py-16" aria-label="Resource library">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Browse the library"
              title="Useful context, organized by topic"
              description="Search the articles or choose a topic to find information for your practice workflow."
              className="mb-8 sm:mb-10"
            />
          </ScrollReveal>
          <ResourcesExplorer
            articles={resourceCards}
            categories={resourceCategories}
            featuredSlug={resourceArticles[0].slug}
          />
        </Container>
      </section>

      <section className="border-y border-brand-border/75 bg-brand-background-wash/30 py-10 sm:py-12 lg:py-16" aria-label="Resource library questions">
        <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Resource questions"
              title="A little more context."
              description="A few useful notes about using the information in this library."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <div className="space-y-3">
              {[
                {
                  question: "Are these articles medical or legal advice?",
                  answer: "No. The articles provide general information about billing and practice workflows. They do not replace clinical judgment, legal advice, coding guidance, or current payer instructions.",
                },
                {
                  question: "How should I use information about payer rules?",
                  answer: "Payer requirements can change. Confirm current requirements directly with the payer and your qualified advisors before changing a practice workflow.",
                },
                {
                  question: "Can I share an article with my team?",
                  answer: "Yes. You can share the public article link with colleagues so your team can review the same information.",
                },
                {
                  question: "Can I suggest a topic?",
                  answer: "Yes. Send our team a message and tell us which billing or practice workflow you would like to see covered.",
                },
              ].map((item) => (
                <details key={item.question} className="group rounded-2xl border border-brand-border bg-brand-background px-5 transition-[border-color,box-shadow] open:border-brand-accent/45 open:shadow-card sm:px-6">
                  <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 font-bold text-brand-dark transition-colors hover:text-brand-accent-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-ink [&::-webkit-details-marker]:hidden">
                    {item.question}
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-background-wash text-xl font-normal text-brand-accent-ink transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="max-w-3xl pb-5 pr-8 text-sm leading-relaxed text-brand-slate sm:text-base">{item.answer}</p>
                </details>
              ))}
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="py-10 sm:py-12 lg:py-16">
        <Container>
          <ScrollReveal>
            <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-brand-border bg-brand-background p-6 shadow-card sm:p-9 lg:flex-row lg:items-center lg:p-12">
              <div className="max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-accent-ink">Put the information into practice</p>
                <h2 className="mt-3 text-balance font-display text-3xl font-semibold leading-tight text-brand-dark sm:text-4xl">Want to talk through your practice workflow?</h2>
                <p className="mt-3 text-base leading-relaxed text-brand-slate">Tell us what kind of support you are exploring. Please leave patient details out of your message.</p>
              </div>
              <Button href="/contact" size="lg" showArrow className="shrink-0">
                Contact our team
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </main>
  );
}

