import Image from "next/image";

type PageHeroImageProps = {
  src: string;
  alt: string;
};

export function PageHeroImage({ src, alt }: PageHeroImageProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className="pointer-events-none relative order-last mx-auto h-56 w-full max-w-sm lg:absolute lg:right-0 lg:top-1/2 lg:order-none lg:h-[25rem] lg:w-[40%] lg:max-w-[34rem] lg:-translate-y-1/2"
    >
      <div className="absolute inset-x-8 inset-y-0 overflow-hidden rounded-3xl border-4 border-brand-accent-ink bg-brand-background-wash shadow-card lg:inset-x-0 lg:rounded-t-[3rem] lg:rounded-b-[46%] lg:border-[6px]">
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
