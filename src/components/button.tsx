"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type SharedProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: ReactNode;
  showArrow?: boolean;
  className?: string;
  ariaLabel?: string;
};

type LinkProps = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children"> & {
    href: string;
  };

type NativeButtonProps = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
    href?: undefined;
  };

export type ButtonProps = LinkProps | NativeButtonProps;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-accent text-brand-dark shadow-sm hover:bg-brand-accent-hover hover:shadow-focus-brand",
  secondary:
    "bg-brand-dark text-brand-background shadow-sm hover:bg-brand-dark-soft",
  ghost:
    "border border-brand-slate/35 bg-transparent text-brand-dark hover:border-brand-accent-ink hover:bg-brand-background-wash/60",
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-10 gap-2 px-4 text-sm",
  md: "min-h-12 gap-2.5 px-5 text-sm sm:text-base",
  lg: "min-h-14 gap-3 px-6 text-base",
};

function buttonClass(
  variant: ButtonVariant,
  size: ButtonSize,
  className: string,
) {
  return [
    "inline-flex items-center justify-center rounded-pill font-bold leading-none",
    "transition-[transform,background-color,color,box-shadow,border-color] duration-200 ease-brand-out",
    "hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-ink focus-visible:ring-offset-2 focus-visible:ring-offset-brand-background",
    variants[variant],
    sizes[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    children,
    showArrow = false,
    className = "",
    ariaLabel,
    ...rest
  } = props;
  const reducedMotion = useReducedMotion();
  const classes = buttonClass(variant, size, className);
  const arrowMotion = reducedMotion ? {} : { whileHover: { x: 3 } };

  if (props.href) {
    const linkProps = rest as Omit<LinkProps, keyof SharedProps>;
    return (
      <Link
        href={props.href}
        className={classes}
        aria-label={ariaLabel}
        {...linkProps}
      >
        <span>{children}</span>
        {showArrow ? (
          <motion.span {...arrowMotion} aria-hidden="true">
            <ArrowRight size={18} strokeWidth={2.2} />
          </motion.span>
        ) : null}
      </Link>
    );
  }

  const buttonProps = rest as Omit<NativeButtonProps, keyof SharedProps>;
  return (
    <motion.button
      type={buttonProps.type ?? "button"}
      className={classes}
      aria-label={ariaLabel}
      {...buttonProps}
      whileTap={reducedMotion ? undefined : { scale: 0.98 }}
    >
      <span>{children}</span>
      {showArrow ? (
        <motion.span {...arrowMotion} aria-hidden="true">
          <ArrowRight size={18} strokeWidth={2.2} />
        </motion.span>
      ) : null}
    </motion.button>
  );
}