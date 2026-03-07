interface SystemFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function SystemFeature({ icon, title, description }: SystemFeatureProps) {
  return (
    <div className="flex gap-4 p-5 rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] hover:border-[var(--gold)]/50 transition-all duration-300">
      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--gold)]/10 text-[var(--gold)]">
        {icon}
      </div>
      <div>
        <h3 className="text-base font-semibold text-[var(--foreground)] mb-1">
          {title}
        </h3>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
