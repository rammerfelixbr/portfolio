"use client";

import { motion } from "framer-motion";
import { AnimatedSection, AnimatedCounter } from "@/lib/animations";
import Link from "next/link";

const cases = [
  {
    number: "01",
    title: "Reestruturação Operacional Completa",
    description:
      "Empresa do setor de serviços com operação desorganizada. Mapeamento completo e redesenho da estrutura.",
    tag: "Operacional",
    result: "-40% retrabalho",
  },
  {
    number: "02",
    title: "Sistema de Gestão Interno",
    description:
      "Desenvolvimento e implementação de sistema completo substituindo processos manuais.",
    tag: "Tecnologia",
    result: "+60% eficiência",
  },
  {
    number: "03",
    title: "Automação Financeira",
    description:
      "Módulo automatizado para conciliação bancária eliminando horas de trabalho manual.",
    tag: "Financeiro",
    result: "15h/semana",
  },
  {
    number: "04",
    title: "Monitoramento de Equipes",
    description:
      "Termômetro de sobrecarga com visualização em tempo real da distribuição de tarefas.",
    tag: "Gestão",
    result: "-30% horas extras",
  },
  {
    number: "05",
    title: "Chatbot de Atendimento",
    description:
      "Assistente virtual para dúvidas frequentes, direcionamento de solicitações e automação de onboarding.",
    tag: "Automação",
    result: "-50% repetitivas",
  },
  {
    number: "06",
    title: "Documentação de Processos",
    description:
      "Documentação completa com fluxogramas, checklists e manuais de procedimento por setor.",
    tag: "Processos",
    result: "3x mais rápido",
  },
];

const testimonials = [
  {
    quote:
      "A consultoria transformou completamente nossa operação. Saímos do caos para um fluxo organizado e previsível.",
    name: "Rafaela S.",
    role: "Diretora de Operações",
  },
  {
    quote:
      "O sistema de gestão implementado nos deu visibilidade total sobre o negócio. Hoje tomamos decisões com dados reais.",
    name: "Carlos M.",
    role: "CEO",
  },
];

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

      {/* Case Studies */}
      <section className="pb-20 sm:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col">
            {cases.map((caseItem, index) => (
              <AnimatedSection key={caseItem.number} delay={index * 0.08}>
                <motion.div
                  className="group relative flex flex-col md:flex-row md:items-center gap-6 md:gap-10 py-8 sm:py-10 border-b border-[var(--foreground)]/5 transition-all duration-300"
                  whileHover={{ x: 4 }}
                >
                  {/* Gold left accent on hover */}
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#D4A843] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -ml-4 hidden md:block" />

                  {/* Left: Number */}
                  <div className="flex-shrink-0">
                    <span className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-b from-[#D4A843] to-[#D4A843]/30 bg-clip-text text-transparent font-mono leading-none">
                      {caseItem.number}
                    </span>
                  </div>

                  {/* Middle: Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--foreground)]/90 transition-colors">
                      {caseItem.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed mb-3">
                      {caseItem.description}
                    </p>
                    <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase text-[#D4A843]/80 border border-[#D4A843]/20 rounded-full bg-[#D4A843]/5">
                      {caseItem.tag}
                    </span>
                  </div>

                  {/* Right: Result */}
                  <div className="flex-shrink-0 md:text-right">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#D4A843] to-[#F0D78C] bg-clip-text text-transparent whitespace-nowrap">
                      {caseItem.result}
                    </span>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="inline-block text-[#D4A843] text-sm font-mono tracking-widest uppercase mb-4">
                // DEPOIMENTOS
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] tracking-tight">
                O que dizem
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.name} delay={index * 0.15}>
                <div className="relative p-8 sm:p-10 rounded-2xl bg-[var(--foreground)]/[0.02] border border-[var(--foreground)]/[0.06] hover:border-[#D4A843]/20 transition-all duration-500 group h-full">
                  {/* Gold quote mark */}
                  <div className="mb-6">
                    <svg
                      width="40"
                      height="32"
                      viewBox="0 0 40 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-[#D4A843]/40 group-hover:text-[#D4A843]/60 transition-colors duration-500"
                    >
                      <path
                        d="M0 32V19.2C0 15.7333 0.666667 12.5333 2 9.6C3.46667 6.66667 5.86667 3.73333 9.2 0.799999L14.4 4.8C12.2667 6.93333 10.6667 9.06667 9.6 11.2C8.53333 13.2 8 15.3333 8 17.6H16V32H0ZM24 32V19.2C24 15.7333 24.6667 12.5333 26 9.6C27.4667 6.66667 29.8667 3.73333 33.2 0.799999L38.4 4.8C36.2667 6.93333 34.6667 9.06667 33.6 11.2C32.5333 13.2 32 15.3333 32 17.6H40V32H24Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>

                  <p className="text-[var(--foreground)]/80 text-base sm:text-lg leading-relaxed mb-8 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-3">
                    {/* Avatar placeholder */}
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4A843] to-[#B8942E] flex items-center justify-center text-black font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-[var(--foreground)] font-semibold text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-[var(--text-secondary)] text-xs">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="relative text-center py-16 sm:py-20 px-6 rounded-3xl border border-[var(--foreground)]/[0.06] bg-[var(--foreground)]/[0.02] overflow-hidden">
              {/* Subtle gold radial glow */}
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
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
