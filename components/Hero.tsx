"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedCounter } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain">
      {/* Background layers */}
      <div className="absolute inset-0 bg-black" />

      {/* Radial gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[var(--gold)]/[0.03] blur-[120px]" />

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />

      {/* Diagonal gold line */}
      <div className="absolute top-0 right-0 w-px h-[60vh] bg-gradient-to-b from-transparent via-[var(--gold)]/20 to-transparent rotate-[20deg] origin-top-right" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 sm:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-3 mb-8"
            >
              <div className="h-px w-12 bg-[var(--gold)]" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[var(--gold)] font-semibold">
                Consultoria Operacional
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold tracking-tight text-white leading-[1.1]"
            >
              Transformando empresas com{" "}
              <span className="text-gold-gradient">organização operacional</span>{" "}
              e gestão estratégica
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl"
            >
              Especialista em estruturação de processos, desenvolvimento de sistemas de gestão e coordenação operacional. Do diagnóstico à implementação.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contato"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--gold)] text-black font-semibold text-sm tracking-wide uppercase hover:bg-[var(--gold-bright)] transition-all duration-300"
              >
                Solicite Consultoria
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </Link>
              <Link
                href="/servicos"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-medium text-sm tracking-wide uppercase hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-300"
              >
                Ver Serviços
              </Link>
            </motion.div>
          </div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="grid grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden">
              {[
                { number: 50, suffix: "+", label: "Processos\nestruturados" },
                { number: 100, suffix: "%", label: "Soluções\nsob medida" },
                { number: 15, suffix: "h", label: "Economizadas\npor semana" },
                { number: 360, suffix: "°", label: "Visão\ncompleta" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`relative p-8 bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-500 ${
                    i === 0 ? "rounded-tl-2xl" : i === 1 ? "rounded-tr-2xl" : i === 2 ? "rounded-bl-2xl" : "rounded-br-2xl"
                  }`}
                >
                  <div className="text-3xl sm:text-4xl font-bold text-gold-gradient mb-2">
                    <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-[var(--text-secondary)] uppercase tracking-wider whitespace-pre-line leading-relaxed">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-24 overflow-hidden"
        >
          <div className="gold-line w-full mb-6" />
          <div className="flex gap-12 animate-[marquee_20s_linear_infinite] whitespace-nowrap">
            {["Estruturação Operacional", "Sistemas de Gestão", "Automação de Processos", "Consultoria Estratégica", "Organização Empresarial", "Mapeamento de Fluxos", "Relatórios Inteligentes", "Gestão de Equipes"].map((text, i) => (
              <span key={i} className="text-sm uppercase tracking-[0.2em] text-white/20 flex items-center gap-12">
                {text}
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]/30" />
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
