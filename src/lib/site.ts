import { serviceCatalog, type ServiceContent } from "@/data/services";

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

const serviceCardMedia: Partial<
  Record<ServiceContent["slug"], { src: string; alt: string }>
> = {
  "medical-billing": {
    src: "/services/cards/landscape/medical-billing.webp",
    alt: "Medical billing documents reviewed beside a billing dashboard",
  },
  "revenue-cycle-management": {
    src: "/services/cards/landscape/revenue-cycle-management.webp",
    alt: "Healthcare revenue cycle diagram with a rising performance chart",
  },
  "medical-coding": {
    src: "/services/cards/landscape/medical-coding.webp",
    alt: "Medical coding software displayed on a laptop",
  },
  credentialing: {
    src: "/services/cards/landscape/credentialing.webp",
    alt: "Provider credentialing documents and a professional ID badge",
  },
  "virtual-assistant": {
    src: "/services/cards/landscape/virtual-assistant.webp",
    alt: "Medical virtual assistant coordinating a telehealth appointment",
  },
  "ar-recovery": {
    src: "/services/cards/landscape/ar-recovery.webp",
    alt: "Accounts receivable performance chart on a monitor",
  },
  "denial-management": {
    src: "/services/cards/landscape/denial-management.webp",
    alt: "Medical claim document marked for denial review",
  },
  "website-development": {
    src: "/services/cards/landscape/website-development.webp",
    alt: "Healthcare technology displayed across a laptop and smartphone",
  },
};

export const services: ServiceContent[] = serviceCatalog.map((service) => {
  const media = serviceCardMedia[service.slug];
  if (!media) return service;

  return {
    ...service,
    imageSrc: media.src,
    imageAlt: media.alt,
    homeCardImageSrc: media.src,
    homeCardImageAlt: media.alt,
    homeCardImageFit: "cover" as const,
  };
});

export const footerContact = {
  email: "info@practicecaresource.com",
  phoneDisplay: "+92 308 8866774",
  phoneHref: "+923088866774",
  tagline: "The source of care for your practice.",
};

export const footerQuickLinks: SiteLink[] = [
  { label: "About us", href: "/about" },
  { label: "How it works", href: "/how-it-works" },
  { label: "FAQs", href: "/faqs" },
  { label: "HIPAA & Security", href: "/hipaa-security" },
  { label: "Software platforms", href: "/software-platforms" },
];
