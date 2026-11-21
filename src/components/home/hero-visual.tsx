"use client";

import Image from "next/image";

type HeroVisualProps = {
  heroImage?: string;
};

export function HeroVisual({ heroImage }: HeroVisualProps) {
  return (
    <figure className="relative mx-auto w-full max-w-[36rem] lg:ml-auto lg:mr-0">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-brand-border bg-brand-background-wash shadow-card sm:rounded-[2rem]">
        {heroImage ? (
          <Image
            src={heroImage}
            alt="Healthcare professional reviewing information in a clinical office"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 48vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center px-8 text-center">
            <p className="max-w-xs font-display text-3xl font-semibold text-brand-dark">
              Practice support, organized around your workflow
            </p>
          </div>
        )}
      </div>
      <figcaption className="mt-3 text-right text-xs font-medium text-brand-slate">
        Medical billing and practice support
      </figcaption>
    </figure>
  );
}
