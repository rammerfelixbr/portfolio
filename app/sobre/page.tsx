"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/lib/animations";

const timelineSteps = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Entendo a operação atual, mapeio processos e identifico os pontos críticos que impactam a eficiência.",
  },
  {
    number: "02",
    title: "Estruturação",
    description:
      "Redesenho fluxos, defino responsabilidades e crio a estrutura operacional ideal para cada setor.",
  },
  {
    number: "03",
    title: "Implementação",
    description:
      "Coloco em prática com sistemas, automações e acompanhamento contínuo até a total autonomia.",
  },
];

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

const values = ["Organização", "Eficiência", "Resultados"];

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        {/* ── Header ── */}
        <AnimatedSection className="mb-24 sm:mb-32">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-[var(--gold)] mb-6">
            // SOBRE
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8">
            Quem é{" "}
            <span className="text-gold-gradient">Hammer Felix</span>
          </h1>
          <div className="max-w-2xl">
            <p className="text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">
              Consultor especializado em estruturação operacional, sistemas de
              gestão e organização de processos. Transformo operações
              fragmentadas em estruturas claras, eficientes e escaláveis —
              combinando visão estratégica com execução técnica para entregar
              resultados que funcionam no dia a dia.
            </p>
          </div>
        </AnimatedSection>

        {/* ── Methodology Timeline ── */}
        <AnimatedSection className="mb-24 sm:mb-32">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-[var(--gold)] mb-4">
            // PROCESSO
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-16">
            Metodologia
          </h2>

          <div className="relative pl-8 sm:pl-12">
            {/* Gold vertical line */}
            <div
              className="absolute left-[11px] sm:left-[15px] top-2 bottom-2 w-px"
              style={{
                background:
                  "linear-gradient(to bottom, var(--gold), var(--gold-dark), transparent)",
              }}
            />

            <div className="space-y-12 sm:space-y-16">
              {timelineSteps.map((step, i) => (
                <motion.div
                  key={step.number}
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: i * 0.15,
                  }}
                >
                  {/* Gold circle on the line */}
                  <div
                    className="absolute -left-8 sm:-left-12 top-1 w-[22px] h-[22px] sm:w-[30px] sm:h-[30px] rounded-full border-2 border-[var(--gold)] flex items-center justify-center"
                    style={{
                      background: "var(--background)",
                    }}
                  >
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[var(--gold)]" />
                  </div>

                  <div>
                    <span className="text-sm font-medium text-[var(--gold)] tracking-wider">
                      {step.number}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed max-w-lg">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* ── Expertise Grid ── */}
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
              className="md:row-span-2 relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/5 p-8 sm:p-10 flex flex-col justify-between transition-colors duration-300 hover:border-[var(--gold)]/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Gold accent line */}
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
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
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

              {/* Decorative gold corner */}
              <div className="mt-10">
                <div className="w-12 h-px bg-[var(--gold)]/40" />
              </div>
            </motion.div>

            {/* 4 smaller cards */}
            {expertiseSmall.map((item, i) => (
              <motion.div
                key={item.title}
                className="relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/5 p-6 sm:p-7 transition-colors duration-300 hover:border-[var(--gold)]/30"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 0.1 + i * 0.1,
                }}
              >
                {/* Gold accent line */}
                <div
                  className="absolute top-0 left-6 w-10 h-px"
                  style={{ background: "var(--gold)" }}
                />

                <h3 className="text-base sm:text-lg font-semibold text-white mb-2 mt-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* ── Values ── */}
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0 py-16 sm:py-20">
            {values.map((value, i) => (
              <div
                key={value}
                className="flex flex-col sm:flex-row items-center"
              >
                {i > 0 && (
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[var(--gold)] mb-4 sm:mb-0 sm:mx-8 lg:mx-10" />
                )}
                <motion.span
                  className="value-word text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight select-none cursor-default"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: i * 0.15,
                  }}
                >
                  {value}
                </motion.span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
