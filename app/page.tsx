import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";

const highlights = [
  {
    number: "5+",
    label: "Anos de experiência",
    description: "Estruturando e organizando operações empresariais",
  },
  {
    number: "100%",
    label: "Sob medida",
    description: "Soluções personalizadas para cada realidade",
  },
  {
    number: "360°",
    label: "Visão completa",
    description: "Da estratégia à execução operacional",
  },
];

const previewServices = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    title: "Estruturação Empresarial",
    description: "Organização completa de setores, processos e fluxos de trabalho para empresas que buscam crescimento sustentável.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Sistemas de Gestão",
    description: "Desenvolvimento e implementação de sistemas personalizados para controle operacional, financeiro e de equipes.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    title: "Automação de Processos",
    description: "Assistentes, chatbots e ferramentas personalizadas que eliminam retrabalho e aumentam produtividade.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Highlights */}
      <section className="py-16 sm:py-20 bg-neutral-50 dark:bg-[#111111]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#D4A843] mb-2">
                  {item.number}
                </div>
                <div className="text-base font-semibold text-neutral-900 dark:text-white mb-1">
                  {item.label}
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white tracking-tight">
              O que eu <span className="text-[#D4A843]">faço</span>
            </h2>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Soluções completas para organizar, automatizar e escalar a operação da sua empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {previewServices.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/servicos"
              className="inline-flex items-center text-sm font-medium text-[#D4A843] hover:underline"
            >
              Ver todos os serviços
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-neutral-50 dark:bg-[#111111]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white tracking-tight">
            Pronto para <span className="text-[#D4A843]">organizar</span> sua empresa?
          </h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Vamos conversar sobre como posso ajudar a estruturar e otimizar a operação do seu negócio.
          </p>
          <div className="mt-8">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-[#D4A843] text-black font-semibold text-sm hover:bg-[#B8942E] transition-colors"
            >
              Iniciar Conversa
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
