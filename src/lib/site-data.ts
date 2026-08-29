export const contact = {
  phone: "+49 160 5972746",
  phoneHref: "tel:+491605972746",
  whatsapp: "https://wa.me/491605972746",
  email: "vasylursol@umhausbau.de",
  person: "Vasyl Ursol",
  registered: "Ulzburger Straße 523b, 22844 Norderstedt",
  office: "Bombeck-Str. 12, 22851 Norderstedt",
  hours: "Mo–Sa nach Vereinbarung · So geschlossen",
  area: "Hamburg, Norderstedt und Umgebung",
};

export const services: {
  number: string;
  title: string;
  intro: string;
  items: string[];
  note?: string;
}[] = [
  {
    number: "01",
    title: "Sanierung & Renovierung",
    intro:
      "Komplette Wohnungen und Häuser — von der Bestandsaufnahme bis zur bezugsfertigen Übergabe.",
    items: [
      "Komplettsanierung von Wohnungen",
      "Komplettsanierung von Häusern",
      "Renovierung",
      "Sanierung von Gewerbeimmobilien",
      "Innenausbau",
    ],
  },
  {
    number: "02",
    title: "Bau & Neubau",
    intro: "Tragende Strukturen, sauber geplant und präzise ausgeführt.",
    items: [
      "Neubau von Häusern",
      "Allgemeine Bauarbeiten",
      "Betonarbeiten",
      "Mauerarbeiten",
    ],
  },
  {
    number: "03",
    title: "Dach & Fassade",
    intro: "Gebäudehülle, Dämmung und Abdichtung — dauerhaft und normgerecht.",
    items: [
      "Dachdämmung",
      "Fassadendämmung",
      "Fassadenverkleidung",
      "Fassadenarbeiten",
      "Bauwerksabdichtung",
      "Dekorative Fassadengestaltung",
    ],
  },
  {
    number: "04",
    title: "Innenausbau & Oberflächen",
    intro: "Oberflächen, die den Anspruch des gesamten Projekts sichtbar machen.",
    items: [
      "Malerarbeiten",
      "Putzarbeiten",
      "Dekorative Putze",
      "Wandgestaltung",
      "Deckengestaltung",
      "Bodenarbeiten",
    ],
  },
  {
    number: "05",
    title: "Bad & Raumgestaltung",
    intro: "Individuelle Planung für Räume und Badezimmer — maßgenau gedacht.",
    items: [
      "Individuelle Raumplanung",
      "Badezimmerplanung",
      "Individuelle Designkonzepte",
      "Gestaltung von Räumen und Badezimmern",
    ],
  },
  {
    number: "06",
    title: "Möbelbau",
    intro: "Eigene Möbelwerkstatt in Norderstedt für Möbel nach Maß.",
    items: [
      "Individuelle Möbelplanung",
      "Möbel nach Maß",
      "Herstellung individueller Möbel",
      "Individuelle Innenausstattung",
    ],
  },
  {
    number: "07",
    title: "Haustechnik",
    intro:
      "Elektro-, Sanitär- und Heizungsarbeiten koordinieren wir über qualifizierte Fachpartner.",
    items: [
      "Elektroarbeiten über Fachpartner",
      "Sanitärarbeiten über Fachpartner",
      "Heizungsarbeiten über Fachpartner",
      "Terminliche und technische Koordination",
    ],
    note: "Diese Leistungen werden nicht von UM Haus&Bau selbst ausgeführt, sondern über benannte Fachpartner erbracht und von uns koordiniert.",
  },
  {
    number: "08",
    title: "Hausmeisterservice & Objektbetreuung",
    intro: "Laufende Betreuung von Wohn- und Gewerbeobjekten.",
    items: [
      "Hausmeisterservice",
      "Betreuung von Wohnimmobilien",
      "Betreuung von Gebäuden",
      "Kleinere Instandhaltungsarbeiten",
      "Laufende Objektbetreuung",
    ],
  },
];

export const partners: {
  name: string;
  role: string;
  /** External site, when the partner has one. */
  url?: string;
  /** Optional logo at src/assets/partners/<slug>.{svg,png,jpg,webp}. */
  slug: string;
}[] = [
  {
    name: "AF Elektro GmbH",
    role: "Elektroarbeiten",
    url: "https://af-elektro.de",
    slug: "af-elektro",
  },
  {
    name: "BuB Bau GmbH",
    role: "Sanitär und Heizung",
    url: "https://www.bubbaugmbh.de",
    slug: "bub-bau",
  },
  {
    name: "Schümann Innenausbau",
    role: "Innenausbau und Zimmerei",
    slug: "schuemann-innenausbau",
  },
  {
    name: "Haliuk Möbelbau",
    role: "Möbelbau nach Maß",
    url: "https://www.haliukmoebelbau.de",
    slug: "haliuk-moebelbau",
  },
  { name: "PHILIGNUM GmbH", role: "Projektplanung", slug: "philignum" },
  {
    name: "Ingenieurbüro Dirk Postels",
    role: "Umplanung, Planung und Berechnungen",
    slug: "ingenieurbuero-postels",
  },
];

export const ownQualifications = [
  "Betonarbeiten",
  "Mauerarbeiten",
  "Putzarbeiten",
  "Malerarbeiten",
  "Fliesenarbeiten",
];

export const reviews: {
  name: string;
  location: string;
  date: string;
  service: string;
  text: string;
  /** Shown in the homepage carousel; all reviews appear on /projekte. */
  featured?: boolean;
}[] = [
  {
    name: "Katharina",
    location: "Hamburg",
    date: "11.03.2026",
    service: "Innenausbau & Sanierung, ganzes Haus, Abrissarbeiten",
    text: "Sehr saubere Arbeiten, immer erreichbar und freundlich.",
    featured: true,
  },
  {
    name: "David",
    location: "Hamburg",
    date: "27.01.2026",
    service: "Innenausbau & Sanierung — Wohn-/Esszimmer, Schlafzimmer, Untergeschoss",
    text:
      "Nach dem Kauf einer Wohnung aus den 80er Jahren hat Vasyl als Projektleiter Abbruch, Strom, Estrich, Boden, Treppe, Trockenbau und Malerarbeiten sowie einen separaten Heizungs- und Sanitärtechniker koordiniert. Fertig in 3 Monaten — eine klare Weiterempfehlung.",
    featured: true,
  },
  {
    name: "MyHammer-Kunde",
    location: "Seevetal",
    date: "19.02.2026",
    service: "Deckenverkleidung, 62 m², Trockenbau inkl. Spachteln",
    text:
      "3 Tage für Flur, Küche, Wohn- und Esszimmer. Sehr zu empfehlen.",
  },
  {
    name: "Stick Friederike",
    location: "Barmstedt",
    date: "17.02.2026",
    service: "Teppichboden 36 m² + Malerarbeiten",
    text:
      "Nach dem Unfall meines Mannes kurzfristig organisiert — sehr zufrieden.",
    featured: true,
  },
  {
    name: "MyHammer-Kunde",
    location: "Barsbüttel",
    date: "24.10.2025",
    service: "Wärmedämmung & Abdichtung, 85 m², ganzes Gebäude",
    text:
      "Mehrmonatiges Projekt: Keller außen abgedichtet und gedämmt, neue Terrasse mit Terrassendach. Kleinere Mängel wurden behoben, Kommunikation lief über eine Übersetzungs-App.",
  },
  {
    name: "Patrick",
    location: "Hamburg",
    date: "06.05.2025",
    service: "Wärmedämmung & Abdichtung, 80 m², ganzes Gebäude",
    text:
      "Keller außen abgedichtet und isoliert, zu fairem Preis und ohne Nachforderung trotz unerwarteter Arbeiten.",
    featured: true,
  },
  {
    name: "Kristina",
    location: "Hamburg",
    date: "20.05.2025",
    service: "Entsorgung Gartenabfälle/Erdaushub, 4 m³",
    text: "Freundliche Kommunikation, sauber und zügig.",
  },
  {
    name: "MyHammer-Kunde",
    location: "Hamburg",
    date: "16.04.2025",
    service: "Entsorgung Gartenabfälle/Erdaushub, 3 m³",
    text: "Sehr gute, sehr schnelle, zügige Arbeit.",
  },
  {
    name: "Benjamin",
    location: "Hamburg",
    date: "09.04.2025",
    service: "Zaunaufbau/-austausch",
    text: "Schnelle und unkomplizierte Erledigung.",
  },
  {
    name: "MyHammer-Kunde",
    location: "Hamburg",
    date: "09.03.2025",
    service: "Entsorgung Gartenabfälle",
    text: "Sehr gute Arbeit, schnelle Terminvereinbarung.",
  },
];

export const process = [
  {
    number: "01",
    title: "Erstkontakt & Ortstermin",
    text:
      "Sie schildern Ihr Vorhaben — telefonisch, per WhatsApp oder E-Mail. Anschließend sehen wir uns das Objekt an und klären den tatsächlichen Umfang.",
  },
  {
    number: "02",
    title: "Planung & Angebot",
    text:
      "Wir strukturieren das Projekt in Gewerke, klären benötigte Unterlagen und legen ein nachvollziehbares Angebot vor — bei Bedarf mit planenden Fachpartnern.",
  },
  {
    number: "03",
    title: "Koordination der Gewerke",
    text:
      "Ein Ansprechpartner steuert alle Gewerke und Fachpartner, Termine und Reihenfolgen. Sie müssen niemanden selbst zusammenbringen.",
  },
  {
    number: "04",
    title: "Ausführung & Übergabe",
    text:
      "Ausführung nach vereinbartem Terminplan, laufende Rückmeldung zum Stand, gemeinsame Abnahme und saubere Übergabe.",
  },
];

/* ---------------------------------------------------------------
   Service slugs + detail content for /leistungen/[slug]
   --------------------------------------------------------------- */

export type ServiceDetail = {
  slug: string;
  number: string;
  title: string;
  intro: string;
  items: string[];
  note?: string;
  what: string;
  excludes?: string[];
  why: string[];
};

const serviceSlugs = [
  "sanierung-renovierung",
  "bau-neubau",
  "dach-fassade",
  "innenausbau",
  "bad-raumgestaltung",
  "moebelbau",
  "haustechnik",
  "hausmeisterservice",
];

const serviceWhat: Record<string, { what: string; excludes?: string[]; why: string[] }> = {
  "sanierung-renovierung": {
    what: "Wir nehmen den Bestand auf, strukturieren die Arbeiten in Gewerke und führen Abbruch, Rohbauanpassungen, Trockenbau, Putz-, Maler-, Fliesen- und Bodenarbeiten mit eigenen Mitarbeitern aus. Elektro, Sanitär und Heizung koordinieren wir über Fachpartner.",
    excludes: [
      "Elektro-, Sanitär- und Heizungsarbeiten führen benannte Fachpartner aus",
      "Statische Berechnungen und Genehmigungsplanung über Planungspartner",
    ],
    why: [
      "Ein Ansprechpartner für alle beteiligten Gewerke",
      "Abgestimmte Reihenfolge statt paralleler Einzelaufträge",
      "Maurermeister mit rund 40 Jahren Bauerfahrung im Team",
    ],
  },
  "bau-neubau": {
    what: "Wir führen allgemeine Bauarbeiten, Beton- und Mauerarbeiten aus und begleiten Neubauvorhaben von der Vorbereitung bis zur Ausführung — mit Planungs- und Ingenieurpartnern für Berechnungen und Umplanungen.",
    excludes: [
      "Genehmigungs- und Tragwerksplanung über Ingenieurbüro-Partner",
    ],
    why: [
      "Eigene Kolonnen für Beton- und Mauerarbeiten",
      "Terminplanung und Gewerkekoordination inklusive",
      "Planungspartner für Statik und Umplanung im Netzwerk",
    ],
  },
  "dach-fassade": {
    what: "Wir dämmen Dach und Fassade, verkleiden und gestalten Fassaden und stellen die Bauwerksabdichtung her — inklusive Kellerabdichtungen von außen.",
    why: [
      "Erfahrung aus mehrmonatigen Abdichtungs- und Dämmprojekten",
      "Abdichtung und Dämmung aus einer Hand",
      "Dekorative Fassadengestaltung auf Wunsch",
    ],
  },
  innenausbau: {
    what: "Maler-, Putz- und Bodenarbeiten sowie Wand- und Deckengestaltung — die Oberflächen, an denen die Qualität eines Projekts sichtbar wird.",
    why: [
      "Eigene Maler-, Putz- und Fliesenqualifikation",
      "Dekorative Putze und individuelle Wandgestaltung",
      "Saubere Übergaben, auch in bewohnten Objekten",
    ],
  },
  "bad-raumgestaltung": {
    what: "Wir planen Räume und Badezimmer maßgenau, entwickeln Designkonzepte und setzen sie mit eigenen Gewerken und koordinierten Fachpartnern um.",
    excludes: ["Sanitärinstallation über benannte Fachpartner"],
    why: [
      "Planung und Ausführung aus einer Hand",
      "Möbel nach Maß aus der eigenen Werkstatt kombinierbar",
      "Individuelle Designkonzepte statt Katalogware",
    ],
  },
  moebelbau: {
    what: "In unserer eigenen Möbelwerkstatt in Norderstedt planen und fertigen wir Möbel nach Maß und komplette Innenausstattungen.",
    why: [
      "Eigene Werkstatt in Norderstedt",
      "Maßanfertigung passend zum Innenausbau",
      "Ein Ansprechpartner für Ausbau und Möblierung",
    ],
  },
  haustechnik: {
    what: "Elektro-, Sanitär- und Heizungsarbeiten werden über qualifizierte Fachpartner erbracht. Wir übernehmen die technische und terminliche Koordination im Gesamtprojekt.",
    excludes: [
      "Diese Leistungen führt UM Haus&Bau nicht selbst aus",
      "Ausführung durch benannte Fachpartner wie AF Elektro GmbH und BuB Bau GmbH",
    ],
    why: [
      "Feste, eingespielte Fachpartner",
      "Koordination im Gesamtterminplan",
      "Klare Zuständigkeit trotz mehrerer Betriebe",
    ],
  },
  hausmeisterservice: {
    what: "Laufende Betreuung von Wohn- und Gewerbeobjekten inklusive kleinerer Instandhaltungsarbeiten.",
    why: [
      "Regelmäßige Betreuung statt Einzelaufträge",
      "Kurze Wege in Hamburg und Norderstedt",
      "Derselbe Ansprechpartner wie im Bauprojekt",
    ],
  },
};

export const serviceDetails: ServiceDetail[] = services.map((s, i) => {
  const slug = serviceSlugs[i] as string;
  return { ...s, slug, ...(serviceWhat[slug] as { what: string; excludes?: string[]; why: string[] }) };
});

export function getService(slug: string) {
  return serviceDetails.find((s) => s.slug === slug);
}

/* ---------------------------------------------------------------
   Projects
   --------------------------------------------------------------- */

export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  info: string;
  type: string;
  servicesPerformed: string[];
  description: string;
  work: string[];
  result: string;
  featured: boolean;
};

/*
 * Rebuilt from the real photo sets in src/assets/projects/projects/<1..11>/.
 * slug / title / category / location come straight from each folder's info.md;
 * the prose fields (description, work, result, servicesPerformed, type, info)
 * are provisional and meant to be tightened by the client. Image galleries and
 * their captions are generated in project-images.ts from the folder contents.
 */

export const projects: Project[] = [
  {
    slug: "kellerabdichtung-hamburg",
    title: "Kellerabdichtung und Außendämmung, Hamburg",
    category: "Dach & Fassade",
    location: "Hamburg",
    info: "Kellergeschoss von außen freigelegt, abgedichtet und gedämmt",
    type: "Wohngebäude, Bestand",
    servicesPerformed: ["Erdarbeiten", "Bauwerksabdichtung", "Perimeterdämmung", "Wiederverfüllung"],
    description:
      "Das Kellergeschoss eines Wohngebäudes in Hamburg wurde von außen freigelegt, abgedichtet und gedämmt.",
    work: [
      "Freilegen der Kelleraußenwände",
      "Untergrundvorbereitung",
      "Abdichtung und Perimeterdämmung",
      "Wiederverfüllung und Geländeanpassung",
    ],
    result: "Dauerhaft geschützte und gedämmte Gebäudehülle im Kellerbereich.",
    featured: false,
  },
  {
    slug: "kellerabdichtung-terrasse-wintergarten-barsbuettel",
    title: "Kellerabdichtung mit Terrasse und Wintergarten, Barsbüttel",
    category: "Dach & Fassade",
    location: "Barsbüttel",
    info: "Kellerabdichtung und -dämmung, anschließend Terrasse und Wintergarten",
    type: "Einfamilienhaus, Bestand",
    servicesPerformed: ["Bauwerksabdichtung", "Perimeterdämmung", "Terrassenbau", "Wintergarten"],
    description:
      "Nach Abdichtung und Dämmung des Kellergeschosses von außen wurde der Außenbereich um eine Terrasse und einen Wintergarten erweitert.",
    work: [
      "Erdarbeiten und Freilegen der Kelleraußenwand",
      "Abdichtung und Perimeterdämmung",
      "Wiederverfüllung und Geländeanpassung",
      "Bau von Terrasse und Wintergarten",
    ],
    result: "Trockener Keller und ein neuer, ganzjährig nutzbarer Außenbereich.",
    featured: true,
  },
  {
    slug: "badsanierung-elmshorn",
    title: "Komplette Badsanierung, Elmshorn",
    category: "Bad & Raumgestaltung",
    location: "Elmshorn",
    info: "Vollständige Badsanierung inklusive neuer Sanitär- und Elektroinstallation",
    type: "Wohnhaus, Bestand",
    servicesPerformed: ["Rückbau", "Fliesenarbeiten", "Koordination Sanitär", "Koordination Elektro"],
    description:
      "Ein Badezimmer wurde vollständig zurückgebaut und mit neuer Sanitär- und Elektroinstallation neu aufgebaut.",
    work: [
      "Rückbau des Bestandsbades",
      "Sanitär- und Elektroinstallation über Fachpartner",
      "Abdichtung und Fliesenarbeiten",
      "Montage und Übergabe",
    ],
    result: "Neu aufgebautes Bad mit erneuerter Haustechnik.",
    featured: false,
  },
  {
    slug: "badsanierung-behoerde",
    title: "Badsanierung in einem Behördengebäude",
    category: "Bad & Raumgestaltung",
    location: "Raum Hamburg",
    info: "Sanierung einer Sanitäranlage in einem öffentlichen Gebäude (Adresse vertraulich)",
    type: "Öffentliches Gebäude",
    servicesPerformed: ["Rückbau", "Trockenbau", "Fliesenarbeiten", "Koordination Sanitär"],
    description:
      "Sanierung einer Sanitäranlage in einem Gebäude der öffentlichen Hand. Die genaue Adresse wird nicht veröffentlicht.",
    work: [
      "Rückbau der Bestandsausstattung",
      "Sanitärarbeiten über Fachpartner",
      "Trockenbau, Abdichtung und Fliesen",
      "Montage und Übergabe",
    ],
    result: "Sanierte, normgerecht ausgestattete Sanitäranlage.",
    featured: false,
  },
  {
    slug: "komplettrenovierung-wohnung-hamburg",
    title: "Komplette Wohnungsrenovierung mit Mikrozement-Bädern, Hamburg",
    category: "Sanierung & Renovierung",
    location: "Hamburg",
    info: "Komplette Renovierung einer Wohnung, Bäder mit dekorativem Mikrozement",
    type: "Eigentumswohnung, Bestand",
    servicesPerformed: ["Abbruch", "Trockenbau", "Bodenarbeiten", "Malerarbeiten", "Dekorativer Mikrozement"],
    description:
      "Eine Wohnung wurde vollständig renoviert; die Bäder erhielten eine fugenlose Oberfläche aus dekorativem Mikrozement.",
    work: [
      "Abbruch- und Entkernungsarbeiten",
      "Trockenbau und Spachtelarbeiten",
      "Boden- und Malerarbeiten",
      "Dekorative Mikrozement-Beschichtung der Bäder",
    ],
    result: "Vollständig renovierte Wohnung mit fugenlosen Bad-Oberflächen.",
    featured: true,
  },
  {
    slug: "abdichtung-parkdeck-schenefeld",
    title: "Abdichtung einer Deckenplatte über dem Parkdeck, Schenefeld",
    category: "Dach & Fassade",
    location: "Schenefeld",
    info: "Abdichtung der Deckenplatte über der Parkebene eines Einkaufszentrums",
    type: "Gewerbeimmobilie, Einkaufszentrum",
    servicesPerformed: ["Untergrundvorbereitung", "Gefälleaufbau", "Bauwerksabdichtung"],
    description:
      "Die Deckenplatte über der Parkebene eines Einkaufszentrums wurde neu abgedichtet.",
    work: [
      "Rückbau des Altaufbaus",
      "Untergrundvorbereitung und Gefälle",
      "Abdichtung",
      "Schutz- und Nutzschicht",
    ],
    result: "Dauerhaft abgedichtete, befahrbare Deckenplatte.",
    featured: false,
  },
  {
    slug: "bueroumbau-renovierung",
    title: "Umplanung und Renovierung von Büroräumen",
    category: "Sanierung & Renovierung",
    location: "Raum Hamburg",
    info: "Neuaufteilung und Renovierung einer Bürofläche",
    type: "Gewerbeimmobilie, Büro",
    servicesPerformed: ["Umplanung", "Trockenbau", "Bodenarbeiten", "Malerarbeiten"],
    description: "Eine Bürofläche wurde neu aufgeteilt und renoviert.",
    work: [
      "Rückbau bestehender Trennwände",
      "Neue Trockenbauwände",
      "Boden- und Malerarbeiten",
      "Übergabe der Flächen",
    ],
    result: "Neu strukturierte, renovierte Bürofläche.",
    featured: false,
  },
  {
    slug: "terrassenplatten-kayhude",
    title: "Terrassenplatten verlegen, Kayhude",
    category: "Bau & Neubau",
    location: "Kayhude",
    info: "Verlegen von Terrassenplatten auf vorbereitetem Unterbau",
    type: "Einfamilienhaus",
    servicesPerformed: ["Unterbau", "Plattenverlegung"],
    description: "Auf einer vorbereiteten Fläche wurden Terrassenplatten verlegt.",
    work: ["Unterbau und Tragschicht", "Verlegen der Platten", "Randabschluss und Reinigung"],
    result: "Befestigte, nutzbare Terrassenfläche.",
    featured: false,
  },
  {
    slug: "einbaumoebel-nach-mass",
    title: "Einbaumöbel nach Maß – Fertigung und Montage",
    category: "Möbelbau",
    location: "Norderstedt",
    info: "Planung, Fertigung in der eigenen Werkstatt und Montage von Einbaumöbeln",
    type: "Privatwohnung",
    servicesPerformed: ["Aufmaß", "Möbelplanung", "Fertigung nach Maß", "Montage"],
    description:
      "Einbaumöbel wurden nach Aufmaß geplant, in der eigenen Werkstatt in Norderstedt gefertigt und montiert.",
    work: [
      "Aufmaß vor Ort",
      "Planung und Materialauswahl",
      "Fertigung in der Werkstatt",
      "Montage und Feinjustierung",
    ],
    result: "Passgenau eingefügte Einbaumöbel nach Maß.",
    featured: true,
  },
  {
    slug: "dachuntersicht-gartenhaus",
    title: "Dachuntersicht streichen und Gartenhaus bauen",
    category: "Bau & Neubau",
    location: "Raum Hamburg",
    info: "Anstrich der Dachuntersicht und Neubau eines Gartenhauses",
    type: "Einfamilienhaus, Außenanlage",
    servicesPerformed: ["Malerarbeiten", "Fundament", "Holzbau"],
    description:
      "Die Dachuntersicht wurde gestrichen und im Garten ein Gartenhaus neu errichtet.",
    work: [
      "Vorbereitung und Anstrich der Dachuntersicht",
      "Fundament für das Gartenhaus",
      "Aufbau des Gartenhauses",
      "Abschlussarbeiten",
    ],
    result: "Aufgefrischte Dachuntersicht und ein neues Gartenhaus.",
    featured: false,
  },
  {
    slug: "zimmerrenovierung-nach-schimmel",
    title: "Zimmerrenovierung nach Schimmelbefall",
    category: "Innenausbau & Oberflächen",
    location: "Raum Hamburg",
    info: "Sanierung und Renovierung eines Zimmers nach Schimmelbefall",
    type: "Wohnung, Bestand",
    servicesPerformed: ["Schadensaufnahme", "Untergrundsanierung", "Putzarbeiten", "Malerarbeiten"],
    description: "Ein von Schimmel betroffenes Zimmer wurde saniert und renoviert.",
    work: [
      "Aufnahme des Schadensbilds",
      "Entfernen befallener Oberflächen",
      "Untergrundsanierung",
      "Putz-, Maler- und Oberflächenarbeiten",
    ],
    result: "Saniertes, wieder nutzbares Zimmer mit erneuerten Oberflächen.",
    featured: false,
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
