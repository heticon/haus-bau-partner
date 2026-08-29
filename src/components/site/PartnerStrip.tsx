import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "./Eyebrow";
import { partners } from "@/lib/site-data";
import { partnerLogo } from "@/lib/partner-logos";

/** Homepage strip of named specialist partners (coordinated, not in-house). */
export function PartnerStrip() {
  return (
    <div>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:items-end">
        <div>
          <Eyebrow label="Fachpartner" />
          <h2 className="mt-7 text-3xl font-bold leading-[1.08] md:text-[2.75rem]">
            Gewerke, die wir <span className="accent-italic text-navy">koordinieren.</span>
          </h2>
        </div>
        <p className="text-[1.0625rem] leading-relaxed text-muted-foreground">
          Einzelne Gewerke bringen benannte Partnerbetriebe mit eigener Qualifikation ein — von
          uns geplant, terminiert und koordiniert. Ihre Zulassungen und Nachweise gehören dem
          jeweiligen Partner.
        </p>
      </div>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {partners.map((p) => {
          const logo = partnerLogo(p.slug);
          const body = (
            <>
              <div className="flex h-16 items-center">
                {logo ? (
                  <img
                    src={logo}
                    alt={p.name}
                    loading="lazy"
                    className="max-h-16 w-auto max-w-[11rem] object-contain object-left"
                  />
                ) : (
                  <span className="text-lg font-bold leading-tight text-foreground">{p.name}</span>
                )}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{p.role}</p>
              {p.url ? (
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
                  Website
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              ) : null}
            </>
          );

          return (
            <li key={p.slug}>
              {p.url ? (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-lg border border-navy/12 bg-card p-6 transition-colors hover:border-navy/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  {body}
                </a>
              ) : (
                <div className="group flex h-full flex-col rounded-lg border border-navy/12 bg-card p-6">
                  {body}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
