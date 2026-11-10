import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  HelpCircle,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "./contact-form";
import { footerContact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact CareSource",
  description:
    "Contact CareSource to discuss medical billing and practice support for your team.",
};

const faqs = [
  {
    question: "What happens after I send a message?",
    answer:
      "CareSource reviews your request and follows up using the contact details you provide.",
  },
  {
    question: "Can I ask about more than one service?",
    answer:
      "Yes. Choose the service that is closest to your main question and mention any other areas in your message.",
  },
  {
    question: "Should I include patient information?",
    answer:
      "No. Please leave out patient names and any protected health information. Use the form only for general practice or business questions.",
  },
  {
    question: "What should I write in the message?",
    answer:
      "Share your practice goals, the service you are exploring, or a general description of the workflow you would like to discuss.",
  },
];

export default function ContactPage() {
  return (
    <main id="main-content">
      <section className="relative isolate overflow-hidden border-b border-brand-border/70 bg-brand-background py-14 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -right-20 top-1/2 hidden h-[26rem] w-[32rem] -translate-y-1/2 lg:block" aria-hidden="true">
          <div className="absolute right-0 top-6 size-[24rem] rounded-[44%_56%_61%_39%/41%_48%_52%_59%] bg-brand-dark" />
          <div className="absolute right-12 top-1/2 size-72 -translate-y-1/2 rounded-full border border-brand-accent/55" />
          <div className="absolute right-16 top-12 size-16 rounded-full bg-brand-accent" />
          <div className="absolute left-0 top-1/2 grid size-24 -translate-y-1/2 place-items-center rounded-full border border-brand-background/35 bg-brand-dark-soft text-brand-accent">
            <HelpCircle size={40} strokeWidth={1.4} />
          </div>
          <div className="absolute bottom-12 right-24 h-1.5 w-32 rounded-full bg-brand-accent" />
        </div>

        <Container className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <ScrollReveal className="max-w-3xl lg:max-w-none">
            <nav aria-label="Breadcrumb" className="mb-7">
              <ol className="flex items-center gap-2 text-sm font-semibold text-brand-slate">
                <li>
                  <Link
                    href="/"
                    className="rounded-sm transition-colors hover:text-brand-accent-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-ink"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-brand-dark">
                  Contact
                </li>
              </ol>
            </nav>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-brand-accent-ink">
              Contact CareSource
            </p>
            <h1 className="text-balance font-display text-5xl font-semibold leading-[0.98] tracking-tight text-brand-dark sm:text-6xl lg:text-7xl">
              Let’s talk about your practice.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-brand-slate sm:text-lg">
              Tell us what kind of support you are exploring. We can learn more
              about your practice and discuss a practical next step together.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#contact-form" size="lg" showArrow>
                Send a message
              </Button>
              <a
                href={`mailto:${footerContact.email}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-pill px-5 text-sm font-bold text-brand-dark transition-colors hover:bg-brand-background-wash/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-ink"
              >
                <Mail size={17} aria-hidden="true" />
                Email CareSource
              </a>
            </div>
          </ScrollReveal>
          <div className="hidden min-h-[22rem] lg:block" aria-hidden="true" />
        </Container>
      </section>

      <section id="contact-form" className="scroll-mt-24 py-16 sm:py-20 lg:py-24">
        <Container className="grid items-start gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <ScrollReveal className="space-y-5">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-brand-accent-ink">
                Get in touch
              </p>
              <h2 className="font-display text-3xl font-semibold leading-tight text-brand-dark sm:text-4xl">
                Choose the easiest way to reach us.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-brand-slate">
                Share a little about your practice and the support you are
                considering. Please keep all patient information out of your
                message.
              </p>
            </div>

            <a
              href={`mailto:${footerContact.email}`}
              className="group flex items-start gap-4 rounded-2xl border border-brand-border bg-brand-background p-5 shadow-card transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-brand-accent/50 hover:shadow-card-hover motion-reduce:transition-none"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-dark text-brand-accent">
                <Mail size={22} aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-bold text-brand-dark">Email</span>
                <span className="mt-1 block break-all text-sm leading-relaxed text-brand-slate">
                  {footerContact.email}
                </span>
              </span>
              <ArrowRight size={18} className="mt-1 shrink-0 text-brand-accent-ink transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>

            <a
              href={`tel:${footerContact.phoneHref}`}
              className="group flex items-start gap-4 rounded-2xl border border-brand-border bg-brand-background p-5 shadow-card transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-brand-accent/50 hover:shadow-card-hover motion-reduce:transition-none"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-dark text-brand-accent">
                <Phone size={21} aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-bold text-brand-dark">Phone</span>
                <span className="mt-1 block text-sm leading-relaxed text-brand-slate">
                  {footerContact.phoneDisplay}
                </span>
              </span>
              <ArrowRight size={18} className="mt-1 shrink-0 text-brand-accent-ink transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              <div className="flex items-start gap-4 rounded-2xl border border-brand-border bg-brand-background-wash/35 p-5">
                <MapPin size={21} className="mt-0.5 shrink-0 text-brand-accent-ink" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-bold text-brand-dark">Business address</h3>
                  <p className="mt-1 text-sm leading-relaxed text-brand-slate">
                    [PLACEHOLDER: add business address]
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-2xl border border-brand-border bg-brand-background-wash/35 p-5">
                <Clock3 size={21} className="mt-0.5 shrink-0 text-brand-accent-ink" aria-hidden="true" />
                <div>
                  <h3 className="text-sm font-bold text-brand-dark">Working hours</h3>
                  <p className="mt-1 text-sm leading-relaxed text-brand-slate">
                    [PLACEHOLDER: add working hours and timezone]
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-brand-border bg-brand-dark p-5 text-brand-background sm:p-6">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-accent">
                Reply time
              </p>
              <p className="mt-2 font-display text-2xl font-semibold leading-tight sm:text-3xl">
                Typically replies within [PLACEHOLDER: add response time].
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <div className="rounded-3xl border border-brand-border bg-brand-background p-5 shadow-card sm:p-8 lg:p-9">
              <div className="mb-7">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-accent-ink">
                  Contact form
                </p>
                <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-brand-dark sm:text-4xl">
                  Tell us how we can help.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-brand-slate">
                  We’ll use these details to follow up about your request.
                </p>
              </div>

              <div className="mb-7 flex items-start gap-3 rounded-2xl border border-brand-accent/45 bg-brand-background-wash/45 p-4 text-sm font-semibold leading-relaxed text-brand-dark sm:p-5">
                <ShieldCheck size={21} className="mt-0.5 shrink-0 text-brand-accent-ink" aria-hidden="true" />
                <p>
                  Please do not include patient names or any protected health information in this form.
                </p>
              </div>

              <ContactForm />
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="border-y border-brand-border/75 bg-brand-background-wash/30 py-16 sm:py-20 lg:py-24">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="A few helpful details"
              title="Before you send your message"
              description="Here are quick answers to common questions about getting in touch with CareSource."
            />
          </ScrollReveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {faqs.map(({ question, answer }, index) => (
              <ScrollReveal key={question} delay={index * 0.05} className="h-full">
                <article className="h-full rounded-2xl border border-brand-border bg-brand-background p-6 shadow-card transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-brand-accent/50 hover:shadow-card-hover motion-reduce:transition-none sm:p-7">
                  <h3 className="font-display text-xl font-semibold leading-tight text-brand-dark sm:text-2xl">
                    {question}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-brand-slate">
                    {answer}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-dark py-16 text-brand-background sm:py-20 lg:py-24">
        <Container>
          <ScrollReveal>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-brand-accent">
                  CareSource
                </p>
                <h2 className="text-balance font-display text-4xl font-semibold leading-[1.02] tracking-tight text-brand-background sm:text-5xl lg:text-6xl">
                  Start with a conversation about your practice.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-background/75 sm:text-lg">
                  Use the form above or reach out by email when you’re ready to
                  talk through your next step.
                </p>
              </div>
              <Button href={`mailto:${footerContact.email}`} size="lg" showArrow className="shrink-0 self-start">
                Email CareSource
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </main>
  );
}
