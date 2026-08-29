import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Eyebrow } from "@/components/site/Eyebrow";
import { serviceDetails, partners, ownQualifications } from "@/lib/site-data";

export const Route = createFileRoute("/leistungen")({
  head: () => ({
    meta: [
      { title: "Leistungen — Sanierung, Neubau & Innenausbau | UM Haus&Bau" },
      {
        name: "description",
        content:
          "Acht Leistungsbereiche aus einer Hand: Sanierung, Neubau, Dach & Fassade, Innenausbau, Bad- und Raumplanung, Möbelbau, Haustechnik und Objektbetreuung in Hamburg.",
      },
      { property: "og:title", content: "Leistungen — UM Haus&Bau" },
      {
        property: "og:description",
        content:
          "Sanierung, Neubau, Fassade, Innenausbau, Möbelbau und Objektbetreuung — koordiniert von einem Ansprechpartner.",
      },
    ],
  }),
  component: LeistungenPage,
});

function LeistungenPage() {
  return (
    <>
      <PageHero
        label="Leistungen"
        title={
          <>
            Vom Rohbau bis zum{" "}
            <span className="accent-italic text-navy-light">letzten Detail.</span>
          </>
        }
        lead="Acht Leistungsbereiche, ein Anspruch: sauber geplant, verlässlich terminiert und nachvollziehbar ausgeführt — von einem Ansprechpartner koordiniert."
      />

      <section className="surface-cream">
        <div className="mx-auto max-w-site px-5 py-20 md:px-8 md:py-28">
          <div className="grid gap-6 md:grid-cols-2">
            {serviceDetails.map((s) => (
              <Link
                key={s.slug}
                to="/leistungen/$slug"
                params={{ slug: s.slug }}
                className="group flex flex-col rounded-lg border border-navy/12 bg-white/70 p-7 transition duration-200 ease-out hover:-translate-y-0.5 hover:border-navy/30 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:p-9"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="font-mono text-xs text-navy">{s.number}</p>
                  <ArrowUpRight className="h-4 w-4 shrink-0 -translate-y-1 translate-x-1 text-navy opacity-0 transition duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                </div>
                <h2 className="mt-5 text-2xl font-bold md:text-[1.75rem]">{s.title}</h2>
                <p className="mt-3 text-[1.0625rem] leading-relaxed text-muted-foreground">
                  {s.intro}
                </p>
                <ul className="mt-6 space-y-2.5 border-t border-navy/10 pt-6 text-[0.95rem] text-foreground/85">
                  {s.items.map((i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-navy" />
                      {i}
                    </li>
                  ))}
                </ul>
                {s.note ? (
                  <p className="mt-6 rounded-md border border-navy/15 bg-navy/[0.04] p-4 text-sm leading-relaxed text-muted-foreground">
                    {s.note}
                  </p>
                ) : null}
                <span className="mt-auto pt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
                  Mehr erfahren
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-site px-5 py-20 md:px-8 md:py-28">
          <Eyebrow label="Qualifikation & Fachpartner" />
          <h2 className="mt-7 max-w-3xl text-3xl font-bold md:text-[2.75rem]">
            Klar getrennt: eigene Arbeiten und{" "}
            <span className="accent-italic text-navy">Fachpartner.</span>
          </h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-lg border border-navy/15 p-8">
              <p className="mono-label text-navy">Eigene Qualifikationen</p>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-muted-foreground">
                Diese Arbeiten führt UM Haus&amp;Bau mit eigenen Mitarbeitern aus:
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {ownQualifications.map((q) => (
                  <li
                    key={q}
                    className="rounded-full border border-navy/20 px-4 py-1.5 text-sm font-medium text-navy"
                  >
                    {q}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-muted/60 p-8">
              <p className="mono-label text-stone">Fachpartner</p>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-muted-foreground">
                Weitere Gewerke erbringen benannte Partnerbetriebe mit eigener
                Qualifikation — von uns geplant, terminiert und koordiniert:
              </p>
              <ul className="mt-6 divide-y divide-border">
                {partners.map((p) => (
                  <li
                    key={p.name}
                    className="grid grid-cols-[minmax(0,1fr)_auto] gap-4 py-3.5"
                  >
                    <span className="min-w-0 truncate font-semibold">{p.name}</span>
                    <span className="text-sm text-muted-foreground">{p.role}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-14">
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-primary-foreground transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-navy-deep"
            >
              Projekt besprechen <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
