"use client";

import { AnimatedSection } from "@/lib/animations";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CtaSection() {
  return (
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
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </motion.span>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
