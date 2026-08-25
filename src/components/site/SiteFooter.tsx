import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import logo from "@/assets/um-logo.jpg.asset.json";
import { contact } from "@/lib/site-data";
import { Eyebrow } from "./Eyebrow";

export function SiteFooter() {
  return (
    <footer className="surface-dark text-white/70">
      <div className="mx-auto max-w-site px-5 py-20 md:px-8 md:py-28">
        <Eyebrow label="Lassen Sie uns bauen" tone="light" />
        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <h2 className="max-w-2xl text-4xl font-extrabold leading-[1.05] text-white md:text-5xl">
            Ihr Projekt.{" "}
            <span className="accent-italic text-navy-light">Ein Ansprechpartner.</span>
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              to="/kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
            >
              Anfrage starten <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href={contact.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              {contact.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto grid max-w-site gap-10 px-5 py-14 md:grid-cols-2 md:px-8 lg:grid-cols-4">
          <div>
            <div className="flex min-w-0 items-center gap-3">
              <img
                src={logo.url}
                alt="UM Haus&Bau Logo"
                width={44}
                height={44}
                loading="lazy"
                className="h-10 w-10 shrink-0 object-contain"
              />
              <span className="text-sm font-extrabold tracking-tight text-white">
                UM HAUS&amp;BAU
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              Bau, Sanierung und Innenausbau aus einer Hand — für private und
              gewerbliche Kunden in Hamburg, Norderstedt und Umgebung.
            </p>
          </div>

          <div>
            <p className="mono-label text-white/45">Leistungen</p>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                "Sanierung & Renovierung",
                "Bau & Neubau",
                "Dach & Fassade",
                "Innenausbau & Oberflächen",
                "Bad & Raumgestaltung",
                "Möbelbau",
              ].map((s) => (
                <li key={s}>
                  <Link to="/leistungen" className="transition-colors hover:text-white">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mono-label text-white/45">Unternehmen</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link to="/ueber-uns" className="transition-colors hover:text-white">
                  Über uns
                </Link>
              </li>
              <li>
                <Link to="/projekte" className="transition-colors hover:text-white">
                  Projekte &amp; Bewertungen
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="transition-colors hover:text-white">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link to="/impressum" className="transition-colors hover:text-white">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="transition-colors hover:text-white">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mono-label text-white/45">Kontakt</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>{contact.office}</li>
              <li>
                <a href={contact.phoneHref} className="hover:text-white">
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="hover:text-white">
                  {contact.email}
                </a>
              </li>
              <li className="text-white/50">{contact.hours}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-site flex-col gap-2 px-5 py-6 text-xs text-white/45 sm:flex-row sm:justify-between md:px-8">
          <p>© {new Date().getFullYear()} UM Haus&amp;Bau Vasyl Ursol — Norderstedt</p>
          <p>Bau · Sanierung · Innenausbau</p>
        </div>
      </div>
    </footer>
  );
}
