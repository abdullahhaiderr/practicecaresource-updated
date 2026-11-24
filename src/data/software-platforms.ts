export type SoftwarePlatform = {
  id: string;
  name: string;
  category: string;
  description: string;
  website: string;
  logoSrc?: string;
  logoKind?: "wordmark" | "symbol";
};

export const softwarePlatforms: SoftwarePlatform[] = [
  {
    id: "athenahealth",
    name: "athenahealth",
    category: "EHR, practice management & RCM",
    description: "Cloud-based clinical, practice management, and revenue cycle workflows.",
    website: "https://www.athenahealth.com/",
    logoSrc: "https://cdn.brandfetch.io/idKku0o9zf/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667575709738",
  },
  {
    id: "eclinicalworks",
    name: "eClinicalWorks",
    category: "EHR / EMR & practice management",
    description: "Electronic health records and practice operations software.",
    website: "https://www.eclinicalworks.com/",
    logoSrc: "https://cdn.brandfetch.io/idfo-ApodL/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667944506021",
  },
  {
    id: "advancedmd",
    name: "AdvancedMD",
    category: "EHR, practice management & RCM",
    description: "Clinical records, scheduling, billing, and practice management tools.",
    website: "https://www.advancedmd.com/",
    logoSrc: "https://cdn.brandfetch.io/idlQxgFwqT/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667575647028",
  },
  {
    id: "tebra",
    name: "Tebra (formerly Kareo)",
    category: "EHR, billing & practice growth",
    description: "A connected platform for independent practices, including EHR and billing workflows.",
    website: "https://www.tebra.com/",
    logoSrc: "https://cdn.brandfetch.io/id8PiSgYBt/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1670909447035",
  },
  {
    id: "nextgen",
    name: "NextGen Healthcare",
    category: "EHR / EMR, practice management & RCM",
    description: "Ambulatory EHR, practice management, and revenue cycle solutions.",
    website: "https://www.nextgen.com/",
  },
  {
    id: "epic",
    name: "Epic",
    category: "Enterprise EHR",
    description: "Enterprise clinical information and electronic health record systems.",
    website: "https://www.epic.com/",
    logoSrc: "https://cdn.brandfetch.io/idF9MJ6KLH/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1671087048737",
  },
  {
    id: "oracle-health",
    name: "Oracle Health (Cerner)",
    category: "Enterprise EHR & clinical systems",
    description: "Enterprise clinical applications and electronic health record platforms.",
    website: "https://www.oracle.com/health/",
  },
  {
    id: "curemd",
    name: "CureMD",
    category: "EHR / EMR, practice management & RCM",
    description: "Healthcare information systems for clinical and administrative workflows.",
    website: "https://www.curemd.com/",
    logoSrc: "https://cdn.brandfetch.io/idhXFbtYSh/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1761731821542",
  },
  {
    id: "carecloud",
    name: "CareCloud",
    category: "EHR, practice management & RCM",
    description: "Cloud-based clinical, practice management, and revenue cycle solutions.",
    website: "https://carecloud.com/",
    logoSrc: "https://cdn.brandfetch.io/idbLPGY096/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1789796568467",
  },
  {
    id: "collaboratemd",
    name: "CollaborateMD",
    category: "Practice management & medical billing",
    description: "Practice management and medical billing software for healthcare practices.",
    website: "https://www.collaboratemd.com/",
  },
  {
    id: "office-ally",
    name: "Office Ally",
    category: "EHR, practice software & clearinghouse",
    description: "Practice software and clearinghouse services for healthcare administration.",
    website: "https://www.officeally.com/",
  },
  {
    id: "simplepractice",
    name: "SimplePractice",
    category: "Behavioral health EHR & practice management",
    description: "Practice management and clinical documentation tools for health professionals.",
    website: "https://www.simplepractice.com/",
    logoSrc: "https://cdn.brandfetch.io/idkm7ZSLuI/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1668086760281",
  },
  {
    id: "therapynotes",
    name: "TherapyNotes",
    category: "Behavioral health EHR & practice management",
    description: "Clinical documentation, scheduling, billing, and practice management for behavioral health.",
    website: "https://www.therapynotes.com/",
  },
  {
    id: "webpt",
    name: "WebPT",
    category: "Rehabilitation therapy EMR",
    description: "Documentation, billing, and practice workflows for rehabilitation therapy providers.",
    website: "https://www.webpt.com/",
    logoSrc: "https://cdn.brandfetch.io/idtyM7S7Zm/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1668002746956",
  },
  {
    id: "medent",
    name: "MEDENT",
    category: "EHR / EMR & practice management",
    description: "Integrated electronic medical records, practice management, and patient engagement.",
    website: "https://www.medent.com/",
  },
  {
    id: "citrix",
    name: "Citrix",
    category: "Workspace & remote access",
    description: "Secure access to virtual desktops and applications used in healthcare environments.",
    website: "https://www.citrix.com/",
    logoSrc: "https://cdn.simpleicons.org/citrix",
    logoKind: "symbol",
  },
];

export const softwarePlatformCount = softwarePlatforms.length;
