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
      className="pointer-events-none relative order-last mx-auto h-56 w-full max-w-sm lg:absolute lg:right-[10%] lg:top-[-3rem] lg:order-none lg:h-[28.5rem] lg:w-[21%] lg:max-w-64"
    >
      <div className="absolute inset-x-8 inset-y-0 overflow-hidden rounded-xl lg:inset-x-0 lg:rounded-t-full lg:rounded-b-none">
        <Image
          src={src}
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 21vw, (min-width: 640px) 400px, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-accent-ink/25 via-transparent to-brand-accent/10" />
      </div>
    </div>
  );
}
