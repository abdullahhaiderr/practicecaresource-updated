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
      className="pointer-events-none relative order-last mx-auto h-48 w-full max-w-sm sm:h-56 lg:absolute lg:inset-y-0 lg:right-[-4rem] lg:order-none lg:mx-0 lg:h-full lg:w-[34%] lg:max-w-[30rem]"
    >
      <div className="absolute inset-x-8 bottom-0 top-0 overflow-hidden rounded-3xl border-[6px] border-white bg-brand-background-wash shadow-card lg:inset-x-0 lg:bottom-auto lg:top-[-20%] lg:h-[105%] lg:rounded-t-none lg:rounded-b-[46%]">
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
