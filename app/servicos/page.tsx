"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/lib/animations";
import Link from "next/link";

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

const diferenciais = [
  {
    number: "01",
    title: "Sob medida",
    description:
      "Cada solução é desenhada exclusivamente para a sua realidade. Nada de modelos genéricos ou pacotes prontos.",
  },
  {
    number: "02",
    title: "Do zero à autonomia",
    description:
      "Acompanhamento completo desde o diagnóstico até a implementação final, garantindo que sua equipe opere com independência.",
  },
  {
    number: "03",
    title: "Tecnologia + Estratégia",
    description:
      "Uma combinação única de visão estratégica com execução técnica que transforma planejamento em sistemas funcionais.",
  },
];

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

      {/* Services List */}
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
                      {/* Left: Number */}
                      <span className="text-3xl sm:text-4xl font-bold text-[var(--gold)] opacity-60 group-hover:opacity-100 transition-opacity duration-300 shrink-0 w-16 sm:w-20">
                        {servico.number}
                      </span>

                      {/* Center: Title + Description */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl font-bold text-[var(--foreground)] tracking-tight group-hover:text-[var(--gold)] transition-colors duration-300">
                          {servico.title}
                        </h3>
                        <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl">
                          {servico.description}
                        </p>
                      </div>

                      {/* Right: Arrow */}
                      <div className="shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-5 h-5 text-[var(--gold)]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                          />
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

      {/* Differentials */}
      <section className="py-24 sm:py-32 bg-[var(--foreground)]/[0.02]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] tracking-tight">
                Por que escolher a{" "}
                <span className="text-gold-gradient">
                  Hammer Felix Consulting
                </span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
            {diferenciais.map((item, index) => (
              <AnimatedSection key={item.number} delay={index * 0.15}>
                <div className="text-center md:text-left">
                  <span className="inline-block text-5xl sm:text-6xl font-bold text-[var(--gold)] opacity-40 mb-4">
                    {item.number}
                  </span>
                  <h3 className="text-lg font-bold text-[var(--foreground)] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="relative rounded-2xl border border-[var(--foreground)]/5 bg-[var(--foreground)]/[0.02] p-10 sm:p-16 text-center overflow-hidden">
              {/* Subtle gold glow behind */}
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
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
