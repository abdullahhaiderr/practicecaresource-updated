import type { LucideIcon } from "lucide-react";

type ServiceSpotlightProps = {
  title: string;
  Icon: LucideIcon;
};

const lightPositions = [25, 50, 75];

export function ServiceSpotlight({ title, Icon }: ServiceSpotlightProps) {
  return (
    <div
      role="img"
      aria-label={`${title} service spotlight`}
      className="pointer-events-none relative order-last mx-auto h-56 w-full max-w-sm overflow-hidden rounded-2xl border border-brand-border bg-brand-background-wash lg:absolute lg:right-0 lg:top-0 lg:order-none lg:h-full lg:w-[51%] lg:max-w-[42rem] lg:rounded-l-[7rem] lg:rounded-r-none"
    >
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-gradient-to-br from-brand-background via-brand-background-wash to-brand-peach/45">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_90%,rgba(6,83,199,0.12),transparent_65%)]" />
        <div className="absolute inset-x-0 top-0 h-[18%] border-b border-brand-border/80 bg-gradient-to-b from-white via-brand-background to-brand-background-wash/90" />

        {lightPositions.map((position, index) => (
          <div key={position}>
            <div
              className="service-spotlight-beam absolute top-[12%] z-[1] h-[74%] w-[37%]"
              style={{ left: `${position}%`, animationDelay: `${420 + index * 140}ms` }}
            />
            <div
              className="service-spotlight-fixture absolute top-[4%] z-10 flex h-8 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-brand-border bg-white/95 shadow-sm sm:h-9 sm:w-14"
              style={{ left: `${position}%` }}
            >
              <span className="service-spotlight-bulb h-2 w-7 rounded-full bg-brand-accent/25 sm:w-8" />
            </div>
          </div>
        ))}

        <div className="absolute bottom-[8%] left-[8%] h-px w-[84%] bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent" />
      </div>

      <div className="service-spotlight-card absolute left-1/2 top-[55%] z-20 w-[min(82%,23rem)] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-brand-border/90 bg-white/95 p-4 shadow-[0_18px_48px_rgba(7,48,116,0.14)] backdrop-blur-sm sm:p-5">
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-brand-accent/10 bg-brand-peach/70 text-brand-accent-ink sm:size-14" aria-hidden="true">
            <Icon size={25} strokeWidth={1.8} />
          </span>
          <div className="min-w-0">
            <p className="text-[0.62rem] font-extrabold uppercase tracking-[0.16em] text-brand-accent-ink sm:text-[0.68rem]">Service spotlight</p>
            <p className="mt-1 text-pretty font-display text-xl font-semibold leading-tight text-brand-dark sm:text-2xl">{title}</p>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2 border-t border-brand-border/80 pt-3" aria-hidden="true">
          <span className="size-1.5 rounded-full bg-brand-accent" />
          <span className="h-px flex-1 bg-gradient-to-r from-brand-accent/45 to-brand-border" />
          <span className="size-1.5 rounded-full bg-brand-accent/45" />
          <span className="h-px flex-1 bg-gradient-to-r from-brand-border to-brand-accent/20" />
          <span className="size-1.5 rounded-full bg-brand-accent/25" />
        </div>
      </div>
    </div>
  );
}
