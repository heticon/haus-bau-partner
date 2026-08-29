/**
 * Optional partner logos. Drop a file at
 * `src/assets/partners/<slug>.{svg,png,jpg,jpeg,webp}` (slug from `partners` in
 * site-data.ts) and it is picked up automatically. Missing files fall back to
 * the partner name as text — the glob does not error on an empty folder.
 */
const LOGOS = import.meta.glob<string>(
  "../assets/partners/*.{svg,png,jpg,jpeg,webp,SVG,PNG,JPG,JPEG,WEBP}",
  { eager: true, import: "default", query: "?url" },
);

const BY_SLUG: Record<string, string> = {};
for (const [path, url] of Object.entries(LOGOS)) {
  const slug = (path.split("/").pop() ?? "").replace(/\.[^.]+$/, "").toLowerCase();
  if (slug) BY_SLUG[slug] = url as string;
}

export function partnerLogo(slug: string): string | undefined {
  return BY_SLUG[slug.toLowerCase()];
}
