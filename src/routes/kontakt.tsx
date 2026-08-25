import { createFileRoute } from "@tanstack/react-router";
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
        number="08"
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
        <div className="mx-auto grid max-w-site gap-14 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-2">
          <div>
            <Eyebrow label="Direkt erreichbar" />
            <div className="mt-10 space-y-8">
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
              <div>
                <p className="mono-label text-stone">E-Mail</p>
                <a
                  href={`mailto:${contact.email}`}
                  className="mt-2 block text-xl font-semibold transition-colors hover:text-navy"
                >
                  {contact.email}
                </a>
              </div>
              <div>
                <p className="mono-label text-stone">Ansprechpartner</p>
                <p className="mt-2 text-xl font-semibold">{contact.person}</p>
              </div>
              <div>
                <p className="mono-label text-stone">Öffnungszeiten</p>
                <p className="mt-2 text-[1.0625rem] text-muted-foreground">
                  {contact.hours}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg border border-navy/15 p-8">
              <p className="mono-label text-navy">Büro &amp; Möbelwerkstatt</p>
              <p className="mt-4 text-[1.0625rem] leading-relaxed">{contact.office}</p>
              <p className="mt-8 mono-label text-navy">Firmensitz</p>
              <p className="mt-4 text-[1.0625rem] leading-relaxed">
                {contact.registered}
              </p>
            </div>
            <div className="rounded-lg border border-border bg-muted/60 p-8">
              <p className="mono-label text-stone">Einsatzgebiet</p>
              <p className="mt-4 text-[1.0625rem] leading-relaxed text-muted-foreground">
                Schwerpunkt {contact.area}. Projekte in einem Umkreis von rund
                200–300 km um Hamburg prüfen wir auf Anfrage gern.
              </p>
            </div>
            <div className="rounded-lg border border-border p-8">
              <p className="mono-label text-stone">Was für uns hilfreich ist</p>
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
        </div>
      </section>
    </>
  );
}
