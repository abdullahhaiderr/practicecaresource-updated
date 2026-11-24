export type ResourceCategory =
  | "Billing"
  | "Credentialing"
  | "Denials and AR"
  | "Practice Growth";

export type ResourceArticle = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: ResourceCategory;
  publishedAt: string;
  coverImage: string;
  coverAlt: string;
  introduction: string;
  takeaways: string[];
  sections: {
    id: string;
    title: string;
    paragraphs: string[];
    bullets?: string[];
    callout?: { title: string; body: string };
  }[];
  closingNote: string;
};

export const resourceCategories: ResourceCategory[] = [
  "Billing",
  "Credentialing",
  "Denials and AR",
  "Practice Growth",
];

export const resourceArticles: ResourceArticle[] = [
  {
    slug: "what-a-medical-billing-company-does",
    title: "What a medical billing company actually does for a practice",
    description:
      "A practical overview of the administrative work a medical billing partner may handle, where practice decisions remain essential, and how to set a clear scope.",
    excerpt:
      "Medical billing covers a connected set of administrative tasks from charge review through payment posting and follow-up. Here is what the work can include and how a practice can stay involved.",
    category: "Billing",
    publishedAt: "2026-11-12",
    coverImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=85",
    coverAlt: "Healthcare professional reviewing information at a desk",
    introduction:
      "Medical billing helps move a documented visit through claim preparation, submission, payment posting, and follow-up. A billing company may take on some of these tasks, depending on the agreement. The practice supplies visit and insurance information, reviews questions that require its judgment, and decides which workflows fit its operations.",
    takeaways: [
      "Billing includes several connected tasks and handoffs.",
      "Agree on responsibilities, approvals, access, and reporting first.",
      "Clinical and practice decisions stay with the provider team.",
    ],
    sections: [
      {
        id: "billing-workflow",
        title: "Billing is a series of connected steps",
        paragraphs: [
          "The billing cycle often begins after a visit, when information documented by the practice is reviewed for completeness and prepared for the next administrative step. Depending on the scope, a billing team may check demographic and coverage details supplied by the practice, organize charge information, prepare a claim, and submit it through the agreed billing system or clearinghouse. A clean handoff matters because missing or inconsistent information can pause the work and require clarification.",
          "After submission, a team may review acknowledgements, post payments from remittance information, and track claims returned for correction. Each task depends on the practice's workflow. The billing company should explain what it handles, what the practice reviews, and how questions are routed back to the provider team.",
        ],
        bullets: [
          "Charge and encounter information organized for billing review",
          "Claim preparation and submission through an agreed workflow",
          "Payment posting, returned-item tracking, and follow-up notes",
        ],
      },
      {
        id: "practice-information",
        title: "Accurate source information starts with the practice",
        paragraphs: [
          "A billing partner works from the source information the practice makes available. That may include encounter documentation, provider details, coverage information, and internal instructions. The billing team can flag missing items or inconsistencies, but it cannot safely replace the provider's documentation or make clinical decisions on the practice's behalf. Clear responsibility for corrections helps prevent assumptions from becoming part of the billing record.",
          "Before sharing access, practices should discuss which systems will be used, what information is necessary for the agreed work, and how accounts will be created and removed. Staff should understand who can answer questions, who approves corrections, and how sensitive records are handled. Use the practice's established privacy and security procedures when evaluating any service provider, and make sure the arrangement is documented for the people who will use it day to day.",
        ],
        callout: {
          title: "Keep clinical decisions with the care team",
          body: "Administrative billing support can organize information and identify questions. Providers and authorized practice staff remain responsible for clinical documentation and decisions that require their judgment.",
        },
      },
      {
        id: "denials-and-follow-up",
        title: "Follow-up helps keep open work visible",
        paragraphs: [
          "When a payer requests more information, returns a claim, or does not process it as expected, someone needs to identify the next administrative action. A billing company may sort returned items, record the reason shown, monitor response dates, and route requests for practice input. The specific task depends on the service agreement and the systems available to both teams. A useful process distinguishes items the billing staff can handle from those needing documentation, approval, or a decision by the practice.",
          "Payment posting and account review can also help a practice understand which balances remain open and why. The work is most useful when notes are consistent and the practice can see the status of unresolved items. Reports should be explained in plain language, including the period covered, the definitions used, and any known gaps. A report is a view of recorded activity; it is not, by itself, a promise about future payments or results.",
        ],
      },
      {
        id: "scope-and-handoffs",
        title: "Set the scope and handoffs before starting",
        paragraphs: [
          "The phrase medical billing can mean different things across service providers. One arrangement may cover claim submission and posting, while another may include eligibility checks, aging review, or denial follow-up. A practice should list the work it wants help with and ask the provider to state what is included, what is excluded, and how additional tasks will be handled. It is also helpful to identify expected response channels and the people responsible for routine questions.",
          "Document how records are transferred, exceptions are raised, and work is approved. If system access is needed, decide who requests it, which permissions fit the task, and how access changes when responsibilities change. Clear steps make problems easier to identify and resolve.",
        ],
        bullets: [
          "Tasks and exclusions written in plain language",
          "Named contacts for routine questions and escalations",
          "Review steps, reporting cadence, and access changes agreed in advance",
        ],
      },
      {
        id: "choosing-a-partner",
        title: "Evaluate the working relationship, not just the task list",
        paragraphs: [
          "A useful conversation with a potential billing company covers how work is assigned, how questions are recorded, and what the practice can see. Ask for a sample of the proposed reporting format with any real patient information removed. Clarify how often the teams will meet or exchange updates, how exceptions are prioritized, and which decisions are returned to the practice. The answers help determine whether the proposed process matches the practice's staffing and communication needs.",
          "Practices can also discuss transition planning. If a relationship ends, the agreement should explain how open work, notes, and system access are handled. Ask what information must be exported, who will receive it, and how access will be closed. These are ordinary operational questions and are easier to settle before a transition is urgent. A provider should be willing to define its process without making unsupported promises about collections, timing, or payer decisions.",
        ],
      },
    ],
    closingNote: "rules vary by payer and state; verify current requirements",
  },
  {
    slug: "why-claims-get-denied",
    title: "Why claims get denied and how practices can reduce avoidable rework",
    description:
      "A general guide to common claim denial causes, careful review, and practical ways to make denial follow-up easier to coordinate.",
    excerpt:
      "Denials can have different causes, and the next step depends on the reason and the information available. A consistent review process can help a practice understand recurring issues without assuming every denial is preventable.",
    category: "Denials and AR",
    publishedAt: "2026-10-27",
    coverImage:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=85",
    coverAlt: "Medical professional reviewing healthcare information",
    introduction:
      "A claim denial is a payer response indicating that a claim or service was not paid as submitted. The reason may relate to eligibility, missing information, coding, authorization, filing rules, or payer review. Because denials differ, begin with the specific notice and available claim history. No general process can guarantee a reversal.",
    takeaways: [
      "Start with the payer's stated reason and claim history.",
      "Use clear categories and practice-approved deadlines.",
      "Route clinical and approval questions to authorized staff.",
    ],
    sections: [
      {
        id: "different-causes",
        title: "Denials can start in different parts of the workflow",
        paragraphs: [
          "Some denials point to missing or inconsistent information. Examples include coverage details, provider identifiers, claim fields, or supporting documentation. Other responses may relate to authorization, filing requirements, a coding edit, a benefit limitation, or the way the service was reviewed. These are general categories, not a complete payer rulebook; confirm the reason from the relevant notice and current plan information.",
          "A denial can also reflect a mismatch between what the payer received and the records or workflow the practice expected. That makes a careful timeline useful: when was the service documented, when was the claim prepared, what information was available, and what response came back? Reviewing that sequence can help the team identify whether the next action is a correction, a request for information, a practice review, or a question for the payer.",
        ],
        bullets: [
          "Coverage or demographic information that needs checking",
          "Missing details, documentation, or authorization information",
          "A payer edit or processing response that needs interpretation",
        ],
      },
      {
        id: "read-the-response",
        title: "Read the response before choosing the next step",
        paragraphs: [
          "The payer's explanation of benefits, electronic remittance, or other response may include codes and explanatory text. Staff should use the source response and applicable current guidance rather than relying only on a short internal label. If the reason is unclear, record the question and identify who is authorized to contact the payer or review supporting information. A correction, reconsideration, or appeal may have different requirements, and not every response is handled the same way.",
          "Record the relevant claim reference, response date, stated issue, and work already completed in the system your practice uses. Keep supporting documents attached or referenced according to the practice's process. If the next step needs clinical judgment, corrected provider documentation, or formal approval, route it to the appropriate person. Do not change clinical content simply to fit a billing workflow; documentation changes should follow the practice's normal review and recordkeeping rules.",
        ],
        callout: {
          title: "Treat every denial as a specific work item",
          body: "A general denial category can help with organization, but the actual payer response and claim details determine what the practice should review next.",
        },
      },
      {
        id: "organize-denials",
        title: "Build a manageable denial review queue",
        paragraphs: [
          "A shared queue can make open work easier to see. Practices may group items by the reason shown, response date, service area, or the person responsible for the next step. The labels should be simple and consistent enough that more than one staff member can use them. Include a status, last action, next action, and due date when relevant. The queue should distinguish waiting for payer response from waiting for information or approval inside the practice.",
          "Priorities should be set by the practice based on its policies, available information, and applicable deadlines. A vendor may help organize records and follow up on agreed items, but responsibility for choosing clinical, contractual, or operational next steps should remain clear. If the queue grows beyond the team's capacity, review what is in scope and what can realistically be addressed rather than allowing unresolved items to become invisible.",
        ],
        bullets: [
          "Reason shown in the payer response",
          "Last completed action and the next owner",
          "Relevant date, requested information, and review status",
        ],
      },
      {
        id: "look-for-patterns",
        title: "Look for patterns carefully",
        paragraphs: [
          "Once several items have been recorded consistently, the practice can review whether similar questions appear more than once. A cluster may suggest an opportunity to revisit a data-entry step, documentation handoff, eligibility check, or internal instruction. It is a signal to investigate, not proof of a single cause. The sample may be incomplete, categories may be used inconsistently, and payer responses can change over time.",
          "When reviewing a pattern, look at representative source records and confirm the denominator and time period being discussed. Separate counts from rates, and state how the records were selected. If the information will guide a workflow change, discuss it with the people who perform the work and the staff authorized to approve changes. A measured review is more useful than assuming that a broad category explains every claim in it.",
        ],
      },
      {
        id: "prevent-rework",
        title: "Reduce avoidable rework through repeatable checks",
        paragraphs: [
          "Some process checks can help teams catch missing information before submission, such as confirming that required fields are present, using a practice-approved checklist, and routing exceptions for review. The checklist should match the practice's services and the current payer instructions it relies on. It should be reviewed when systems, forms, or requirements change. A checklist cannot replace provider judgment or guarantee acceptance, but it can make a chosen process easier to follow consistently.",
          "Clear roles also matter. Staff should know who verifies a detail, who approves a correction, and where to record the decision. If an outside billing partner participates, define its access and review responsibilities in writing. Periodic discussion of returned claims can identify where an instruction is unclear or an information handoff needs adjustment. Keep changes documented so new team members do not have to rely on informal memory.",
        ],
      },
    ],
    closingNote: "rules vary by payer and state; verify current requirements",
  },
  {
    slug: "credentialing-and-payer-enrollment",
    title: "Credentialing and payer enrollment: what to expect",
    description:
      "A plain-language overview of credentialing and enrollment tasks, the information practices may need to organize, and why payer timelines differ.",
    excerpt:
      "Credentialing and enrollment involve provider information, application materials, review, and follow-up. The steps vary, so a clear checklist and realistic expectations help teams coordinate the work.",
    category: "Credentialing",
    publishedAt: "2026-10-08",
    coverImage:
      "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1400&q=85",
    coverAlt: "Clinician working at a desk in a healthcare office",
    introduction:
      "Credentialing and payer enrollment are related administrative processes that can involve reviewing provider qualifications, collecting practice information, preparing applications, and following up on requests. The terminology and sequence differ among payers and circumstances. A practice should confirm the current requirements that apply to each provider and plan before submitting information. This article describes common coordination tasks, not a guaranteed approval path or a payer-specific checklist.",
    takeaways: [
      "Begin with a provider-specific checklist and confirm current payer requirements.",
      "Keep practice review and approval points visible before an application is submitted.",
      "Track requests, dates, and next steps because review timelines vary.",
    ],
    sections: [
      {
        id: "what-process-means",
        title: "Understand the work being requested",
        paragraphs: [
          "Credentialing commonly refers to collecting and reviewing information about a provider's education, training, licenses, work history, and professional standing. Enrollment or participation processes can involve a separate application to a health plan so the provider or practice can be associated with that plan. People sometimes use these terms interchangeably, but the work and sequence depend on the specific organization and application. Ask the payer or its current application materials what is required for the situation at hand.",
          "A request may involve a new provider, a group or location, a demographic update, a revalidation, or a change in how services are billed. Each type can require different details. Before collecting documents, identify the exact provider, entity, location, plan, and purpose being addressed. This helps avoid mixing information across records and gives the practice a way to see which items belong to which application.",
        ],
        callout: {
          title: "Start from the current application instructions",
          body: "Requirements and processes can change. Use the payer's current materials and confirm questions directly through an appropriate channel before relying on an old checklist.",
        },
      },
      {
        id: "prepare-information",
        title: "Prepare information in an organized way",
        paragraphs: [
          "Applications may ask for identifying details, practice information, professional history, licenses, supporting records, or authorized contacts. The exact items vary. A practice can maintain an internal checklist that records the source, status, and last review date for each requested item. Store documents using the practice's approved tools and access rules, and avoid sending sensitive information through an unapproved email or form.",
          "Assign a person to verify that names, addresses, dates, and entity details match the source records. If the application asks about a subject that requires provider confirmation, route it to that provider or another authorized reviewer. Administrative staff can organize information and point out blanks, but they should not guess at answers. Keep a record of which version was reviewed and who approved its submission under the practice's normal documentation process.",
        ],
        bullets: [
          "Provider and practice details checked against approved source records",
          "Supporting documents organized for the specific application",
          "Questions and missing items assigned to an authorized reviewer",
        ],
      },
      {
        id: "submission-and-follow-up",
        title: "Plan for submission and follow-up",
        paragraphs: [
          "Once an application is ready, the practice should follow the payer's current instructions for submission and retain a record of what was sent and when. The submission method may vary. Confirm who is authorized to send materials, how confirmation is recorded, and where follow-up requests will be received. If a payer asks for additional information, log the request, the date received, the requested item, and who will prepare or approve the response.",
          "Status tracking helps keep an application from disappearing between teams. A simple tracker may include a reference number, plan name, provider, submission date, last response, next action, and an owner. Avoid marking a file complete based only on a verbal update; record the source of the status and any remaining tasks. The practice should decide how often to review open applications and what information needs to be escalated to leadership.",
        ],
      },
      {
        id: "timing-expectations",
        title: "Set realistic timing expectations",
        paragraphs: [
          "Review time can depend on the payer, application type, completeness of information, volume of requests, and whether additional questions arise. External review schedules can change and are not controlled by the practice or an administrative support provider. Ask the payer how to check the status and whether it publishes current processing guidance. Avoid treating an estimated timeframe as a promise or scheduling business changes around an unconfirmed date.",
          "A support team can help organize the work, note when follow-up is due, and surface missing information. It cannot guarantee how quickly a payer will review an application or what decision will be made. If a date has practical consequences for the practice, confirm the applicable requirements with the payer and any qualified advisor the practice relies on. Record what is known, what is pending, and when the next status check is planned.",
        ],
      },
      {
        id: "maintain-provider-records",
        title: "Keep provider records current",
        paragraphs: [
          "Credentialing and enrollment work does not end with an initial submission. Provider details, licenses, practice locations, ownership, and contact information may change. The practice should decide how changes are reported, who checks for renewal or revalidation requests, and where current documents are stored. A calendar or task tracker can help make recurring dates visible, but someone must own reviewing the reminders and confirming the current instructions.",
          "A record maintenance process should include a way to verify that information remains accurate and to remove old versions from active use. When providers leave or roles change, update internal records and follow the relevant payer and practice procedures. Keep responsibilities clear when tasks are shared with an external company so the practice knows who monitors requests and who approves updated details.",
        ],
      },
    ],
    closingNote: "rules vary by payer and state; verify current requirements",
  },
  {
    slug: "accounts-receivable-follow-up",
    title: "Accounts receivable follow-up: why aged claims matter",
    description:
      "A practical introduction to aged accounts receivable, organizing follow-up, and communicating the next action without promising a payment outcome.",
    excerpt:
      "An aged claim is an open account that has remained unresolved over time. A consistent review process helps teams understand the history, identify the next step, and keep practice decisions in view.",
    category: "Denials and AR",
    publishedAt: "2026-09-16",
    coverImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=85",
    coverAlt: "Office team reviewing documents and account information",
    introduction:
      "Accounts receivable, often shortened to AR, refers to amounts recorded as owed to a practice but not yet resolved through payment, adjustment, or another documented outcome. An aged claim is one that remains open as time passes. Age alone does not explain why the account is unresolved or what action is appropriate. A useful review looks at the claim history, available payer responses, practice records, and any applicable filing or follow-up instructions.",
    takeaways: [
      "Use claim history and source responses to understand why an account remains open.",
      "Prioritize work using practice-approved criteria and clearly assigned next steps.",
      "Reporting should explain its date range, definitions, and known limitations.",
    ],
    sections: [
      {
        id: "what-aging-shows",
        title: "Aging shows time, not the full story",
        paragraphs: [
          "An aging report groups balances by how long they have been open, based on the report's definitions and starting date. It can help a team see which items may need review, but it does not tell the whole story. A balance could be awaiting payer processing, missing information, a practice decision, patient billing, or another action. A report may also include timing differences or adjustments that need to be understood before someone interprets the totals.",
          "Before using an aging report, confirm the period it covers, the date used to calculate age, which account types are included, and how credits or adjustments are represented. Make sure staff know what each category means. Two reports cannot be compared reliably if their filters or definitions differ. A clear explanation prevents a summary view from being mistaken for a confirmed payment forecast.",
        ],
        callout: {
          title: "Age is a review signal, not a payment promise",
          body: "A claim's age can help identify work to examine. It does not determine whether the claim is payable or what response a payer will provide.",
        },
      },
      {
        id: "review-account-history",
        title: "Review the account history before taking action",
        paragraphs: [
          "For an open balance, gather the relevant claim reference, date of service, submission and response history, payment details, and notes already recorded. Check whether the claim was acknowledged, returned, processed, or subject to a request. If a previous contact or correction was made, read the note and confirm that the response was recorded. This context helps prevent duplicate work and gives the next person a clearer starting point.",
          "The appropriate next action depends on what the source information shows. A claim may need administrative follow-up, missing information from the practice, review of a payer response, or no further action because the balance was adjusted or resolved. If the explanation is unclear, record the question and send it to someone authorized to contact the payer or review the practice record. Avoid making assumptions based only on the age bucket or amount.",
        ],
        bullets: [
          "What was submitted and when",
          "Which payer response or payment was received",
          "What remains open and who owns the next step",
        ],
      },
      {
        id: "document-follow-up",
        title: "Document each follow-up clearly",
        paragraphs: [
          "A useful note captures what was reviewed, who was contacted through the approved process, what response was received, and what should happen next. Keep the note factual and concise. Reference the relevant source response or record rather than relying on shorthand that only one person understands. If no response was available, record the date and the plan for checking again according to the practice's procedure.",
          "Consistent documentation helps the next staff member pick up the task and reduces repeated calls or searches. It also makes it easier for a manager to distinguish work that is waiting on a payer from work that needs practice input. When outside support participates, agree on where notes live, who can access them, and how open work will be returned to the practice if the scope changes.",
        ],
      },
      {
        id: "use-reports-wisely",
        title: "Use AR reports as a management tool",
        paragraphs: [
          "A periodic summary can show the number or value of open accounts, the aging categories used, common recorded statuses, and items awaiting a next step. Decide which details are useful to practice leaders and how often they should receive an update. A report should include its date range and definitions. If some records are missing, excluded, or still being reviewed, state that limitation so readers do not treat a partial view as a complete account of operations.",
          "When looking for recurring issues, compare like with like and review examples behind the summary. A pattern may justify checking an upstream process, but a report alone does not establish the cause. Discuss findings with staff who handle the work, confirm the underlying notes, and decide whether an adjustment is appropriate. Track any change so the practice can understand what was tried and whether the workflow remains useful.",
        ],
      },
      {
        id: "define-outside-support",
        title: "Define outside support and handback rules",
        paragraphs: [
          "If an outside team helps with AR, list the account groups and tasks that are in scope. Clarify which payer contacts, corrections, appeals, or practice decisions are included, and what requires approval. Agree on how accounts will be assigned, how notes are shared, and how unresolved questions are escalated. The provider should be able to explain how it records activity and what information the practice will receive in regular updates.",
          "Also plan for accounts that cannot move forward because records or approvals are missing. Set a handback process that identifies the blocker and the person who should respond. When a relationship ends, the practice should know how open items and notes will be returned and how access will be closed. Clear boundaries keep responsibility visible and help the practice retain oversight of its receivables workflow.",
        ],
      },
    ],
    closingNote: "rules vary by payer and state; verify current requirements",
  },
];

export function formatPublishedDate(value: string) {
  if (!/^\\d{4}-\\d{2}-\\d{2}$/.test(value)) return value;

  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function getResourceArticle(slug: string) {
  return resourceArticles.find((article) => article.slug === slug);
}

export function getArticleWordCount(article: ResourceArticle) {
  const content = [
    article.introduction,
    ...article.takeaways,
    ...article.sections.flatMap((section) => [
      section.title,
      ...section.paragraphs,
      ...(section.bullets ?? []),
      ...(section.callout ? [section.callout.title, section.callout.body] : []),
    ]),
    article.closingNote,
  ].join(" ");
  return content.trim().split(/\s+/).length;
}

export function getReadingMinutes(article: ResourceArticle) {
  return Math.max(1, Math.ceil(getArticleWordCount(article) / 220));
}

