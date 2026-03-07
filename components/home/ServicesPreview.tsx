"use client";

import { AnimatedSection } from "@/lib/animations";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Estruturação Operacional",
    description:
      "Diagnóstico completo e reorganização de processos, setores e fluxos de trabalho. Construímos a fundação que sustenta o crescimento da sua empresa.",
  },
  {
    number: "02",
    title: "Sistemas de Gestão Personalizados",
    description:
      "Desenvolvimento sob medida de ferramentas de controle operacional, financeiro e de equipes.",
  },
  {
    number: "03",
    title: "Automação & Processos",
    description:
      "Assistentes, chatbots e integrações que eliminam retrabalho e aceleram a operação.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="relative py-24 sm:py-32 bg-[var(--background)] overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--gold)]/[0.02] blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-10 bg-[var(--gold)]" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-[var(--gold)] font-semibold">
              Serviços
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--foreground)] tracking-tight">
            O que <span className="text-gold-gradient">fazemos</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] max-w-xl leading-relaxed">
            Soluções completas para organizar, automatizar e escalar a operação da sua empresa.
          </p>
        </AnimatedSection>

        {/* Bento Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {/* Left — Tall card (01) */}
          <AnimatedSection delay={0.1}>
            <motion.div
              whileHover={{ borderColor: "var(--gold)" }}
              transition={{ duration: 0.3 }}
              className="relative h-full min-h-[400px] md:min-h-full p-8 sm:p-10 rounded-2xl bg-[var(--foreground)]/[0.02] border border-[var(--foreground)]/5 overflow-hidden group flex flex-col justify-between"
            >
              <span className="absolute top-6 right-8 text-[8rem] sm:text-[10rem] font-black leading-none text-[var(--foreground)]/[0.03] select-none pointer-events-none">
                01
              </span>
              <div className="w-10 h-[3px] bg-[var(--gold)] rounded-full mb-8 group-hover:w-16 transition-all duration-500" />
              <div className="relative z-10 flex flex-col flex-1">
                <h3 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] tracking-tight leading-snug">
                  {services[0].title}
                </h3>
                <p className="mt-4 text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base flex-1">
                  {services[0].description}
                </p>
                <div className="mt-8 flex items-center gap-2 text-[var(--gold)] text-xs uppercase tracking-[0.2em] font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span>Saiba mais</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Right column — stacked */}
          <div className="flex flex-col gap-4 md:gap-5">
            {services.slice(1).map((service) => (
              <AnimatedSection key={service.number} delay={Number(service.number) * 0.1}>
                <motion.div
                  whileHover={{ borderColor: "var(--gold)" }}
                  transition={{ duration: 0.3 }}
                  className="relative p-8 sm:p-10 rounded-2xl bg-[var(--foreground)]/[0.02] border border-[var(--foreground)]/5 overflow-hidden group"
                >
                  <span className="absolute top-4 right-6 text-[6rem] font-black leading-none text-[var(--foreground)]/[0.03] select-none pointer-events-none">
                    {service.number}
                  </span>
                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] tracking-tight">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Services link */}
        <AnimatedSection delay={0.4} className="mt-10 text-center">
          <Link
            href="/servicos"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--gold)] uppercase tracking-[0.15em] hover:gap-3 transition-all duration-300"
          >
            Ver todos os serviços
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
