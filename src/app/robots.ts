import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  return {
    rules: {
      userAgent: "*",
      allow: process.env.VERCEL_ENV === "production" ? "/" : undefined,
      disallow: process.env.VERCEL_ENV === "production" ? ["/api/"] : ["/"],
    },
    sitemap: new URL("/sitemap.xml", siteUrl).toString(),
  };
}
