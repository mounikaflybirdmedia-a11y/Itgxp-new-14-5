import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CheckCircle2 } from "lucide-react";
import whoImg from "@/assets/who-we-are.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — ITGxP" },
      { name: "description", content: "ITGxP delivers Enterprise IT and GxP Compliance for regulated industries since 2019." },
    ],
  }),
});

const values = [
  "Compliance by design",
  "Operational accountability",
  "Secure, governed delivery",
  "Long-term partnership",
];

function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="About"
        title="One partner for IT and GxP."
        subtitle="Founded in 2019. Headquartered in Lowell, MA. Delivery from Hyderabad."
      />
      <section className="container mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <img src={whoImg} alt="ITGxP team" className="rounded-2xl shadow-soft aspect-[4/3] object-cover" />
        <div>
          <h2 className="text-3xl font-bold text-brand-deep tracking-tight">Who we are</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            ITGxP is an enterprise IT and GxP compliance partner serving life sciences, healthcare, and regulated technology organizations. We combine US-based governance with offshore delivery scale.
          </p>
          <ul className="mt-6 space-y-3">
            {values.map((v) => (
              <li key={v} className="flex gap-3 text-sm text-foreground/85">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
