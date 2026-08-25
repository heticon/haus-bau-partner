import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { contact } from "@/lib/site-data";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung | UM Haus&Bau" },
      {
        name: "description",
        content:
          "Informationen zum Umgang mit personenbezogenen Daten bei UM Haus&Bau Vasyl Ursol, Norderstedt.",
      },
      { property: "og:title", content: "Datenschutz — UM Haus&Bau" },
      {
        property: "og:description",
        content: "Datenschutzhinweise von UM Haus&Bau Vasyl Ursol, Norderstedt.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: DatenschutzPage,
});

const sections = [
  {
    title: "1. Verantwortliche Stelle",
    body: `UM Haus&Bau Vasyl Ursol, ${contact.registered}. Kontakt: ${contact.phone}, ${contact.email}.`,
  },
  {
    title: "2. Erhebung und Verarbeitung personenbezogener Daten",
    body: "Beschreibung der Daten, die bei Kontaktaufnahme per Telefon, WhatsApp oder E-Mail verarbeitet werden — Text folgt.",
  },
  {
    title: "3. Zwecke und Rechtsgrundlagen",
    body: "Darstellung der Verarbeitungszwecke und der jeweiligen Rechtsgrundlagen nach Art. 6 DSGVO — Text folgt.",
  },
  {
    title: "4. Hosting und Server-Logfiles",
    body: "Angaben zum Hosting sowie zu technisch erforderlichen Protokolldaten — Text folgt.",
  },
  {
    title: "5. Weitergabe an Fachpartner und Auftragsverarbeiter",
    body: "Hinweise zur Weitergabe von Daten an beteiligte Fachpartner im Rahmen der Projektabwicklung — Text folgt.",
  },
  {
    title: "6. Speicherdauer",
    body: "Angaben zu Löschfristen und gesetzlichen Aufbewahrungspflichten — Text folgt.",
  },
  {
    title: "7. Ihre Rechte",
    body: "Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch sowie Beschwerderecht bei der Aufsichtsbehörde — Text folgt.",
  },
];

function DatenschutzPage() {
  return (
    <>
      <PageHero
        number="10"
        label="Datenschutz"
        title="Datenschutzerklärung"
        lead="Diese Seite ist als Struktur angelegt. Die vollständige, rechtlich geprüfte Datenschutzerklärung wird ergänzt."
      />
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
          <div className="divide-y divide-border">
            {sections.map((s) => (
              <div key={s.title} className="py-8 first:pt-0">
                <h2 className="text-xl font-bold">{s.title}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
