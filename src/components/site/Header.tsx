import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import { Mail, Phone, Menu } from "lucide-react";
import logo from "@/assets/logo-itgxp.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "IT Managed Services", search: { type: "it" } },
  { to: "/gxp", label: "GxP" },
  { to: "/offshore", label: "Offshore" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white text-foreground border-b border-border shadow-sm">
      <div className="bg-brand-deep text-white/90 text-xs">
        <div className="container mx-auto px-6 py-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2"><Phone className="h-3 w-3" />Lowell, MA · USA</span>
            <span className="hidden sm:inline-flex items-center gap-2"><Mail className="h-3 w-3" />info@itgxp.com</span>
          </div>
          <div className="opacity-80 hidden md:block">KBHPS Info Tech Pvt Ltd · Est. 2019</div>
        </div>
      </div>
      <div className="container mx-auto px-6 h-20 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center" aria-label="ITGxP home">
          <img
            src={logo}
            alt="ITGxP — Enterprise IT. GxP Precision."
            className="h-16 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              search={"search" in n ? n.search : undefined}
              className="px-3 py-2 text-sm font-medium text-foreground/75 hover:text-primary transition-colors rounded-md"
              activeProps={{ className: "px-3 py-2 text-sm font-semibold text-primary rounded-md" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild className="rounded-full px-5 hidden sm:inline-flex">
            <Link to="/contact">Schedule Consultation</Link>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1">
                {nav.map((n) => (
                  <Link
                    key={n.to}
                    to={n.to}
                    search={"search" in n ? n.search : undefined}
                    onClick={() => setOpen(false)}
                    className="px-3 py-3 text-base font-medium text-foreground/85 hover:text-primary hover:bg-accent rounded-md transition-colors"
                    activeProps={{ className: "px-3 py-3 text-base font-semibold text-primary bg-accent rounded-md" }}
                    activeOptions={{ exact: n.to === "/" }}
                  >
                    {n.label}
                  </Link>
                ))}
                <Button asChild className="mt-4 rounded-full">
                  <Link to="/contact" onClick={() => setOpen(false)}>Schedule Consultation</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
