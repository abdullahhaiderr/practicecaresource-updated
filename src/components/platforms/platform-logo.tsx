import Image from "next/image";
import type { SoftwarePlatform } from "@/data/software-platforms";

type PlatformLogoProps = {
  platform: SoftwarePlatform;
  compact?: boolean;
};

export function PlatformLogo({ platform, compact = false }: PlatformLogoProps) {
  if (!platform.logoSrc) {
    return (
      <span
        className={
          "block max-w-full text-center font-display font-bold leading-tight text-brand-accent-ink " +
          (compact ? "text-base sm:text-lg" : "text-xl sm:text-2xl")
        }
      >
        {platform.name}
      </span>
    );
  }

  if (platform.logoKind === "symbol") {
    return (
      <span className="inline-flex items-center justify-center gap-2.5">
        <Image
          src={platform.logoSrc}
          alt=""
          width={42}
          height={42}
          unoptimized
          className="size-9 shrink-0 object-contain sm:size-10"
        />
        <span className="font-display text-lg font-bold text-brand-dark">{platform.name}</span>
      </span>
    );
  }

  return (
    <Image
      src={platform.logoSrc}
      alt={compact ? platform.name + " logo" : ""}
      width={240}
      height={88}
      unoptimized
      className={
        "h-auto max-h-12 max-w-full object-contain " +
        (compact ? "max-w-[166px]" : "max-w-[190px]")
      }
    />
  );
}
