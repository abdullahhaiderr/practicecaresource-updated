import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { footerContact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms for using the Practice Care Source website and its public information.",
};

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms of Service"
      description="These terms cover your use of the Practice Care Source public website. They do not replace a separate written agreement for services."
      sections={[
        {
          title: "Using this website",
          content: <p>By accessing this website, you agree to use it lawfully and in a way that does not disrupt the site, interfere with other users, or attempt to gain unauthorized access to systems or information.</p>,
        },
        {
          title: "Website information is general",
          content: <p>Content on this website is provided for general business information. It is not medical, legal, tax, coding, payer, or reimbursement advice, and it is not a guarantee of a particular claim outcome or business result. Practices should confirm requirements with the relevant payer, regulator, and professional advisers.</p>,
        },
        {
          title: "No service agreement is created by browsing",
          content: <p>Viewing the website or sending an inquiry does not create a client, professional, or business associate relationship. Any paid services, scope, fees, responsibilities, timelines, and handling of practice or patient information must be set out in a separate written agreement signed by the parties.</p>,
        },
        {
          title: "Forms and submitted material",
          content: <p>You are responsible for the information you submit through the public forms and must have the right to provide it. Do not submit patient records, protected health information, confidential payer credentials, or other sensitive records through this website. Review submissions are sent to CareSource for review; a review is not published merely because it is submitted.</p>,
        },
        {
          title: "Website content and external links",
          content: <p>Unless stated otherwise, the website’s text, design, and visual materials belong to Practice Care Source or are used with permission. You may view and share links to public pages for personal or business reference, but may not copy or republish substantial portions for commercial use without written permission. Links to third-party websites are provided for convenience; CareSource does not control their content or practices.</p>,
        },
        {
          title: "Availability and changes",
          content: <p>CareSource may update, suspend, or remove website material or features as the site changes. The website is provided as available, without a promise that access will be uninterrupted or that every page will always be error-free. These terms apply to website use and do not limit rights that cannot be limited under applicable law.</p>,
        },
        {
          title: "Contact",
          content: <p>Questions about these terms may be sent to <a className="font-semibold text-brand-accent-ink underline decoration-brand-accent/50 underline-offset-4" href={`mailto:${footerContact.email}`}>{footerContact.email}</a>.</p>,
        },
      ]}
    />
  );
}
