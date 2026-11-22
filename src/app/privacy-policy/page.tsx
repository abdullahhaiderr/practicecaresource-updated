import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { footerContact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Practice Care Source handles information submitted through this website.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="This notice explains what information this website receives, why it is used, and how to contact CareSource with a privacy question. It covers the public website and its inquiry and review forms."
      sections={[
        {
          title: "Information you provide",
          content: <>
            <p>When you send a contact request, the website may receive your name, practice name, work email, phone number, specialty, service of interest, and message. When you submit a testimonial for review, it may receive your name, email address, practice name, and review text.</p>
            <p>Please do not include patient names, medical records, diagnoses, insurance details, or other protected health information in these public website forms. They are not patient portals or secure channels for exchanging patient information.</p>
          </>,
        },
        {
          title: "How information is used",
          content: <p>Information submitted through the forms is used to respond to practice inquiries, discuss requested services, follow up about a submitted review, operate the website, and protect the forms from spam or abuse. The website does not use submitted information for targeted advertising.</p>,
        },
        {
          title: "Service providers and sharing",
          content: <>
            <p>Website requests are hosted by Vercel. Contact and review submissions are sent to CareSource by email through Resend when the email service is configured. Those providers process information to operate and secure their services under their own terms and privacy practices. The inquiry and review information may also be present in the recipient email account and its backups.</p>
            <p>CareSource does not sell the information submitted through these forms or share it for cross-context behavioral advertising. Information may be disclosed when reasonably necessary to protect the website, respond to a lawful request, or establish, exercise, or defend legal claims.</p>
          </>,
        },
        {
          title: "Technical information and retention",
          content: <>
            <p>To rate-limit form submissions, the server temporarily reads a network address supplied with the request. The application keeps this rate-limit entry in memory for up to 10 minutes for contact submissions or 15 minutes for review submissions; the entry is not written to the application database. Hosting and email providers may keep technical logs under their own retention practices.</p>
            <p>Inquiry and review messages are retained in CareSource’s email systems for as long as needed to respond, manage the relationship, and meet applicable recordkeeping requirements. Email and hosting providers may retain backup or operational copies according to their own policies.</p>
          </>,
        },
        {
          title: "Cookies and your choices",
          content: <p>This website currently uses an essential cookie to remember your cookie choice. The site code does not currently load analytics or advertising cookies. You can review the details or reopen the choice panel from the <a className="font-semibold text-brand-accent-ink underline decoration-brand-accent/50 underline-offset-4" href="/cookies-policy">Cookie Policy</a>.</p>,
        },
        {
          title: "Your privacy rights",
          content: <>
            <p>Depending on where you live and which privacy laws apply, you may be able to request access to, correction of, or deletion of personal information, receive a copy of information you provided, or opt out of certain processing. You may submit a request by emailing <a className="font-semibold text-brand-accent-ink underline decoration-brand-accent/50 underline-offset-4" href={`mailto:${footerContact.email}`}>{footerContact.email}</a> with “Privacy Request” in the subject. We may ask for information needed to verify and respond to your request.</p>
            <p>If a privacy law gives you the right to appeal a decision on your request, reply to our response with “Privacy Appeal” in the subject so we can review it.</p>
          </>,
        },
        {
          title: "Healthcare information and separate service relationships",
          content: <p>This website is for general business inquiries and public information. It is not a patient service, medical advice service, or channel for sending protected health information. If CareSource provides services to a healthcare practice involving protected health information, that work must be addressed under the separate service arrangements and safeguards applicable to that engagement. A website notice alone does not authorize the handling or disclosure of protected health information.</p>,
        },
        {
          title: "Children and policy updates",
          content: <>
            <p>This website is intended for healthcare practices and business users and is not directed to children under 13. CareSource does not knowingly request personal information from children through these forms.</p>
            <p>CareSource may update this notice when the website or its information practices change. The date at the top of this page shows when it was last updated.</p>
          </>,
        },
        {
          title: "Contact CareSource",
          content: <p>For privacy questions or requests, email <a className="font-semibold text-brand-accent-ink underline decoration-brand-accent/50 underline-offset-4" href={`mailto:${footerContact.email}`}>{footerContact.email}</a> or write to 1770 Crystal Drive, Arlington, VA 22202, USA.</p>,
        },
      ]}
    />
  );
}
