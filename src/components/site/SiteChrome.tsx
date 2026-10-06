import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { BRAND, PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";
import logo from "@/assets/logo-car-sound-radio.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Logo() {
  return (
    <Link to="/" className="flex shrink-0 items-center" aria-label={`${BRAND} home`}>
      <img src={logo} alt={`${BRAND} logo`} width={1536} height={512} className="h-12 w-auto md:h-16" />
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-foreground/15 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-2 md:px-10">
        <Logo />
        <nav className="hidden items-center gap-9 md:flex" aria-label="Main">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="eyebrow text-foreground/70 transition-colors hover:text-foreground"
              activeProps={{ className: "eyebrow text-foreground underline underline-offset-8 decoration-accent decoration-2" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <a href={PHONE_HREF} className="hidden items-center gap-2 font-display text-lg font-bold tracking-wide md:flex">
          <Phone className="h-4 w-4 text-primary" aria-hidden /> {PHONE_DISPLAY}
        </a>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-foreground/15 bg-background px-5 pb-6 md:hidden" aria-label="Mobile">
          {nav.map((n, i) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="flex items-baseline justify-between border-b border-foreground/10 py-4 font-display text-4xl font-extrabold uppercase"
            >
              {n.label} <span className="font-sans text-xs text-muted-foreground">0{i + 1}</span>
            </Link>
          ))}
          <a href={PHONE_HREF} className="mt-5 flex items-center justify-center gap-2 bg-primary py-4 font-display text-xl font-bold text-primary-foreground">
            <Phone className="h-4 w-4" aria-hidden /> Call {PHONE_DISPLAY}
          </a>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-graphite text-ivory">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 md:grid-cols-12 md:px-10">
        <div className="md:col-span-6">
          <p className="eyebrow text-metal">Car audio / Satellite radio</p>
          <a href={PHONE_HREF} className="mt-4 block font-display text-5xl font-extrabold leading-none tracking-tight transition-colors hover:text-accent sm:text-6xl lg:text-8xl">
            {PHONE_DISPLAY}
          </a>
          <p className="mt-6 max-w-sm font-serif text-lg italic text-ivory/70">Help with satellite radio, speakers, infotainment and in-car sound.</p>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow text-metal">Pages</p>
          <ul className="mt-4 space-y-2">
            {nav.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-accent">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow text-metal">Legal</p>
          <ul className="mt-4 space-y-2">
            <li><Link to="/privacy" className="hover:text-accent">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-accent">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-2 px-5 py-6 text-xs text-ivory/50 md:flex-row md:px-10">
          <span>© {new Date().getFullYear()} {BRAND}</span>
          <span>Make every drive sound different.</span>
        </div>
      </div>
    </footer>
  );
}
