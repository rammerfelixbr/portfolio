interface CaseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  result: string;
}

export default function CaseCard({ icon, title, description, result }: CaseCardProps) {
  return (
    <div className="group p-6 rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] hover:border-[var(--gold)]/50 transition-all duration-300">
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[var(--gold)]/10 text-[var(--gold)] mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
        {title}
      </h3>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
        {description}
      </p>
      <div className="pt-4 border-t border-[var(--border)]">
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[var(--gold)]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
          </svg>
          <span className="text-sm font-medium text-[var(--gold)]">{result}</span>
        </div>
      </div>
    </div>
  );
}
