import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceOverviewCard } from "@/components/service-overview-card";
import { serviceCatalog } from "@/data/services";
import { ServiceExplorer } from "./service-explorer";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore medical billing, credentialing, virtual assistant, AR recovery, denial management, and website development support from CareSource.",
};

export default function ServicesPage() {
  return (
    <main id="main-content">
      <PageHero
        breadcrumb="Services"
        eyebrow="Support for your practice"
        title="The right help, under one roof."
        description="Choose the support that fits your practice today. We can also discuss how services may work together through clearly agreed responsibilities."
        imageSrc="/heroes/services-hero.jpg"
        imageAlt="A healthcare team collaborating around a laptop in a bright clinic"
        primaryAction={{ label: "Book a Free Audit", href: "/contact" }}
        secondaryAction={{ label: "Explore services", href: "#all-services" }}
        facts={[
          { title: "End to End RCM", detail: "Coverage" },
          { title: "200+", detail: "Medical specialties supported" },
          { title: "50 States", detail: "Nationwide coverage" },
          { title: "1:1 Dedicated", detail: "Billing manager" },
        ]}
      />

      <section id="all-services" className="py-10 sm:py-12 lg:py-16">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Our services"
              title="Support for the work behind every visit"
              description="Choose a service to see how the day-to-day work can be organized around your practice and its existing processes."
            />
          </ScrollReveal>
          <div className="mt-8 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCatalog.map((service, index) => (
              <ScrollReveal key={service.slug} delay={index * 0.035}>
                <ServiceOverviewCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  href={`/services/${service.slug}`}
                />
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-brand-border/75 bg-brand-background-wash/30 py-10 sm:py-12 lg:py-16">
        <Container>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Find your starting point"
              title="Explore the work that fits your practice"
              description="Select a service to review what it can include and who it may be useful for. Details and responsibilities are confirmed with your team before work starts."
            />
          </ScrollReveal>
          <ScrollReveal className="mt-7 sm:mt-9">
            <ServiceExplorer />
          </ScrollReveal>
        </Container>
      </section>

      <section className="bg-brand-background-wash py-10 text-brand-dark sm:py-12 lg:py-16">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
          <ScrollReveal>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-brand-accent">
              One connected team
            </p>
            <h2 className="text-balance font-display text-4xl font-semibold leading-[1.02] tracking-tight text-brand-dark sm:text-5xl lg:text-6xl">
              Why bring it under one roof?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-brand-slate sm:text-lg">
              Billing, enrollment, and administrative coordination all affect how a practice works. CareSource can help you plan the right combination and keep the handoffs clear.
            </p>
            <Link
              href="/contact"
              className="group mt-7 inline-flex min-h-12 items-center gap-2 rounded-pill bg-brand-accent px-6 text-sm font-bold text-brand-background transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-brand-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-background focus-visible:ring-offset-2 focus-visible:ring-offset-brand-background"
            >
              Talk through your needs
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {serviceCatalog.map((service, index) => {
                const Icon = service.icon;
                return (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="group flex min-h-[5.25rem] items-center gap-3 rounded-2xl border border-brand-background/15 bg-brand-background/5 p-4 transition-[background-color,border-color,transform] hover:-translate-y-0.5 hover:border-brand-accent/55 hover:bg-brand-background/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
                    >
                      <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-brand-accent/15 bg-brand-peach/65 text-brand-accent-ink shadow-sm" aria-hidden="true">
                        <Icon size={19} strokeWidth={1.9} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[0.68rem] font-bold uppercase tracking-[0.14em] text-brand-dark/55">
                          0{index + 1}
                        </span>
                        <span className="mt-0.5 block text-sm font-bold leading-snug text-brand-dark group-hover:text-brand-accent sm:text-base">
                          {service.shortTitle}
                        </span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </ScrollReveal>
        </Container>
      </section>
    </main>
  );
}

