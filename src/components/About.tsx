import Reveal from "./Reveal";
import { aboutParagraphs } from "../data/content";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:gap-16">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-clay">À propos</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Du terrain à la donnée, la même exigence de preuve.
            </h2>
          </Reveal>

          <div className="space-y-6">
            {aboutParagraphs.map((paragraph, index) => (
              <Reveal key={index} delay={index * 0.08}>
                <p className="text-lg leading-relaxed text-ink-soft">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
