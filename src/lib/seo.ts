const fallbackSiteUrl = "https://practicecaresource-updated.vercel.app";

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  const candidate = configuredUrl || (vercelProductionUrl ? `https://${vercelProductionUrl}` : fallbackSiteUrl);

  return new URL(candidate);
}
