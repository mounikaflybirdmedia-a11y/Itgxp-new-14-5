import { createFileRoute, Link } from "@tanstack/react-router";
import { z } from "zod";
import { ArrowRight, Server, Cloud, Bot, ShieldCheck, FileCheck, Database, Globe2, Users, Clock } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import appSupportImg from "@/assets/service-app-support.jpg";
import cloudImg from "@/assets/service-cloud.jpg";
import aiopsImg from "@/assets/service-aiops.jpg";
import csvImg from "@/assets/gxp-csv.jpg";
import part11Img from "@/assets/gxp-part11.jpg";
import alcoaImg from "@/assets/gxp-alcoa.jpg";

const servicesSearchSchema = z.object({
  type: z.enum(["it", "gxp", "offshore"]).optional(),
});

export const Route = createFileRoute("/services")({
  validateSearch: (search) => servicesSearchSchema.parse(search),
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — ITGxP" },
      { name: "description", content: "All ITGxP services: IT Managed Services, GxP Compliance, and Offshore Delivery for regulated enterprises." },
    ],
  }),
});

type Service = { title: string; desc: string; icon: typeof Server; image: string };

const itServices: Service[] = [
  {
    icon: Server,
    title: "Application & Infrastructure Support",
    desc: "L1–L3 support, monitoring, and governed incident management.",
    image: appSupportImg,
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    desc: "Resilient cloud platforms with availability and recovery readiness.",
    image: cloudImg,
  },
  {
    icon: Bot,
    title: "AI Operations & Automation",
    desc: "Automation and observability to reduce MTTR and manual effort.",
    image: aiopsImg,
  },
];

const gxpServices: Service[] = [
  {
    icon: ShieldCheck,
    title: "Computer System Validation",
    desc: "Risk-based CSV aligned to GAMP 5.",
    image: csvImg,
  },
  {
    icon: FileCheck,
    title: "21 CFR Part 11 & Annex 11",
    desc: "Electronic records and signatures, audit trails.",
    image: part11Img,
  },
  {
    icon: Database,
    title: "Data Integrity (ALCOA+)",
    desc: "Controls for attributable, legible, contemporaneous data.",
    image: alcoaImg,
  },
];

const offshoreServices: Service[] = [
  {
    icon: Globe2,
    title: "Governed Offshore Delivery",
    desc: "24/7 coverage with US oversight and SLA-backed governance.",
    image: appSupportImg,
  },
  {
    icon: Users,
    title: "Dedicated Talent Pods",
    desc: "Hand-picked engineers, validated processes, transparent reporting.",
    image: cloudImg,
  },
  {
    icon: Clock,
    title: "Follow-the-Sun Operations",
    desc: "Continuous service across US, EU, and APAC time zones.",
    image: aiopsImg,
  },
];

function Section({
  eyebrow,
  title,
  desc,
  to,
  services,
}: {
  eyebrow: string;
  title: string;
  desc: string;
  to: "/services" | "/gxp" | "/offshore";
  services: Service[];
}) {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-widest text-primary font-semibold">{eyebrow}</div>
          <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-brand-deep tracking-tight">{title}</h2>
          <p className="mt-3 text-muted-foreground">{desc}</p>
        </div>
        {to !== "/services" && (
          <Link to={to} className="inline-flex items-center text-sm font-semibold text-primary hover:underline">
            Explore {eyebrow} <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        )}
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="bg-card border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-soft hover:border-primary/30 transition-all">
            <img src={s.image} alt="" loading="lazy" className="w-full aspect-[16/9] object-cover" />
            <div className="p-6">
              <div className="h-10 w-10 rounded-lg bg-primary/15 grid place-items-center text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-brand-deep">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServicesPage() {
  const { type } = Route.useSearch();

  return (
    <div>
      <PageHero
        eyebrow="Services"
        title={
          type === "it" 
            ? "IT Managed Services" 
            : type === "gxp" 
            ? "GxP Compliance" 
            : type === "offshore" 
            ? "Offshore Delivery" 
            : "Everything we do."
        }
        subtitle={type ? "Deep dive into our specialized expertise." : "Three integrated service lines — IT Managed Services, GxP Compliance, and Offshore Delivery — under one operating model."}
      />

      {(!type || type === "it") && (
        <Section
          eyebrow="IT Managed Services"
          title="Enterprise IT, done right."
          desc="Secure, governed, performance-driven."
          to="/services"
          services={itServices}
        />
      )}

      {(!type || type === "gxp") && (
        <div className="bg-gradient-soft border-y border-border">
          <Section
            eyebrow="GxP Compliance"
            title="Compliance under scrutiny."
            desc="Validation, data integrity, and inspection readiness."
            to="/gxp"
            services={gxpServices}
          />
        </div>
      )}

      {(!type || type === "offshore") && (
        <Section
          eyebrow="Offshore Delivery"
          title="Global reach. Local accountability."
          desc="Governed offshore capacity with US oversight."
          to="/offshore"
          services={offshoreServices}
        />
      )}
      {type && (
        <div className="container mx-auto px-6 py-12 text-center border-t border-border mt-8">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-primary hover:underline font-semibold"
          >
            View all our services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </div>
  );
}
