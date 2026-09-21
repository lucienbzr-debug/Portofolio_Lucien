import { motion } from "framer-motion";
import { ArrowRight, Download, Phone } from "lucide-react";
import { contact, heroStats } from "../data/content";
import portrait from "../assets/lucien-buzera.jpg";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
      style={{
        backgroundImage:
          "radial-gradient(circle, color-mix(in srgb, var(--color-clay) 16%, transparent) 1.5px, transparent 1.5px)",
        backgroundSize: "28px 28px",
        backgroundPosition: "-10px -10px",
      }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-clay/30 bg-clay-tint px-4 py-1.5 font-mono text-xs font-medium tracking-wide text-clay-dark">
            Suivi-Évaluation · Data · Disponible à distance
          </p>

          <h1 className="font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            10 ans à prouver l'impact des programmes.
            <br />
            <span className="text-clay">Aujourd'hui, je le mesure avec la donnée.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            Spécialiste Suivi, Évaluation &amp; Apprentissage (SEA), je conçois des systèmes qui
            transforment le terrain en décisions — pour des bailleurs comme la Banque mondiale,
            l'USAID ou l'Union européenne. Je complète aujourd'hui ce socle par des compétences
            SQL, Python, R et Power BI pour des rôles hybrides S&amp;E-Data, à distance.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-clay px-6 py-3.5 text-base font-semibold text-ivory shadow-md shadow-clay/20 transition-all hover:-translate-y-0.5 hover:bg-clay-dark hover:shadow-lg"
            >
              <Phone size={18} />
              Me contacter
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-transparent px-6 py-3.5 text-base font-semibold text-ink transition-colors hover:border-ink/30 hover:bg-ivory-dim"
            >
              Voir mes projets
              <ArrowRight size={18} />
            </a>
            <a
              href={contact.cvPath}
              download
              className="inline-flex items-center gap-2 px-2 py-3.5 text-base font-semibold text-ink-soft underline decoration-clay/40 decoration-2 underline-offset-4 transition-colors hover:text-clay"
            >
              <Download size={18} />
              Télécharger mon CV
            </a>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-paper-line pt-8">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="whitespace-nowrap font-mono text-xl font-semibold text-ink sm:text-2xl lg:text-3xl">
                  {stat.value}
                </dd>
                <p className="mt-1 text-sm leading-snug text-ink-faint">{stat.label}</p>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="absolute -inset-3 -z-10 rounded-[2rem] border border-clay/25" aria-hidden />
          <div className="absolute -bottom-5 -right-5 -z-10 h-32 w-32 rounded-2xl bg-moss/15" aria-hidden />
          <img
            src={portrait}
            alt="Portrait de Lucien Buzera, spécialiste Suivi-Évaluation et Data"
            className="aspect-[4/5] w-full rounded-[1.75rem] object-cover shadow-xl"
            width={640}
            height={800}
          />
          <div className="absolute -bottom-6 left-1/2 w-[86%] -translate-x-1/2 rounded-xl border border-paper-line bg-ivory px-5 py-4 shadow-lg">
            <p className="font-mono text-xs uppercase tracking-wide text-ink-faint">Basé à</p>
            <p className="mt-0.5 text-sm font-semibold text-ink">{contact.location}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
