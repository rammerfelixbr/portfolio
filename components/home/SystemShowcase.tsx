"use client";

import { AnimatedSection } from "@/lib/animations";
import { motion } from "framer-motion";

const featurePills = [
  "Tarefas",
  "Financeiro",
  "Equipes",
  "Reuniões",
  "Credenciais",
];

export default function SystemShowcase() {
  return (
    <section className="relative py-24 sm:py-32 bg-[var(--background)] overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[var(--gold)]/[0.03] blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[var(--gold)] font-semibold">
            Tecnologia
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="text-gold-gradient">Sistema de Gestão</span>
          </h2>
          <p className="mt-4 text-[var(--text-secondary)] max-w-lg mx-auto leading-relaxed">
            Uma plataforma construída sob medida para centralizar e controlar toda a operação.
          </p>
        </AnimatedSection>

        {/* Dashboard Mockup */}
        <AnimatedSection delay={0.2}>
          <DashboardMockup />
        </AnimatedSection>

        {/* Feature Pills */}
        <AnimatedSection delay={0.4} className="mt-14">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {featurePills.map((pill) => (
              <motion.div
                key={pill}
                whileHover={{ borderColor: "var(--gold)", scale: 1.03 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-[var(--foreground)]/10 bg-[var(--foreground)]/[0.02] text-sm text-[var(--foreground)]/70 cursor-default"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
                {pill}
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="rounded-xl border border-[var(--foreground)]/10 bg-[var(--foreground)]/[0.02] overflow-hidden shadow-2xl shadow-[var(--background)]/40">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-5 py-3.5 border-b border-[var(--foreground)]/5 bg-[var(--foreground)]/[0.02]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--foreground)]/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--foreground)]/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--foreground)]/10" />
          </div>
          <div className="ml-4 flex-1 h-5 rounded-md bg-[var(--foreground)]/5 max-w-xs" />
        </div>

        {/* Dashboard body */}
        <div className="p-6 sm:p-8 grid grid-cols-12 gap-4 min-h-[320px]">
          {/* Sidebar mock */}
          <div className="col-span-3 hidden sm:flex flex-col gap-3">
            <div className="h-4 w-3/4 rounded bg-[var(--gold)]/20" />
            <div className="h-3 w-full rounded bg-[var(--foreground)]/5" />
            <div className="h-3 w-full rounded bg-[var(--foreground)]/5" />
            <div className="h-3 w-5/6 rounded bg-[var(--foreground)]/[0.08]" />
            <div className="h-3 w-full rounded bg-[var(--foreground)]/5" />
            <div className="h-3 w-4/5 rounded bg-[var(--foreground)]/5" />
            <div className="mt-auto h-3 w-2/3 rounded bg-[var(--foreground)]/5" />
          </div>

          {/* Main content area */}
          <div className="col-span-12 sm:col-span-9 flex flex-col gap-4">
            {/* Top row — stat cards */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { color: "bg-[var(--gold)]/20", width: "w-2/3" },
                { color: "bg-emerald-500/20", width: "w-1/2" },
                { color: "bg-blue-500/20", width: "w-3/4" },
              ].map((card, i) => (
                <div
                  key={i}
                  className="rounded-lg bg-[var(--foreground)]/[0.03] border border-[var(--foreground)]/5 p-4 flex flex-col gap-2"
                >
                  <div className={`h-2 ${card.width} rounded ${card.color}`} />
                  <div className="h-5 w-1/2 rounded bg-[var(--foreground)]/10" />
                  <div className="h-2 w-full rounded bg-[var(--foreground)]/5" />
                </div>
              ))}
            </div>

            {/* Chart area */}
            <div className="flex-1 rounded-lg bg-[var(--foreground)]/[0.03] border border-[var(--foreground)]/5 p-4 flex items-end gap-2">
              {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t transition-all duration-500"
                  style={{
                    height: `${h}%`,
                    background:
                      i === 11
                        ? "var(--gold)"
                        : `rgba(255,255,255,${0.04 + i * 0.005})`,
                  }}
                />
              ))}
            </div>

            {/* Bottom row */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-[var(--foreground)]/[0.03] border border-[var(--foreground)]/5 p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--gold)]/15 shrink-0" />
                  <div className="h-2 flex-1 rounded bg-[var(--foreground)]/10" />
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-full rounded bg-[var(--foreground)]/5" />
                  <div className="h-2 w-4/5 rounded bg-[var(--foreground)]/5" />
                </div>
              </div>
              <div className="rounded-lg bg-[var(--foreground)]/[0.03] border border-[var(--foreground)]/5 p-4 flex flex-col justify-center items-center gap-2">
                <div className="w-12 h-12 rounded-full border-[3px] border-[var(--gold)]/30 border-t-[var(--gold)]" />
                <div className="h-2 w-1/2 rounded bg-[var(--foreground)]/10" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reflection / shadow */}
      <div className="absolute -bottom-8 left-[10%] right-[10%] h-16 bg-[var(--gold)]/[0.04] blur-2xl rounded-full" />
    </div>
  );
}
