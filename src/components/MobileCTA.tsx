import { Mail, Phone } from "lucide-react";
import { contact } from "../data/content";

export default function MobileCTA() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex border-t border-charcoal-line bg-charcoal text-ivory shadow-[0_-4px_16px_rgba(0,0,0,0.25)] sm:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={`tel:${contact.phone}`}
        className="flex flex-1 items-center justify-center gap-2 py-4 text-sm font-semibold"
        aria-label={`Appeler ${contact.phoneDisplay}`}
      >
        <Phone size={18} />
        Appeler
      </a>
      <span className="w-px bg-charcoal-line" aria-hidden />
      <a
        href={`mailto:${contact.email}`}
        className="flex flex-1 items-center justify-center gap-2 bg-clay py-4 text-sm font-semibold"
        aria-label={`Envoyer un email à ${contact.email}`}
      >
        <Mail size={18} />
        Email
      </a>
    </div>
  );
}
