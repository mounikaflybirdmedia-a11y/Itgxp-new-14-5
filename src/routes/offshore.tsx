import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Clock, Globe2, ShieldCheck, TrendingDown } from "lucide-react";

export const Route = createFileRoute("/offshore")({
  component: OffshorePage,
  head: () => ({
    meta: [
      { title: "Offshore Delivery — ITGxP" },
      { name: "description", content: "Governed offshore IT support with US oversight and 24/7 coverage." },
    ],
  }),
});

const stats = [
  { icon: TrendingDown, k: "30–50%", v: "Cost optimization" },
  { icon: Clock, k: "24/7", v: "Follow-the-sun" },
  { icon: ShieldCheck, k: "Zero-Trust", v: "Secure access" },
  { icon: Globe2, k: "USA · India", v: "Lowell + Hyderabad" },
];

function OffshorePage() {
  return (
    <div>
      <PageHero
        eyebrow="Offshore Model"
        title="Global delivery. Structured governance."
        subtitle="US-led oversight, India-based execution, SLA-bound delivery."
      />
      <section className="container mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.v} className="bg-card border border-border rounded-2xl p-8 shadow-card">
            <s.icon className="h-6 w-6 text-primary" />
            <div className="mt-4 text-2xl font-bold text-brand-deep">{s.k}</div>
            <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
          </div>
        ))}
      </section>
    </div>
  );
}
