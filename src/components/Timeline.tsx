import { Briefcase, GraduationCap } from "lucide-react";
import Reveal from "./Reveal";
import { timeline } from "../data/content";

export default function Timeline() {
  return (
    <section id="timeline" className="bg-ivory-dim/50 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-clay">Parcours</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            15 ans de terrain, une trajectoire cohérente.
          </h2>
        </Reveal>

        <ol className="mt-14 space-y-0">
          {timeline.map((item, index) => {
            const isEducation = item.type === "education";
            return (
              <Reveal as="li" key={`${item.title}-${item.period}`} delay={index * 0.05} className="relative pb-10 pl-12 last:pb-0">
                {index !== timeline.length - 1 && (
                  <span className="absolute left-[15px] top-8 h-full w-px bg-paper-line" aria-hidden />
                )}
                <span
                  className={`absolute left-0 top-0.5 flex h-8 w-8 items-center justify-center rounded-full border ${
                    isEducation
                      ? "border-moss/30 bg-moss-tint text-moss-dark"
                      : "border-clay/30 bg-clay-tint text-clay-dark"
                  }`}
                >
                  {isEducation ? <GraduationCap size={15} /> : <Briefcase size={15} />}
                </span>

                <p className="font-mono text-xs uppercase tracking-wide text-ink-faint">{item.period}</p>
                <h3 className="mt-1.5 font-serif text-lg font-semibold text-ink sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-ink-soft">{item.org}</p>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
