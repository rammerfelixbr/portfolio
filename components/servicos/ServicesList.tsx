"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/lib/animations";

const servicos = [
  {
    number: "01",
    title: "Estruturação Operacional de Empresas",
    description:
      "Mapear setores, definir tarefas, implementar fluxos completos e criar a estrutura organizacional que sua empresa precisa para crescer.",
  },
  {
    number: "02",
    title: "Sistemas de Gestão Personalizados",
    description:
      "Desenvolvimento de sistemas completos para registro de tarefas, conciliação financeira, relatórios automáticos e controle operacional.",
  },
  {
    number: "03",
    title: "Organização de Processos e Fluxos",
    description:
      "Padronização de operações, eliminação de gargalos e otimização da performance de cada setor da empresa.",
  },
  {
    number: "04",
    title: "Consultoria Estratégica",
    description:
      "Acompanhamento de implementação, treinamento de equipes e consultoria contínua para garantir resultados sustentáveis.",
  },
  {
    number: "05",
    title: "Automações e Ferramentas Sob Demanda",
    description:
      "Desenvolvimento de chatbots, assistentes e automações personalizadas que eliminam trabalho manual e conectam sistemas.",
  },
];

export default function ServicesList() {
  return (
    <section className="pb-24 sm:pb-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="border-t border-[var(--foreground)]/5">
            {servicos.map((servico, index) => (
              <motion.div
                key={servico.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="group relative border-b border-[var(--foreground)]/5 transition-all duration-300 hover:bg-[var(--foreground)]/[0.02] hover:border-l-2 hover:border-l-[var(--gold)] hover:pl-6"
              >
                <div className="py-8 sm:py-10">
                  <div className="flex items-start justify-between gap-6">
                    <span className="text-3xl sm:text-4xl font-bold text-[var(--gold)] opacity-60 group-hover:opacity-100 transition-opacity duration-300 shrink-0 w-16 sm:w-20">
                      {servico.number}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-[var(--foreground)] tracking-tight group-hover:text-[var(--gold)] transition-colors duration-300">
                        {servico.title}
                      </h3>
                      <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                        {servico.description}
                      </p>
                    </div>
                    <div className="shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-[var(--gold)]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
