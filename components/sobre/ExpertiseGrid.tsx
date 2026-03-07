"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/lib/animations";

const expertiseSmall = [
  {
    title: "Estruturação Operacional",
    description:
      "Mapeamento completo de setores, definição de responsabilidades e criação de fluxos claros e escaláveis.",
  },
  {
    title: "Sistemas de Gestão",
    description:
      "Ferramentas sob medida para controle de tarefas, finanças, equipes e operações em tempo real.",
  },
  {
    title: "Automação & Tecnologia",
    description:
      "Chatbots, assistentes e automações que eliminam trabalho manual repetitivo e liberam o time para o que importa.",
  },
  {
    title: "Análise & Relatórios",
    description:
      "Dashboards e relatórios que transformam dados brutos em decisões estratégicas fundamentadas.",
  },
];

export default function ExpertiseGrid() {
  return (
    <AnimatedSection className="mb-24 sm:mb-32">
      <p className="text-xs font-medium tracking-[0.3em] uppercase text-[var(--gold)] mb-4">
        // COMPETÊNCIAS
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-16">
        Expertise
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
        {/* Large card spanning 2 rows */}
        <motion.div
          className="md:row-span-2 relative overflow-hidden rounded-2xl bg-[var(--foreground)]/[0.02] border border-[var(--foreground)]/5 p-8 sm:p-10 flex flex-col justify-between transition-colors duration-300 hover:border-[var(--gold)]/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div
            className="absolute top-0 left-8 right-8 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, var(--gold), transparent)",
            }}
          />

          <div>
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-[var(--gold)] mb-6 block">
              Principal
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-4 leading-tight">
              Visão
              <br />
              Estratégica
            </h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Capacidade de conectar a operação do dia a dia com os
              objetivos de longo prazo da empresa. Cada decisão operacional
              é orientada para gerar impacto real nos resultados do negócio.
            </p>
          </div>

          <div className="mt-10">
            <div className="w-12 h-px bg-[var(--gold)]/40" />
          </div>
        </motion.div>

        {/* 4 smaller cards */}
        {expertiseSmall.map((item, i) => (
          <motion.div
            key={item.title}
            className="relative overflow-hidden rounded-2xl bg-[var(--foreground)]/[0.02] border border-[var(--foreground)]/5 p-6 sm:p-7 transition-colors duration-300 hover:border-[var(--gold)]/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: 0.1 + i * 0.1,
            }}
          >
            <div
              className="absolute top-0 left-6 w-10 h-px"
              style={{ background: "var(--gold)" }}
            />

            <h3 className="text-base sm:text-lg font-semibold text-[var(--foreground)] mb-2 mt-2">
              {item.title}
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}
