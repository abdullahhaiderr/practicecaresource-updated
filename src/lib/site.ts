import {
  BadgeCheck,
  ClipboardCheck,
  Globe2,
  Headset,
  Laptop,
  RefreshCw,
  Stethoscope,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type SiteLink = {
  label: string;
  href: string;
};

export type ServiceItem = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: LucideIcon;
  imageSrc: string;
  imageAlt: string;
};

export const navigationLinks: SiteLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export const services: ServiceItem[] = [
  {
    slug: "medical-billing",
    title: "Medical Billing",
    shortTitle: "Medical Billing",
    description:
      "Support for claim submission, payment posting, and day-to-day billing workflows.",
    icon: ClipboardCheck,
    imageSrc:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Healthcare professional reviewing information at a clinic",
  },
  {
    slug: "credentialing",
    title: "Credentialing",
    shortTitle: "Credentialing",
    description:
      "Application and follow-up support for provider enrollment with health plans.",
    icon: BadgeCheck,
    imageSrc:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Clinician working at a desk in a healthcare office",
  },
  {
    slug: "virtual-assistant",
    title: "Virtual Assistant Services",
    shortTitle: "Virtual Assistant",
    description:
      "Remote administrative help for scheduling, calls, and routine practice tasks.",
    icon: Headset,
    imageSrc:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Team member coordinating work in a professional office",
  },
  {
    slug: "ar-recovery",
    title: "AR Recovery",
    shortTitle: "AR Recovery",
    description:
      "Structured follow-up on outstanding claims and aged accounts receivable.",
    icon: RefreshCw,
    imageSrc:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Office team reviewing documents and account information",
  },
  {
    slug: "denial-management",
    title: "Denial Management",
    shortTitle: "Denial Management",
    description:
      "Denial tracking and appeal workflow support to help teams address claim issues.",
    icon: ClipboardCheck,
    imageSrc:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Medical professional reviewing records in a clinical setting",
  },
  {
    slug: "website-development",
    title: "Website Development",
    shortTitle: "Website Development",
    description:
      "Website planning and development for healthcare practices and their patients.",
    icon: Laptop,
    imageSrc:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Bright modern workspace with a laptop and desk",
  },
  {
    slug: "online-presence",
    title: "Online Presence",
    shortTitle: "Online Presence",
    description:
      "Practical support for a clear and consistent practice presence online.",
    icon: Globe2,
    imageSrc:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Laptop displaying a website design on a desk",
  },
];

export const footerContact = {
  email: "irtiza.5.ih@gmail.com",
  phoneDisplay: "+92 308 8866774",
  phoneHref: "+923088866774",
  tagline: "The source of care for your practice.",
};

export const serviceNavLinks: SiteLink[] = services.map((service) => ({
  label: service.shortTitle,
  href: "/services#" + service.slug,
}));

export const footerQuickLinks = navigationLinks;