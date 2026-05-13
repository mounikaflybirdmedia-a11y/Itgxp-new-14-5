import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Server, Globe2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-itgxp.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ITGxP — IT Excellence. GxP Assurance." },
      { name: "description", content: "Enterprise IT Managed Services and GxP Compliance for regulated industries." },
    ],
  }),
});

const pillars = [
  {
    icon: Server,
    title: "IT Managed Services",
    desc: "Resilient managed services for uptime, scale, and operational control.",
    to: "/services" as const,
    search: { type: "it" as const },
  },
  {
    icon: ShieldCheck,
    title: "GxP Compliance",
    desc: "Validation, data integrity, and inspection readiness, done right.",
    to: "/services" as const,
    search: { type: "gxp" as const },
  },
  {
    icon: Globe2,
    title: "Offshore Delivery",
    desc: "Governed offshore capacity with US oversight and 24/7 coverage.",
    to: "/services" as const,
    search: { type: "offshore" as const },
  },
];

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-soft" />
        <div className="container mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-12 items-center relative">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-4 py-1.5 text-xs font-semibold tracking-wider uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Enterprise IT + GxP · Est. 2019
            </span>
            <h1 className="mt-6 text-5xl lg:text-6xl font-bold text-brand-deep tracking-tight leading-[1.05]">
              IT Excellence.<br />
              <span className="text-primary">GxP Assurance.</span><br />
              Global Delivery.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Enterprise IT Managed Services and GxP Compliance for regulated, audit-sensitive environments. One integrated operating model.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-7 shadow-soft">
                <Link to="/contact">Book a consultation <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-7 border-primary/30 text-primary hover:bg-primary/5">
                <Link to="/services">Review services</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-hero rounded-3xl opacity-20 blur-2xl" />
            <img
              src={heroImg}
              alt="ITGxP team"
              width={1600}
              height={1067}
              className="relative rounded-2xl shadow-soft w-full aspect-[4/3] object-cover"
            />
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-2xl mb-12">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold">What we do</div>
          <h2 className="mt-3 text-4xl font-bold text-brand-deep tracking-tight">Three pillars. One partner.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <Link
              key={p.title}
              to={p.to}
              search={"search" in p ? p.search : undefined}
              className="group bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-soft hover:border-primary/40 transition-all"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/15 grid place-items-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-brand-deep">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              <div className="mt-6 inline-flex items-center text-sm font-semibold text-primary">
                Learn more <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 pb-24">
        <div className="rounded-3xl bg-gradient-hero p-12 lg:p-16 text-center text-white shadow-soft relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,white,transparent_50%)]" />
          <div className="relative max-w-xl mx-auto">
            <Clock className="h-10 w-10 mx-auto text-primary-soft" />
            <h2 className="mt-4 text-3xl lg:text-4xl font-bold tracking-tight">Let's talk.</h2>
            <p className="mt-3 text-white/85">A practical next step within one business day.</p>
            <Button asChild size="lg" variant="secondary" className="mt-8 rounded-full px-8">
              <Link to="/contact">Get in touch <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
