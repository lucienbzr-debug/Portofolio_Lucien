import Reveal from "./Reveal";
import { skillBlocks } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="bg-ivory-dim/50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-clay">Compétences</p>
          <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Un profil hybride : rigueur méthodologique et outils data.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-paper-line bg-paper-line sm:grid-cols-2">
          {skillBlocks.map((block, index) => (
            <Reveal key={block.title} delay={index * 0.08} className="bg-ivory p-8 sm:p-10">
              <span className="font-mono text-sm text-ink-faint">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 font-serif text-xl font-semibold text-ink sm:text-2xl">{block.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-ink-soft">{block.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className={`rounded-full border px-3 py-1 font-mono text-xs ${
                      index % 2 === 0
                        ? "border-clay/25 bg-clay-tint text-clay-dark"
                        : "border-moss/25 bg-moss-tint text-moss-dark"
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
