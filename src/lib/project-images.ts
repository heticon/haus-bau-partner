/**
 * Project photography.
 *
 * Real photos live in `src/assets/projects/projects/<n>/` — one numbered folder
 * per project (1–11). `FOLDER_FOR_SLUG` maps each project slug (see
 * `site-data.ts`) to its folder.
 *
 * `cover.*` is the cover only — it is returned by `projectCover()` and is NOT
 * part of the gallery. The remaining files form the gallery, ordered by the
 * stage their filename implies:
 *
 *   before* / "before N" /     →  condition before work started
 *   "before picture N"
 *   1.*  (plus 1.1.* 1.2.* …)  →  first work stage, with detail shots
 *   2.*, 3.*, …                →  later stages, up to the result
 *
 * Captions live in `CAPTIONS`, keyed by `<folder>/<filename>`. Each one was
 * written from the photo itself and describes that specific work stage. A file
 * with no entry falls back to a short phrase for the project's Leistungen
 * category.
 */
import { projects, serviceDetails } from "./site-data";
import stockAbout from "@/assets/about.jpg";
import stockHero from "@/assets/hero.jpg";

export type ProjectImage = { src: string; caption: string };

/**
 * Per-photo captions, keyed by `<folder>/<filename>` (the same key shape as
 * EXCLUDED_FILES). Written from the photos themselves — one or two sentences
 * describing the actual work stage shown.
 */
const CAPTIONS: Record<string, string> = {
  // 1 — Kellerabdichtung und Außendämmung, Hamburg
  "1/1.jpg":
    "Die freigelegte Kelleraußenwand, egalisiert und mit der ersten Dichtungslage bis zur Sperrschicht versehen.",
  "1/2.jpg":
    "Einbau der Schutz- und Drainschicht auf der abgedichteten Wand, während die Perimeterdämmung am Grabenrand bereitliegt.",
  "1/3.jpg":
    "Die fertige, vollflächige Bitumendickbeschichtung an der Gebäudeecke, das Fallrohr ist bereits wieder angeschlossen.",
  "1/4.jpg":
    "Auftrag der Dichtungsschlämme von Hand; der Lichtschacht ist bereits neu in den Putz gesetzt.",
  "1/5.jpg":
    "Die Noppenbahn ist gesetzt, der Arbeitsgraben wird lagenweise mit Sand wiederverfüllt.",
  "1/6.jpg":
    "Blick entlang der geschützten Wand: Dämmung und Noppenbahn mit oberer Abschlussschiene, der Graben ist noch offen.",
  "1/7.jpg":
    "Die neue Drainageleitung liegt in der Grabensohle entlang der geschützten Wand, bereit zur Überschüttung.",
  "1/8.jpg":
    "Das Ergebnis: sauber verputzter Sockel, neues Fallrohr und angepasstes Gelände an der trockengelegten Wand.",

  // 2 — Kellerabdichtung mit Terrasse und Wintergarten, Barsbüttel
  "2/1.jpg":
    "Der offene Arbeitsgraben entlang des Hauses mit vorbereiteten Drainageleitungen und Filterkies.",
  "2/2.jpg":
    "Auftrag der Dichtungsschlämme in der tiefen Baugrube, im Hintergrund das Fundament der späteren Terrasse.",
  "2/3.jpg":
    "Verkleben der Perimeterdämmung auf der abgedichteten Wand; die Lichtschächte sind bereits neu gemauert und verputzt.",
  "2/4.jpg":
    "Der fertig verputzte Sockel mit neuen Lichtschächten, bereit für den Terrassen- und Wintergartenaufbau.",
  "2/5.jpg":
    "Aufbau des Terrassendachs auf der neuen Natursteinmauer; die Trägerkonstruktion wird an der Giebelwand befestigt.",
  "2/6.jpg":
    "Die Dachkonstruktion steht; die Randträger werden montiert, während die Terrassenplatten zum Verlegen bereitliegen.",
  "2/7.jpg":
    "Der fertige Wintergarten mit rahmenlosen Glas-Schiebeelementen auf dem Natursteinsockel.",
  "2/8.jpg":
    "Die fertige Terrasse mit großformatigem Plattenbelag und neuem Sichtschutzzaun; nur die Rasenfläche fehlt noch.",

  // 3 — Komplette Badsanierung, Elmshorn
  "3/before picture.jpg":
    "Vorher: schadhafter Putz mit Feuchtespuren über der alten Fliesenkante, freiliegende Leitungen und veraltete Sanitärobjekte.",
  "3/before picture 2.jpg":
    "Vorher: alter Warmwasserspeicher über der Wanne, veraltete Armaturen und stellenweise offene Wandflächen.",
  "3/1.jpg":
    "Verlegung großformatiger Wandfliesen auf der neu abgedichteten Wand, ausgerichtet an der Setzlatte.",
  "3/2.jpg":
    "Die fertig geflieste Wand mit Sockelprofil; die Deckenanschlüsse werden noch gespachtelt.",
  "3/3.jpg":
    "Fast fertig: neue Wandfliesen, dunkler Bodenbelag, montierter Handtuchheizkörper und neues Waschbecken – der Duschbereich ist noch abgeklebt.",
  "3/4.jpg":
    "Der fertige Duschplatz mit Thermostatarmatur und vorgemauertem WC-Element mit Betätigungsplatte.",
  "3/5.jpg":
    "Zwischenstand: Fliesen gesetzt, Waschbecken montiert, Elektroanschlüsse für Leuchte und Spiegel vorbereitet.",
  "3/6.jpg":
    "Die bodengleiche Dusche mit Ablaufrinne, Duschgarnitur und seitlicher Wandfläche in Wandfarbe.",

  // 4 — Badsanierung in einem Behördengebäude
  "4/before.jpg":
    "Rohbau: neue Vorwandinstallation und beplankte Wände, die Anschlüsse für die wandhängenden Objekte stehen, der alte Bodenbelag ist teilweise geöffnet.",
  "4/before 2.jpg":
    "Vorher: Deckenanstrich mit Fleckabsperrung; im Bestand noch alte Trennwand und Fliesen mit Zierbordüre.",
  "4/1.jpg":
    "Die Wände sind flächig abgedichtet; im Hintergrund beginnt der Fliesenbelag, Material und Werkzeug stehen bereit.",
  "4/2.jpg":
    "Fliesenarbeiten im Gang: weiße Wandfliesen werden Reihe für Reihe auf die abgedichtete Fläche gesetzt.",
  "4/3.jpeg":
    "Der große Sanitärraum fertig gefliest mit schwarzer Zierbordüre und neu gestrichener Decke; die Anschlüsse für die Waschtischreihe stehen bereit.",
  "4/4.jpeg":
    "Die fertige Waschzeile mit drei Waschtischen, Spiegeln und Wandleuchten vor der gefliesten Trennwand.",
  "4/5.jpeg":
    "Der fertige Gemeinschafts-Duschraum mit drei Duschplätzen und Ablaufrinnen im Boden.",
  "4/6.jpeg":
    "Detail der bodengleichen Entwässerung: Edelstahl-Rinnen entlang der Wand, frisch verfugt.",

  // 5 — Komplette Wohnungsrenovierung mit Mikrozement-Bädern, Hamburg
  "5/before.jpg":
    "Vorher: der Bestand mit alter Wendeltreppe, schadhaftem Putz und abgenutztem Bodenbelag.",
  "5/before 2.jpg":
    "Rohbauzustand: Wände und Decke neu verputzt, der alte Heizkörper demontiert, der Boden für den Neuaufbau vorbereitet.",
  "5/1.jpg":
    "Verlegen des neuen Echtholzbodens auf Trittschalldämmung; die Wände sind bereits gestrichen.",
  "5/2.jpg":
    "Ein fertiger Raum mit neuem Dielenboden und frischem Wandanstrich, bereit für Sockelleisten und Montage.",
  "5/3.jpg":
    "Der fertige Wohnraum: warmer Wandton, neuer Echtholzboden und Ringleuchte, die Sprossenfenster bleiben erhalten.",
  "5/4.jpg":
    "Blick durch den neuen Rundbogen: durchgehender Dielenboden und heller Wandton verbinden Flur und Wohnraum.",
  "5/5.jpeg":
    "Das fertige Bad mit fugenloser Mikrozement-Oberfläche, bodengleicher Dusche in Schwarz und wandhängendem Waschtisch.",
  "5/6.jpeg":
    "Längsansicht des Mikrozement-Bades: die fugenlose Oberfläche zieht sich über Wände und Boden bis in die Dusche.",

  // 6 — Abdichtung einer Deckenplatte über dem Parkdeck, Schenefeld
  "6/1.jpg":
    "Die Deckenplatte am gläsernen Eingang wird abschnittsweise geöffnet; der Randbereich mit dem Pflasterbelag wird zurückgebaut.",
  "6/2.jpg":
    "Der freigelegte Betonuntergrund wird gereinigt und grundiert, die Anschlüsse an Wand und Entwässerung werden ausgebildet.",
  "6/3.jpg":
    "Verlegen der Bitumen-Schweißbahn auf der Deckenplatte, sauber an Stützen, Wand und Einläufe hochgeführt.",
  "6/4.jpg":
    "Die fertige, fugenlose Abdichtung: vollflächig verschweißt und an allen Anschlüssen dicht hochgezogen.",
  "6/5.jpg":
    "Anschlussarbeiten am Rand: die Abdichtungsbahn wird an Sockel und Wand angearbeitet und verklebt.",
  "6/6.jpg":
    "Die Abdichtung wird dicht unter die Türschwelle und über die Randaufkantung geführt, alle Nähte werden versiegelt.",
  "6/7.jpg":
    "Über der geprüften Abdichtung wird wieder Sand eingebaut – die Basis für den neuen Pflasteraufbau.",
  "6/8.jpg":
    "Das wiederhergestellte Pflaster am Eingang: im Bogen verlegtes Klinkerpflaster über dem neuen Aufbau, die Fugen werden eingeschlämmt.",

  // 7 — Umplanung und Renovierung von Büroräumen
  "7/1.jpg":
    "Die entkernte Bürofläche: Decke und Stützen vorbereitet, neue Trennwände gestellt, das Bodenmaterial steht bereit.",
  "7/2.jpg":
    "Verlegen des neuen Vinylbodens in Holzoptik über die offene Bürofläche.",
  "7/3.jpg":
    "Maler- und Spachtelarbeiten: die Decke wird gestrichen, die Wände sind für den Anstrich vorbereitet.",
  "7/4.jpg":
    "Die neuen raumhohen Glastrennwände gliedern die Fläche in einzelne Büros; die Scheiben sind noch mit Warnkreuzen beklebt.",

  // 8 — Terrassenplatten verlegen, Kayhude
  "8/1.jpg":
    "Die neu verlegte Terrasse an der Hausseite: Betonpflaster im Mehrformat-Verband bis an den Sichtschutzzaun, die Randfugen werden noch verfüllt.",
  "8/2.jpg":
    "Detail des fertigen Belags: Pflaster im wilden Verband, die Fugen sind eingekehrt und abgerüttelt.",

  // 9 — Einbaumöbel nach Maß
  "9/1.jpg":
    "Maßgefertigtes Sideboard unter der Dachschräge: petrolfarbene Fronten, offene Fächer und massive Nussbaum-Abdeckplatte.",
  "9/2.jpg":
    "Griffloser Schubladenschrank nach Maß, wandbündig unter der Dachschräge mit dunkel geölter Holzplatte.",
  "9/3.jpg":
    "Einbauschrank im Flur: salbeigrüne Fronten mit eichefurnierter offener Nische, raumhoch neben der Haustür eingepasst.",

  // 10 — Dachuntersicht streichen und Gartenhaus bauen
  "10/1.jpg":
    "Gerüst am Eingang: Vorbereitung der Streicharbeiten an der Dachuntersicht.",
  "10/2.jpg":
    "Die frisch gestrichene Dachuntersicht mit sauberem Anschluss an Traufblech und Dachrinne.",
  "10/3.jpg":
    "Rohbau des Gartenhauses: Ständerkonstruktion aus Lärchenholz mit Pultdach, an die Hauswand angebaut.",
  "10/4.jpg":
    "Das Gartenhaus mit senkrechter Lärchenschalung und verzinktem Dachrandprofil, das Fenster ist bereits eingesetzt.",

  // 11 — Zimmerrenovierung nach Schimmelbefall
  "11/1.jpg":
    "Vorher: die betroffene Zimmerecke mit deutlichem Schimmelbefall an Wand und Sockel hinter dem Heizkörper.",
  "11/2.jpg":
    "Vorbereitung: befallene und lose Beschichtungen werden entfernt, die Wände abgewaschen und geschliffen.",
  "11/3.jpg":
    "Nachher: neu gestrichene Wände in frischem Grün – das originale Parkett und die Altbaufenster bleiben erhalten.",
  "11/4.jpg":
    "Der fertige Raum aus anderer Perspektive: einheitlicher Wandton, saubere Anschlüsse an Türen und Decke.",
};

/** Project slug → on-disk folder number under src/assets/projects/projects/. */
const FOLDER_FOR_SLUG: Record<string, number> = {
  "kellerabdichtung-hamburg": 1,
  "kellerabdichtung-terrasse-wintergarten-barsbuettel": 2,
  "badsanierung-elmshorn": 3,
  "badsanierung-behoerde": 4,
  "komplettrenovierung-wohnung-hamburg": 5,
  "abdichtung-parkdeck-schenefeld": 6,
  "bueroumbau-renovierung": 7,
  "terrassenplatten-kayhude": 8,
  "einbaumoebel-nach-mass": 9,
  "dachuntersicht-gartenhaus": 10,
  "zimmerrenovierung-nach-schimmel": 11,
};

/** Short phrase per Leistungen category — fallback when a photo has no CAPTIONS entry. */
const CATEGORY_PHRASE: Record<string, string> = {
  "Sanierung & Renovierung": "Sanierungs- und Renovierungsarbeiten",
  "Bau & Neubau": "Bau- und Betonarbeiten",
  "Dach & Fassade": "Abdichtungs- und Dämmarbeiten",
  "Innenausbau & Oberflächen": "Innenausbau- und Oberflächenarbeiten",
  "Bad & Raumgestaltung": "Bad- und Raumgestaltung",
  Möbelbau: "Möbelbau nach Maß",
  Haustechnik: "Haustechnik-Koordination",
  "Hausmeisterservice & Objektbetreuung": "Objektbetreuung",
};

// Individual photos pulled from a project's gallery, as `<folder>/<filename>`.
const EXCLUDED_FILES = new Set(["5/before 3.jpg"]);

// Eagerly resolve every image URL under the numbered project folders.
const FILES = import.meta.glob<string>(
  "../assets/projects/projects/*/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
  { eager: true, import: "default", query: "?url" },
);

const stem = (path: string): string => {
  const name = path.split("/").pop() ?? path;
  return name
    .replace(/\.[^.]+$/, "")
    .toLowerCase()
    .trim();
};

/** Lower sorts first: cover → before* → 1, 1.1, 1.2 → 2 → … → anything else. */
const orderKey = (path: string): number => {
  const s = stem(path);
  if (s === "cover") return 0;
  const before = s.match(/^before(?:\s+picture)?(?:\s+(\d+))?$/);
  if (before) return 100 + Number(before[1] ?? "1");
  const numbered = s.match(/^(\d+)(?:\.(\d+))?$/);
  if (numbered) return 1000 + Number(numbered[1] ?? "0") * 10 + Number(numbered[2] ?? "0");
  return 9000;
};

/**
 * Caption for one gallery photo. Uses the hand-written CAPTIONS entry when there
 * is one; otherwise falls back to a short phrase for the project's category.
 */
const captionFor = (folder: number, path: string, category: string): string => {
  const file = path.split("/").pop() ?? "";
  const written = CAPTIONS[`${folder}/${file}`];
  if (written) return written;
  const phrase = CATEGORY_PHRASE[category] ?? "Projektarbeiten";
  return stem(path).startsWith("before")
    ? `Ausgangszustand vor den Arbeiten – ${phrase}`
    : `${phrase} bei UM Haus&Bau`;
};

const COVER_BY_SLUG: Record<string, string> = {};
const GALLERY_BY_SLUG: Record<string, ProjectImage[]> = {};

{
  const byFolder = new Map<number, string[]>();
  for (const key of Object.keys(FILES)) {
    const match = key.match(/\/projects\/projects\/(\d+)\//);
    if (!match || match[1] === undefined) continue;
    const folder = Number(match[1]);
    const list = byFolder.get(folder) ?? [];
    list.push(key);
    byFolder.set(folder, list);
  }

  for (const project of projects) {
    const folder = FOLDER_FOR_SLUG[project.slug];
    const keys = (folder === undefined ? undefined : byFolder.get(folder)) ?? [];
    const ordered = [...keys].sort((a, b) => orderKey(a) - orderKey(b));

    const coverKey = ordered.find((k) => stem(k) === "cover");
    if (coverKey) COVER_BY_SLUG[project.slug] = FILES[coverKey] as string;

    // The gallery is everything except the cover and any explicitly excluded file.
    const isExcluded = (k: string) => EXCLUDED_FILES.has(`${folder}/${k.split("/").pop() ?? ""}`);
    const galleryKeys = ordered.filter((k) => stem(k) !== "cover" && !isExcluded(k));
    GALLERY_BY_SLUG[project.slug] = galleryKeys.map((key) => ({
      src: FILES[key] as string,
      caption: captionFor(folder as number, key, project.category),
    }));
  }
}

/** Gallery images (cover excluded) + generated placeholder captions. */
export function projectGallery(slug: string): ProjectImage[] {
  return GALLERY_BY_SLUG[slug] ?? [];
}

/** Cover image URL for a project slug (falls back to a stock photo). */
export function projectCover(slug: string): string {
  return COVER_BY_SLUG[slug] ?? GALLERY_BY_SLUG[slug]?.[0]?.src ?? stockHero;
}

// Leistungen detail pages key off a service slug, not a project folder. Use the
// cover of the first real project in that service's category; fall back to a
// neutral site photo for services with no matching project (Haustechnik,
// Hausmeisterservice).
export function serviceImage(slug: string): string {
  const title = serviceDetails.find((s) => s.slug === slug)?.title;
  const match = title ? projects.find((p) => p.category === title) : undefined;
  return match ? projectCover(match.slug) : stockAbout;
}
