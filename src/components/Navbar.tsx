import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/rida-logo.jpg";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "backdrop-blur-xl bg-background/80 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Rida logo"
            className="h-10 w-10 rounded-full object-cover ring-1 ring-gold/40 transition-transform group-hover:rotate-12"
          />
          <span className="font-display text-xl tracking-wide">
            Rida<span className="text-gold">.</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-10 text-sm tracking-widest uppercase">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: true }}
                className="text-muted-foreground hover:text-gold transition-colors"
                activeProps={{ className: "text-gold" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden h-10 w-10 inline-flex items-center justify-center rounded-full border border-border text-foreground hover:text-gold hover:border-gold transition-colors"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-6 pb-8 pt-2 flex flex-col gap-1">
          {links.map((l, i) => (
            <li
              key={l.to}
              style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
              className={`transform transition-all duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              }`}
            >
              <Link
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: true }}
                className="block py-4 border-b border-border text-2xl font-display tracking-wide text-muted-foreground hover:text-gold transition-colors"
                activeProps={{ className: "text-gold" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
