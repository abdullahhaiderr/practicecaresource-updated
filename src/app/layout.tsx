import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { getSiteUrl } from "@/lib/seo";

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
    title: "CareSource | Medical Billing and Practice Support",
    description:
      "Medical billing and practice support for US healthcare providers.",
    images: ["/opengraph-image"],
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
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