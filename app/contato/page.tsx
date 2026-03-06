import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contato | Hammer Felix Consulting",
  description:
    "Entre em contato com Hammer Felix Consulting para consultoria em estruturação operacional, sistemas de gestão e escalabilidade de negócios.",
};

const steps = [
  {
    number: "01",
    text: "Você entra em contato descrevendo sua necessidade",
  },
  {
    number: "02",
    text: "Agendamos uma conversa para entender sua operação",
  },
  {
    number: "03",
    text: "Apresento um diagnóstico e proposta personalizada",
  },
  {
    number: "04",
    text: "Iniciamos o projeto com metas e prazos claros",
  },
];

export default function ContatoPage() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[var(--gold)] font-medium">
            // CONTATO
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
            Vamos conversar sobre o{" "}
            <span className="text-gold-gradient">futuro</span> da sua operação
          </h1>
        </div>

        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* LEFT COLUMN - Form */}
          <div className="border border-white/5 bg-white/[0.02] rounded-2xl p-8 sm:p-10">
            <h2 className="text-[11px] uppercase tracking-[0.2em] text-[var(--gold)] font-medium mb-10">
              Envie uma mensagem
            </h2>
            <ContactForm />
          </div>

          {/* RIGHT COLUMN - Contact info & process */}
          <div className="space-y-12">
            {/* Direct contact */}
            <div className="space-y-4">
              {/* Email */}
              <a
                href="mailto:rammerfelix@gmail.com"
                className="flex items-center gap-5 p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:border-[var(--gold)]/30 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-lg bg-[var(--gold)]/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-[var(--gold)]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-white group-hover:text-[var(--gold)] transition-colors duration-300">
                    E-mail
                  </div>
                  <div className="text-sm text-[var(--text-secondary)]">
                    rammerfelix@gmail.com
                  </div>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/rammer-felix-34a0583b1/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:border-[var(--gold)]/30 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-lg bg-[var(--gold)]/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-[var(--gold)]"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-white group-hover:text-[var(--gold)] transition-colors duration-300">
                    LinkedIn
                  </div>
                  <div className="text-sm text-[var(--text-secondary)]">
                    Conecte-se comigo
                  </div>
                </div>
              </a>
            </div>

            {/* Process section */}
            <div>
              <h3 className="text-[11px] uppercase tracking-[0.2em] text-[var(--gold)] font-medium mb-8">
                Como funciona
              </h3>
              <div className="space-y-0">
                {steps.map((step, i) => (
                  <div
                    key={step.number}
                    className={`flex items-baseline gap-4 py-5 ${
                      i < steps.length - 1 ? "border-b border-white/5" : ""
                    }`}
                  >
                    <span className="text-sm font-semibold text-[var(--gold)] tabular-nums flex-shrink-0">
                      {step.number}
                    </span>
                    <span className="text-[var(--gold)]/40 flex-shrink-0">
                      &rarr;
                    </span>
                    <span className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {step.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <p className="text-sm text-[var(--text-secondary)]">
            Prefere um contato direto?{" "}
            <a
              href="mailto:rammerfelix@gmail.com"
              className="text-[var(--gold)] hover:text-[var(--gold-bright)] transition-colors duration-300 underline underline-offset-4 decoration-[var(--gold)]/30"
            >
              rammerfelix@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
