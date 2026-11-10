import { Container } from "@/components/container";

export default function HomePage() {
  return (
    <main
      id="main-content"
      className="flex min-h-[60vh] items-center py-20 sm:py-28"
    >
      <Container size="narrow">
        <div className="rounded-3xl border border-brand-border bg-brand-background-wash/40 px-7 py-12 text-center sm:px-12 sm:py-16">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-brand-accent-ink">
            Sprint 1 · Part A
          </p>
          <h1 className="font-display text-4xl font-semibold leading-tight text-brand-dark sm:text-5xl">
            CareSource foundation is ready
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-brand-slate sm:text-lg">
            The shared design system and components are in place. The Home page
            experience will be added in Part B.
          </p>
        </div>
      </Container>
    </main>
  );
}