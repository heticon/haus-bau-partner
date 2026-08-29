import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Eyebrow } from "@/components/site/Eyebrow";
import { contact } from "@/lib/site-data";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Anfrage für Bau & Sanierung | UM Haus&Bau" },
      {
        name: "description",
        content:
          "Anfrage für Sanierung, Neubau oder Innenausbau in Hamburg und Norderstedt: Telefon und WhatsApp +49 160 5972746, vasylursol@umhausbau.de. Mo–Sa nach Vereinbarung.",
      },
      { property: "og:title", content: "Kontakt — UM Haus&Bau" },
      {
        property: "og:description",
        content:
          "Ein Ansprechpartner für Ihr gesamtes Bau- oder Sanierungsprojekt. Telefon, WhatsApp oder E-Mail.",
      },
    ],
  }),
  component: KontaktPage,
});

function KontaktPage() {
  return (
    <>
      <PageHero
        label="Kontakt"
        title={
          <>
            Erzählen Sie uns von{" "}
            <span className="accent-italic text-navy-light">Ihrem Vorhaben.</span>
          </>
        }
        lead="Ob Komplettsanierung, Neubau, Fassade oder Möbel nach Maß: schildern Sie kurz Objekt, Umfang und Wunschtermin — wir melden uns zeitnah zurück."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-site px-5 py-20 md:px-8 md:py-28">
          <Eyebrow label="Direkt erreichbar" />
          <h2 className="mt-7 max-w-2xl text-3xl font-bold leading-[1.08] md:text-[2.5rem]">
            Rufen Sie an oder <span className="accent-italic text-navy">schreiben Sie.</span>
          </h2>

          <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:gap-16">
            <div className="space-y-8">
              <div>
                <p className="mono-label text-stone">Telefon &amp; WhatsApp</p>
                <a
                  href={contact.phoneHref}
                  className="mt-2 block text-2xl font-bold transition-colors hover:text-navy md:text-3xl"
                >
                  {contact.phone}
                </a>
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex rounded-full border border-navy/25 px-5 py-2 text-sm font-semibold text-navy transition-colors hover:bg-navy/5"
                >
                  Per WhatsApp schreiben
                </a>
              </div>

              <div className="grid gap-x-6 gap-y-7 border-t border-border pt-8 sm:grid-cols-2">
                <div>
                  <p className="mono-label text-stone">E-Mail</p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="mt-2 block font-semibold transition-colors hover:text-navy"
                  >
                    {contact.email}
                  </a>
                </div>
                <div>
                  <p className="mono-label text-stone">Ansprechpartner</p>
                  <p className="mt-2 font-semibold">{contact.person}</p>
                </div>
                <div>
                  <p className="mono-label text-stone">Büro &amp; Möbelwerkstatt</p>
                  <p className="mt-2 text-[0.975rem] leading-relaxed text-muted-foreground">
                    {contact.office}
                  </p>
                </div>
                <div>
                  <p className="mono-label text-stone">Firmensitz</p>
                  <p className="mt-2 text-[0.975rem] leading-relaxed text-muted-foreground">
                    {contact.registered}
                  </p>
                </div>
                <div>
                  <p className="mono-label text-stone">Öffnungszeiten</p>
                  <p className="mt-2 text-[0.975rem] text-muted-foreground">{contact.hours}</p>
                </div>
                <div>
                  <p className="mono-label text-stone">Einsatzgebiet</p>
                  <p className="mt-2 text-[0.975rem] leading-relaxed text-muted-foreground">
                    Schwerpunkt {contact.area}; bis rund 200–300 km um Hamburg auf Anfrage.
                  </p>
                </div>
              </div>

              <div className="border-t border-border pt-8">
                <p className="mono-label text-stone">Was für Ihre Anfrage hilfreich ist</p>
                <ul className="mt-5 space-y-2.5 text-[0.975rem] text-muted-foreground">
                  {[
                    "Art des Objekts (Wohnung, Haus, Gewerbe)",
                    "Ort und ungefähre Fläche",
                    "Gewünschter Umfang der Arbeiten",
                    "Zeitlicher Rahmen",
                    "Vorhandene Pläne oder Fotos",
                  ].map((i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-navy" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <p className="mono-label text-stone">Firmensitz</p>
              <p className="mt-2 text-[0.975rem] leading-relaxed text-muted-foreground">
                {contact.registered}
              </p>
              <div className="mt-5 aspect-[4/3] w-full overflow-hidden rounded-lg border border-navy/12 lg:aspect-auto lg:h-[calc(100%-4.5rem)] lg:min-h-[26rem]">
                <iframe
                  title="UM Haus&Bau — Firmensitz Norderstedt"
                  src="https://www.google.com/maps?q=Ulzburger+Stra%C3%9Fe+523b,+22844+Norderstedt&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="surface-dark">
        <div className="mx-auto max-w-site px-5 py-16 md:px-8 md:py-20">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                Noch unsicher beim Umfang?
              </h2>
              <p className="mt-3 max-w-md text-[1.0625rem] leading-relaxed text-white/65">
                Der Kostenkalkulator gibt in wenigen Minuten eine erste, unverbindliche
                Orientierung.
              </p>
            </div>
            <Link
              to="/projekt-kalkulieren"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink transition duration-200 ease-out hover:-translate-y-0.5 hover:opacity-90"
            >
              Projekt kalkulieren <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
