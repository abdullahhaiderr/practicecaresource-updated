import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { footerContact } from "@/lib/site";

export const metadata: Metadata = {
  title: "HIPAA & Security",
  description:
    "Learn how Practice Care Source distinguishes public website inquiries from separately arranged services involving protected health information.",
};

export default function HIPAASecurityPage() {
  return (
    <LegalPage
      title="HIPAA & Security"
      description="Important information about this public website, protected health information, and the separate arrangements that may apply to services for healthcare practices."
      lastUpdated="November 24, 2026"
      sections={[
        {
          title: "This website is for business inquiries",
          content: <>
            <p>The Practice Care Source website provides public business information and a way to contact the team about services. It is not a patient portal, medical service, or approved channel for sending protected health information (PHI).</p>
            <p>Please do not submit patient names, dates of birth, medical records, diagnoses, insurance details, or other patient-specific information through the contact form, review form, or general website email links.</p>
          </>,
        },
        {
          title: "HIPAA and certification",
          content: <>
            <p>Practice Care Source does not claim to be “HIPAA certified.” The U.S. Department of Health and Human Services (HHS) explains that covered entities are not required to certify compliance with the Security Rule and that HHS does not endorse or recognize private organizations’ Security Rule certifications.</p>
            <p>For the relevant HHS guidance, see <a className="font-semibold text-brand-accent-ink underline decoration-brand-accent/50 underline-offset-4" href="https://www.hhs.gov/hipaa/for-professionals/faq/are-we-required-to-certify-our-organizations-compliance-with-the-standards/index.html">HHS guidance on Security Rule certification</a> and the <a className="font-semibold text-brand-accent-ink underline decoration-brand-accent/50 underline-offset-4" href="https://www.hhs.gov/hipaa/for-professionals/faq/business-associates/index.html">HHS business associate FAQs</a>.</p>
          </>,
        },
        {
          title: "Separate arrangements for work involving PHI",
          content: <>
            <p>If a service engagement involves access to or handling of PHI, the parties must address the scope, responsibilities, permitted activities, and applicable safeguards through the written arrangements required for that engagement before the information is shared.</p>
            <p>This public website notice and its inquiry forms do not authorize the use or disclosure of PHI and do not replace a separate written service agreement or other documentation that may be required.</p>
          </>,
        },
        {
          title: "Website hosting and form submissions",
          content: <>
            <p>Website requests are hosted by Vercel. Contact and review submissions may be sent to CareSource by email through Resend when the email service is configured. These website forms are intended for general business inquiries and must not be used to send patient information.</p>
            <p>For more detail about the information received through public forms and the service providers involved, read the <a className="font-semibold text-brand-accent-ink underline decoration-brand-accent/50 underline-offset-4" href="/privacy-policy">Privacy Policy</a>.</p>
          </>,
        },
        {
          title: "Questions",
          content: <p>For questions about this page or a potential service arrangement, contact <a className="font-semibold text-brand-accent-ink underline decoration-brand-accent/50 underline-offset-4" href={"mailto:" + footerContact.email}>{footerContact.email}</a>. Do not include patient details or PHI in your message.</p>,
        },
      ]}
    />
  );
}
