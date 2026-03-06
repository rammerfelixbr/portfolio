import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contato | Hammer",
  description: "Entre em contato com Hammer para consultoria em estruturação operacional e sistemas de gestão.",
};

export default function ContatoPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white tracking-tight">
            Contato
          </h1>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Pronto para organizar e escalar a operação da sua empresa? Entre em contato e vamos conversar sobre como posso ajudar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#1A1A1A]">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">
              Envie uma mensagem
            </h2>
            <ContactForm />
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
                Outras formas de contato
              </h2>
              <div className="space-y-4">
                <a
                  href="mailto:rammerfelix@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#1A1A1A] hover:border-[#D4A843]/50 dark:hover:border-[#D4A843]/50 transition-colors"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#D4A843]/10 text-[#D4A843]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-neutral-900 dark:text-white">E-mail</div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">rammerfelix@gmail.com</div>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/hammer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#1A1A1A] hover:border-[#D4A843]/50 dark:hover:border-[#D4A843]/50 transition-colors"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#D4A843]/10 text-[#D4A843]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-neutral-900 dark:text-white">LinkedIn</div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">Conecte-se comigo</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-[#D4A843]/30 bg-[#D4A843]/5">
              <h3 className="text-base font-semibold text-neutral-900 dark:text-white mb-2">
                Como funciona?
              </h3>
              <ol className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#D4A843]/20 text-[#D4A843] text-xs font-bold">1</span>
                  <span>Você entra em contato descrevendo sua necessidade</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#D4A843]/20 text-[#D4A843] text-xs font-bold">2</span>
                  <span>Agendamos uma conversa para entender sua operação</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#D4A843]/20 text-[#D4A843] text-xs font-bold">3</span>
                  <span>Apresento um diagnóstico e proposta personalizada</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#D4A843]/20 text-[#D4A843] text-xs font-bold">4</span>
                  <span>Iniciamos o projeto com metas e prazos claros</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
