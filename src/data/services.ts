import {
  BadgeCheck,
  BookType,
  ChartColumnIncreasing,
  ClipboardCheck,
  Headset,
  Laptop,
  RefreshCw,
  Stethoscope,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceStep = {
  title: string;
  description: string;
};

export type ServiceContent = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: LucideIcon;
  imageSrc: string;
  imageAlt: string;
  homeCardImageSrc: string;
  homeCardImageAlt: string;
  overview: string;
  whatsIncluded: string[];
  howWeWork: ServiceStep[];
  whoItsFor: string;
  whyItMatters: string[];
  faqs: ServiceFaq[];
  relatedServices: string[];
};

export const serviceCatalog: ServiceContent[] = [
  {
    slug: "medical-billing",
    title: "Medical Billing",
    shortTitle: "Medical Billing",
    description:
      "Support for claim submission, payment posting, and day-to-day billing workflows.",
    icon: ClipboardCheck,
    imageSrc: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Healthcare professional reviewing information at a clinic",
    homeCardImageSrc: "/services/cards/01-medical-billing.png",
    homeCardImageAlt: "Practice team reviewing a claim form beside billing reports",
    overview:
      "We help keep the billing work moving from charge review through claim follow-up and payment posting. Work is organized around the practice's documented workflows, billing system, and review preferences.",
    whatsIncluded: [
      "Review of charge and encounter details provided by the practice",
      "Coding and billing checks against practice-approved information",
      "Claim preparation and submission through the agreed workflow",
      "Monitoring of claim acknowledgements and returned items",
      "Posting of payer and patient payments from remittance details",
      "Clear notes on open items that need practice input or follow-up",
    ],
    howWeWork: [
      {
        title: "Understand your workflow",
        description:
          "We learn how your team documents visits, reviews charges, and works inside its billing system.",
      },
      {
        title: "Review the work queue",
        description:
          "We organize the information available and flag missing details for your team's review.",
      },
      {
        title: "Submit and post",
        description:
          "Claims and payments are handled through the process agreed with your practice.",
      },
      {
        title: "Share follow-up items",
        description:
          "We keep notes on returned claims, open balances, and questions that need a decision.",
      },
    ],
    whoItsFor:
      "Independent providers, clinics, and practice teams that want structured help with recurring billing tasks and claim follow-up.",
    whyItMatters: [
      "A consistent process makes it easier to see where a claim stands.",
      "Timely notes can help your team address missing information before it gets overlooked.",
      "Payment details and open questions stay easier to review across the billing cycle.",
    ],
    faqs: [
      {
        question: "Can you work with our current billing system?",
        answer:
          "We can discuss your current tools and workflow first, then confirm what access and coordination would be needed before work begins.",
      },
      {
        question: "Do you need our team to review claims?",
        answer:
          "That depends on your existing process. We agree with you on which information we may prepare and which items require practice review.",
      },
      {
        question: "Can billing support be combined with denial or AR work?",
        answer:
          "Yes. Billing, denial management, and AR recovery can be discussed together so the handoffs fit your practice's workflow.",
      },
    ],
    relatedServices: ["denial-management", "ar-recovery"],
  },
  {
    slug: "revenue-cycle-management",
    title: "Revenue Cycle Management",
    shortTitle: "Revenue Cycle Management",
    description:
      "Coordinated support for the administrative workflows that move from intake through billing and follow-up.",
    icon: ChartColumnIncreasing,
    imageSrc: "/services/cards/02-revenue-cycle-management.png",
    imageAlt: "Healthcare revenue cycle diagram and performance charts on a monitor",
    homeCardImageSrc: "/services/cards/02-revenue-cycle-management.png",
    homeCardImageAlt: "Healthcare revenue cycle diagram and performance charts on a monitor",
    overview:
      "Revenue cycle management connects many administrative steps across a practice. We help organize agreed workflows, clarify handoffs, and keep follow-up visible so your team can review the work and make the decisions that belong to the practice.",
    whatsIncluded: [
      "Review of the practice's existing administrative workflow and priorities",
      "Coordination of agreed billing, payment, and follow-up work queues",
      "Identification of missing information that needs practice review",
      "Organization of open items and next steps across the agreed scope",
      "Status notes for claims, payments, denials, and outstanding accounts",
      "Periodic workflow review with the practice team",
    ],
    howWeWork: [
      {
        title: "Map the workflow",
        description:
          "We discuss the steps your team uses and identify where responsibilities and handoffs should be clear.",
      },
      {
        title: "Agree on the scope",
        description:
          "Your practice confirms which administrative tasks are included and which decisions remain with your team.",
      },
      {
        title: "Coordinate the work",
        description:
          "We follow the approved processes and keep open tasks, requests, and responses organized.",
      },
      {
        title: "Review and refine",
        description:
          "We share status and discuss practical adjustments with your team as needs change.",
      },
    ],
    whoItsFor:
      "Practices that want clearer coordination across billing, payment posting, denials, and accounts receivable follow-up.",
    whyItMatters: [
      "A shared workflow can make it easier to see where administrative work stands.",
      "Clear handoffs help teams know which items need a practice decision.",
      "Organized status notes give the team useful context for routine reviews.",
    ],
    faqs: [
      {
        question: "Does revenue cycle management include every billing task?",
        answer:
          "The scope is agreed with your practice. We review your workflow first and confirm which administrative tasks and handoffs are included.",
      },
      {
        question: "Can you work with our current systems?",
        answer:
          "We can discuss your existing tools and processes, then confirm what coordination and access would be needed before work begins.",
      },
      {
        question: "Can we start with only part of the revenue cycle?",
        answer:
          "Yes. Your practice can discuss a defined service mix and expand or adjust the scope by agreement.",
      },
    ],
    relatedServices: ["medical-billing", "ar-recovery", "denial-management"],
  },
  {
    slug: "medical-coding",
    title: "Medical Coding",
    shortTitle: "Medical Coding",
    description:
      "Coding workflow support guided by the clinical documentation and review process approved by your practice.",
    icon: BookType,
    imageSrc: "/services/cards/03-medical-coding.png",
    imageAlt: "Medical code reference book and coding work on a laptop",
    homeCardImageSrc: "/services/cards/03-medical-coding.png",
    homeCardImageAlt: "Medical code reference book and coding work on a laptop",
    overview:
      "We help organize coding-related administrative work around the documentation and review process your practice approves. Your clinicians and authorized staff retain responsibility for clinical documentation, code validation, and final decisions.",
    whatsIncluded: [
      "Organization of coding work queues using practice-defined priorities",
      "Review of documentation supplied for the agreed coding workflow",
      "Identification of missing or unclear information for practice review",
      "Coding support aligned with the references and process selected by your team",
      "Clear notes on items that need clarification or approval",
      "Coordination of coding handoffs with the billing workflow when agreed",
    ],
    howWeWork: [
      {
        title: "Understand your process",
        description:
          "We learn how your team receives documentation, reviews coding, and routes questions.",
      },
      {
        title: "Organize the work",
        description:
          "Items are handled within the agreed queue and practice-approved workflow.",
      },
      {
        title: "Flag questions for review",
        description:
          "Missing or unclear details are routed to the appropriate practice team member.",
      },
      {
        title: "Coordinate next steps",
        description:
          "Approved coding information can be handed off to billing using the process your team selects.",
      },
    ],
    whoItsFor:
      "Provider groups and practice teams that want organized administrative support around coding queues and billing handoffs.",
    whyItMatters: [
      "A consistent review path helps teams manage coding questions with clear ownership.",
      "Documented handoffs keep unresolved items visible to the right reviewer.",
      "Practice-approved workflows keep coding work aligned with your team's process.",
    ],
    faqs: [
      {
        question: "Who makes the final coding decisions?",
        answer:
          "Your practice retains responsibility for clinical documentation, code validation, and final decisions. We work within the review process your team approves.",
      },
      {
        question: "What if documentation needs clarification?",
        answer:
          "We note what needs attention and route the question to the appropriate practice team member for review.",
      },
      {
        question: "Can coding support connect with billing?",
        answer:
          "Yes. The handoff can be coordinated with billing when the tasks and review responsibilities are agreed with your practice.",
      },
    ],
    relatedServices: ["medical-billing", "revenue-cycle-management", "denial-management"],
  },
  {
    slug: "credentialing",
    title: "Credentialing & Enrollment",
    shortTitle: "Credentialing",
    description:
      "Application and follow-up support for provider enrollment with health plans.",
    icon: BadgeCheck,
    imageSrc: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Clinician working at a desk in a healthcare office",
    homeCardImageSrc: "/services/cards/07-credentialing.png",
    homeCardImageAlt: "Provider credential documents and a framed professional certificate",
    overview:
      "We help organize provider information, prepare enrollment materials, and track application follow-up. Your practice remains involved in reviewing and approving information submitted on its behalf.",
    whatsIncluded: [
      "A checklist of provider and practice information needed for applications",
      "Organization of credentialing documents supplied by the practice",
      "Application preparation using provider-approved details",
      "Submission coordination through the process agreed with your team",
      "Follow-up notes and requests for additional information",
      "A simple view of application status and upcoming renewal dates",
    ],
    howWeWork: [
      {
        title: "Map the requirements",
        description:
          "We review the practice's requested enrollment work and identify the information needed to proceed.",
      },
      {
        title: "Organize provider details",
        description:
          "We gather and arrange the documents and profile information your team provides.",
      },
      {
        title: "Prepare and coordinate",
        description:
          "Applications are prepared for practice review and handled through your approved submission process.",
      },
      {
        title: "Track follow-up",
        description:
          "We record status updates and route requests for missing information to the right person.",
      },
    ],
    whoItsFor:
      "Providers and practice administrators coordinating new enrollments, provider updates, or recurring credentialing tasks.",
    whyItMatters: [
      "A central checklist helps keep documents and outstanding requests visible.",
      "Written status notes make it easier for the practice to see what is waiting on whom.",
      "A renewal calendar gives your team a place to review upcoming credentialing dates.",
    ],
    faqs: [
      {
        question: "Will you submit applications without our review?",
        answer:
          "No submission process is assumed. We agree with your practice on the review and approval steps before any application is sent.",
      },
      {
        question: "What documents should we prepare?",
        answer:
          "Requirements depend on the provider and application. We start with a tailored checklist after learning about the work you need support with.",
      },
      {
        question: "Can you help track renewals and profile updates?",
        answer:
          "We can organize renewal dates and provider updates as part of an agreed credentialing workflow.",
      },
    ],
    relatedServices: ["medical-billing", "virtual-assistant"],
  },
  {
    slug: "virtual-assistant",
    title: "Virtual Assistant Services",
    shortTitle: "Virtual Assistant",
    description:
      "Remote administrative help for scheduling, calls, and routine practice tasks.",
    icon: Headset,
    imageSrc: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Team member coordinating work in a professional office",
    homeCardImageSrc: "/services/cards/08-virtual-assistant.png",
    homeCardImageAlt: "Virtual assistant coordinating a telehealth appointment at a computer",
    overview:
      "A virtual assistant can take on agreed administrative tasks so your in-office team has a clearer routine for day-to-day coordination. Responsibilities and escalation points are set with your practice before the work begins.",
    whatsIncluded: [
      "Appointment scheduling and calendar updates",
      "Routine call handling and message routing using practice instructions",
      "Appointment reminders and administrative follow-up",
      "Eligibility verification using the practice's approved workflow",
      "Organization of routine requests and task lists",
      "Escalation of questions that need a clinical or practice decision",
    ],
    howWeWork: [
      {
        title: "Choose the tasks",
        description:
          "We define the administrative work, systems, and working hours that fit your practice.",
      },
      {
        title: "Set instructions",
        description:
          "Your team shares scheduling rules, message routes, and situations that should be escalated.",
      },
      {
        title: "Coordinate daily work",
        description:
          "The assistant handles the agreed queue and keeps task notes in the format your team prefers.",
      },
      {
        title: "Review and adjust",
        description:
          "You can review handoffs and refine instructions as your practice's needs change.",
      },
    ],
    whoItsFor:
      "Practices that want additional help with non-clinical administrative work such as scheduling, routine calls, and eligibility checks.",
    whyItMatters: [
      "Clearly assigned administrative tasks can reduce avoidable handoffs for the in-office team.",
      "Written instructions help routine work follow the process your practice has chosen.",
      "Defined escalation paths keep decisions with the appropriate member of your team.",
    ],
    faqs: [
      {
        question: "Which tasks can a virtual assistant handle?",
        answer:
          "Tasks can include scheduling, routine calls, reminders, and eligibility verification when those responsibilities fit your workflow.",
      },
      {
        question: "Can the assistant follow our existing scripts?",
        answer:
          "Yes. We can start from practice-provided instructions and agree how updates or exceptions should be handled.",
      },
      {
        question: "Does the assistant make clinical decisions?",
        answer:
          "No. Clinical questions and other decisions outside the agreed administrative scope are routed to your practice team.",
      },
    ],
    relatedServices: ["credentialing", "ar-recovery"],
  },
  {
    slug: "ar-recovery",
    title: "AR Recovery",
    shortTitle: "AR Recovery",
    description:
      "Structured follow-up on outstanding claims and aged accounts receivable.",
    icon: RefreshCw,
    imageSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Office team reviewing documents and account information",
    homeCardImageSrc: "/services/cards/05-ar-recovery.png",
    homeCardImageAlt: "Accounts receivable aging chart and organized claims on a desk",
    overview:
      "We help practices organize outstanding account work, review available claim history, and document follow-up. The goal is a clear queue of next steps, questions, and items that need the practice's input.",
    whatsIncluded: [
      "Review and grouping of outstanding claims by practice-defined priority",
      "Claim status checks through the tools available to your team",
      "Follow-up on payer requests and unresolved claim questions",
      "Identification of missing information that may need practice review",
      "Notes on contact attempts and responses received",
      "A summary of open items and recommended next actions for review",
    ],
    howWeWork: [
      {
        title: "Review the open queue",
        description:
          "We learn which accounts are in scope and how your team wants them prioritized.",
      },
      {
        title: "Check claim history",
        description:
          "Available claim notes and status information are reviewed to understand the next step.",
      },
      {
        title: "Follow up and document",
        description:
          "We record responses, requests, and actions using the practice's agreed workflow.",
      },
      {
        title: "Return decisions to you",
        description:
          "Items requiring corrected details, approval, or a practice decision are clearly routed back.",
      },
    ],
    whoItsFor:
      "Practice managers and billing teams with outstanding claim work that needs organized review and follow-up.",
    whyItMatters: [
      "A prioritized queue gives the team a shared view of what needs attention.",
      "Documented follow-up helps preserve context when an account changes hands.",
      "Clear escalation notes help the practice focus on items that need its decision.",
    ],
    faqs: [
      {
        question: "Do you work only on older balances?",
        answer:
          "The age and scope of accounts are agreed with your practice. We can start with a defined group or workflow for review.",
      },
      {
        question: "What happens when a claim needs corrected information?",
        answer:
          "We document what is missing and route it to your team for review, correction, or approval according to your process.",
      },
      {
        question: "Can AR work be coordinated with billing support?",
        answer:
          "Yes. The two services can share agreed documentation and escalation steps to make follow-up easier to track.",
      },
    ],
    relatedServices: ["medical-billing", "denial-management"],
  },
  {
    slug: "denial-management",
    title: "Denial Management",
    shortTitle: "Denial Management",
    description:
      "Denial tracking and appeal workflow support to help teams address claim issues.",
    icon: ClipboardCheck,
    imageSrc: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Medical professional reviewing information in a clinical setting",
    homeCardImageSrc: "/services/cards/04-denial-management.png",
    homeCardImageAlt: "Claim forms marked for review by a practice billing team",
    overview:
      "We help teams record denial reasons, organize supporting information, and move appeal work through a defined process. Practice review remains part of decisions about corrections, documentation, and appeal content.",
    whatsIncluded: [
      "Logging of denial details and claim references",
      "Grouping of denial reasons for easier review",
      "Checks for supporting information identified in your workflow",
      "Preparation of appeal materials from practice-approved content",
      "Tracking of follow-up dates and responses",
      "Notes on patterns or questions to discuss with the billing team",
    ],
    howWeWork: [
      {
        title: "Capture the denial",
        description:
          "We record the reason and available claim information in the format your practice uses.",
      },
      {
        title: "Find the next action",
        description:
          "The denial is reviewed against your workflow to identify information or decisions still needed.",
      },
      {
        title: "Prepare for review",
        description:
          "Supporting materials can be organized for your team's review before an appeal is submitted.",
      },
      {
        title: "Track the response",
        description:
          "We document the follow-up status and share recurring questions with the appropriate team member.",
      },
    ],
    whoItsFor:
      "Billing teams and practice managers who want a consistent way to review denials, coordinate appeals, and record follow-up.",
    whyItMatters: [
      "Consistent categories can make recurring issues easier for a team to discuss.",
      "A documented appeal workflow helps keep supporting information and next actions together.",
      "Practice teams can use recorded patterns to review upstream processes and training needs.",
    ],
    faqs: [
      {
        question: "Do you guarantee that denials will be overturned?",
        answer:
          "No outcome can be guaranteed. We provide organization and workflow support; decisions remain subject to the claim details and payer review.",
      },
      {
        question: "Will you write appeal letters?",
        answer:
          "We can help organize and prepare appeal materials using information approved by your practice and its established process.",
      },
      {
        question: "Can you help identify recurring denial reasons?",
        answer:
          "We can group and summarize recorded denial details so your team can review recurring questions and possible process changes.",
      },
    ],
    relatedServices: ["medical-billing", "ar-recovery"],
  },
  {
    slug: "website-development",
    title: "Website Development",
    shortTitle: "Website Development",
    description:
      "Website planning and development for healthcare practices and their patients.",
    icon: Laptop,
    imageSrc: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Bright modern workspace with a laptop and desk",
    homeCardImageSrc: "/services/cards/06-website-development.png",
    homeCardImageAlt: "Digital healthcare workflow displayed across laptop and phone screens",
    overview:
      "We plan and build clear, responsive websites that help a practice explain its services, location, and next steps. Content and features are shaped around the information your team approves and the needs of your audience.",
    whatsIncluded: [
      "A discovery conversation about your practice and website goals",
      "Page structure for services, providers, location, and contact details",
      "Responsive page layouts for phone, tablet, and desktop screens",
      "Content organization using practice-approved information",
      "Contact and navigation patterns that are clear and easy to use",
      "A handoff review for updates and future maintenance needs",
    ],
    howWeWork: [
      {
        title: "Set the scope",
        description:
          "We agree on the pages, content, and practical goals for the first release.",
      },
      {
        title: "Plan the content",
        description:
          "We organize the information your practice wants patients and visitors to find.",
      },
      {
        title: "Design and build",
        description:
          "The site is developed with responsive layouts and straightforward navigation.",
      },
      {
        title: "Review and hand off",
        description:
          "Your team reviews the content and functionality before launch and receives an agreed handoff.",
      },
    ],
    whoItsFor:
      "New or established practices that need a clear website or want to improve how existing information is organized online.",
    whyItMatters: [
      "A clear site helps visitors understand the services and contact options your practice provides.",
      "Responsive layouts make information easier to use across common screen sizes.",
      "A thoughtful structure gives your team a practical foundation for future updates.",
    ],
    faqs: [
      {
        question: "Can you update an existing practice website?",
        answer:
          "We can review the current site and discuss whether a focused update or a new build is the better fit for your goals.",
      },
      {
        question: "Who provides the website content?",
        answer:
          "Your practice reviews and approves business, provider, and service information. We can help organize it into clear page content.",
      },
      {
        question: "Can you add online booking or patient forms?",
        answer:
          "We can discuss the tools and requirements involved. Any patient-facing integration needs a separate review of the practice's chosen systems and privacy requirements.",
      },
    ],
    relatedServices: ["virtual-assistant"],
  },

];

export function getServiceBySlug(slug: string) {
  return serviceCatalog.find((service) => service.slug === slug);
}

export const serviceNavLinks = serviceCatalog.map((service) => ({
  label: service.shortTitle,
  href: "/services/" + service.slug,
  slug: service.slug,
  icon: service.icon,
}));

