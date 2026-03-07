"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/lib/animations";

const sidebarItems = [
  { label: "Dashboard", active: true },
  { label: "Solicitações", active: false },
  { label: "Financeiro", active: false },
  { label: "Funções", active: false },
  { label: "Credenciais", active: false },
  { label: "Reuniões", active: false },
  { label: "Pedidos", active: false },
];

const statCards = [
  { label: "Credenciais", value: "29", color: "bg-blue-500/10 border-blue-500/10" },
  { label: "Funções", value: "57", color: "bg-[var(--gold)]/10 border-[var(--gold)]/10" },
  { label: "Solicitações", value: "14", color: "bg-orange-500/10 border-orange-500/10" },
  { label: "Reuniões", value: "8", color: "bg-purple-500/10 border-purple-500/10" },
];

const workloadData = [
  { name: "R", load: 89, color: "bg-red-500" },
  { name: "S", load: 42, color: "bg-yellow-500" },
  { name: "N", load: 28, color: "bg-green-500" },
  { name: "D", load: 65, color: "bg-orange-500" },
];

const chartData = [
  { g: 65, r: 55 }, { g: 72, r: 60 }, { g: 80, r: 68 },
  { g: 58, r: 50 }, { g: 85, r: 70 }, { g: 90, r: 65 },
];

export default function DashboardMockup() {
  return (
    <AnimatedSection className="px-6 lg:px-8 max-w-7xl mx-auto pb-12" delay={0.15}>
      <div className="bg-[var(--foreground)]/[0.02] border border-[var(--foreground)]/5 rounded-2xl overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center px-4 py-3 border-b border-[var(--foreground)]/5">
          <div className="flex items-center gap-2 mr-auto">
            <div className="w-3 h-3 rounded-full bg-red-500/40" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
            <div className="w-3 h-3 rounded-full bg-green-500/40" />
          </div>
          <div className="flex gap-1 text-[10px] tracking-wider uppercase text-[var(--foreground)]/30">
            <span className="px-3 py-1 rounded bg-[var(--gold)]/10 text-[var(--gold)]/70 border border-[var(--gold)]/20">Dashboard</span>
            <span className="px-3 py-1">Solicitações</span>
            <span className="px-3 py-1">Financeiro</span>
            <span className="px-3 py-1 hidden sm:inline">Equipe</span>
          </div>
        </div>

        <div className="flex min-h-[380px]">
          {/* Sidebar */}
          <div className="w-44 border-r border-[var(--foreground)]/5 p-3 hidden md:flex flex-col gap-1.5">
            {sidebarItems.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-[10px] tracking-wide ${
                  item.active
                    ? "bg-[var(--gold)]/10 border-l-2 border-[var(--gold)] text-[var(--gold)]"
                    : "text-[var(--foreground)]/25"
                }`}
              >
                <div className={`w-3 h-3 rounded ${item.active ? "bg-[var(--gold)]/30" : "bg-[var(--foreground)]/10"}`} />
                {item.label}
              </div>
            ))}
            <div className="mt-auto pt-3 border-t border-[var(--foreground)]/5 flex items-center gap-2 px-2">
              <div className="w-6 h-6 rounded-full bg-purple-500/30 flex items-center justify-center text-[8px] text-purple-300">R</div>
              <div>
                <div className="text-[9px] text-[var(--foreground)]/40">Rammer</div>
                <div className="text-[8px] text-[var(--gold)]/50">Admin</div>
              </div>
            </div>
          </div>

          {/* Main area */}
          <div className="flex-1 p-5 space-y-4">
            {/* Alert banner */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--gold)]/5 border border-[var(--gold)]/10">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] animate-pulse" />
              <span className="text-[10px] text-[var(--gold)]/60">3 solicitações aguardando • 2 contas vencendo hoje</span>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {statCards.map((stat) => (
                <div key={stat.label} className={`px-3 py-3 rounded-xl border ${stat.color}`}>
                  <div className="text-[9px] text-[var(--foreground)]/30 mb-1">{stat.label}</div>
                  <div className="text-lg font-bold text-[var(--foreground)]/60">{stat.value}</div>
                </div>
              ))}
            </div>

            {/* Workload thermometer */}
            <div className="bg-[var(--foreground)]/[0.02] rounded-xl border border-[var(--foreground)]/5 p-4">
              <div className="text-[10px] text-[var(--foreground)]/30 uppercase tracking-wider mb-3">Termômetro de Carga</div>
              <div className="space-y-2">
                {workloadData.map((person) => (
                  <div key={person.name} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[var(--foreground)]/5 flex items-center justify-center text-[8px] text-[var(--foreground)]/40">{person.name}</div>
                    <div className="flex-1 h-1.5 bg-[var(--foreground)]/5 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${person.color}/40`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${person.load}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                    </div>
                    <span className="text-[9px] text-[var(--foreground)]/30 w-8 text-right">{person.load}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Chart */}
            <div className="bg-[var(--foreground)]/[0.02] rounded-xl border border-[var(--foreground)]/5 p-4">
              <div className="text-[10px] text-[var(--foreground)]/30 uppercase tracking-wider mb-3">Projeção Financeira — 6 meses</div>
              <div className="flex items-end gap-1.5 h-24">
                {chartData.map((bar, i) => (
                  <div key={i} className="flex-1 flex gap-px items-end">
                    <motion.div
                      className="flex-1 rounded-t bg-green-500/20"
                      initial={{ height: 0 }}
                      whileInView={{ height: `${bar.g}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.08 }}
                    />
                    <motion.div
                      className="flex-1 rounded-t bg-red-500/15"
                      initial={{ height: 0 }}
                      whileInView={{ height: `${bar.r}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.08 + 0.1 }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom status bar */}
        <div className="px-4 py-2 border-t border-[var(--foreground)]/5 flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
          <span className="text-[9px] text-[var(--foreground)]/20">Salvo na nuvem • Sincronizado em tempo real</span>
        </div>
      </div>

      <p className="text-center text-[var(--foreground)]/30 text-sm mt-6 max-w-2xl mx-auto">
        Interface real do sistema — dashboard, termômetro de sobrecarga, projeção financeira e muito mais.
      </p>
    </AnimatedSection>
  );
}
