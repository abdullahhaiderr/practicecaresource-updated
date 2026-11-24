import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Practice Care Source services, pricing, onboarding, communication, and website inquiries.",
};

const faqs = [
  {
    question: "Which services can I ask about?",
    answer:
      "Practice Care Source offers medical billing, revenue cycle management, medical coding, credentialing, eligibility verification, prior authorization, virtual assistant support, AR recovery, denial management, and website development. We can discuss one service or a combination that fits your practice.",
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

export default function FAQsPage() {
  return (
    <main id="main-content">
      <PageHero
        breadcrumb="FAQs"
        eyebrow="Common questions"
        title="Clear answers before you get started."
        description="Find out what to expect when discussing services, pricing, onboarding, communication, and the information to share with CareSource."
        imageSrc="/heroes/resources-hero.jpg"
        imageAlt="A practice manager reviewing information at a bright office desk"
        primaryAction={{ label: "Ask us a question", href: "/contact" }}
        secondaryAction={{ label: "Explore services", href: "/services" }}
        facts={[
          { title: "Service options", detail: "Billing and practice support" },
          { title: "Clear next steps", detail: "No commitment to explore" },
          { title: "For US practices", detail: "Business inquiries and support" },
        ]}
      />

      <section className="py-10 sm:py-12 lg:py-16">
        <Container size="narrow">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Helpful information"
              title="Frequently asked questions"
              description="These answers cover the questions practices most often ask when exploring support. Contact us when you need to discuss your own workflow."
            />
          </ScrollReveal>

          <div className="mt-8 space-y-3">
            {faqs.map((faq, index) => (
              <ScrollReveal key={faq.question} delay={index * 0.035}>
                <details
                  name="company-faq"
                  open={index === 0}
                  className="faq-row card-accent-line group overflow-hidden rounded-2xl border border-brand-border bg-brand-background shadow-card transition-[border-color,box-shadow] duration-300 hover:border-brand-accent/45 hover:shadow-card-hover"
                >
                  <summary className="flex min-h-[4.5rem] cursor-pointer list-none items-center justify-between gap-5 px-5 py-4 font-display text-lg font-semibold leading-snug text-brand-dark transition-colors hover:text-brand-accent-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-accent-ink sm:px-6 sm:text-xl [&::-webkit-details-marker]:hidden">
                    {faq.question}
                    <span className="faq-chevron grid size-9 shrink-0 place-items-center rounded-full border border-brand-accent/20 bg-brand-peach/55 text-brand-accent-ink transition-[transform,background-color] duration-300" aria-hidden="true">
                      <ChevronDown size={18} />
                    </span>
                  </summary>
                  <p className="faq-answer max-w-3xl px-5 pb-5 text-sm leading-relaxed text-brand-slate sm:px-6 sm:pb-6 sm:text-base">
                    {faq.answer}
                  </p>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-brand-border/75 bg-brand-background-wash/35 py-10 sm:py-12 lg:py-16">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-accent-ink">
                Still have a question?
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-brand-dark sm:text-4xl">
                Talk through your practice's needs with us.
              </h2>
              <p className="mt-3 text-base leading-relaxed text-brand-slate sm:text-lg">
                Share a general description of the support you are exploring. Please leave patient details and protected health information out of the message.
              </p>
            </div>
            <Button href="/contact" size="lg" showArrow className="shrink-0 self-start">
              Contact CareSource
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
