type SectionTitleProps = {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionTitle({
  kicker,
  title,
  description,
  align = "left"
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <header className={`mb-8 max-w-3xl ${alignClass}`}>
      {kicker ? (
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-brand-700">
          {kicker}
        </p>
      ) : null}
      <h2 className="font-[var(--font-heading)] text-2xl font-semibold leading-tight text-brand-950 sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-slate-700 sm:text-lg">{description}</p>
      ) : null}
    </header>
  );
}
