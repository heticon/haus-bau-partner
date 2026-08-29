import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { Eyebrow } from "@/components/site/Eyebrow";
import { ReviewCarousel } from "@/components/site/ReviewCarousel";
import { PartnerStrip } from "@/components/site/PartnerStrip";
import { services, process, contact, projects } from "@/lib/site-data";
import { projectCover } from "@/lib/project-images";
import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "UM Haus&Bau — Sanierung & Bau aus einer Hand in Hamburg",
      },
      {
        name: "description",
        content:
          "Bauunternehmen aus Norderstedt: Komplettsanierung, Neubau, Fassade, Innenausbau und Möbelbau — ein Ansprechpartner für Ihr gesamtes Projekt in Hamburg und Umgebung.",
      },
      {
        property: "og:title",
        content: "UM Haus&Bau — Sanierung & Bau aus einer Hand in Hamburg",
      },
      {
        property: "og:description",
        content:
          "Ein Ansprechpartner für Ihr gesamtes Bau- oder Sanierungsprojekt: von der Planung bis zur Fertigstellung.",
      },
    ],
  }),
  component: Index,
});

const faqs = [
  {
    q: "In welchen Regionen ist UM Haus&Bau tätig?",
    a: "Schwerpunkt sind Hamburg, Norderstedt und die umliegenden Gemeinden. Projekte in einem Umkreis von rund 200–300 km um Hamburg prüfen wir auf Anfrage.",
  },
  {
    q: "Übernehmen Sie auch Elektro-, Sanitär- und Heizungsarbeiten?",
    a: "Diese Arbeiten führen wir nicht selbst aus. Sie werden von qualifizierten Fachpartnern erbracht — zum Beispiel AF Elektro GmbH für Elektro und BuB Bau GmbH für Sanitär und Heizung — und von uns koordiniert.",
  },
  {
    q: "Arbeiten Sie auch für Privatpersonen mit einzelnen Räumen?",
    a: "Ja. Neben Komplettsanierungen planen und realisieren wir einzelne Räume, Badezimmer und Möbel nach Maß in unserer eigenen Möbelwerkstatt in Norderstedt.",
  },
  {
    q: "Wie läuft eine erste Anfrage ab?",
    a: "Sie schildern Ihr Vorhaben telefonisch, per WhatsApp oder E-Mail. Anschließend vereinbaren wir einen Ortstermin, klären den tatsächlichen Umfang und legen ein nachvollziehbares Angebot vor.",
  },
];

const stats = [
  { value: "15 J.", label: "Erfahrung Geschäftsführung" },
  { value: "40 J.", label: "Erfahrung Maurermeister" },
  { value: "8", label: "Feste Mitarbeiter" },
  { value: "10 × 5/5", label: "MyHammer-Bewertungen" },
];

const featuredProjects = [
  ...projects.filter((p) => p.featured),
  ...projects.filter((p) => !p.featured),
]
  .slice(0, 5)
  .map((p, i) => ({
    slug: p.slug,
    image: projectCover(p.slug),
    category: `${p.category} · ${p.location}`,
    title: p.title,
    featured: i === 0,
  }));

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink">
        <img
          src={hero}
          alt="Modernisiertes Mehrfamilienhaus mit Gerüst in der Abenddämmerung"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-ink/90 via-ink/70 to-navy-deep/85" />
        <div className="relative mx-auto max-w-site px-5 pb-14 pt-28 md:px-8 md:pb-52 md:pt-36">
          <Eyebrow label="Bauunternehmen Norderstedt · seit 2024" tone="light" />
          <h1 className="mt-8 max-w-4xl text-[2.25rem] font-extrabold leading-[1.06] text-white sm:text-[2.5rem] sm:leading-[1.02] md:text-7xl">
            Alles aus einer Hand —{" "}
            <span className="accent-italic text-navy-light">ein Ansprechpartner</span> für Ihr
            Projekt.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70">
            Sanierung, Neubau und Innenausbau für private und gewerbliche Kunden in Hamburg und
            Umgebung. Von der Planung bis zur Fertigstellung — geplant, koordiniert und ausgeführt
            aus einem Haus.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink transition duration-200 ease-out hover:-translate-y-0.5 hover:opacity-90"
            >
              Projekt anfragen <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              to="/projekte"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Projekte ansehen
            </Link>
          </div>
        </div>

        {/* Stats bar — in flow on mobile, overlay on the hero from md up */}
        <div className="relative border-t border-white/12 bg-ink/55 backdrop-blur-sm md:absolute md:inset-x-0 md:bottom-0">
          <dl className="mx-auto grid max-w-site grid-cols-2 divide-white/12 px-5 md:grid-cols-4 md:divide-x md:px-8">
            {stats.map((s) => (
              <div key={s.label} className="px-4 py-6 md:px-8 md:py-9">
                <dt className="font-mono text-2xl font-bold text-white md:text-3xl">{s.value}</dt>
                <dd className="mono-label mt-2 text-white/50">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Manifest / problem → solution */}
      <section className="surface-cream">
        <div className="mx-auto max-w-site px-5 py-20 md:px-8 md:py-32">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)]">
            <div>
              <Eyebrow label="Warum UM Haus&Bau" />
              <h2 className="mt-7 text-3xl font-bold leading-[1.08] md:text-[3rem]">
                Ein Zuhause ist mehr als{" "}
                <span className="accent-italic text-navy">nur ein Bauprojekt.</span>
              </h2>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-foreground/85">
                Jedes Gebäude und jeder Kunde hat andere Wünsche. Deshalb arbeiten wir nicht nach
                einem festen Schema.
              </p>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-muted-foreground">
                Wir hören zu, beraten ehrlich und suchen gemeinsam nach der Lösung, die wirklich zu
                Ihrem Projekt passt. Dabei übernehmen wir nicht nur einzelne Arbeiten, sondern
                begleiten Sie von der ersten Idee bis zur fertigen Umsetzung.
              </p>
              <p className="mt-6 text-[1.0625rem] font-semibold leading-relaxed">
                Sie haben die Idee.{" "}
                <span className="accent-italic font-normal text-navy">
                  Wir machen daraus ein fertiges Projekt.
                </span>
              </p>
            </div>
          </div>

          <div className="mt-14 md:mt-20">
            <p className="font-semibold">Was uns dabei wichtig ist:</p>
            <div className="mt-4 grid gap-px overflow-hidden rounded-lg border border-navy/12 bg-navy/12 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  k: "Persönliche Betreuung",
                  v: "Sie haben immer einen festen Ansprechpartner.",
                },
                {
                  k: "Alles an einem Ort",
                  v: "Verschiedene Arbeiten koordinieren und setzen wir für Sie um.",
                },
                {
                  k: "Individuelle Lösungen",
                  v: "Wir passen unsere Arbeit an Ihr Gebäude und Ihre Wünsche an.",
                },
                {
                  k: "Saubere Arbeit",
                  v: "Mit erfahrenen Fachkräften und zuverlässigen Partnern.",
                },
              ].map((i) => (
                <div key={i.k} className="bg-cream p-6">
                  <p className="font-semibold leading-snug">{i.k}</p>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">{i.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services — dark */}
      <section className="surface-dark">
        <div className="mx-auto max-w-site px-5 py-20 md:px-8 md:py-32">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:items-end">
            <div>
              <Eyebrow label="Leistungen" tone="light" />
              <h2 className="mt-7 text-3xl font-bold leading-[1.08] text-white md:text-[3rem]">
                Vom Fundament bis zum{" "}
                <span className="accent-italic text-navy-light">letzten Detail.</span>
              </h2>
            </div>
            <div>
              <p className="text-[1.0625rem] leading-relaxed text-white/60">
                Acht Leistungsbereiche — koordiniert als ein Projekt, nicht als acht Einzelaufträge.
              </p>
              <Link
                to="/leistungen"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Alle Leistungen <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((s) => (
              <Link
                key={s.number}
                to="/leistungen"
                className="group relative flex min-h-56 flex-col overflow-hidden rounded-lg border border-white/12 bg-white/[0.035] p-7 transition hover:border-navy-light/60 hover:bg-navy-light/[0.08]"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-5 -right-5 h-20 w-20 rounded-full bg-navy-light/20 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-50"
                />
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-xs text-navy-light">{s.number}</span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 -translate-y-3 translate-x-3 text-navy-light opacity-0 transition duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-white">{s.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-white/55">{s.intro}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Kostenkalkulator CTA */}
      <section className="surface-cream">
        <div className="mx-auto max-w-site px-5 py-20 md:px-8 md:py-28">
          <div className="grid gap-8 rounded-lg border border-navy/12 bg-white/80 p-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:p-14">
            <div>
              <Eyebrow label="Kostenkalkulator" />
              <h2 className="mt-6 max-w-lg text-2xl font-bold leading-[1.1] md:text-[2.25rem]">
                Eine erste Orientierung,{" "}
                <span className="accent-italic text-navy">bevor Sie anrufen.</span>
              </h2>
              <p className="mt-4 max-w-md text-[1.0625rem] leading-relaxed text-muted-foreground">
                In wenigen Schritten zu einer unverbindlichen Kosteneinschätzung für Ihr Vorhaben.
              </p>
            </div>
            <Link
              to="/projekt-kalkulieren"
              className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-primary-foreground transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-navy-deep"
            >
              Projekt kalkulieren <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Über uns split */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-site gap-14 px-5 py-20 md:px-8 md:py-32 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <img
              src={about}
              alt="Einfamilienhaus mit neu gedämmter und verputzter Fassade"
              width={1280}
              height={1600}
              loading="lazy"
              className="w-full rounded-lg object-cover"
            />
            <div className="absolute bottom-0 left-0 max-w-[14rem] rounded-tr-lg bg-navy p-6 text-primary-foreground">
              <p className="text-3xl font-extrabold">ca. 17</p>
              <p className="mono-label mt-2 text-white/70">Personen inkl. Fachpartner am Projekt</p>
            </div>
          </div>
          <div>
            <Eyebrow label="Über uns" />
            <h2 className="mt-7 text-3xl font-bold leading-[1.08] md:text-[2.75rem]">
              Handwerk, Planung und{" "}
              <span className="accent-italic text-navy">Bauleitung in einem Team.</span>
            </h2>
            <p className="mt-6 text-[1.0625rem] leading-relaxed text-muted-foreground">
              UM Haus&amp;Bau wurde am 01.07.2024 in Norderstedt gegründet. Aus Renovierungen,
              Terrassenbau und Abdichtungen ist seit Anfang 2025 ein Anbieter für komplette
              Sanierungen, Neubauten und die vollständige Projektkoordination geworden.
            </p>
            <p className="mt-4 text-[1.0625rem] leading-relaxed text-muted-foreground">
              Rund 15 Jahre Bauerfahrung in der Geschäftsführung, ein Maurermeister mit rund 40
              Jahren Erfahrung in Deutschland, 8 feste Mitarbeiter und ein eingespielter Kreis von
              Fachpartnern.
            </p>
            <Link
              to="/ueber-uns"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-navy/25 px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-navy/5"
            >
              Mehr über uns <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="surface-cream">
        <div className="mx-auto max-w-site px-5 py-20 md:px-8 md:py-32">
          <Eyebrow label="Ablauf" />
          <h2 className="mt-7 max-w-3xl text-3xl font-bold leading-[1.08] md:text-[3rem]">
            Vier Schritte, <span className="accent-italic text-navy">ein Ansprechpartner.</span>
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

      {/* Projekte */}
      <section className="bg-background">
        <div className="mx-auto max-w-site px-5 py-20 md:px-8 md:py-32">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div>
              <Eyebrow label="Projekte" />
              <h2 className="mt-7 text-3xl font-bold leading-[1.08] md:text-[3rem]">
                Realisiert in Hamburg <span className="accent-italic text-navy">und Umgebung.</span>
              </h2>
            </div>
            <Link
              to="/projekte"
              className="inline-flex items-center gap-2 rounded-full border border-navy/25 px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-navy/5"
            >
              Alle Projekte <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((p) => (
              <Link
                key={p.title}
                to="/projekte/$slug"
                params={{ slug: p.slug }}
                className={`group block transition duration-200 ease-out hover:-translate-y-0.5 ${
                  p.featured ? "lg:col-span-2" : ""
                }`}
              >
                <div className="relative overflow-hidden rounded-lg bg-ink">
                  <div className="relative transition-transform duration-500 group-hover:scale-[1.03]">
                    <img
                      src={p.image}
                      alt={p.title}
                      width={1280}
                      height={960}
                      loading="lazy"
                      className="h-72 w-full object-cover md:h-96"
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink/70 via-ink/25 to-transparent" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <p className="mono-label text-white/65">{p.category}</p>
                    <h3 className="mt-2 text-xl font-bold text-white md:text-2xl">{p.title}</h3>
                  </div>
                  {p.featured ? (
                    <span className="absolute right-5 top-5 rounded-full bg-white/90 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-navy">
                      Referenz
                    </span>
                  ) : null}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bewertungen */}
      <section className="surface-dark">
        <div className="mx-auto max-w-site px-5 py-20 md:px-8 md:py-32">
          <ReviewCarousel featuredOnly />
        </div>
      </section>

      {/* FAQ */}
      <section className="surface-cream">
        <div className="mx-auto grid max-w-site gap-14 px-5 py-20 md:px-8 md:py-32 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)]">
          <div>
            <Eyebrow label="Häufige Fragen" />
            <h2 className="mt-7 text-3xl font-bold leading-[1.08] md:text-[2.75rem]">
              Antworten, <span className="accent-italic text-navy">die zählen.</span>
            </h2>
            <p className="mt-6 max-w-sm text-[1.0625rem] leading-relaxed text-muted-foreground">
              Weitere Fragen klären wir am schnellsten direkt:{" "}
              <a href={contact.phoneHref} className="font-semibold text-navy">
                {contact.phone}
              </a>
            </p>
          </div>
          <div className="divide-y divide-navy/15 border-y border-navy/15">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    aria-expanded={open}
                    className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-5 py-6 text-left"
                  >
                    <span className="min-w-0 font-semibold">{f.q}</span>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-navy/30 text-navy">
                      {open ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                    </span>
                  </button>
                  {open ? (
                    <p className="max-w-2xl pb-7 text-[1.0625rem] leading-relaxed text-muted-foreground">
                      {f.a}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Kontakt — low-friction final conversion point */}
      <section className="surface-dark">
        <div className="mx-auto max-w-site px-5 py-20 md:px-8 md:py-32">
          <Eyebrow label="Kontakt" tone="light" />
          <div className="mt-7 grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <h2 className="max-w-2xl text-3xl font-bold text-white md:text-[3rem]">
              Erzählen Sie uns von{" "}
              <span className="accent-italic text-navy-light">Ihrem Vorhaben.</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            <a
              href={contact.phoneHref}
              className="rounded-lg border border-white/12 bg-white/[0.035] p-7 transition-colors hover:border-navy-light/60"
            >
              <p className="mono-label text-white/50">Telefon &amp; WhatsApp</p>
              <p className="mt-3 text-lg font-bold text-white">{contact.phone}</p>
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="rounded-lg border border-white/12 bg-white/[0.035] p-7 transition-colors hover:border-navy-light/60"
            >
              <p className="mono-label text-white/50">E-Mail</p>
              <p className="mt-3 text-lg font-bold text-white">{contact.email}</p>
            </a>
            <Link
              to="/kontakt"
              className="flex flex-col justify-between rounded-lg bg-white p-7 text-ink transition duration-200 ease-out hover:-translate-y-0.5 hover:opacity-90"
            >
              <p className="mono-label text-ink/50">Kontaktformular</p>
              <span className="mt-3 inline-flex items-center gap-2 text-lg font-bold">
                Zum Formular <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Fachpartner */}
      <section className="bg-background">
        <div className="mx-auto max-w-site px-5 py-20 md:px-8 md:py-28">
          <PartnerStrip />
        </div>
      </section>
    </>
  );
}
