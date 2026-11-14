"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, CheckCircle2, LoaderCircle, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/button";
import {
  contactFormCompactSchema,
  contactFormWithConsentSchema,
  serviceOptions,
  specialtyOptions,
  type ContactFormValues,
} from "@/lib/contact-schema";

type SubmitStatus =
  | { type: "success"; message: string }
  | { type: "error"; message: string }
  | null;

const fieldClass =
  "mt-2 min-h-12 w-full rounded-xl border border-brand-border bg-brand-background px-4 py-3 text-brand-dark placeholder:text-brand-slate/65 transition-colors focus:border-brand-accent-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent/25";
const labelClass = "block text-sm font-bold text-brand-dark";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;

  return (
    <p id={id} className="mt-2 text-sm font-semibold text-brand-accent-ink">
      {message}
    </p>
  );
}

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: compact
      ? zodResolver(contactFormCompactSchema)
      : zodResolver(contactFormWithConsentSchema),
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      practiceName: "",
      email: "",
      phone: "",
      specialty: "",
      serviceInterestedIn: "",
      message: "",
      consent: false,
      website: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = (await response.json().catch(() => ({}))) as {
        message?: string;
        errors?: Record<string, string>;
      };

      if (!response.ok) {
        for (const [field, message] of Object.entries(result.errors ?? {})) {
          if (field in values && message) {
            setError(field as keyof ContactFormValues, {
              type: "server",
              message,
            });
          }
        }

        setSubmitStatus({
          type: "error",
          message:
            result.message ??
            "We couldn't send your message right now. Please try again or email us directly.",
        });
        return;
      }

      setSubmitStatus({
        type: "success",
        message:
          result.message ??
          "Thanks for reaching out. Your message has been sent to CareSource.",
      });
      reset();
    } catch {
      setSubmitStatus({
        type: "error",
        message:
          "We couldn't send your message right now. Please check your connection or email us directly.",
      });
    }
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className={compact ? "space-y-4" : "space-y-6"}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="fullName">
            Full name <span aria-hidden="true">*</span>
          </label>
          <input
            id="fullName"
            autoComplete="name"
            className={fieldClass}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            {...register("fullName")}
          />
          <FieldError id="fullName-error" message={errors.fullName?.message} />
        </div>

        <div>
          <label className={labelClass} htmlFor="practiceName">
            Practice name <span aria-hidden="true">*</span>
          </label>
          <input
            id="practiceName"
            autoComplete="organization"
            className={fieldClass}
            aria-invalid={Boolean(errors.practiceName)}
            aria-describedby={errors.practiceName ? "practiceName-error" : undefined}
            {...register("practiceName")}
          />
          <FieldError
            id="practiceName-error"
            message={errors.practiceName?.message}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="email">
            Work email <span aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className={fieldClass}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          <FieldError id="email-error" message={errors.email?.message} />
        </div>

        <div>
          <label className={labelClass} htmlFor="phone">
            Phone number <span aria-hidden="true">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClass}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone")}
          />
          <FieldError id="phone-error" message={errors.phone?.message} />
        </div>

        <div>
          <label className={labelClass} htmlFor="specialty">
            Specialty <span aria-hidden="true">*</span>
          </label>
          <select
            id="specialty"
            className={fieldClass}
            aria-invalid={Boolean(errors.specialty)}
            aria-describedby={errors.specialty ? "specialty-error" : undefined}
            {...register("specialty")}
          >
            <option value="">Choose your specialty</option>
            {specialtyOptions.map((specialty) => (
              <option key={specialty} value={specialty}>
                {specialty}
              </option>
            ))}
          </select>
          <FieldError id="specialty-error" message={errors.specialty?.message} />
        </div>

        <div>
          <label className={labelClass} htmlFor="serviceInterestedIn">
            Service of interest <span aria-hidden="true">*</span>
          </label>
          <select
            id="serviceInterestedIn"
            className={fieldClass}
            aria-invalid={Boolean(errors.serviceInterestedIn)}
            aria-describedby={
              errors.serviceInterestedIn ? "serviceInterestedIn-error" : undefined
            }
            {...register("serviceInterestedIn")}
          >
            <option value="">Choose a service</option>
            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          <FieldError
            id="serviceInterestedIn-error"
            message={errors.serviceInterestedIn?.message}
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="message">
          {compact ? "Message" : "How can we support your practice?"} <span aria-hidden="true">*</span>
        </label>
        {compact ? (
          <input
            id="message"
            type="text"
            maxLength={2000}
            placeholder="Tell us how we can help."
            className={fieldClass}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            {...register("message")}
          />
        ) : (
          <textarea
            id="message"
            rows={5}
            maxLength={2000}
            placeholder="Tell us about your practice goals or the support you are exploring."
            className={`${fieldClass} min-h-36 resize-y`}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : "message-hint"}
            {...register("message")}
          />
        )}
        {!compact ? (
          <p id="message-hint" className="mt-2 text-sm leading-relaxed text-brand-slate">
            Share general business information only. Please leave out patient details.
          </p>
        ) : null}
        <FieldError id="message-error" message={errors.message?.message} />
      </div>

      {!compact ? (
        <div className="flex items-start gap-3">
          <input
            id="consent"
            type="checkbox"
            className="mt-1 size-5 shrink-0 rounded border-brand-border accent-brand-accent-ink focus-visible:ring-2 focus-visible:ring-brand-accent-ink"
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            {...register("consent")}
          />
          <div>
            <label htmlFor="consent" className="text-sm leading-relaxed text-brand-dark">
              I agree that CareSource may contact me about this request. <span aria-hidden="true">*</span>
            </label>
            <FieldError id="consent-error" message={errors.consent?.message} />
          </div>
        </div>
      ) : null}

      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>

      {submitStatus ? (
        <div
          role={submitStatus.type === "success" ? "status" : "alert"}
          aria-live="polite"
          className="flex items-start gap-3 rounded-2xl border border-brand-border bg-brand-background-wash/45 p-4 text-sm leading-relaxed text-brand-dark"
        >
          {submitStatus.type === "success" ? (
            <CheckCircle2
              size={20}
              className="mt-0.5 shrink-0 text-brand-accent-ink"
              aria-hidden="true"
            />
          ) : (
            <AlertCircle
              size={20}
              className="mt-0.5 shrink-0 text-brand-accent-ink"
              aria-hidden="true"
            />
          )}
          <p>{submitStatus.message}</p>
        </div>
      ) : null}

      <div className={compact ? "" : "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"}>
        {!compact ? (
          <p className="text-xs leading-relaxed text-brand-slate">
            Fields marked * are required. Your message is sent to CareSource by email.
          </p>
        ) : null}
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className={compact ? "w-full" : "w-full shrink-0 sm:w-auto"}
        >
          {isSubmitting ? (
            <>
              <LoaderCircle className="animate-spin motion-reduce:animate-none" size={18} aria-hidden="true" />
              Sending…
            </>
          ) : (
            <span className="inline-flex items-center gap-2 whitespace-nowrap">
              Send message
              <Send size={17} aria-hidden="true" />
            </span>
          )}
        </Button>
      </div>
    </form>
  );
}
