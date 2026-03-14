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
  const centeredClass = align === "center" ? "mx-auto" : "";

  return (
    <header className={`mb-10 max-w-4xl ${alignClass} ${centeredClass}`}>
      {kicker ? (
        <p
          className={`mb-3 inline-flex items-center gap-2 rounded-md border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-brand-800 ${centeredClass}`}
        >
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent-600" />
          {kicker}
        </p>
      ) : null}
      <h2 className="font-[var(--font-heading)] text-3xl font-semibold leading-tight text-brand-950 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg ${centeredClass}`}>
          {description}
        </p>
      ) : null}
    </header>
  );
}
