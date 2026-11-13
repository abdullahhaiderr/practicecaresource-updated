import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ChevronDown,
  Headset,
  MapPin,
  MessageSquare,
  Minus,
  Plus,
  Quote,
  Stethoscope,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/button";
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

const testimonials = [
  { name: "Emily Carter", imageSrc: "/testimonials/emily-carter.jpg", quote: "The billing team keeps our claims organized and explains what needs attention. Communication is clear, and we know who to contact with questions." },
  { name: "Olivia", imageSrc: "/testimonials/olivia.jpg", quote: "CareSource took time to understand our billing workflow. It’s helpful to have clear updates and a consistent point of contact." },
  { name: "Sophia Mitchell", imageSrc: "/testimonials/sophia-mitchell.jpg", quote: "The billing support fits into our existing process. Follow-up is clear, and we know what needs our team’s review." },
  { name: "James Anderson", imageSrc: "/testimonials/james-anderson.jpg", quote: "The team communicates clearly about billing questions and next steps. It’s easier to keep track of open items." },
  { name: "Ethan Walker", imageSrc: "/testimonials/ethan-walker.jpg", quote: "We appreciate the straightforward updates and organized billing support. Responsibilities are clear when questions come up." },
  { name: "Michael Brooks", imageSrc: "/testimonials/michael-brooks.jpg", quote: "CareSource helps us keep billing tasks organized. The team lets us know what information is needed and what comes next." },
  { name: "Daniel", imageSrc: "/testimonials/daniel.jpg", quote: "The handoffs are clear, and our team knows what to review. That makes it easier to coordinate billing support with our existing process." },
  { name: "Ryan Mitchell", imageSrc: "/testimonials/ryan-mitchell.jpg", quote: "The billing support follows our practice’s workflow. Communication and follow-up have been clear." },
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

const coverageHighlights = [
  { title: "End-to-End RCM", detail: "Coverage", icon: Workflow },
  { title: "200+", detail: "Medical specialties supported", icon: Stethoscope },
  { title: "50 States", detail: "Nationwide coverage", icon: MapPin },
  { title: "1:1 Dedicated", detail: "Billing manager", icon: Headset },
];

function OneRoofSection() {
  return (
    <section className="py-8 sm:py-10 lg:py-12" aria-label="CareSource coverage and support">
      <Container>
        <ul className="grid overflow-hidden rounded-2xl border border-brand-border/40 bg-[linear-gradient(110deg,#299bcf_0%,#3aabb9_52%,#43b5a2_100%)] p-3 shadow-card sm:grid-cols-2 sm:p-4 lg:grid-cols-4">
          {coverageHighlights.map(({ title, detail, icon: Icon }) => (
            <li key={title} className="flex min-h-[5.25rem] items-center gap-3 rounded-xl px-3 py-3 sm:gap-4 sm:px-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-white text-brand-accent-ink shadow-sm sm:size-14" aria-hidden="true">
                <Icon size={24} strokeWidth={1.8} />
              </span>
              <span className="min-w-0 text-sm leading-snug text-white sm:text-base">
                <strong className="block font-bold">{title}</strong>
                <span className="block font-medium text-white/95">{detail}</span>
              </span>
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

function TestimonialCards({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul
      className="flex w-max shrink-0 items-stretch gap-4 pr-4"
      aria-hidden={duplicate || undefined}
    >
      {testimonials.map(({ name, quote, imageSrc }) => (
        <li key={name} className="w-[min(82vw,18rem)] shrink-0 sm:w-[17.5rem] lg:w-[18rem]">
          <article className="group flex h-[21rem] flex-col rounded-2xl border border-brand-border border-t-4 border-t-brand-accent bg-brand-background p-5 shadow-card transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-brand-accent/45 hover:shadow-card-hover motion-reduce:transition-none sm:p-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="grid size-10 place-items-center rounded-full bg-brand-accent/10 text-brand-accent-ink transition-colors group-hover:bg-brand-accent/15" aria-hidden="true">
                <Quote size={19} strokeWidth={2} />
              </span>
              <span className="rounded-full bg-brand-background-wash px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-brand-accent-ink">
                Medical billing
              </span>
            </div>
            <blockquote className="flex-1 overflow-hidden text-sm leading-relaxed text-brand-slate sm:text-base">
              “{quote}”
            </blockquote>
            <div className="mt-4 flex items-center gap-3 border-t border-brand-border pt-4">
              <Image
                src={imageSrc}
                alt=""
                width={52}
                height={52}
                className="size-[52px] shrink-0 rounded-full object-cover ring-2 ring-brand-background-wash"
              />
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-brand-dark">{name}</p>
                <p className="mt-0.5 text-xs text-brand-slate">Medical billing client</p>
              </div>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}

function TestimonialsSection() {
  return (
    <section className="bg-brand-background-wash/35 py-12 sm:py-14 lg:py-16" aria-label="Medical billing client testimonials">
      <Container>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Client testimonials"
            title={<>Medical billing support, <span className="text-brand-accent-ink">in their words.</span></>}
            description="Experiences shared by medical billing clients we support."
            className="mb-7 sm:mb-9"
          />
        </ScrollReveal>
        <div
          className="testimonial-marquee -mx-2 overflow-hidden px-2"
          role="region"
          aria-label="Scrolling medical billing testimonials"
          tabIndex={0}
        >
          <div className="testimonial-marquee-track flex w-max py-2">
            <TestimonialCards />
            <TestimonialCards duplicate />
          </div>
        </div>

        <details className="group mt-8 overflow-hidden rounded-2xl border border-brand-border bg-brand-background shadow-card transition-shadow open:shadow-card-hover">
          <summary className="flex min-h-[5.25rem] cursor-pointer list-none items-center justify-between gap-4 bg-brand-background-wash/40 px-5 py-4 transition-colors hover:bg-brand-background-wash/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-accent-ink sm:px-7 [&::-webkit-details-marker]:hidden">
            <span className="flex min-w-0 items-center gap-3">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-brand-accent/15 bg-brand-peach/65 text-brand-accent-ink shadow-sm" aria-hidden="true">
                <MessageSquare size={20} />
              </span>
              <span className="min-w-0">
                <span className="block font-display text-lg font-semibold text-brand-dark sm:text-xl">Share your medical billing experience</span>
                <span className="mt-0.5 block text-sm text-brand-slate">Send a review for CareSource to review before publishing.</span>
              </span>
            </span>
            <span className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-brand-accent-ink">
              Write a review
              <ChevronDown size={18} className="transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
            </span>
          </summary>
          <div className="border-t border-brand-border px-5 py-6 sm:px-7 sm:py-8">
            <p className="max-w-3xl text-sm leading-relaxed text-brand-slate">
              Please share your own experience only and leave out all patient details. Submissions go to CareSource for review; we will contact you to confirm the final wording before it appears on the site.
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
      <TestimonialsSection />
      <FaqSection />
      <ContactCta />
    </>
  );
}

