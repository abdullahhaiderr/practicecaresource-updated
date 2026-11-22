import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { ResourcesExplorer } from "@/components/resources/resources-explorer";
import { PageHero } from "@/components/page-hero";
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
      <PageHero
        breadcrumb="Resources"
        eyebrow="CareSource resource library"
        title="Clear answers for the work behind your practice."
        description="Practical, general information to help your team understand billing, enrollment, denials, and the workflows that support a practice."
        imageSrc="/heroes/resources-hero.jpg"
        imageAlt="A practice manager reviewing information at a bright office desk"
        primaryAction={{ label: "Browse articles", href: "#resource-library" }}
        facts={[
          { title: "Free to read", detail: "Practical, general information" },
          { title: "Four topics", detail: "Billing, credentialing, denials, growth" },
          { title: "Written for", detail: "Practice managers and providers" },
        ]}
      />

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

      <section className="border-t border-brand-border bg-brand-background-wash/35 py-10 sm:py-12 lg:py-16">
        <Container>
          <div className="grid items-center gap-6 rounded-3xl border border-brand-accent/20 bg-brand-background p-6 shadow-card sm:p-8 lg:grid-cols-[1fr_auto] lg:p-10">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-accent-ink">
                Need a hand with your workflow?
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-brand-dark sm:text-4xl">
                Have a question that is not covered here?
              </h2>
              <p className="mt-3 text-base leading-relaxed text-brand-slate sm:text-lg">
                Tell us what kind of support you are exploring and we will point you in the right direction.
              </p>
            </div>
            <Button href="/contact" size="lg" showArrow className="shrink-0 justify-self-start lg:justify-self-end">
              Book a Free Audit
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}

