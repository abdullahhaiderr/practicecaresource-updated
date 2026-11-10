import type { Metadata } from "next";
import { Barlow_Condensed, Caveat, Manrope } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

const displayFont = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const scriptFont = Caveat({
  subsets: ["latin"],
  variable: "--font-script",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CareSource | The source of care for your practice",
    template: "%s | CareSource",
  },
  description:
    "Medical billing and practice support for US healthcare providers, including credentialing, AR recovery, denial management, virtual assistant services, and online presence.",
  applicationName: "CareSource",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "CareSource",
    title: "CareSource | The source of care for your practice",
    description:
      "Medical billing and practice support for US healthcare providers, all under one roof.",
  },
  twitter: {
    card: "summary",
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
      <body className={[displayFont.variable, bodyFont.variable, scriptFont.variable].join(" ")}>
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