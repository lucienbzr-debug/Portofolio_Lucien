import Reveal from "./Reveal";
import { stats } from "../data/content";

export default function Stats() {
  return (
    <section className="bg-charcoal py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-clay-light">
            L'impact en chiffres
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.06}>
              <div className="border-l-2 border-clay/50 pl-4">
                <p className="whitespace-nowrap font-mono text-2xl font-semibold text-ivory sm:text-3xl lg:text-4xl">
                  {stat.value}
                  {stat.unit && (
                    <span className="ml-1.5 text-base font-medium text-moss-light">{stat.unit}</span>
                  )}
                </p>
                <p className="mt-2 text-sm leading-snug text-ivory/60">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
