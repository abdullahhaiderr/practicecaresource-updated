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
      className="pointer-events-none relative order-last mx-auto h-56 w-full max-w-sm lg:absolute lg:right-0 lg:top-0 lg:order-none lg:h-full lg:w-[51%] lg:max-w-[42rem]"
    >
      <div className="absolute inset-0 overflow-hidden rounded-2xl border border-brand-border bg-brand-background lg:rounded-l-[7rem] lg:rounded-r-none">
        <Image
          src={src}
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 51vw, (min-width: 640px) 400px, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-accent-ink/25 via-transparent to-brand-accent-ink/10" />
      </div>
    </div>
  );
}
