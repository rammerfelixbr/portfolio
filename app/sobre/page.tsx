"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/lib/animations";
import MethodologyTimeline from "@/components/sobre/MethodologyTimeline";
import ExpertiseGrid from "@/components/sobre/ExpertiseGrid";

const values = ["Organização", "Eficiência", "Resultados"];

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        {/* Header */}
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

        <MethodologyTimeline />
        <ExpertiseGrid />

        {/* Values */}
        <AnimatedSection>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0 py-16 sm:py-20">
            {values.map((value, i) => (
              <div key={value} className="flex flex-col sm:flex-row items-center">
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
