import type { Metadata } from "next";
import { HomeHero } from "@/components/home/home-hero";
import { HomeSections } from "@/components/home/home-sections";


export const metadata: Metadata = {
  title: "CareSource | The source of care for your practice",
  description:
    "Medical billing, credentialing, AR recovery, and practice support for US healthcare providers, all under one roof.",
};

export default function HomePage() {
  return (
    <main id="main-content">
      <HomeHero />
      <HomeSections />
    </main>
  );
}

