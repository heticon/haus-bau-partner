import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { contact } from "@/lib/site-data";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum | UM Haus&Bau Vasyl Ursol" },
      {
        name: "description",
        content:
          "Impressum und Angaben gemäß § 5 DDG von UM Haus&Bau Vasyl Ursol, Ulzburger Straße 523b, 22844 Norderstedt.",
      },
      { property: "og:title", content: "Impressum — UM Haus&Bau" },
      {
        property: "og:description",
        content: "Anbieterkennzeichnung von UM Haus&Bau Vasyl Ursol, Norderstedt.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <>
      <PageHero number="09" label="Impressum" title="Impressum" />
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
          <div className="space-y-12">
            <div>
              <h2 className="text-xl font-bold">Angaben gemäß § 5 DDG</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                UM Haus&amp;Bau Vasyl Ursol
                <br />
                {contact.registered}
                <br />
                Deutschland
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold">Büro &amp; Werkstatt</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {contact.office}
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold">Kontakt</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Telefon: {contact.phone}
                <br />
                E-Mail: {contact.email}
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold">Steuerliche Angaben</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Umsatzsteuer-Identifikationsnummer: DE428496660
                <br />
                Steuernummer: 11/190/00368
              </p>
            </div>
            <div className="rounded-lg border border-border bg-muted/60 p-7">
              <p className="mono-label text-stone">Noch zu ergänzen</p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                <li>Rechtsform</li>
                <li>Vollständiger Name des Inhabers / Geschäftsführers</li>
                <li>Handelsregisternummer und Registergericht (falls zutreffend)</li>
                <li>
                  Verantwortlich für den Inhalt sowie Hinweise zu Haftung und
                  Urheberrecht
                </li>
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Diese Angaben werden nach Vorliegen der endgültigen Unterlagen
                ergänzt.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
