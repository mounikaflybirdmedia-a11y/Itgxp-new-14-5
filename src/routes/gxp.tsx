import { createFileRoute } from "@tanstack/react-router";
import { PageHero, ServiceCard } from "@/components/site/PageHero";
import csvImg from "@/assets/gxp-csv.jpg";
import part11Img from "@/assets/gxp-part11.jpg";
import alcoaImg from "@/assets/gxp-alcoa.jpg";

export const Route = createFileRoute("/gxp")({
  component: GxpPage,
  head: () => ({
    meta: [
      { title: "GxP Compliance — ITGxP" },
      { name: "description", content: "GxP compliance, CSV, data integrity, and inspection readiness for regulated industries." },
    ],
  }),
});

const services = [
  { title: "Computer System Validation", desc: "Risk-based CSV aligned to GAMP 5.", tags: ["GAMP 5", "URS / FRS"], image: csvImg },
  { title: "21 CFR Part 11 & Annex 11", desc: "Electronic records and signatures, audit trails.", tags: ["Part 11", "Annex 11"], image: part11Img },
  { title: "Data Integrity (ALCOA+)", desc: "Controls for attributable, legible, contemporaneous data.", tags: ["ALCOA+", "Audit"], image: alcoaImg },
];

function GxpPage() {
  return (
    <div>
      <PageHero
        eyebrow="GxP Services"
        title="Compliance under scrutiny."
        subtitle="Validation, data integrity, and inspection readiness."
      />
      <section className="container mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">
        {services.map((s) => <ServiceCard key={s.title} {...s} />)}
      </section>
    </div>
  );
}
