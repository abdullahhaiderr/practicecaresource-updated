import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { getSiteUrl } from "@/lib/seo";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

const fontVariables = {
  "--font-display": '"Barlow Condensed"',
  "--font-body": '"Manrope"',
  "--font-script": '"Caveat"',
} as CSSProperties;

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  robots: {
    index: process.env.VERCEL_ENV === "production",
    follow: process.env.VERCEL_ENV === "production",
  },
  title: {
    default: "Practice Care Source | The source of care for your practice",
    template: "%s | Practice Care Source",
  },
  description:
    "Medical billing and practice support for US healthcare providers, including credentialing, AR recovery, denial management, virtual assistant services, and website development.",
  applicationName: "Practice Care Source",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Practice Care Source",
    title: "Practice Care Source | The source of care for your practice",
    description:
      "Medical billing and practice support for US healthcare providers, all under one roof.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Practice Care Source | The source of care for your practice",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=Caveat:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={fontVariables}>
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