import { AnimatedSection } from "@/lib/animations";
import Link from "next/link";

export default function SystemCta() {
  return (
    <AnimatedSection className="px-6 lg:px-8 max-w-7xl mx-auto pb-32">
      <div className="relative text-center py-20 rounded-3xl border border-[var(--foreground)]/5 bg-[var(--foreground)]/[0.01] overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gold)]/[0.02] blur-[100px] rounded-full w-96 h-96 mx-auto my-auto" />
        <div className="relative">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-4">
            Quer um sistema assim para sua empresa?
          </h2>
          <p className="text-[var(--text-secondary)] mb-8 max-w-lg mx-auto">
            Posso desenvolver um sistema sob medida, adaptado à realidade e aos processos do seu negócio.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--gold)] text-black font-semibold text-sm uppercase tracking-wide hover:bg-[var(--gold-bright)] transition-colors"
          >
            Solicitar Demonstração
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}
