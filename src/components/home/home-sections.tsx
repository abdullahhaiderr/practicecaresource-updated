import Link from "next/link";
import { ArrowDown, Check, Minus, Plus } from "lucide-react";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { footerContact, services } from "@/lib/site";

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

const faqs = [
  {
    question: "Which services can I ask about?",
    answer:
      "CareSource offers medical billing, credentialing, virtual assistant support, AR recovery, denial management, website development, and online presence support. We can discuss one service or a combination that fits your practice.",
  },
  {
    question: "How is pricing determined?",
    answer:
      "Pricing depends on the work, its volume, and the workflow involved. After learning about your needs, we can discuss a scope and the information needed for a proposal.",
  },
  {
    question: "What happens during an initial conversation?",
    answer:
      "We learn about your practice, the support you are looking for, and how your current process works. You can ask questions and decide whether you would like to explore next steps.",
  },
  {
    question: "How long does credentialing take?",
    answer:
      "Timing varies by payer, application, provider, and the completeness of the information available. We can help organize follow-up, but payer review times and outcomes are outside our control.",
  },
  {
    question: "How will our teams share updates?",
    answer:
      "We agree on the right communication channel, update cadence, and format during setup. Open items and questions are routed according to the handoff process your practice approves.",
  },
  {
    question: "What information should I send through the contact form?",
    answer:
      "Please share your practice contact details and a general description of the support you are seeking. Do not include patient names or protected health information in the form.",
  },
];

const comparisonRows = [
  {
    area: "Day-to-day coordination",
    inHouse: "Your team coordinates work across its existing roles and tools.",
    careSource: "Agree on a point of contact and handoff routine with CareSource.",
  },
  {
    area: "Service scope",
    inHouse: "Responsibilities are assigned within your internal team.",
    careSource: "Define a service scope and review steps together before work begins.",
  },
  {
    area: "Workflow visibility",
    inHouse: "Updates follow the process your practice already uses.",
    careSource: "Set a shared update format for open questions, next steps, and follow-up.",
  },
  {
    area: "Capacity planning",
    inHouse: "Workload is managed within your current staffing plan.",
    careSource: "Discuss the support needed and agree on a practical starting scope.",
  },
];

function ServicesSection() {
  return (
    <section className="py-12 sm:py-14 lg:py-16" aria-label="CareSource services">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Support for your practice"
            title={<>The right help, <span className="text-brand-accent-ink">under one roof.</span></>}
            description="Choose the support that fits your practice today. We can also discuss how services may work together through clearly agreed responsibilities."
            className="mb-7 sm:mb-9"
          />
        </ScrollReveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              title={service.shortTitle}
              description={service.description}
              imageSrc={service.imageSrc}
              imageAlt={service.imageAlt}
              icon={service.icon}
              href={`/services/${service.slug}`}
            />
          ))}
        </div>
        <ScrollReveal>
          <div className="mt-7 flex justify-center">
            <Button href="/services" variant="ghost" showArrow>
              Explore all services
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

function OneRoofSection() {
  return (
    <section className="overflow-hidden bg-brand-dark py-12 text-brand-background sm:py-14 lg:py-16" aria-labelledby="one-roof-heading">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <ScrollReveal>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-brand-accent">One coordinated team</p>
          <h2 id="one-roof-heading" className="text-balance font-display text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
            Connected support. <span className="text-brand-accent">Clear handoffs.</span>
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-brand-background/70 sm:text-lg">
            Bring the right practice support into a shared conversation. We agree who owns each step, what needs your review, and how updates should move between teams.
          </p>
          <Button href="/contact" className="mt-6" showArrow>
            Talk through your needs
          </Button>
        </ScrollReveal>

        <ScrollReveal>
          <div className="relative mx-auto w-full max-w-2xl rounded-[2rem] border border-brand-background/15 bg-brand-dark-soft p-5 sm:p-8">
            <div className="absolute left-1/2 top-16 hidden h-[calc(100%-8rem)] w-px -translate-x-1/2 bg-brand-accent/45 sm:block" aria-hidden="true" />
            <div className="relative mx-auto mb-5 flex min-h-16 max-w-xs items-center justify-center gap-3 rounded-2xl border border-brand-accent/40 bg-brand-dark px-4 text-center shadow-card">
              <span className="grid size-9 place-items-center rounded-full bg-brand-accent text-brand-background"><Check size={19} aria-hidden="true" /></span>
              <span className="text-sm font-bold sm:text-base">Your practice &amp; shared goals</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {services.map(({ slug, shortTitle, icon: Icon }) => (
                <div key={slug} className="relative flex min-h-14 items-center gap-3 rounded-xl border border-brand-background/10 bg-brand-background/[0.045] px-4 py-3 sm:min-h-16">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-brand-accent/15 text-brand-accent"><Icon size={19} strokeWidth={1.8} aria-hidden="true" /></span>
                  <span className="text-sm font-semibold text-brand-background/90">{shortTitle}</span>
                  <span className="ml-auto text-[10px] font-bold uppercase tracking-wide text-brand-background/45">As agreed</span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-center text-xs leading-relaxed text-brand-background/55">Each service is scoped separately with your practice. No bundled result is assumed.</p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="scroll-mt-24 py-12 sm:py-14 lg:py-16" aria-label="How we work">
      <Container>
        <ScrollReveal>
          <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="How we work"
              title={<>A practical path to <span className="text-brand-accent-ink">working together.</span></>}
              description="A clear start makes shared work easier to understand and manage."
            />
            <a href="#process-steps" className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-brand-accent-ink underline decoration-brand-accent/70 decoration-2 underline-offset-4">
              Follow the steps <ArrowDown size={17} aria-hidden="true" />
            </a>
          </div>
        </ScrollReveal>
        <ol id="process-steps" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <li key={step.number} className="relative">
              <ScrollReveal delay={index * 0.04}>
                <article className="h-full rounded-2xl border border-brand-border bg-brand-background-wash/25 p-5 sm:p-6">
                  <p className="font-display text-4xl font-semibold leading-none text-brand-accent-ink/70">{step.number}</p>
                  <h3 className="mt-6 font-display text-xl font-semibold leading-tight text-brand-dark">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-slate">{step.description}</p>
                </article>
              </ScrollReveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section className="bg-brand-background-wash/35 py-12 sm:py-14 lg:py-16" aria-labelledby="comparison-heading">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="A thoughtful fit"
            title={<>Compare the way <span className="text-brand-accent-ink">work gets coordinated.</span></>}
            description="Every practice is different. Use this as a conversation starter, then decide what makes sense for your team."
            className="mb-7 sm:mb-9"
          />
        </ScrollReveal>
        <ScrollReveal>
          <div className="overflow-hidden rounded-2xl border border-brand-border bg-brand-background shadow-card">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[42rem] border-collapse text-left">
                <thead>
                  <tr className="bg-brand-dark text-brand-background">
                    <th scope="col" className="w-[22%] px-5 py-4 text-xs font-bold uppercase tracking-wide text-brand-background/60 sm:px-7">Area</th>
                    <th scope="col" className="px-5 py-4 text-sm font-bold sm:px-7">In-house workflow</th>
                    <th scope="col" className="px-5 py-4 text-sm font-bold text-brand-accent sm:px-7">Working with CareSource</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.area} className="border-t border-brand-border align-top">
                      <th scope="row" className="px-5 py-5 text-sm font-bold text-brand-dark sm:px-7">{row.area}</th>
                      <td className="px-5 py-5 text-sm leading-relaxed text-brand-slate sm:px-7">{row.inHouse}</td>
                      <td className="px-5 py-5 text-sm leading-relaxed text-brand-slate sm:px-7">{row.careSource}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="border-t border-brand-border px-5 py-4 text-xs leading-relaxed text-brand-slate sm:px-7">This is a general comparison, not a performance or savings claim. Scope and working arrangements are agreed with each practice.</p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="bg-brand-background-wash/35 py-12 sm:py-14 lg:py-16" aria-label="Frequently asked questions">
      <Container className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Common questions"
            title={<>A few things you may be <span className="text-brand-accent-ink">wondering.</span></>}
            description="If you have a question that is not covered here, tell us what kind of support you are exploring."
          />
          <Button href="/contact" variant="ghost" className="mt-7" showArrow>Ask us a question</Button>
        </ScrollReveal>
        <div className="divide-y divide-brand-border border-y border-brand-border">
          {faqs.map((faq, index) => (
            <details key={faq.question} className="group py-5" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display text-lg font-semibold leading-snug text-brand-dark marker:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-ink sm:text-xl [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span className="grid size-8 shrink-0 place-items-center rounded-full border border-brand-border text-brand-accent-ink transition-colors group-open:bg-brand-dark group-open:text-brand-accent">
                  <Plus className="group-open:hidden" size={17} aria-hidden="true" />
                  <Minus className="hidden group-open:block" size={17} aria-hidden="true" />
                </span>
              </summary>
              <p className="max-w-2xl pr-10 pt-4 text-sm leading-relaxed text-brand-slate sm:text-base">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ContactCta() {
  return (
    <section className="py-12 sm:py-14 lg:py-16">
      <Container>
        <ScrollReveal>
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-brand-dark px-6 py-8 text-center text-brand-background sm:px-12 sm:py-10 lg:px-20 lg:py-12">
            <div className="pointer-events-none absolute -right-16 -top-24 -z-10 size-72 rounded-full border-[3rem] border-brand-accent/15" aria-hidden="true" />
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-accent">Start a conversation</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">Let&apos;s find the right support for your practice.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-brand-background/70 sm:text-lg">Tell us what your team is looking for. We&apos;ll learn about your workflow and discuss a sensible next step.</p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact" size="lg" showArrow>Book a Free Audit</Button>
              <Link href={`mailto:${footerContact.email}`} className="rounded-pill px-5 py-3 text-sm font-bold text-brand-background underline decoration-brand-accent/70 underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent">Email {footerContact.email}</Link>
            </div>
            <p className="mt-7 text-xs text-brand-background/50">Please do not share patient names or protected health information in your initial message.</p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

export function HomeSections() {
  return (
    <>
      <ServicesSection />
      <OneRoofSection />
      <ProcessSection />
      <ComparisonSection />
      <FaqSection />
      <ContactCta />
    </>
  );
}

