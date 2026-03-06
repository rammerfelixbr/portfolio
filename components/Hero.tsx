import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-[#0A0A0A] dark:via-[#111111] dark:to-[#0A0A0A]" />
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23D4A843\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4A843]/30 bg-[#D4A843]/5 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#D4A843] animate-pulse" />
            <span className="text-xs font-medium text-[#D4A843]">
              Disponível para novos projetos
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white leading-[1.1]">
            Estruturação operacional que{" "}
            <span className="text-[#D4A843]">transforma resultados</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
            Organizo empresas, mapeo processos e implemento sistemas de gestão
            que trazem clareza, controle e eficiência para o seu negócio.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#D4A843] text-black font-semibold text-sm hover:bg-[#B8942E] transition-colors"
            >
              Fale Comigo
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/servicos"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 font-semibold text-sm hover:border-[#D4A843] hover:text-[#D4A843] dark:hover:border-[#D4A843] dark:hover:text-[#D4A843] transition-colors"
            >
              Ver Serviços
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
