"use client";

import { AnimatedSection } from "@/lib/animations";
import Link from "next/link";
import ServicesList from "@/components/servicos/ServicesList";
import Differentials from "@/components/servicos/Differentials";

export default function ServicosPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Header */}
      <section className="pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="inline-block text-xs font-semibold tracking-[0.3em] uppercase text-[var(--gold)] mb-6">
              // SERVIÇOS
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--foreground)] tracking-tight leading-[1.1]">
              Soluções sob{" "}
              <span className="text-gold-gradient">medida</span>
              <br />
              para sua operação
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl leading-relaxed">
              Serviços personalizados que combinam estratégia e tecnologia para
              estruturar, organizar e escalar o seu negócio com eficiência real.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <ServicesList />
      <Differentials />

      {/* CTA */}
      <section className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="relative rounded-2xl border border-[var(--foreground)]/5 bg-[var(--foreground)]/[0.02] p-10 sm:p-16 text-center overflow-hidden">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-[var(--gold)] opacity-[0.03] blur-[100px] rounded-full" />
              </div>
              <h2 className="relative text-2xl sm:text-3xl font-bold text-[var(--foreground)] tracking-tight mb-4">
                Precisa de algo específico?
              </h2>
              <p className="relative text-[var(--text-secondary)] max-w-xl mx-auto mb-8 leading-relaxed">
                Cada empresa é única. Se você precisa de uma solução que não está
                listada acima, entre em contato para discutirmos como posso
                ajudar.
              </p>
              <Link
                href="/contato"
                className="relative inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[var(--gold)] text-black font-semibold text-sm hover:bg-[var(--gold-dark)] transition-colors duration-300"
              >
                Solicitar Consultoria
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
