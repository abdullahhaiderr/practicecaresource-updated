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
  phoneDisplay: process.env.NEXT_PUBLIC_CONTACT_PHONE_DISPLAY ?? "",
  phoneHref: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "",
  tagline: "The source of care for your practice.",
};

export const footerQuickLinks = navigationLinks;

