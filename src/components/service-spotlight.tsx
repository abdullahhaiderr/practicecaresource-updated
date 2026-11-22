const lightPositions = [24, 50, 76];

export function ServiceSpotlight() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden bg-gradient-to-b from-brand-background via-brand-background-wash to-brand-peach/25">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_58%,rgba(6,83,199,0.12),transparent_68%)]" />
      <div className="absolute inset-x-0 top-0 h-16 border-b border-brand-border/70 bg-gradient-to-b from-white/95 to-brand-background-wash/60 sm:h-20" />
      {lightPositions.map((position, index) => (
        <div key={position}>
          <div className="service-spotlight-beam absolute top-[9%] z-[1] h-[86%] w-[42%]" style={{ left: `${position}%`, animationDelay: `${350 + index * 140}ms` }} />
          <div className="absolute top-[3%] z-10 flex h-8 w-14 -translate-x-1/2 items-center justify-center rounded-full border border-brand-border bg-white/95 shadow-sm sm:h-9 sm:w-16" style={{ left: `${position}%` }}>
            <span className="service-spotlight-bulb h-2 w-8 rounded-full bg-brand-accent/25" />
          </div>
        </div>
      ))}
      <div className="absolute inset-x-[8%] bottom-0 h-20 bg-gradient-to-t from-white/45 to-transparent" />
    </div>
  );
}
