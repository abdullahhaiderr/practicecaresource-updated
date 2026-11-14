import Image from "next/image";

type PageHeroImageProps = {
  src: string;
  alt: string;
  compact?: boolean;
};

export function PageHeroImage({ src, alt, compact = false }: PageHeroImageProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`pointer-events-none relative order-last mx-auto w-full max-w-sm lg:absolute lg:inset-y-0 lg:order-none lg:mx-0 lg:h-full ${compact ? "h-48 sm:h-56 lg:right-[5%] lg:w-[27%] lg:max-w-[22rem]" : "h-56 sm:h-64 lg:right-[5%] lg:w-[27%] lg:max-w-[22rem]"}`}
    >
      <div className={`absolute inset-x-8 bottom-0 top-0 overflow-hidden rounded-3xl border-[6px] border-white bg-brand-background-wash shadow-card lg:inset-x-0 lg:bottom-auto lg:rounded-t-none lg:rounded-b-[46%] ${compact ? "lg:top-[-20%] lg:h-[105%]" : "lg:top-[-42%] lg:h-[142%]"}`}>
        <Image
          src={src}
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 40vw, (min-width: 640px) 400px, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-accent-ink/25 via-transparent to-brand-accent/10" />
      </div>
    </div>
  );
}
