import type { MetadataRoute } from "next";
import { resourceArticles } from "@/data/resources/articles";
import { serviceCatalog } from "@/data/services";
import { getSiteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const staticRoutes = [
    { path: "/", priority: 1, changeFrequency: "weekly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/resources", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  const dynamicRoutes = [
    ...serviceCatalog.map(({ slug }) => ({
      path: `/services/${slug}`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),
    ...resourceArticles.map(({ slug }) => ({
      path: `/resources/${slug}`,
      priority: 0.6,
      changeFrequency: "monthly" as const,
    })),
  ];

  return [...staticRoutes, ...dynamicRoutes].map((route) => ({
    url: new URL(route.path, siteUrl).toString(),
    priority: route.priority,
    changeFrequency: route.changeFrequency,
  }));
}
