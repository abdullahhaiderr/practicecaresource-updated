import { z } from "zod";

export const reviewSubmissionSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Enter your name.")
    .max(100, "Name must be 100 characters or fewer."),
  email: z
    .string()
    .trim()
    .email("Enter a valid email address.")
    .max(254, "Email address is too long."),
  practiceName: z
    .string()
    .trim()
    .max(160, "Practice name must be 160 characters or fewer.")
    .optional(),
  review: z
    .string()
    .trim()
    .min(20, "Please write at least 20 characters.")
    .max(1200, "Review must be 1,200 characters or fewer."),
  consent: z.boolean().refine((value) => value, {
    message: "Please confirm that this is your own experience.",
  }),
  website: z.string().max(200).optional(),
});

export type ReviewSubmissionValues = z.infer<typeof reviewSubmissionSchema>;
