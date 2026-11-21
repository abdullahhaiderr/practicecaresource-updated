import {
  ArrowDown,
  ChevronDown,
  Mail,
  MessageSquare,
  Minus,
  Phone,
  Plus,
} from "lucide-react";
import { Button } from "@/components/button";
import { ContactForm } from "@/app/contact/contact-form";
import { Container } from "@/components/container";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { ReviewSubmissionForm } from "@/components/home/review-submission-form";
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
      "CareSource offers medical billing, credentialing, virtual assistant support, AR recovery, denial management, and website development. We can discuss one service or a combination that fits your practice.",
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
  const workingPrinciples = [
    { title: "Clear responsibilities", description: "Agree which tasks are included and which decisions stay with your practice." },
    { title: "Practice review", description: "Keep approvals and questions with the people authorized to make those decisions." },
    { title: "Documented handoffs", description: "Make next steps and open questions easier for both teams to follow." },
  ];

  return (
    <section className="py-8 sm:py-10 lg:py-12" aria-label="How practice support is organized">
      <Container>
        <ul className="grid gap-3 rounded-2xl border border-brand-border bg-brand-background-wash p-4 sm:grid-cols-3 sm:p-6">
          {workingPrinciples.map((item) => (
            <li key={item.title} className="rounded-xl border border-brand-border bg-brand-background p-4 sm:p-5">
              <h2 className="font-display text-xl font-semibold text-brand-dark">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-brand-slate">{item.description}</p>
            </li>
          ))}
        </ul>
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
                <article className="h-full rounded-2xl border border-black bg-brand-background-wash p-5 shadow-card transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-black hover:shadow-card-hover motion-reduce:transition-none sm:p-6">
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

function TestimonialsSection() {
  return (
    <section className="bg-brand-background-wash py-12 sm:py-14 lg:py-16" aria-label="Client feedback">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Client feedback"
            title={<>Your experience <span className="text-brand-accent-ink">matters.</span></>}
            description="Reviews are shared only after the client has confirmed the final wording."
            className="mb-7 sm:mb-9"
          />
        </ScrollReveal>
        <details className="group overflow-hidden rounded-2xl border border-brand-border bg-brand-background shadow-card">
          <summary className="flex min-h-[5.25rem] cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-brand-background-wash focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-accent-ink sm:px-7 [&::-webkit-details-marker]:hidden">
            <span className="flex min-w-0 items-center gap-3">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-brand-border bg-brand-background-wash text-brand-accent-ink" aria-hidden="true">
                <MessageSquare size={20} />
              </span>
              <span className="min-w-0">
                <span className="block font-display text-lg font-semibold text-brand-dark sm:text-xl">Share your experience</span>
                <span className="mt-0.5 block text-sm text-brand-slate">Send a review for CareSource to check before publication.</span>
              </span>
            </span>
            <span className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-brand-accent-ink">
              Write a review
              <ChevronDown size={18} className="transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
            </span>
          </summary>
          <div className="border-t border-brand-border px-5 py-6 sm:px-7 sm:py-8">
            <p className="max-w-3xl text-sm leading-relaxed text-brand-slate">
              Please share your own experience only and leave out patient details. Submissions go to CareSource for review. We will contact you to confirm the final wording before it appears on the site.
            </p>
            <ReviewSubmissionForm />
          </div>
        </details>
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
                <span className="grid size-8 shrink-0 place-items-center rounded-full border border-brand-border text-brand-accent-ink transition-colors group-open:border-brand-accent/20 group-open:bg-brand-accent/10 group-open:text-brand-accent-ink">
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
    <section className="py-12 sm:py-14 lg:py-16" aria-label="Contact CareSource">
      <Container>
        <ScrollReveal>
          <div className="relative isolate overflow-hidden rounded-[2rem] border border-brand-border bg-[#eaf4ff] px-5 py-8 text-brand-dark shadow-card sm:px-8 sm:py-10 lg:px-12 lg:py-12">
            <div className="relative grid gap-9 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-12">
              <div className="lg:pt-3">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-accent-ink">Start a conversation</p>
                <h2 className="mt-4 text-balance font-display text-4xl font-semibold leading-[1.02] tracking-tight text-brand-dark sm:text-5xl">
                  Let&apos;s find the right support for your practice.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-brand-slate sm:text-lg">
                  Tell us what your team is looking for. We&apos;ll learn about your workflow and discuss a sensible next step.
                </p>

                <div className="mt-8 space-y-4">
                  <a
                    href={"tel:" + footerContact.phoneHref}
                    className="group flex items-center gap-4 rounded-2xl border border-brand-border bg-white/80 p-4 transition-colors hover:border-brand-accent/40 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white text-brand-accent-ink" aria-hidden="true">
                      <Phone size={20} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm text-brand-slate">Call us</span>
                      <span className="block font-semibold text-brand-dark">{footerContact.phoneDisplay}</span>
                    </span>
                  </a>
                  <a
                    href={"mailto:" + footerContact.email}
                    className="group flex items-center gap-4 rounded-2xl border border-brand-border bg-white/80 p-4 transition-colors hover:border-brand-accent/40 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white text-brand-accent-ink" aria-hidden="true">
                      <Mail size={20} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm text-brand-slate">Email us</span>
                      <span className="block break-all font-semibold text-brand-dark">{footerContact.email}</span>
                    </span>
                  </a>
                </div>

              </div>

              <div className="rounded-3xl border border-brand-border bg-white p-5 text-brand-dark shadow-card sm:p-7 lg:p-8">
                <p className="mb-5 font-display text-2xl font-semibold text-brand-dark sm:text-3xl">Send us a message</p>
                <ContactForm compact />
              </div>
            </div>
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
      <TestimonialsSection />
      <FaqSection />
      <ContactCta />
    </>
  );
}

