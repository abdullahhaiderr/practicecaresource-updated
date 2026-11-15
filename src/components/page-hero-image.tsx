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
      className="pointer-events-none relative order-last mx-auto h-56 w-full max-w-sm lg:absolute lg:right-0 lg:top-[-3rem] lg:order-none lg:h-[29.5rem] lg:w-[36.5%] lg:max-w-[34rem]"
    >
      <div className="absolute inset-0 overflow-hidden rounded-2xl border border-brand-dark bg-brand-background lg:rounded-tl-[50%] lg:rounded-tr-none lg:rounded-br-none lg:rounded-bl-none">
        <Image
          src={src}
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 37vw, (min-width: 640px) 400px, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-accent-ink/10 via-brand-accent-ink/20 to-brand-accent-ink/55" />
      </div>
    </div>
  );
}
