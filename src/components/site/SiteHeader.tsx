import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/um-logo.jpg.asset.json";
import { contact, serviceDetails } from "@/lib/site-data";

const nav = [
  { to: "/ueber-uns", label: "Über uns" },
  { to: "/projekte", label: "Projekte" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="mx-auto grid max-w-site grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img
            src={logo.url}
            alt="UM Haus&Bau Logo"
            width={48}
            height={48}
            className="h-11 w-11 shrink-0 object-contain"
          />
          <span className="min-w-0">
            <span className="block truncate text-sm font-extrabold tracking-tight text-foreground">
              UM HAUS&amp;BAU
            </span>
            <span className="mono-label block truncate text-[0.6rem] text-muted-foreground">
              Energiesanierung &amp; Innenausbau
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-7 lg:flex">
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                to="/leistungen"
                className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-sm font-semibold text-foreground" }}
              >
                Leistungen <ChevronDown className="h-3.5 w-3.5" />
              </Link>
              {servicesOpen ? (
                <div className="absolute left-0 top-full w-80 pt-4">
                  <ul className="overflow-hidden rounded-lg border border-border bg-background py-2 shadow-lg">
                    {serviceDetails.map((s) => (
                      <li key={s.slug}>
                        <Link
                          to="/leistungen/$slug"
                          params={{ slug: s.slug }}
                          className="block px-5 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        >
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-sm font-semibold text-foreground" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <a
            href={contact.phoneHref}
            className="hidden rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-navy-deep md:inline-flex"
          >
            Jetzt Anrufen
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menü"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-border bg-background px-5 py-4 lg:hidden">
          <ul className="space-y-1">
            <li>
              <Link
                to="/leistungen"
                onClick={() => setOpen(false)}
                className="block py-2 text-base font-medium text-foreground"
              >
                Leistungen
              </Link>
              <ul className="mb-2 space-y-1 border-l border-border pl-4">
                {serviceDetails.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to="/leistungen/$slug"
                      params={{ slug: s.slug }}
                      onClick={() => setOpen(false)}
                      className="block py-1.5 text-sm text-muted-foreground"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {nav.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-base font-medium text-foreground"
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={contact.phoneHref}
                className="mt-2 inline-flex rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                Jetzt Anrufen
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
