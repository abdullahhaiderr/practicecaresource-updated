const lightPositions = [38, 50, 62];

export function ServiceSpotlight() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden bg-[linear-gradient(115deg,#f8fbff_0%,#edf5ff_48%,#f8fbfc_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_48%,rgba(255,255,255,0.96),transparent_62%),radial-gradient(ellipse_at_50%_85%,rgba(6,83,199,0.08),transparent_72%)]" />
      <div className="absolute inset-x-[31%] top-[3.2%] h-[6px] rounded-full border-y border-white/80 bg-gradient-to-b from-brand-slate-light via-white to-brand-accent/35 shadow-[0_3px_9px_rgba(7,48,116,0.18)]" />
      {lightPositions.map((position, index) => (
        <div key={position}>
          <div className="service-spotlight-beam absolute top-[15%] z-[1] h-[80%] w-[32%]" style={{ left: `${position}%`, animationDelay: `${280 + index * 130}ms` }} />
          <div className="absolute top-[3.5%] z-10 flex -translate-x-1/2 flex-col items-center" style={{ left: `${position}%` }}>
            <span className="h-3 w-[3px] rounded-full bg-gradient-to-r from-brand-slate via-white to-brand-accent-ink shadow-sm" />
            <span className="-mt-px size-2.5 rounded-full border border-brand-slate-light bg-gradient-to-br from-white to-brand-slate-light shadow-sm" />
            <span className="h-1 w-5 bg-gradient-to-r from-brand-slate-light via-white to-brand-slate-light" />
            <span className="relative flex h-9 w-12 flex-col justify-between overflow-hidden rounded-t-md rounded-b-xl border border-brand-accent-ink/50 bg-gradient-to-r from-brand-slate via-white to-brand-accent-ink shadow-[0_5px_9px_rgba(7,48,116,0.24)] sm:h-10 sm:w-[3.5rem]">
              <i className="mt-1 h-[3px] w-full bg-brand-accent-ink/55" />
              <i className="h-[3px] w-full bg-brand-accent-ink/40" />
              <span className="service-spotlight-bulb mx-auto mb-1 h-2 w-7 rounded-full border border-white/90 bg-amber-300/70 shadow-[0_0_8px_rgba(255,196,92,0.45)] sm:w-8" />
            </span>
          </div>
        </div>
      ))}
      <div className="absolute inset-x-[12%] bottom-[7%] h-16 bg-[radial-gradient(ellipse_at_center,rgba(6,83,199,0.08),transparent_70%)]" />
    </div>
  );
}
