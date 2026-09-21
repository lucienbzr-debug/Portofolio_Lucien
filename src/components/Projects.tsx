import { ExternalLink, TrendingUp } from "lucide-react";
import Reveal from "./Reveal";
import { projects } from "../data/content";
import { GithubIcon } from "./icons";

const tagColor: Record<string, string> = {
  SQL: "border-clay/30 bg-clay-tint text-clay-dark",
  Python: "border-moss/30 bg-moss-tint text-moss-dark",
  R: "border-clay/30 bg-clay-tint text-clay-dark",
  Excel: "border-moss/30 bg-moss-tint text-moss-dark",
  "Power BI": "border-clay/30 bg-clay-tint text-clay-dark",
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-clay">Projets</p>
          <h2 className="mt-3 max-w-2xl font-serif text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Des preuves, pas une liste de compétences.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink-soft">
            Six études de cas, chacune menée de bout en bout : données brutes, nettoyage, analyse
            et livrable exploitable par une direction.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal
              key={project.id}
              delay={(index % 2) * 0.08}
              className="group flex flex-col rounded-2xl border border-paper-line bg-ivory p-7 transition-all duration-300 hover:-translate-y-1 hover:border-clay/30 hover:shadow-xl hover:shadow-ink/5 sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  className={`inline-flex rounded-full border px-3 py-1 font-mono text-xs font-medium ${
                    tagColor[project.tag] ?? "border-paper-line bg-ivory-dim text-ink-soft"
                  }`}
                >
                  {project.tag}
                </span>
              </div>

              <h3 className="mt-4 font-serif text-xl font-semibold text-ink sm:text-2xl">
                {project.title}
              </h3>
              <p className="mt-2 text-sm italic leading-relaxed text-ink-faint">{project.context}</p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-full bg-ivory-dim px-2.5 py-1 font-mono text-[0.7rem] text-ink-soft"
                  >
                    {tool}
                  </li>
                ))}
              </ul>

              <p className="mt-5 flex-1 text-base leading-relaxed text-ink-soft">
                {project.description}
              </p>

              <div className="mt-6 flex items-start gap-3 rounded-xl border border-moss/20 bg-moss-tint px-4 py-3.5">
                <TrendingUp size={18} className="mt-0.5 shrink-0 text-moss-dark" />
                <div>
                  <p className="font-mono text-[0.65rem] uppercase tracking-wide text-moss-dark/70">
                    Résultat
                  </p>
                  <p className="mt-0.5 font-mono text-sm font-semibold text-moss-dark">
                    {project.result}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 border-t border-paper-line pt-5">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-ivory transition-colors hover:bg-clay-dark"
                  >
                    <ExternalLink size={15} />
                    Voir le dashboard
                  </a>
                )}
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-ink/30 hover:bg-ivory-dim"
                >
                  <GithubIcon size={15} />
                  Code source
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
