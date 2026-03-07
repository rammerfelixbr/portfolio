"use client";

import { AnimatedSection, AnimatedCounter } from "@/lib/animations";

const stats = [
  { value: "10", suffix: "+", label: "Módulos integrados" },
  { value: "7", suffix: "", label: "Colaboradores gerenciados" },
  { value: "115", suffix: "+", label: "Transações rastreadas" },
  { value: "57", suffix: "", label: "Funções mapeadas" },
];

export default function SystemStats() {
  return (
    <AnimatedSection className="px-6 lg:px-8 max-w-7xl mx-auto py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--foreground)]/5 rounded-2xl overflow-hidden">
        {stats.map((stat, i) => (
          <div key={i} className="bg-[var(--background)] px-6 py-10 text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gold-gradient mb-2">
              <AnimatedCounter target={parseInt(stat.value)} suffix={stat.suffix} />
            </div>
            <div className="text-xs text-[var(--text-secondary)] uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
