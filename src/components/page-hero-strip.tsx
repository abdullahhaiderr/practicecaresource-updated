type PageHeroStripProps = {
  items: Array<{ title: string; detail: string }>;
};

export function PageHeroStrip({ items }: PageHeroStripProps) {
  return (
    <div className="border-b border-brand-border bg-brand-background">
      <div className="mx-auto grid max-w-7xl divide-y divide-brand-border px-5 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-3 lg:px-8">
        {items.map((item) => (
          <div key={item.title} className="py-5 sm:px-6 lg:py-6">
            <p className="font-display text-xl font-semibold leading-tight text-brand-dark sm:text-2xl">{item.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-brand-slate">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
