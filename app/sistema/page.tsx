"use client";

import { AnimatedSection } from "@/lib/animations";
import DashboardMockup from "@/components/sistema/DashboardMockup";
import ModulesList from "@/components/sistema/ModulesList";
import SystemStats from "@/components/sistema/SystemStats";
import TechStack from "@/components/sistema/TechStack";
import SystemCta from "@/components/sistema/SystemCta";

export default function SistemaPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Header */}
      <AnimatedSection className="pt-32 pb-16 px-6 lg:px-8 max-w-7xl mx-auto">
        <span className="inline-block text-xs tracking-[0.3em] uppercase text-[var(--gold)] font-medium mb-6">
          // SISTEMA DE GESTÃO
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--foreground)] leading-[1.1] max-w-4xl">
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

      <DashboardMockup />

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

      <ModulesList />
      <SystemStats />
      <TechStack />
      <SystemCta />
    </div>
  );
}
