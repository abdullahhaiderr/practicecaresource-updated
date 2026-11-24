import type { Metadata } from "next";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "See how Practice Care Source agrees on scope, coordinates handoffs, and works alongside US healthcare practices.",
};

const processSteps = [
  {
    number: "01",
    title: "Tell us how your practice works",
    description:
      "We start by listening to your team's goals, current workflows, and the work you want help with.",
  },
  {
    number: "02",
    title: "Agree on a clear scope",
    description:
      "Together, we define responsibilities, systems, priorities, and what should come back to your team for review.",
  },
  {
    number: "03",
    title: "Set up the handoffs",
    description:
      "We document the information, approvals, and communication steps needed to keep the work coordinated.",
  },
  {
    number: "04",
    title: "Start with the agreed work",
    description:
      "Our team follows the workflow you approved and keeps questions or missing information visible.",
  },
  {
    number: "05",
    title: "Review and adjust together",
    description:
      "We check in on open items, clarify what is working, and agree on any changes to the scope or process.",
  },
];

const workingAgreements = [
  {
    title: "Scope",
    description:
      "List the tasks included, what is outside the scope, and which systems or workflows they involve.",
  },
  {
    title: "Practice review",
    description:
      "Identify which details need your team's confirmation, approval, or decision before moving forward.",
  },
  {
    title: "Handoffs",
    description:
      "Agree how questions, updates, and next steps should be shared with the right practice contact.",
  },
];

export default function HowItWorksPage() {
  return (
    <main id="main-content">
      <PageHero
        breadcrumb="How it works"
        eyebrow="A clear working process"
        title="A practical path to working together."
        description="We agree on scope and communication with your practice before support begins. Each step leaves room for your team's review and decisions."
        imageSrc="/heroes/services-hero.jpg"
        imageAlt="A healthcare team collaborating around a laptop in a bright clinic"
        primaryAction={{ label: "Book a Free Audit", href: "/contact" }}
        secondaryAction={{ label: "Explore services", href: "/services" }}
        facts={[
          { title: "Five clear steps", detail: "From first conversation to ongoing work" },
          { title: "Agreed scope", detail: "Responsibilities reviewed up front" },
          { title: "Clear handoffs", detail: "Questions routed to the right person" },
        ]}
      />

      <section className="py-10 sm:py-12 lg:py-16">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Our process"
              title="A clear start makes shared work easier."
              description="The process is shaped around your practice's existing workflows, the support you need, and the decisions your team retains."
            />
          </ScrollReveal>

          <ol className="mt-8 grid auto-rows-fr gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {processSteps.map((step, index) => (
              <li key={step.number} className="h-full">
                <ScrollReveal delay={index * 0.045} className="flex h-full">
                  <article className="card-accent-line h-full rounded-2xl border border-brand-border bg-brand-background p-5 shadow-card transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-brand-accent/50 hover:shadow-card-hover motion-reduce:transition-none sm:p-6">
                    <p className="font-display text-4xl font-semibold leading-none text-brand-accent-ink/70">
                      {step.number}
                    </p>
                    <h2 className="mt-6 font-display text-xl font-semibold leading-tight text-brand-dark">
                      {step.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-brand-slate">
                      {step.description}
                    </p>
                  </article>
                </ScrollReveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-y border-brand-border/75 bg-brand-background-wash/30 py-10 sm:py-12 lg:py-16">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Before work begins"
              title="Agree on the details that keep work clear."
              description="A practical working arrangement makes it easier for your team to know what is included, what needs review, and where questions should go."
            />
          </ScrollReveal>

          <div className="mt-8 grid auto-rows-fr gap-5 md:grid-cols-3">
            {workingAgreements.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.05} className="h-full">
                <article className="card-accent-line h-full rounded-2xl border border-brand-border bg-brand-background p-6 shadow-card transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-brand-accent/50 hover:shadow-card-hover motion-reduce:transition-none">
                  <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-brand-accent-ink">
                    0{index + 1}
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-semibold text-brand-dark">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-brand-slate">
                    {item.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-background-wash py-10 sm:py-12 lg:py-16">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-accent-ink">
                Start a conversation
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-brand-dark sm:text-4xl">
                Let's discuss the support your practice needs.
              </h2>
              <p className="mt-3 text-base leading-relaxed text-brand-slate sm:text-lg">
                Tell us about your team's workflow and the tasks you would like to discuss.
              </p>
            </div>
            <Button href="/contact" size="lg" showArrow className="shrink-0 self-start">
              Book a Free Audit
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
