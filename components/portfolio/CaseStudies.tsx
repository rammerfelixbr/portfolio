"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/lib/animations";

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

export default function CaseStudies() {
  return (
    <section className="pb-20 sm:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col">
          {cases.map((caseItem, index) => (
            <AnimatedSection key={caseItem.number} delay={index * 0.08}>
              <motion.div
                className="group relative flex flex-col md:flex-row md:items-center gap-6 md:gap-10 py-8 sm:py-10 border-b border-[var(--foreground)]/5 transition-all duration-300"
                whileHover={{ x: 4 }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#D4A843] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -ml-4 hidden md:block" />

                <div className="flex-shrink-0">
                  <span className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-b from-[#D4A843] to-[#D4A843]/30 bg-clip-text text-transparent font-mono leading-none">
                    {caseItem.number}
                  </span>
                </div>

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
  );
}
