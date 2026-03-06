"use client";

import { motion } from "framer-motion";
import { AnimatedSection, AnimatedCounter } from "@/lib/animations";
import Link from "next/link";

export default function SistemaPage() {
  const modules = [
    {
      number: "01",
      title: "Dashboard & Termômetro de Sobrecarga",
      description:
        "Painel central com visão geral de toda a operação. Inclui um termômetro visual que monitora em tempo real a carga de trabalho de cada colaborador — combinando funções ativas e solicitações pendentes — prevenindo sobrecarga e burnout.",
      highlight: "Monitoramento em tempo real",
    },
    {
      number: "02",
      title: "Gestão de Solicitações e Tarefas",
      description:
        "Sistema completo de delegação e acompanhamento de demandas. Priorização por urgência (urgente, alta, média, baixa), filtro por colaborador, calendário integrado, controle de prazos e backlog. Tarefas recorrentes e alertas automáticos.",
      highlight: "Priorização inteligente",
    },
    {
      number: "03",
      title: "Módulo Financeiro Completo",
      description:
        "Gestão financeira integrada com conciliação bancária multi-banco, contas a pagar e receber, projeção de fluxo de caixa para 6 meses, fechamento mensal, análise por categoria e alertas de vencimento automáticos.",
      highlight: "Projeção de 6 meses",
    },
    {
      number: "04",
      title: "Funções e Estrutura por Setor",
      description:
        "Mapeamento completo de responsabilidades por colaborador e por setor. Visualização clara de quem faz o quê, com contagem de funções ativas e filtros por departamento: Financeiro, Atendimento, Comercial, Marketing, Operações e mais.",
      highlight: "Organização por setor",
    },
    {
      number: "05",
      title: "Pedidos, Reuniões e Lembretes",
      description:
        "Canal para solicitações de recursos com fluxo de aprovação. Registro de reuniões com pautas, decisões e histórico. Sistema de lembretes pessoais para compromissos e follow-ups.",
      highlight: "Fluxo de aprovação",
    },
    {
      number: "06",
      title: "Credenciais e Dados da Empresa",
      description:
        "Cofre centralizado de credenciais organizado por setor, com controle de acesso e cópia rápida. Hub de informações da empresa com CNPJ, bancos, equipe e parceiros em um só lugar.",
      highlight: "Segurança centralizada",
    },
  ];

  const stats = [
    { value: "10", suffix: "+", label: "Módulos integrados" },
    { value: "7", suffix: "", label: "Colaboradores gerenciados" },
    { value: "115", suffix: "+", label: "Transações rastreadas" },
    { value: "57", suffix: "", label: "Funções mapeadas" },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <AnimatedSection className="pt-32 pb-16 px-6 lg:px-8 max-w-7xl mx-auto">
        <span className="inline-block text-xs tracking-[0.3em] uppercase text-[var(--gold)] font-medium mb-6">
          // SISTEMA DE GESTÃO
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] max-w-4xl">
          Um sistema{" "}
          <span className="text-gold-gradient">completo</span>, construído
          para a realidade das empresas
        </h1>
        <p className="mt-6 text-[var(--text-secondary)] text-lg max-w-2xl leading-relaxed">
          Plataforma de gestão operacional desenvolvida para centralizar tarefas,
          finanças, equipes e processos em um único ambiente — substituindo
          planilhas e processos manuais por um sistema integrado com dados em
          tempo real.
        </p>
      </AnimatedSection>

      {/* Dashboard Mockup - representação visual do sistema real */}
      <AnimatedSection className="px-6 lg:px-8 max-w-7xl mx-auto pb-12" delay={0.15}>
        <div className="bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden">
          {/* Top bar */}
          <div className="flex items-center px-4 py-3 border-b border-white/5">
            <div className="flex items-center gap-2 mr-auto">
              <div className="w-3 h-3 rounded-full bg-red-500/40" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
              <div className="w-3 h-3 rounded-full bg-green-500/40" />
            </div>
            <div className="flex gap-1 text-[10px] tracking-wider uppercase text-white/30">
              <span className="px-3 py-1 rounded bg-[var(--gold)]/10 text-[var(--gold)]/70 border border-[var(--gold)]/20">Dashboard</span>
              <span className="px-3 py-1">Solicitações</span>
              <span className="px-3 py-1">Financeiro</span>
              <span className="px-3 py-1 hidden sm:inline">Equipe</span>
            </div>
          </div>

          <div className="flex min-h-[380px]">
            {/* Sidebar */}
            <div className="w-44 border-r border-white/5 p-3 hidden md:flex flex-col gap-1.5">
              {[
                { label: "Dashboard", active: true },
                { label: "Solicitações", active: false },
                { label: "Financeiro", active: false },
                { label: "Funções", active: false },
                { label: "Credenciais", active: false },
                { label: "Reuniões", active: false },
                { label: "Pedidos", active: false },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-[10px] tracking-wide ${
                    item.active
                      ? "bg-[var(--gold)]/10 border-l-2 border-[var(--gold)] text-[var(--gold)]"
                      : "text-white/25"
                  }`}
                >
                  <div className={`w-3 h-3 rounded ${item.active ? "bg-[var(--gold)]/30" : "bg-white/10"}`} />
                  {item.label}
                </div>
              ))}
              {/* User at bottom */}
              <div className="mt-auto pt-3 border-t border-white/5 flex items-center gap-2 px-2">
                <div className="w-6 h-6 rounded-full bg-purple-500/30 flex items-center justify-center text-[8px] text-purple-300">R</div>
                <div>
                  <div className="text-[9px] text-white/40">Rammer</div>
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
                {[
                  { label: "Credenciais", value: "29", color: "bg-blue-500/10 border-blue-500/10" },
                  { label: "Funções", value: "57", color: "bg-[var(--gold)]/10 border-[var(--gold)]/10" },
                  { label: "Solicitações", value: "14", color: "bg-orange-500/10 border-orange-500/10" },
                  { label: "Reuniões", value: "8", color: "bg-purple-500/10 border-purple-500/10" },
                ].map((stat) => (
                  <div key={stat.label} className={`px-3 py-3 rounded-xl border ${stat.color}`}>
                    <div className="text-[9px] text-white/30 mb-1">{stat.label}</div>
                    <div className="text-lg font-bold text-white/60">{stat.value}</div>
                  </div>
                ))}
              </div>

              {/* Workload thermometer */}
              <div className="bg-white/[0.02] rounded-xl border border-white/5 p-4">
                <div className="text-[10px] text-white/30 uppercase tracking-wider mb-3">Termômetro de Carga</div>
                <div className="space-y-2">
                  {[
                    { name: "R", load: 89, color: "bg-red-500" },
                    { name: "S", load: 42, color: "bg-yellow-500" },
                    { name: "N", load: 28, color: "bg-green-500" },
                    { name: "D", load: 65, color: "bg-orange-500" },
                  ].map((person) => (
                    <div key={person.name} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-[8px] text-white/40">{person.name}</div>
                      <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${person.color}/40`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${person.load}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 }}
                        />
                      </div>
                      <span className="text-[9px] text-white/30 w-8 text-right">{person.load}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chart */}
              <div className="bg-white/[0.02] rounded-xl border border-white/5 p-4">
                <div className="text-[10px] text-white/30 uppercase tracking-wider mb-3">Projeção Financeira — 6 meses</div>
                <div className="flex items-end gap-1.5 h-24">
                  {[
                    { g: 65, r: 55 }, { g: 72, r: 60 }, { g: 80, r: 68 },
                    { g: 58, r: 50 }, { g: 85, r: 70 }, { g: 90, r: 65 },
                  ].map((bar, i) => (
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
          <div className="px-4 py-2 border-t border-white/5 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
            <span className="text-[9px] text-white/20">Salvo na nuvem • Sincronizado em tempo real</span>
          </div>
        </div>

        <p className="text-center text-white/30 text-sm mt-6 max-w-2xl mx-auto">
          Interface real do sistema — dashboard, termômetro de sobrecarga, projeção financeira e muito mais.
        </p>
      </AnimatedSection>

      {/* Live Link */}
      <AnimatedSection className="px-6 lg:px-8 max-w-7xl mx-auto pb-16">
        <div className="flex items-center justify-center">
          <a
            href="https://sistema-gestao-rotina.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[var(--gold)]/20 bg-[var(--gold)]/5 hover:bg-[var(--gold)]/10 transition-colors"
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-[var(--gold)]">Ver sistema em produção</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 text-[var(--gold)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        </div>
      </AnimatedSection>

      {/* Modules */}
      <div className="px-6 lg:px-8 max-w-7xl mx-auto py-20 border-t border-white/5">
        <AnimatedSection>
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-[var(--gold)] font-medium mb-4">
            // MÓDULOS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-16">
            Funcionalidades do sistema
          </h2>
        </AnimatedSection>

        {modules.map((module, index) => (
          <AnimatedSection key={module.number} delay={index * 0.06}>
            <div className="group grid grid-cols-1 md:grid-cols-[100px_1fr_auto] gap-6 md:gap-10 py-10 border-b border-white/5 hover:border-[var(--gold)]/20 transition-colors">
              <div>
                <span className="text-4xl font-bold bg-gradient-to-b from-[var(--gold)] to-[var(--gold)]/20 bg-clip-text text-transparent">
                  {module.number}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[var(--gold)] transition-colors">
                  {module.title}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed max-w-2xl text-sm">
                  {module.description}
                </p>
              </div>
              <div className="hidden md:flex items-center">
                <span className="px-3 py-1 rounded-full border border-[var(--gold)]/20 text-[var(--gold)] text-[10px] uppercase tracking-wider whitespace-nowrap">
                  {module.highlight}
                </span>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Stats */}
      <AnimatedSection className="px-6 lg:px-8 max-w-7xl mx-auto py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {stats.map((stat, i) => (
            <div key={i} className="bg-black px-6 py-10 text-center">
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

      {/* Tech Stack */}
      <AnimatedSection className="px-6 lg:px-8 max-w-7xl mx-auto pb-20">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {["JavaScript", "Firebase", "Firestore", "Cloud Functions", "Vercel", "Real-time Sync"].map((tech) => (
            <span key={tech} className="px-4 py-2 rounded-full border border-white/5 text-xs text-[var(--text-secondary)] tracking-wider">
              {tech}
            </span>
          ))}
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="px-6 lg:px-8 max-w-7xl mx-auto pb-32">
        <div className="relative text-center py-20 rounded-3xl border border-white/5 bg-white/[0.01] overflow-hidden">
          <div className="absolute inset-0 bg-[var(--gold)]/[0.02] blur-[100px] rounded-full w-96 h-96 mx-auto my-auto" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Quer um sistema assim para sua empresa?
            </h2>
            <p className="text-[var(--text-secondary)] mb-8 max-w-lg mx-auto">
              Posso desenvolver um sistema sob medida, adaptado à realidade e aos processos do seu negócio.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--gold)] text-black font-semibold text-sm uppercase tracking-wide hover:bg-[var(--gold-bright)] transition-colors"
            >
              Solicitar Demonstração
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
