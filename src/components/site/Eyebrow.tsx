export function Eyebrow({
  number,
  label,
  tone = "dark",
}: {
  number?: string;
  label: string;
  tone?: "dark" | "light";
}) {
  const color = tone === "dark" ? "text-navy" : "text-navy-light";
  return (
    <div className={`flex items-center gap-3 ${color}`}>
      <span className="h-px w-8 bg-current opacity-70" aria-hidden="true" />
      <span className="mono-label">
        [ {number ? `${number} — ` : ""}
        {label} ]
      </span>
    </div>
  );
}
