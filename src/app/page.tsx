import type { Metadata } from "next";
import { HomeHero } from "@/components/home/home-hero";
import { HomeSections } from "@/components/home/home-sections";
import { getSiteUrl } from "@/lib/seo";


export const metadata: Metadata = {
  title: "CareSource | The source of care for your practice",
  description:
    "Medical billing, credentialing, AR recovery, and practice support for US healthcare providers, all under one roof.",
};

export const metadata: Metadata = {
  title: "Medical Billing and Practice Support",
  description:
    "Medical billing, credentialing, AR recovery, and practice support for US healthcare providers.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Medical Billing and Practice Support | Practice Care Source",
    description:
      "Medical billing, credentialing, AR recovery, and practice support for US healthcare providers.",
    type: "website",
  },
};

export default function HomePage() {
  const siteUrl = getSiteUrl();
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Practice Care Source",
      url: siteUrl.toString(),
      logo: new URL("/logo.png", siteUrl).toString(),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Practice Care Source",
      url: siteUrl.toString(),
    },
  ];

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <HomeHero />
      <HomeSections />
    </main>
  );
}

