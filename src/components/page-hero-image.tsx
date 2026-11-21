import Image from "next/image";

type PageHeroImageProps = {
  src: string;
  alt: string;
  variant?: string;
};

const compositions: Record<string, { frame: string; accent: string; position: string }> = {
  about: {
    frame: "rounded-[2rem_2rem_2rem_8rem]",
    accent: "bottom-2 left-[-1rem] h-24 w-32",
    position: "lg:right-2 lg:top-[-1.5rem] lg:h-[27rem] lg:w-[38%] lg:max-w-[33rem]",
  },
  services: {
    frame: "rounded-[2rem_8rem_2rem_2rem]",
    accent: "right-[-1rem] top-6 h-28 w-24",
    position: "lg:right-0 lg:top-[-1rem] lg:h-[26rem] lg:w-[39%] lg:max-w-[34rem]",
  },
  resources: {
    frame: "rounded-[2rem_2rem_2rem_2rem]",
    accent: "bottom-[-1rem] right-[-1rem] h-24 w-28",
    position: "lg:right-3 lg:top-0 lg:h-[23rem] lg:w-[38%] lg:max-w-[31rem]",
  },
  contact: {
    frame: "rounded-[8rem_2rem_2rem_2rem]",
    accent: "bottom-[-1rem] left-[-1rem] h-28 w-28",
    position: "lg:right-0 lg:top-[-1rem] lg:h-[26rem] lg:w-[36%] lg:max-w-[31rem]",
  },
  "medical-billing": {
    frame: "rounded-[2rem_2rem_7rem_2rem]",
    accent: "right-[-1rem] bottom-5 h-24 w-24",
    position: "lg:right-0 lg:top-[-1rem] lg:h-[27rem] lg:w-[38%] lg:max-w-[33rem]",
  },
  credentialing: {
    frame: "rounded-[7rem_2rem_2rem_2rem]",
    accent: "left-[-1rem] bottom-4 h-24 w-28",
    position: "lg:right-2 lg:top-[-1.5rem] lg:h-[26rem] lg:w-[37%] lg:max-w-[32rem]",
  },
  "virtual-assistant": {
    frame: "rounded-[2rem_2rem_2rem_7rem]",
    accent: "right-[-1rem] top-4 h-24 w-28",
    position: "lg:right-0 lg:top-[-1rem] lg:h-[25rem] lg:w-[38%] lg:max-w-[33rem]",
  },
  "ar-recovery": {
    frame: "rounded-[2rem_7rem_2rem_2rem]",
    accent: "left-[-1rem] top-8 h-24 w-24",
    position: "lg:right-2 lg:top-[-1rem] lg:h-[27rem] lg:w-[38%] lg:max-w-[33rem]",
  },
  "denial-management": {
    frame: "rounded-[2rem_2rem_2rem_7rem]",
    accent: "right-[-1rem] bottom-4 h-28 w-24",
    position: "lg:right-0 lg:top-[-1.5rem] lg:h-[26rem] lg:w-[37%] lg:max-w-[32rem]",
  },
  "website-development": {
    frame: "rounded-[2rem_2rem_2rem_2rem]",
    accent: "left-[-1rem] bottom-[-1rem] h-24 w-32",
    position: "lg:right-2 lg:top-[-1rem] lg:h-[25rem] lg:w-[39%] lg:max-w-[34rem]",
  },
};

export function PageHeroImage({ src, alt, variant = "services" }: PageHeroImageProps) {
  const composition = compositions[variant] ?? compositions.services;

  return (
    <figure
      className={`pointer-events-none relative order-last mx-auto h-56 w-full max-w-sm lg:absolute ${composition.position}`}
    >
      <span
        aria-hidden="true"
        className={`absolute z-0 rounded-3xl bg-brand-peach/80 ${composition.accent}`}
      />
      <div
        role="img"
        aria-label={alt}
        className={`absolute inset-0 z-10 overflow-hidden border border-brand-border bg-brand-background shadow-card ${composition.frame}`}
      >
        <Image
          src={src}
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 38vw, (min-width: 640px) 400px, 100vw"
          className="object-cover"
        />
      </div>
    </figure>
  );
}
