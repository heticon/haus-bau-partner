import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";

export function PageHero({
  number,
  label,
  title,
  lead,
}: {
  number?: string;
  label: string;
  title: ReactNode;
  lead?: string;
}) {
  return (
    <section className="surface-dark">
      <div className="mx-auto max-w-site px-5 pb-20 pt-20 md:px-8 md:pb-28 md:pt-28">
        <Eyebrow number={number} label={label} tone="light" />
        <h1 className="mt-7 max-w-4xl text-4xl font-extrabold leading-[1.05] text-white md:text-6xl">
          {title}
        </h1>
        {lead ? (
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/65">{lead}</p>
        ) : null}
      </div>
    </section>
  );
}
