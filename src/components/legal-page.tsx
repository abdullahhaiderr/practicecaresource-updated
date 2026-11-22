import type { ReactNode } from "react";
import Link from "next/link";
import { Container } from "@/components/container";

type LegalSection = {
  title: string;
  content: ReactNode;
};

type LegalPageProps = {
  title: string;
  description: string;
  sections: LegalSection[];
};

export function LegalPage({ title, description, sections }: LegalPageProps) {
  return (
    <main id="main-content">
      <section className="border-b border-brand-border bg-brand-background-wash/50 py-12 sm:py-16 lg:py-20">
        <Container size="narrow">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm font-semibold text-brand-slate">
            <Link href="/" className="hover:text-brand-accent-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-ink">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span aria-current="page" className="text-brand-dark">{title}</span>
          </nav>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.15em] text-brand-accent-ink">Practice Care Source</p>
          <h1 className="font-display text-4xl font-semibold leading-tight text-brand-dark sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-brand-slate sm:text-lg">{description}</p>
          <p className="mt-4 text-sm font-semibold text-brand-slate">Last updated November 22, 2026</p>
        </Container>
      </section>

      <Container size="narrow" className="py-10 sm:py-14 lg:py-16">
        <div className="divide-y divide-brand-border">
          {sections.map(({ title: sectionTitle, content }) => (
            <section key={sectionTitle} className="py-7 first:pt-0 last:pb-0">
              <h2 className="font-display text-2xl font-semibold text-brand-accent-ink sm:text-3xl">{sectionTitle}</h2>
              <div className="legal-copy mt-3 space-y-4 text-base leading-relaxed text-brand-slate">{content}</div>
            </section>
          ))}
        </div>
      </Container>
    </main>
  );
}
