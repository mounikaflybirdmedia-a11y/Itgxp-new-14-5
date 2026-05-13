import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — ITGxP" },
      { name: "description", content: "Talk to ITGxP about Enterprise IT Managed Services or GxP Compliance." },
    ],
  }),
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [topic, setTopic] = useState("it-managed-services");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Schedule a consultation."
        subtitle="Tell us about your environment. We'll respond with a practical next step within one business day."
      />

      <section className="container mx-auto px-6 py-16 grid lg:grid-cols-3 gap-8">
        {/* Contact info */}
        <div className="lg:col-span-1 space-y-4">
          {[
            { icon: Mail, label: "Email", value: "info@itgxp.com", href: "mailto:info@itgxp.com" },
            { icon: Phone, label: "Phone", value: "+1 (978) 000-0000", href: "tel:+19780000000" },
            { icon: MapPin, label: "Headquarters", value: "Lowell, MA · USA" },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href ?? "#"}
              className="bg-card border border-border rounded-2xl p-6 shadow-card hover:shadow-soft hover:border-primary/30 transition-all block"
            >
              <c.icon className="h-5 w-5 text-primary" />
              <div className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
              <div className="mt-1 text-base font-semibold text-brand-deep">{c.value}</div>
            </a>
          ))}
        </div>

        {/* Form */}
        <div className="lg:col-span-2">
          <div className="bg-card border border-border rounded-2xl p-8 shadow-card">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle2 className="h-12 w-12 text-primary mx-auto" />
                <h2 className="mt-4 text-2xl font-bold text-brand-deep">Thank you.</h2>
                <p className="mt-2 text-muted-foreground">
                  We've received your request and will respond within one business day.
                </p>
                <Button
                  variant="outline"
                  className="mt-6 rounded-full"
                  onClick={() => setSubmitted(false)}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div>
                  <h2 className="text-xl font-bold text-brand-deep">Schedule consultation</h2>
                  <p className="mt-1 text-sm text-muted-foreground">All fields required.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input id="firstName" name="firstName" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input id="lastName" name="lastName" required />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Work email</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" name="company" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="topic">Area of interest</Label>
                  <Select value={topic} onValueChange={setTopic}>
                    <SelectTrigger id="topic">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="it-managed-services">IT Managed Services</SelectItem>
                      <SelectItem value="gxp-compliance">GxP Compliance</SelectItem>
                      <SelectItem value="offshore-delivery">Offshore Delivery</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">How can we help?</Label>
                  <Textarea id="message" name="message" rows={5} required />
                </div>

                <Button type="submit" size="lg" className="rounded-full px-7">
                  Send request <Send className="h-4 w-4" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
