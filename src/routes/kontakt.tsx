import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
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
                <p className="mt-2 text-[1.0625rem] text-muted-foreground">{contact.hours}</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg border border-navy/15 p-8">
              <p className="mono-label text-navy">Büro &amp; Möbelwerkstatt</p>
              <p className="mt-4 text-[1.0625rem] leading-relaxed">{contact.office}</p>
              <p className="mt-8 mono-label text-navy">Firmensitz</p>
              <p className="mt-4 text-[1.0625rem] leading-relaxed">{contact.registered}</p>
            </div>
            <div className="rounded-lg border border-border bg-muted/60 p-8">
              <p className="mono-label text-stone">Einsatzgebiet</p>
              <p className="mt-4 text-[1.0625rem] leading-relaxed text-muted-foreground">
                Schwerpunkt {contact.area}. Projekte in einem Umkreis von rund 200–300 km um Hamburg
                prüfen wir auf Anfrage gern.
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

      {/* Contact form */}
      <section className="surface-cream">
        <div className="mx-auto max-w-site px-5 py-20 md:px-8 md:py-28">
          <Eyebrow label="Anfrage senden" />
          <h2 className="mt-7 max-w-2xl text-3xl font-bold leading-[1.08] md:text-[2.5rem]">
            Oder direkt <span className="accent-italic text-navy">Formular ausfüllen.</span>
          </h2>
          <div className="mt-12 max-w-2xl">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Google maps box */}
      <section className="bg-background">
        <div className="mx-auto max-w-site px-5 py-16 md:px-8 md:py-20">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="mono-label text-stone">Büro &amp; Möbelwerkstatt</p>
              <div className="mt-4 aspect-[4/3] w-full overflow-hidden rounded-lg border border-navy/12">
                <iframe
                  title="UM Haus&Bau — Büro & Möbelwerkstatt Norderstedt"
                  src="https://www.google.com/maps?q=Bombeck-Str.+12,+22851+Norderstedt&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <div>
              <p className="mono-label text-stone">Firmensitz</p>
              <div className="mt-4 aspect-[4/3] w-full overflow-hidden rounded-lg border border-navy/12">
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
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
            >
              Projekt kalkulieren <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-lg border border-navy/15 bg-white/70 p-8">
        <p className="text-lg font-semibold">Vielen Dank für Ihre Anfrage.</p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Wir melden uns zeitnah bei Ihnen zurück. Bei dringenden Anliegen erreichen Sie uns
          telefonisch unter{" "}
          <a href={contact.phoneHref} className="font-semibold text-navy">
            {contact.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // Form submission handling (e.g. email service, backend endpoint) to be
        // connected later — intentionally left as a structural placeholder.
        setSubmitted(true);
      }}
      className="grid gap-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="E-Mail" name="email" type="email" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Telefon" name="phone" type="tel" />
        <Field label="Ort" name="location" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Art des Projekts" name="projectType" />
        <FileField label="Datei anhängen (optional)" name="file" />
      </div>
      <label className="grid gap-2 text-sm font-medium text-foreground">
        Kurze Beschreibung
        <textarea
          name="description"
          rows={5}
          className="rounded-md border border-navy/20 bg-white px-4 py-3 text-[0.975rem] outline-none transition-colors focus:border-navy"
        />
      </label>
      <button
        type="submit"
        className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-navy-deep"
      >
        Anfrage senden <ArrowUpRight className="h-4 w-4" />
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-foreground">
      {label}
      {required ? <span className="text-navy"> *</span> : null}
      <input
        type={type}
        name={name}
        required={required}
        className="rounded-md border border-navy/20 bg-white px-4 py-3 text-[0.975rem] outline-none transition-colors focus:border-navy"
      />
    </label>
  );
}

function FileField({ label, name }: { label: string; name: string }) {
  return (
    <label className="grid gap-2 text-sm font-medium text-foreground">
      {label}
      <input
        type="file"
        name={name}
        className="rounded-md border border-navy/20 bg-white px-3 py-2.5 text-sm text-muted-foreground outline-none file:mr-3 file:rounded-full file:border-0 file:bg-navy/10 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-navy"
      />
    </label>
  );
}
