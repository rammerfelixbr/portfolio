const keywords = [
  "Estruturação",
  "Organização",
  "Eficiência",
  "Sistemas",
  "Automação",
  "Resultados",
];

export default function KeywordsTicker() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)] border-y border-[var(--foreground)]/5 py-5">
      <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite]">
        {[...keywords, ...keywords, ...keywords].map((word, i) => (
          <span
            key={i}
            className="flex items-center gap-6 mx-6 text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[var(--foreground)]/40 font-medium select-none"
          >
            {word}
            <span className="w-1 h-1 rounded-full bg-[var(--gold)]/60 shrink-0" />
          </span>
        ))}
      </div>
    </section>
  );
}
