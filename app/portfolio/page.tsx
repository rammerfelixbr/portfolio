"use client";

import { AnimatedSection } from "@/lib/animations";
import Link from "next/link";
import CaseStudies from "@/components/portfolio/CaseStudies";
import Testimonials from "@/components/portfolio/Testimonials";

export default function PortfolioPage() {
  return (
    <div className="bg-[var(--background)] min-h-screen">
      {/* Header */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="inline-block text-[#D4A843] text-sm font-mono tracking-widest uppercase mb-6">
              // PORTFÓLIO
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--foreground)] tracking-tight leading-[1.1]">
              Resultados{" "}
              <span className="bg-gradient-to-r from-[#D4A843] via-[#F0D78C] to-[#D4A843] bg-clip-text text-transparent">
                Reais
              </span>
              ,
              <br />
              Transformação Operacional
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="mt-6 text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed">
              Cada projeto representa uma transformação concreta. Conheça os
              resultados entregues em operações reais.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <CaseStudies />
      <Testimonials />

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="relative text-center py-16 sm:py-20 px-6 rounded-3xl border border-[var(--foreground)]/[0.06] bg-[var(--foreground)]/[0.02] overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,168,67,0.06)_0%,_transparent_70%)]" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] tracking-tight mb-4">
                  Quer resultados como esses?
                </h2>
                <p className="text-[var(--text-secondary)] max-w-lg mx-auto mb-8 leading-relaxed">
                  Cada projeto começa com uma conversa. Vamos entender sua
                  realidade e desenhar a melhor solução.
                </p>
                <Link
                  href="/contato"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#D4A843] text-black font-semibold text-sm hover:bg-[#B8942E] transition-colors duration-300"
                >
                  Iniciar Projeto
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
