"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grain bg-black">
      {/* Subtle radial glow behind photo */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full bg-[var(--gold)]/[0.04] blur-[150px] -translate-y-1/2" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-[var(--gold)]/[0.02] blur-[120px]" />

      {/* Vertical gold accent line */}
      <div className="absolute left-[8%] top-0 w-px h-full bg-gradient-to-b from-transparent via-[var(--gold)]/10 to-transparent hidden lg:block" />

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          {/* Left: Name + info */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            {/* Top label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px w-10 bg-[var(--gold)]" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-[var(--gold)] font-medium">
                Estruturação Operacional & Sistemas de Gestão
              </span>
            </motion.div>

            {/* Name - large, portfolio style */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-[3.2rem] sm:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem] font-bold tracking-tight text-white leading-[0.9]">
                Rammer
                <br />
                <span className="text-gold-gradient">Felix</span>
              </h1>
            </motion.div>

            {/* Role description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 max-w-lg"
            >
              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
                Consultoria especializada em estruturação operacional, desenvolvimento de sistemas de gestão e organização de processos empresariais.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
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
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/15 text-white font-medium text-sm tracking-wide uppercase hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-300"
              >
                Ver Portfólio
              </Link>
            </motion.div>

            {/* Quick info pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-12 flex flex-wrap gap-6 text-[11px] uppercase tracking-[0.2em] text-white/25"
            >
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[var(--gold)]" />
                Consultoria Operacional
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[var(--gold)]" />
                Sistemas sob medida
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[var(--gold)]" />
                Automação de processos
              </span>
            </motion.div>
          </div>

          {/* Right: Rounded photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:col-span-5 flex justify-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* Gold glow behind photo */}
              <div className="absolute inset-0 rounded-full bg-[var(--gold)]/[0.08] blur-[60px] scale-110" />

              {/* Rotating gold ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, transparent 0%, var(--gold) 10%, transparent 20%, transparent 50%, var(--gold) 60%, transparent 70%)",
                  opacity: 0.3,
                }}
              />

              {/* Static gold border */}
              <div className="absolute -inset-1 rounded-full border border-[var(--gold)]/20" />
              <div className="absolute -inset-3 rounded-full border border-[var(--gold)]/10" />

              {/* Photo container */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-[var(--gold)]/30">
                {imgError ? (
                  <div className="w-full h-full bg-gradient-to-br from-white/[0.08] to-white/[0.02] flex items-center justify-center">
                    <span className="text-5xl sm:text-6xl font-bold text-white/[0.08]">RF</span>
                  </div>
                ) : (
                  <Image
                    src="/rammer.jpg"
                    alt="Rammer Felix"
                    fill
                    className="object-cover"
                    priority
                    onError={() => setImgError(true)}
                  />
                )}
              </div>

              {/* Floating info card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="absolute -bottom-4 -right-4 sm:-right-8 bg-black/80 backdrop-blur-xl border border-white/10 px-5 py-3 z-20 rounded-lg"
              >
                <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--gold)] mb-0.5">
                  Coordenador de Operações
                </div>
                <div className="text-[10px] text-white/40">
                  Estruturação &middot; Gestão &middot; Automação
                </div>
              </motion.div>

              {/* Small gold dot accent */}
              <div className="absolute top-4 -left-2 w-2 h-2 rounded-full bg-[var(--gold)]/60" />
              <div className="absolute bottom-8 -left-4 w-1 h-1 rounded-full bg-[var(--gold)]/40" />
            </div>
          </motion.div>
        </div>

        {/* Bottom scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/20">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-[var(--gold)]/40 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
