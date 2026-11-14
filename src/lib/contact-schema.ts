import { z } from "zod";

export const specialtyOptions = [
  "Primary Care",
  "Family Medicine",
  "Internal Medicine",
  "Cardiology",
  "Dermatology",
  "Pediatrics",
  "Orthopedics",
  "Behavioral Health",
  "Other",
] as const;

export const serviceOptions = [
  "Medical Billing",
  "Credentialing",
  "Virtual Assistant (VA) Services",
  "AR Recovery",
  "Denial Management",
  "Website Development",
] as const;

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Enter your full name.")
    .max(100, "Name must be 100 characters or fewer."),
  practiceName: z
    .string()
    .trim()
    .min(2, "Enter your practice name.")
    .max(120, "Practice name must be 120 characters or fewer."),
  email: z
    .string()
    .trim()
    .email("Enter a valid email address.")
    .max(254, "Email address is too long."),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a phone number with at least 7 characters.")
    .max(30, "Phone number must be 30 characters or fewer.")
    .regex(/^[+\d().\-\s]+$/, "Use numbers and common phone symbols only."),
  specialty: z
    .string()
    .min(1, "Choose your specialty.")
    .refine((value) => specialtyOptions.includes(value as (typeof specialtyOptions)[number]), {
      message: "Choose a specialty from the list.",
    }),
  serviceInterestedIn: z
    .string()
    .min(1, "Choose a service.")
    .refine((value) => serviceOptions.includes(value as (typeof serviceOptions)[number]), {
      message: "Choose a service from the list.",
    }),
  message: z
    .string()
    .trim()
    .min(10, "Add a little more detail so we can understand your request.")
    .max(2000, "Message must be 2,000 characters or fewer."),
  consent: z.boolean().optional(),
  website: z.string().max(200).optional(),
});


export const contactFormSimpleSchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name.").max(100, "Name must be 100 characters or fewer."),
  email: z.string().trim().email("Enter a valid email address.").max(254, "Email address is too long."),
  phone: z.string().trim().min(7, "Enter a phone number with at least 7 characters.").max(30, "Phone number must be 30 characters or fewer.").regex(/^[+\\d().\\-\\s]+$/, "Use numbers and common phone symbols only."),
  message: z.string().trim().min(10, "Add a little more detail so we can understand your request.").max(2000, "Message must be 2,000 characters or fewer."),
  website: z.string().max(200).optional(),
});

export const contactFormCompactSchema = contactFormSchema.extend({
  consent: z.boolean(),
});

export const contactFormWithConsentSchema = contactFormSchema.extend({
  consent: z.boolean().refine((value) => value, {
    message: "Please confirm that CareSource may contact you about this request.",
  }),
});

export type ContactFormValues = z.infer<typeof contactFormWithConsentSchema>;
