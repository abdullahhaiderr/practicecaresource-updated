import type { Metadata } from "next";
import { HomeHero } from "@/components/home/home-hero";
import { HomeSections } from "@/components/home/home-sections";
import { getSiteUrl } from "@/lib/seo";
import { serviceCatalog } from "@/data/services";


export const metadata: Metadata = {
  title: "CareSource | Medical Billing and Practice Support",
  description:
    "Medical billing, credentialing, AR recovery, and practice support for US healthcare providers, all under one roof.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const siteUrl = getSiteUrl();
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "CareSource",
      url: siteUrl.toString(),
      logo: new URL("/logo.png", siteUrl).toString(),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "CareSource",
      url: siteUrl.toString(),
    },
  ];

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <HomeHero heroImage={serviceCatalog[0].imageSrc} />
      <HomeSections />
    </main>
  );
}

