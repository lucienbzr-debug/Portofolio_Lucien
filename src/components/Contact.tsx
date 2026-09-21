import { Download, Mail, MapPin, Phone } from "lucide-react";
import Reveal from "./Reveal";
import { contact } from "../data/content";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Contact() {
  return (
    <section id="contact" className="bg-charcoal py-24 text-ivory sm:py-32">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-clay-light">Contact</p>
          <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Discutons de vos besoins en S&amp;E et en données.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-ivory/70">
            Disponible dès maintenant pour un rôle hybride Suivi-Évaluation &amp; Data, à distance
            ou pour une mission ponctuelle.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${contact.phone}`}
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-clay px-8 py-4 text-base font-semibold text-ivory shadow-lg shadow-clay/20 transition-all hover:-translate-y-0.5 hover:bg-clay-light sm:w-auto"
            >
              <Phone size={19} />
              Appeler · {contact.phoneDisplay}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-ivory/25 px-8 py-4 text-base font-semibold text-ivory transition-all hover:-translate-y-0.5 hover:border-ivory/50 hover:bg-ivory/5 sm:w-auto"
            >
              <Mail size={19} />
              Envoyer un email
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-5 font-mono text-xs text-moss-light">{contact.availability}</p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mx-auto mt-14 flex max-w-lg flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-charcoal-line pt-8 text-sm text-ivory/60">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-ivory"
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-ivory"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
            <a
              href={contact.cvPath}
              download
              className="inline-flex items-center gap-2 transition-colors hover:text-ivory"
            >
              <Download size={16} />
              Télécharger mon CV
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} />
              {contact.location}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
