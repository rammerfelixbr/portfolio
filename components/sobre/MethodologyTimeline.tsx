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

export default function MethodologyTimeline() {
  return (
    <AnimatedSection className="mb-24 sm:mb-32">
      <p className="text-xs font-medium tracking-[0.3em] uppercase text-[var(--gold)] mb-4">
        // PROCESSO
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-16">
        Metodologia
      </h2>

      <div className="relative pl-8 sm:pl-12">
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
              <div
                className="absolute -left-8 sm:-left-12 top-1 w-[22px] h-[22px] sm:w-[30px] sm:h-[30px] rounded-full border-2 border-[var(--gold)] flex items-center justify-center"
                style={{ background: "var(--background)" }}
              >
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[var(--gold)]" />
              </div>

              <div>
                <span className="text-sm font-medium text-[var(--gold)] tracking-wider">
                  {step.number}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] mt-1 mb-3">
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
  );
}
