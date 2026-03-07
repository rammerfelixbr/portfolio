"use client";

import { AnimatedSection, AnimatedCounter } from "@/lib/animations";

const stats = [
  { target: 40, suffix: "%", label: "Redução em retrabalho" },
  { target: 60, suffix: "%", label: "Aumento em eficiência" },
  { target: 15, suffix: "h", label: "Economizadas/semana" },
  { target: 3, suffix: "x", label: "Onboarding mais rápido" },
];

export default function ResultsSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-[var(--surface)] overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(201,168,76,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.4) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[var(--gold)] font-semibold">
            Impacto
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--foreground)] tracking-tight">
            Resultados <span className="text-gold-gradient">Reais</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--foreground)]/5 rounded-2xl overflow-hidden">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <div className="relative p-8 sm:p-10 bg-[var(--surface)] text-center group hover:bg-[var(--foreground)]/[0.02] transition-colors duration-500">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-12 h-[2px] bg-[var(--gold)] transition-all duration-500 rounded-full" />
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gold-gradient mb-3">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </div>
                <div className="text-xs sm:text-sm text-[var(--text-secondary)] uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
