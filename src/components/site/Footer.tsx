import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo-itgxp.png";

export function Footer() {
  return (
    <footer className="bg-brand-deep text-white/85 mt-24">
      <div className="container mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">
        <div>
          <img src={logo} alt="ITGxP" className="h-16 w-16 rounded-lg" />
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Enterprise IT Managed Services and GxP Compliance for regulated, audit-sensitive environments.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-primary-soft">IT Managed Services</Link></li>
            <li><Link to="/gxp" className="hover:text-primary-soft">GxP Compliance & CSV</Link></li>
            <li><Link to="/offshore" className="hover:text-primary-soft">Offshore Delivery</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-primary-soft">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary-soft">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Locations</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Lowell, Massachusetts · USA</li>
            <li>Hyderabad · India</li>
            <li><a href="mailto:info@itgxp.com" className="hover:text-primary-soft">info@itgxp.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-5 text-xs text-white/60 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} KBHPS Info Tech Pvt Ltd. All rights reserved.</span>
          <span>FDA · EMA · GAMP 5 · 21 CFR Part 11 · Annex 11 · ALCOA+</span>
        </div>
      </div>
    </footer>
  );
}
