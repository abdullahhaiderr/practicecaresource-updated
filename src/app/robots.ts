import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();

  const rules = process.env.VERCEL_ENV === "production"
    ? { userAgent: "*", allow: "/", disallow: ["/api/"] }
    : { userAgent: "*", disallow: "/" };

  return {
    rules,
    sitemap: new URL("/sitemap.xml", siteUrl).toString(),
  };
}
