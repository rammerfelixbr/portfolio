"use client";

import Hero from "@/components/Hero";
import { AnimatedSection, AnimatedCounter } from "@/lib/animations";
import Link from "next/link";
import { motion } from "framer-motion";

const keywords = [
  "Estruturação",
  "Organização",
  "Eficiência",
  "Sistemas",
  "Automação",
  "Resultados",
];

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

const featurePills = [
  "Tarefas",
  "Financeiro",
  "Equipes",
  "Reuniões",
  "Credenciais",
];

const stats = [
  { target: 40, suffix: "%", label: "Redução em retrabalho" },
  { target: 60, suffix: "%", label: "Aumento em eficiência" },
  { target: 15, suffix: "h", label: "Economizadas/semana" },
  { target: 3, suffix: "x", label: "Onboarding mais rápido" },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* ──────────────────────────────────────────────
          KEYWORDS TICKER
      ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[var(--background)] border-y border-[var(--foreground)]/5 py-5">
        <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite]">
          {[...keywords, ...keywords, ...keywords].map((word, i) => (
            <span
              key={i}
              className="flex items-center gap-6 mx-6 text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[var(--foreground)]/40 font-medium select-none"
            >
              {word}
              <span className="w-1 h-1 rounded-full bg-[var(--gold)]/60 shrink-0" />
            </span>
          ))}
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          SERVICES PREVIEW — BENTO GRID
      ────────────────────────────────────────────── */}
      <section className="relative py-24 sm:py-32 bg-[var(--background)] overflow-hidden">
        {/* Subtle background glow */}
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
                {/* Number watermark */}
                <span className="absolute top-6 right-8 text-[8rem] sm:text-[10rem] font-black leading-none text-[var(--foreground)]/[0.03] select-none pointer-events-none">
                  01
                </span>

                {/* Gold accent */}
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-3.5 h-3.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Right column — stacked */}
            <div className="flex flex-col gap-4 md:gap-5">
              {/* Card 02 */}
              <AnimatedSection delay={0.2}>
                <motion.div
                  whileHover={{ borderColor: "var(--gold)" }}
                  transition={{ duration: 0.3 }}
                  className="relative p-8 sm:p-10 rounded-2xl bg-[var(--foreground)]/[0.02] border border-[var(--foreground)]/5 overflow-hidden group"
                >
                  <span className="absolute top-4 right-6 text-[6rem] font-black leading-none text-[var(--foreground)]/[0.03] select-none pointer-events-none">
                    02
                  </span>
                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] tracking-tight">
                      {services[1].title}
                    </h3>
                    <p className="mt-3 text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base">
                      {services[1].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>

              {/* Card 03 */}
              <AnimatedSection delay={0.3}>
                <motion.div
                  whileHover={{ borderColor: "var(--gold)" }}
                  transition={{ duration: 0.3 }}
                  className="relative p-8 sm:p-10 rounded-2xl bg-[var(--foreground)]/[0.02] border border-[var(--foreground)]/5 overflow-hidden group"
                >
                  <span className="absolute top-4 right-6 text-[6rem] font-black leading-none text-[var(--foreground)]/[0.03] select-none pointer-events-none">
                    03
                  </span>
                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--foreground)] tracking-tight">
                      {services[2].title}
                    </h3>
                    <p className="mt-3 text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base">
                      {services[2].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>

          {/* Services link */}
          <AnimatedSection delay={0.4} className="mt-10 text-center">
            <Link
              href="/servicos"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--gold)] uppercase tracking-[0.15em] hover:gap-3 transition-all duration-300"
            >
              Ver todos os serviços
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          SYSTEM SHOWCASE
      ────────────────────────────────────────────── */}
      <section className="relative py-24 sm:py-32 bg-[var(--background)] overflow-hidden">
        {/* Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[var(--gold)]/[0.03] blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[var(--gold)] font-semibold">
              Tecnologia
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              <span className="text-gold-gradient">Sistema de Gestão</span>
            </h2>
            <p className="mt-4 text-[var(--text-secondary)] max-w-lg mx-auto leading-relaxed">
              Uma plataforma construída sob medida para centralizar e controlar toda a operação.
            </p>
          </AnimatedSection>

          {/* Dashboard Mockup */}
          <AnimatedSection delay={0.2}>
            <div className="relative mx-auto max-w-4xl">
              {/* Browser chrome */}
              <div className="rounded-xl border border-[var(--foreground)]/10 bg-[var(--foreground)]/[0.02] overflow-hidden shadow-2xl shadow-[var(--background)]/40">
                {/* Title bar */}
                <div className="flex items-center gap-2 px-5 py-3.5 border-b border-[var(--foreground)]/5 bg-[var(--foreground)]/[0.02]">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--foreground)]/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--foreground)]/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--foreground)]/10" />
                  </div>
                  <div className="ml-4 flex-1 h-5 rounded-md bg-[var(--foreground)]/5 max-w-xs" />
                </div>

                {/* Dashboard body */}
                <div className="p-6 sm:p-8 grid grid-cols-12 gap-4 min-h-[320px]">
                  {/* Sidebar mock */}
                  <div className="col-span-3 hidden sm:flex flex-col gap-3">
                    <div className="h-4 w-3/4 rounded bg-[var(--gold)]/20" />
                    <div className="h-3 w-full rounded bg-[var(--foreground)]/5" />
                    <div className="h-3 w-full rounded bg-[var(--foreground)]/5" />
                    <div className="h-3 w-5/6 rounded bg-[var(--foreground)]/[0.08]" />
                    <div className="h-3 w-full rounded bg-[var(--foreground)]/5" />
                    <div className="h-3 w-4/5 rounded bg-[var(--foreground)]/5" />
                    <div className="mt-auto h-3 w-2/3 rounded bg-[var(--foreground)]/5" />
                  </div>

                  {/* Main content area */}
                  <div className="col-span-12 sm:col-span-9 flex flex-col gap-4">
                    {/* Top row — stat cards */}
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { color: "bg-[var(--gold)]/20", width: "w-2/3" },
                        { color: "bg-emerald-500/20", width: "w-1/2" },
                        { color: "bg-blue-500/20", width: "w-3/4" },
                      ].map((card, i) => (
                        <div
                          key={i}
                          className="rounded-lg bg-[var(--foreground)]/[0.03] border border-[var(--foreground)]/5 p-4 flex flex-col gap-2"
                        >
                          <div className={`h-2 ${card.width} rounded ${card.color}`} />
                          <div className="h-5 w-1/2 rounded bg-[var(--foreground)]/10" />
                          <div className="h-2 w-full rounded bg-[var(--foreground)]/5" />
                        </div>
                      ))}
                    </div>

                    {/* Chart area */}
                    <div className="flex-1 rounded-lg bg-[var(--foreground)]/[0.03] border border-[var(--foreground)]/5 p-4 flex items-end gap-2">
                      {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95].map(
                        (h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-t transition-all duration-500"
                            style={{
                              height: `${h}%`,
                              background:
                                i === 11
                                  ? "var(--gold)"
                                  : `rgba(255,255,255,${0.04 + i * 0.005})`,
                            }}
                          />
                        )
                      )}
                    </div>

                    {/* Bottom row */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-lg bg-[var(--foreground)]/[0.03] border border-[var(--foreground)]/5 p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 rounded-full bg-[var(--gold)]/15 shrink-0" />
                          <div className="h-2 flex-1 rounded bg-[var(--foreground)]/10" />
                        </div>
                        <div className="space-y-2">
                          <div className="h-2 w-full rounded bg-[var(--foreground)]/5" />
                          <div className="h-2 w-4/5 rounded bg-[var(--foreground)]/5" />
                        </div>
                      </div>
                      <div className="rounded-lg bg-[var(--foreground)]/[0.03] border border-[var(--foreground)]/5 p-4 flex flex-col justify-center items-center gap-2">
                        <div className="w-12 h-12 rounded-full border-[3px] border-[var(--gold)]/30 border-t-[var(--gold)]" />
                        <div className="h-2 w-1/2 rounded bg-[var(--foreground)]/10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reflection / shadow */}
              <div className="absolute -bottom-8 left-[10%] right-[10%] h-16 bg-[var(--gold)]/[0.04] blur-2xl rounded-full" />
            </div>
          </AnimatedSection>

          {/* Feature Pills */}
          <AnimatedSection delay={0.4} className="mt-14">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {featurePills.map((pill) => (
                <motion.div
                  key={pill}
                  whileHover={{ borderColor: "var(--gold)", scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-[var(--foreground)]/10 bg-[var(--foreground)]/[0.02] text-sm text-[var(--foreground)]/70 cursor-default"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
                  {pill}
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          RESULTS / NUMBERS
      ────────────────────────────────────────────── */}
      <section className="relative py-24 sm:py-32 bg-[var(--surface)] overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(201,168,76,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.4) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[var(--gold)] font-semibold">
              Impacto
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--foreground)] tracking-tight">
              Resultados <span className="text-gold-gradient">Reais</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--foreground)]/5 rounded-2xl overflow-hidden">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="relative p-8 sm:p-10 bg-[var(--surface)] text-center group hover:bg-[var(--foreground)]/[0.02] transition-colors duration-500">
                  {/* Gold top accent on hover */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-12 h-[2px] bg-[var(--gold)] transition-all duration-500 rounded-full" />

                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gold-gradient mb-3">
                    <AnimatedCounter
                      target={stat.target}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="text-xs sm:text-sm text-[var(--text-secondary)] uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────
          CTA SECTION
      ────────────────────────────────────────────── */}
      <section className="relative py-28 sm:py-36 bg-[var(--background)] overflow-hidden">
        {/* Radial gold glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[var(--gold)]/[0.04] blur-[160px] pointer-events-none" />

        {/* Decorative lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)]/20 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[var(--foreground)] tracking-tight leading-[1.15]">
              Pronto para{" "}
              <span className="text-gold-gradient">transformar</span>
              <br className="hidden sm:block" /> sua operação?
            </h2>
            <p className="mt-6 text-base sm:text-lg text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed">
              Vamos conversar sobre como podemos estruturar, automatizar e escalar o seu negócio com processos que funcionam.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="mt-10">
            <Link href="/contato">
              <motion.span
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="inline-flex items-center justify-center gap-3 px-10 py-4.5 bg-[var(--gold)] text-black font-semibold text-sm tracking-wide uppercase hover:bg-[var(--gold-bright)] transition-colors duration-300 cursor-pointer"
              >
                Solicite Consultoria
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </motion.span>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
