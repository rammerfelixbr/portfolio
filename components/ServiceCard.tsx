interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="group p-6 rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] hover:border-[var(--gold)]/50 transition-all duration-300">
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[var(--gold)]/10 text-[var(--gold)] mb-4 group-hover:bg-[var(--gold)]/20 transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
        {title}
      </h3>
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
        {description}
      </p>
    </div>
  );
}
