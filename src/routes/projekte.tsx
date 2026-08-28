import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { Eyebrow } from "@/components/site/Eyebrow";
import { projects, reviews } from "@/lib/site-data";
import { projectImage } from "@/lib/project-images";

export const Route = createFileRoute("/projekte")({
  head: () => ({
    meta: [
      { title: "Projekte & Bewertungen | UM Haus&Bau Norderstedt" },
      {
        name: "description",
        content:
          "11 ausgeführte Projekte in Hamburg und Umgebung — Komplettsanierung, Kellerabdichtung, Trockenbau und Möbelbau. Dazu 10 MyHammer-Bewertungen mit 5 von 5 Sternen.",
      },
      { property: "og:title", content: "Projekte & Bewertungen — UM Haus&Bau" },
      {
        property: "og:description",
        content:
          "Referenzprojekte aus Hamburg und Umgebung sowie alle MyHammer-Bewertungen im Original.",
      },
    ],
  }),
  component: ProjektePage,
});

function ProjektePage() {
  // Featured: first 3 projects marked featured, rest keep original order (§6)
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  const standard = projects.filter((p) => !featured.includes(p));
  const ordered = [...featured, ...standard];

  return (
    <>
      <PageHero
        number="02"
        label="Projekte"
        title={
          <>
            Arbeiten, die man{" "}
            <span className="accent-italic text-navy-light">nachprüfen kann.</span>
          </>
        }
        lead="11 realisierte Projekte in Hamburg, Norderstedt und Umgebung — vom abgedichteten Keller bis zur komplett sanierten Wohnung."
      />

      <section className="surface-cream">
        <div className="mx-auto max-w-site px-5 py-20 md:px-8 md:py-28">
          <div className="grid gap-6 lg:grid-cols-3">
            {ordered.map((p, index) => {
              const isFeaturedRow = index < 3;
              return (
                <Link
                  key={p.slug}
                  to="/projekte/$slug"
                  params={{ slug: p.slug }}
                  className="group overflow-hidden rounded-lg border border-navy/12 bg-white transition-shadow hover:shadow-lg"
                >
                  <div className="relative">
                    <img
                      src={projectImage(p.slug) as unknown as string}
                      alt={p.title}
                      width={1280}
                      height={960}
                      loading={index === 0 ? "eager" : "lazy"}
                      className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${
                        isFeaturedRow ? "h-64 md:h-80" : "h-52 md:h-60"
                      }`}
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent p-6 pt-16">
                      <p className="mono-label text-white/70">
                        {p.category} · {p.location}
                      </p>
                      <h2
                        className={`mt-2 font-bold text-white ${
                          isFeaturedRow ? "text-xl md:text-2xl" : "text-lg"
                        }`}
                      >
                        {p.title}
                      </h2>
                    </div>
                    {p.featured ? (
                      <span className="absolute right-5 top-5 rounded-full bg-white/90 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-navy">
                        Referenz
                      </span>
                    ) : null}
                  </div>
                  <div className="flex items-center justify-between gap-4 p-6">
                    <p className="text-sm leading-relaxed text-muted-foreground">{p.info}</p>
                    <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-navy">
                      Mehr erfahren <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Weitere Projektfotos stellen wir Ihnen auf Anfrage passend zu Ihrem Vorhaben zusammen.
          </p>
        </div>
      </section>

      <section className="surface-dark">
        <div className="mx-auto max-w-site px-5 py-20 md:px-8 md:py-28">
          <Eyebrow number="03" label="Bewertungen auf MyHammer" tone="light" />
          <div className="mt-7 grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <h2 className="max-w-2xl text-3xl font-bold text-white md:text-[2.75rem]">
              Zehn Bewertungen,{" "}
              <span className="accent-italic text-navy-light">zehn mal 5 von 5.</span>
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-white/55">
              Alle nachfolgenden Bewertungen stammen von der Plattform MyHammer und sind dort
              öffentlich einsehbar.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {reviews.map((r) => (
              <article
                key={`${r.name}-${r.date}`}
                className="flex flex-col rounded-lg border border-white/12 bg-white/[0.04] p-7"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-xs tracking-[0.18em] text-navy-light">5 / 5</span>
                  <span className="font-mono text-[0.7rem] text-white/40">{r.date}</span>
                </div>
                <p className="mt-6 text-[1.0625rem] leading-relaxed text-white/85">„{r.text}“</p>
                <div className="mt-auto pt-7">
                  <p className="text-sm font-semibold text-white">
                    {r.name} · {r.location}
                  </p>
                  <p className="mt-1 text-sm text-white/45">{r.service}</p>
                  <p className="mono-label mt-3 text-white/30">Quelle: MyHammer</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
