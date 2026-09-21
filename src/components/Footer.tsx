import { contact, navLinks } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-soft py-10 text-ivory/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center sm:flex-row sm:justify-between sm:text-left sm:px-8">
        <div>
          <p className="font-serif text-base font-semibold text-ivory">{contact.name}</p>
          <p className="mt-1 text-xs">{contact.role}</p>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-ivory">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href={contact.cvPath} download className="transition-colors hover:text-ivory">
              CV
            </a>
          </li>
        </ul>

        <p className="text-xs">© {year} {contact.name}</p>
      </div>
    </footer>
  );
}
