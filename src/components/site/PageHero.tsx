export function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <section className="bg-gradient-soft border-b border-border">
      <div className="container mx-auto px-6 py-16 lg:py-20">
        <div className="text-xs uppercase tracking-widest text-primary font-semibold">{eyebrow}</div>
        <h1 className="mt-3 text-4xl lg:text-5xl font-bold text-brand-deep tracking-tight max-w-3xl">{title}</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">{subtitle}</p>
      </div>
    </section>
  );
}

export function ServiceCard({ title, desc, tags, image }: { title: string; desc: string; tags: string[]; image?: string }) {
  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-soft hover:border-primary/30 transition-all">
      {image && (
        <img src={image} alt="" loading="lazy" className="w-full aspect-[16/9] object-cover" />
      )}
      <div className="p-6">
        <h3 className="text-lg font-bold text-brand-deep">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <span key={t} className="text-[11px] px-2 py-1 rounded-md bg-secondary text-secondary-foreground font-medium">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
