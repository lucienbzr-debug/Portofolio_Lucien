import { partners } from "../data/content";

export default function TrustBar() {
  return (
    <section className="border-y border-paper-line bg-ivory-dim/60 py-8">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-center font-mono text-xs uppercase tracking-[0.18em] text-ink-faint">
          Programmes conçus et pilotés pour
        </p>
        <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {partners.map((partner) => (
            <li
              key={partner}
              className="font-serif text-base font-medium text-ink-soft sm:text-lg"
            >
              {partner}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
