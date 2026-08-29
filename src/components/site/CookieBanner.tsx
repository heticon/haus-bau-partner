import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

/**
 * Basic cookie / privacy notice.
 *
 * The site sets no tracking or analytics cookies today; it does load Google
 * Fonts from a third party. This banner records an explicit choice so that can
 * be gated later. Choice is stored in localStorage under `STORAGE_KEY` as
 * `"all"` or `"essential"` — no cookie is written by the banner itself.
 */
const STORAGE_KEY = "um-hausbau-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  // Read on the client only, after mount, so SSR and first client render agree
  // (both render nothing) and there is no hydration mismatch.
  useEffect(() => {
    try {
      if (!window.localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function decide(value: "all" | "essential") {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* storage blocked — dismiss for this session anyway */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <>
      {/* Soft scrim to lift the card off the page — does not block interaction */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 bottom-0 z-[59] h-48 bg-gradient-to-t from-ink/30 to-transparent motion-safe:animate-in motion-safe:fade-in motion-safe:duration-500"
      />
      <div
        role="region"
        aria-label="Cookie-Hinweis"
        className="fixed inset-x-0 bottom-0 z-[60] p-4 sm:p-6 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-8 motion-safe:duration-500"
      >
        <div className="mx-auto flex max-w-3xl flex-col gap-5 rounded-xl border border-white/10 bg-ink p-6 shadow-2xl md:flex-row md:items-center md:justify-between md:p-7">
          <div className="max-w-xl">
            <p className="mono-label text-navy-light">Cookies</p>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Diese Website verwendet technisch notwendige Cookies sowie externe
              Schriftarten (Google Fonts), damit die Seite funktioniert und
              korrekt dargestellt wird. Details finden Sie in unserer{" "}
              <Link
                to="/datenschutz"
                className="font-semibold text-white underline underline-offset-2 transition-colors hover:text-white/80"
              >
                Datenschutzerklärung
              </Link>
              .
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <button
              type="button"
              onClick={() => decide("essential")}
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Nur notwendige
            </button>
            <button
              type="button"
              onClick={() => decide("all")}
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition duration-200 ease-out hover:-translate-y-0.5 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
