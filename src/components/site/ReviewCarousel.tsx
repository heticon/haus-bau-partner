import { useCallback, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Eyebrow } from "./Eyebrow";
import { reviews } from "@/lib/site-data";

const MONTHS = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

function monthYear(date: string): string {
  const [, mm, yyyy] = date.split(".");
  const month = MONTHS[Number(mm) - 1];
  return month && yyyy ? `${month} ${yyyy}` : date;
}

/** One large testimonial at a time on a dark section, with arrows and dots. */
export function ReviewCarousel({
  featuredOnly = false,
  showAllLink = true,
}: {
  /** Homepage shows a curated few; /projekte shows every review. */
  featuredOnly?: boolean;
  showAllLink?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const items = featuredOnly ? reviews.filter((r) => r.featured) : reviews;
  const count = items.length;

  const go = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count],
  );
  const prev = useCallback(() => go(index - 1), [go, index]);
  const next = useCallback(() => go(index + 1), [go, index]);

  const review = items[index];
  if (!review) return null;

  return (
    <section
      aria-roledescription="Karussell"
      aria-label="Kundenstimmen"
      className="focus-visible:outline-none"
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
      }}
    >
      <div className="flex items-end justify-between gap-6">
        <div>
          <Eyebrow label="Bewertungen · MyHammer" tone="light" />
          <h2 className="mt-7 text-3xl font-bold leading-[1.08] text-white md:text-[3rem]">
            5 von 5 <span className="accent-italic text-navy-light">Sternen.</span>
          </h2>
        </div>
        <div className="hidden shrink-0 gap-3 sm:flex">
          <CarouselButton label="Vorherige Bewertung" onClick={prev}>
            <ChevronLeft className="h-4 w-4" />
          </CarouselButton>
          <CarouselButton label="Nächste Bewertung" onClick={next}>
            <ChevronRight className="h-4 w-4" />
          </CarouselButton>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="flex gap-0.5" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-navy-light text-navy-light" />
          ))}
        </span>
        <span className="text-sm text-white/55">
          {featuredOnly
            ? `Ausgewählte Kundenstimmen — alle ${reviews.length} MyHammer-Bewertungen mit 5 von 5 Sternen.`
            : `Alle ${reviews.length} MyHammer-Bewertungen: 5 von 5 Sternen, öffentlich einsehbar.`}
        </span>
      </div>

      <figure className="mt-12 rounded-2xl border border-white/12 bg-white/[0.04] p-8 md:p-12">
        <blockquote
          key={index}
          aria-live="polite"
          className="flex min-h-[9rem] flex-col justify-center text-xl font-medium leading-relaxed text-white/90 motion-safe:animate-in motion-safe:fade-in motion-safe:duration-300 md:min-h-[8rem] md:text-2xl"
        >
          „{review.text}“
        </blockquote>
        <figcaption className="mt-8 border-t border-white/10 pt-6">
          <p className="text-sm">
            <span className="font-semibold text-white">{review.name}</span>
            <span className="text-white/50"> — {review.location}</span>
          </p>
          <p className="mono-label mt-2 text-white/35">
            {review.service} · MyHammer, {monthYear(review.date)}
          </p>
        </figcaption>
      </figure>

      <div className="mt-8 flex items-center justify-between gap-6">
        <div className="flex gap-1.5" role="tablist" aria-label="Bewertung auswählen">
          {items.map((r, i) => (
            <button
              key={`${r.name}-${r.date}`}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Bewertung ${i + 1} von ${count}`}
              onClick={() => go(i)}
              className={`h-1.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${
                i === index ? "w-6 bg-white" : "w-1.5 bg-white/25 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <div className="flex gap-3 sm:hidden">
            <CarouselButton label="Vorherige Bewertung" onClick={prev}>
              <ChevronLeft className="h-4 w-4" />
            </CarouselButton>
            <CarouselButton label="Nächste Bewertung" onClick={next}>
              <ChevronRight className="h-4 w-4" />
            </CarouselButton>
          </div>
          {showAllLink ? (
            <Link
              to="/projekte"
              className="hidden text-sm font-semibold text-white transition-colors hover:text-white/80 sm:inline"
            >
              Alle Bewertungen
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function CarouselButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
    >
      {children}
    </button>
  );
}
