import { serviceCatalog } from "@/data/services";

export { serviceNavLinks } from "@/data/services";
export type { ServiceContent as ServiceItem } from "@/data/services";

export type SiteLink = {
  label: string;
  href: string;
};

export const navigationLinks: SiteLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export const services = serviceCatalog;

export const footerContact = {
  email: "info@practicecaresource.com",
  phoneDisplay: "+92 308 8866774",
  phoneHref: "+923088866774",
  tagline: "The source of care for your practice.",
};

export const footerQuickLinks = navigationLinks;
