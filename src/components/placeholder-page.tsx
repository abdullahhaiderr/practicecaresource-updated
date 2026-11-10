import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/container";

type PlaceholderPageProps = {
  title: string;
};

export function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <main id="main-content" className="flex min-h-[58vh] items-center py-20">
      <Container size="narrow">
        <div className="rounded-3xl border border-brand-border bg-brand-background-wash/40 px-7 py-12 text-center sm:px-12 sm:py-16">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-brand-accent-ink">
            CareSource
          </p>
          <h1 className="font-display text-4xl font-semibold text-brand-dark sm:text-5xl">
            {title}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-brand-slate sm:text-lg">
            This page is planned for a future sprint.
          </p>
          <Link
            href="/"
            className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-pill border border-brand-slate/35 px-5 text-sm font-bold text-brand-dark hover:border-brand-accent-ink hover:bg-brand-background-wash/60"
          >
            <ArrowLeft size={17} aria-hidden="true" />
            Back to Home
          </Link>
        </div>
      </Container>
    </main>
  );
}