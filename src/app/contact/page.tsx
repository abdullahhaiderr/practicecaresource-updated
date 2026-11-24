import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { SocialIcons } from "@/components/social-icons";
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
      <PageHero
        breadcrumb="Contact"
        eyebrow="Start a conversation"
        title="Let’s find the right support for your practice."
        description="Tell us what your team is looking for. We’ll learn about your workflow and discuss a sensible next step."
        imageSrc="/heroes/contact-hero.jpg"
        imageAlt="A practice coordinator speaking with a healthcare professional in a bright office"
        primaryAction={{ label: "Send a message", href: "#contact-form" }}
        secondaryAction={{ label: "Email CareSource", href: `mailto:${footerContact.email}` }}
        facts={[
          { title: "Call us", detail: "+92 308 8866774" },
          { title: "Email us", detail: "info@practicecaresource.com" },
          { title: "Who we support", detail: "US healthcare providers" },
        ]}
      />

      <section id="contact-form" className="scroll-mt-24 py-10 sm:py-12 lg:py-16">
        <Container className="grid items-start gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <ScrollReveal>
            <div className="space-y-4">
              <div className="mb-5">
                <p className="mb-2 text-sm font-bold uppercase tracking-[0.16em] text-brand-accent-ink">
                  Contact details
                </p>
                <h2 className="font-display text-3xl font-semibold leading-tight text-brand-dark sm:text-4xl">
                  Reach our team.
                </h2>
              </div>

              <div className="card-accent-line flex items-start gap-4 rounded-2xl border border-brand-border bg-brand-background p-5 shadow-card transition-[transform,background-color,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-brand-accent/45 hover:bg-brand-background-wash hover:shadow-card-hover motion-reduce:transition-none">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-peach/55 text-brand-accent-ink">
                  <MapPin size={21} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-bold text-brand-dark">US Office</span>
                  <span className="mt-1 block text-sm leading-relaxed text-brand-slate">1770 Crystal Drive, Arlington, VA 22202, USA</span>
                </span>
              </div>

              <a
                href={`tel:${footerContact.phoneHref}`}
                className="card-accent-line group flex items-start gap-4 rounded-2xl border border-brand-border bg-brand-background p-5 shadow-card transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-brand-accent/50 hover:shadow-card-hover motion-reduce:transition-none"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-peach/55 text-brand-accent-ink">
                  <Phone size={20} aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-bold text-brand-dark">Phone</span>
                  <span className="mt-1 block text-sm leading-relaxed text-brand-slate">{footerContact.phoneDisplay}</span>
                </span>
                <ArrowRight size={17} className="mt-1 ml-auto shrink-0 text-brand-accent-ink transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>

              <a
                href={`mailto:${footerContact.email}`}
                className="card-accent-line group flex items-start gap-4 rounded-2xl border border-brand-border bg-brand-background p-5 shadow-card transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-brand-accent/50 hover:shadow-card-hover motion-reduce:transition-none"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-peach/55 text-brand-accent-ink">
                  <Mail size={20} aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-bold text-brand-dark">Email</span>
                  <span className="mt-1 block break-all text-sm leading-relaxed text-brand-slate">{footerContact.email}</span>
                </span>
                <ArrowRight size={17} className="mt-1 ml-auto shrink-0 text-brand-accent-ink transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>

              <div className="card-accent-line flex items-start gap-4 rounded-2xl border border-brand-border bg-brand-background p-5 shadow-card transition-[transform,background-color,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-brand-accent/45 hover:bg-brand-background-wash hover:shadow-card-hover motion-reduce:transition-none">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-peach/55 text-brand-accent-ink">
                  <Clock3 size={20} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-bold text-brand-dark">Hours</span>
                  <span className="mt-1 block text-sm leading-relaxed text-brand-slate">Mon–Fri · 8:00 AM–7:00 PM Eastern Time (ET)</span>
                </span>
              </div>
              <div className="flex items-center justify-between gap-4 rounded-2xl border border-brand-border bg-brand-background-wash/55 p-4">
                <p className="font-display text-lg font-semibold text-brand-accent-ink">Follow CareSource</p>
                <SocialIcons compact />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.06}>
            <div className="card-accent-line rounded-3xl border border-brand-border bg-brand-background p-5 shadow-card sm:p-8 lg:p-9">
              <h2 className="mb-6 font-display text-3xl font-semibold leading-tight text-brand-dark sm:text-4xl">
                Send us a message
              </h2>
              <ContactForm simple />
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section className="border-y border-brand-border/75 bg-brand-background-wash/30 py-10 sm:py-12 lg:py-16">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="A few helpful details"
              title="Before you send your message"
              description="Here are quick answers to common questions about getting in touch with CareSource."
            />
          </ScrollReveal>

          <div className="mx-auto mt-8 max-w-4xl space-y-3">
            {faqs.map(({ question, answer }, index) => (
              <ScrollReveal key={question} delay={index * 0.04}>
                <details name="contact-faq" className="faq-row card-accent-line overflow-hidden rounded-2xl border border-brand-border bg-brand-background shadow-card transition-[border-color,box-shadow] duration-300 hover:border-brand-accent/45 hover:shadow-card-hover">
                  <summary className="flex min-h-[4.5rem] cursor-pointer list-none items-center justify-between gap-5 px-5 py-4 font-display text-lg font-semibold leading-snug text-brand-dark marker:hidden transition-colors hover:text-brand-accent-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-accent-ink sm:px-6 sm:text-xl [&::-webkit-details-marker]:hidden">
                    {question}
                    <span className="faq-chevron grid size-9 shrink-0 place-items-center rounded-full border border-brand-accent/20 bg-brand-peach/55 text-brand-accent-ink transition-[transform,background-color] duration-300" aria-hidden="true">
                      <ChevronDown size={18} />
                    </span>
                  </summary>
                  <p className="faq-answer max-w-3xl px-5 pb-5 text-sm leading-relaxed text-brand-slate sm:px-6 sm:pb-6 sm:text-base">
                    {answer}
                  </p>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-background-wash py-10 text-brand-dark sm:py-12 lg:py-16">
        <Container>
          <ScrollReveal>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-brand-accent">
                  CareSource
                </p>
                <h2 className="text-balance font-display text-4xl font-semibold leading-[1.02] tracking-tight text-brand-dark sm:text-5xl lg:text-6xl">
                  Start with a conversation about your practice.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-slate sm:text-lg">
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
