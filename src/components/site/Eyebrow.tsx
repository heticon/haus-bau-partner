export function Eyebrow({
  label,
  tone = "dark",
}: {
  label: string;
  tone?: "dark" | "light";
}) {
  const color = tone === "dark" ? "text-navy" : "text-navy-light";
  return (
    <p className={`text-sm uppercase tracking-[0.18em] ${color}`}>{label}</p>
  );
}
