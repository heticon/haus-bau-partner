import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Eyebrow } from "@/components/site/Eyebrow";
import { partners, ownQualifications, process } from "@/lib/site-data";
import about from "@/assets/about.jpg";

export const Route = createFileRoute("/ueber-uns")({
  head: () => ({
    meta: [
      { title: "Über uns — Bauunternehmen aus Norderstedt | UM Haus&Bau" },
      {
        name: "description",
        content:
          "UM Haus&Bau aus Norderstedt: 8 Mitarbeiter, rund 17 Personen mit Fachpartnern, Maurermeister mit 40 Jahren Erfahrung. Bau und Sanierung aus einer Hand.",
      },
      { property: "og:title", content: "Über uns — UM Haus&Bau" },
      {
        property: "og:description",
        content:
          "Team, Erfahrung und Arbeitsweise: wie UM Haus&Bau komplette Bau- und Sanierungsprojekte koordiniert.",
      },
    ],
  }),
  component: UeberUnsPage,
});

function UeberUnsPage() {
  return (
    <>
      <PageHero
        label="Über uns"
        title={
          <>
            Ein Betrieb mit{" "}
            <span className="accent-italic text-navy-light">Bauerfahrung.</span>
          </>
        }
        lead="Gegründet am 01.07.2024 in Norderstedt — aus kleineren Renovierungen, Terrassenbau und Abdichtungen ist seit Anfang 2025 ein Anbieter für komplette Bau- und Sanierungsprojekte geworden."
      />

      <section className="bg-background">
        <div className="mx-auto grid max-w-site gap-14 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <img
              src={about}
              alt="Fertiggestellte Fassade eines Einfamilienhauses"
              width={1280}
              height={1600}
              loading="lazy"
              className="h-full w-full rounded-lg object-cover"
            />
            <div className="absolute bottom-0 left-0 max-w-[15rem] rounded-tr-lg bg-navy p-6 text-primary-foreground">
              <p className="text-3xl font-extrabold">40 Jahre</p>
              <p className="mono-label mt-2 text-white/70">
                Bauerfahrung unseres Maurermeisters in Deutschland
              </p>
            </div>
          </div>

          <div>
            <Eyebrow label="Team & Erfahrung" />
            <h2 className="mt-7 text-3xl font-bold md:text-[2.5rem]">
              Erfahrung, die am Bau{" "}
              <span className="accent-italic text-navy">gewachsen ist.</span>
            </h2>
            <p className="mt-6 text-[1.0625rem] leading-relaxed text-muted-foreground">
              Unsere Geschäftsführung bringt rund 15 Jahre Bauerfahrung mit, unser
              Maurermeister rund 40 Jahre Erfahrung am Bau in Deutschland. Dazu
              kommen 8 festangestellte Mitarbeiter — mit Fachpartnern und
              Nachunternehmern arbeiten rund 17 Personen an unseren Projekten.
            </p>
            <p className="mt-4 text-[1.0625rem] leading-relaxed text-muted-foreground">
              Ansprechpartner für alle Anfragen ist Vasyl Ursol. Er begleitet
              Projekte von der ersten Besichtigung bis zur Übergabe — inklusive
              Unterstützung bei Planung und benötigten Unterlagen, auch im
              Zusammenhang mit möglichen Förderungen.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Eine Zusage oder Garantie für staatliche Förderungen oder deren
              Bewilligung können wir nicht geben — wir unterstützen ausschließlich
              bei der Vorbereitung der Unterlagen.
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-10">
              {[
                { k: "Gegründet", v: "01.07.2024" },
                { k: "Mitarbeiter", v: "8 intern" },
                { k: "Mit Fachpartnern", v: "ca. 17 Personen" },
                { k: "Einsatzgebiet", v: "Hamburg & Umgebung" },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="mono-label text-stone">{s.k}</dt>
                  <dd className="mt-2 text-xl font-bold">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="surface-cream">
        <div className="mx-auto max-w-site px-5 py-20 md:px-8 md:py-28">
          <Eyebrow label="Arbeitsweise" />
          <h2 className="mt-7 max-w-3xl text-3xl font-bold md:text-[2.75rem]">
            Wie aus einem Vorhaben ein{" "}
            <span className="accent-italic text-navy">geordnetes Projekt wird.</span>
          </h2>
          <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-navy/12 bg-navy/12 md:grid-cols-2 xl:grid-cols-4">
            {process.map((p) => (
              <div key={p.number} className="bg-cream p-8">
                <p className="font-mono text-xs text-navy">{p.number}</p>
                <h3 className="mt-5 text-xl font-bold">{p.title}</h3>
                <p className="mt-3 text-[0.975rem] leading-relaxed text-muted-foreground">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-site px-5 py-20 md:px-8 md:py-28">
          <Eyebrow label="Qualifikation & Fachpartner" />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-lg border border-navy/15 p-8">
              <p className="mono-label text-navy">UM Haus&amp;Bau selbst</p>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-muted-foreground">
                Für diese Arbeiten sind wir selbst qualifiziert und führen sie mit
                eigenen Mitarbeitern aus.
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
              <p className="mono-label text-stone">Benannte Fachpartner</p>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-muted-foreground">
                Diese Betriebe bringen ihre eigene Qualifikation ein. Ihre
                Zulassungen und Nachweise gehören dem jeweiligen Partner, nicht
                UM Haus&amp;Bau.
              </p>
              <ul className="mt-6 divide-y divide-border">
                {partners.map((p) => (
                  <li key={p.slug} className="py-3.5">
                    {p.url ? (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-semibold text-navy transition-colors hover:text-navy-deep"
                      >
                        {p.name}
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    ) : (
                      <span className="font-semibold">{p.name}</span>
                    )}
                    <p className="mt-0.5 text-sm text-muted-foreground">{p.role}</p>
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
              Kontakt aufnehmen <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
