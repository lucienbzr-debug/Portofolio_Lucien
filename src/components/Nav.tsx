import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { contact, navLinks } from "../data/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ivory/90 backdrop-blur-md border-b border-paper-line" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="font-serif text-lg font-semibold tracking-tight text-ink">
          Lucien Buzera
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-ink-soft transition-colors hover:text-clay"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-clay px-5 py-2.5 text-sm font-semibold text-ivory shadow-sm transition-colors hover:bg-clay-dark"
          >
            Me contacter
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-full border border-paper-line p-2 text-ink md:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-paper-line bg-ivory px-5 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-ink-soft hover:bg-ivory-dim hover:text-clay"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center rounded-full bg-clay px-5 py-3 text-sm font-semibold text-ivory"
          >
            Me contacter
          </a>
          <a
            href={`tel:${contact.phone}`}
            className="mt-2 flex items-center justify-center rounded-full border border-paper-line px-5 py-3 text-sm font-semibold text-ink"
          >
            {contact.phoneDisplay}
          </a>
        </div>
      )}
    </header>
  );
}
