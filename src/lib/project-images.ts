import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import about from "@/assets/about.jpg";
import hero from "@/assets/hero.jpg";

const pool = [project1, project2, project3, about, hero];

/** Deterministic cover image per project slug until real photos are uploaded. */
export function projectImage(slug: string, index = 0) {
  let sum = index;
  for (let i = 0; i < slug.length; i++) sum += slug.charCodeAt(i);
  return pool[sum % pool.length];
}

export const serviceImage = (slug: string) => projectImage(slug, 2);
