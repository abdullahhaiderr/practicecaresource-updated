import type { Metadata } from "next";
import { ArrowDown, BookOpenText } from "lucide-react";
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
      <section className="relative isolate overflow-hidden border-b border-brand-border/70 bg-brand-background py-8 sm:py-10 lg:py-12">

        <Container className="relative grid items-start gap-10 lg:min-h-[28rem] lg:grid-cols-[1.15fr_0.85fr]">
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
          <PageHeroImage src={resourceArticles[0].coverImage} alt={resourceArticles[0].coverAlt} />
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
    </main>
  );
}

