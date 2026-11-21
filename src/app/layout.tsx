import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { getSiteUrl } from "@/lib/seo";

const displayFont = Inter({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CareSource | Medical Billing and Practice Support",
    template: "%s | CareSource",
  },
  metadataBase: getSiteUrl(),
  description:
    "Medical billing and practice support for US healthcare providers, including credentialing, AR recovery, denial management, virtual assistant services, and website development.",
  applicationName: "CareSource",
  robots: process.env.VERCEL_ENV === "production"
    ? { index: true, follow: true }
    : { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "CareSource",
    title: "CareSource | Medical Billing and Practice Support",
    description:
      "Medical billing and practice support for US healthcare providers, all under one roof.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CareSource | The source of care for your practice",
    description:
      "Medical billing and practice support for US healthcare providers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={[displayFont.variable, bodyFont.variable].join(" ")}>
        <a
          href="#main-content"
          className="sr-only z-[100] rounded-md bg-brand-background px-4 py-3 text-brand-dark focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}