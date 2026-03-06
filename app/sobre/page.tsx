import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre | Hammer",
  description: "Conheça o perfil profissional de Hammer, consultor especializado em estruturação operacional e sistemas de gestão.",
};

const competencias = [
  {
    title: "Estruturação Operacional",
    description: "Mapeamento completo de setores, definição de responsabilidades, criação de fluxos e processos claros.",
  },
  {
    title: "Sistemas de Gestão",
    description: "Desenvolvimento de ferramentas sob medida para controle de tarefas, finanças, equipes e operações.",
  },
  {
    title: "Automação & Tecnologia",
    description: "Implementação de chatbots, assistentes e automações que eliminam trabalho manual repetitivo.",
  },
  {
    title: "Análise & Relatórios",
    description: "Criação de dashboards e relatórios que transformam dados em decisões estratégicas.",
  },
  {
    title: "Gestão de Equipes",
    description: "Ferramentas de acompanhamento de carga de trabalho, produtividade e bem-estar de funcionários.",
  },
  {
    title: "Visão Estratégica",
    description: "Capacidade de conectar a operação do dia a dia com os objetivos de longo prazo da empresa.",
  },
];

export default function SobrePage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white tracking-tight">
            Sobre <span className="text-[#D4A843]">Hammer</span>
          </h1>
          <div className="mt-6 space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
            <p>
              Sou consultor especializado em <strong className="text-neutral-900 dark:text-white">estruturação operacional e organização de empresas</strong>. Minha atuação é focada em transformar operações desorganizadas em sistemas claros, eficientes e escaláveis.
            </p>
            <p>
              Ao longo da minha trajetória, desenvolvi uma abordagem prática e orientada a resultados: entendo a realidade de cada empresa, mapeio os processos existentes, identifico gargalos e implemento soluções que realmente funcionam no dia a dia.
            </p>
            <p>
              Meu diferencial está na combinação entre <strong className="text-neutral-900 dark:text-white">visão estratégica e execução técnica</strong>. Não apenas planejo — eu construo. Desenvolvi um sistema de gestão completo que abrange desde o controle de tarefas e solicitações internas até conciliação financeira e monitoramento de equipes.
            </p>
          </div>
        </div>

        {/* Abordagem */}
        <div className="mb-16 p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#111111]">
          <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">
            Minha Abordagem
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Diagnóstico", desc: "Entendo a operação atual, mapeio processos e identifico os pontos críticos." },
              { step: "02", title: "Estruturação", desc: "Redesenho fluxos, defino responsabilidades e crio a estrutura operacional ideal." },
              { step: "03", title: "Implementação", desc: "Coloco em prática com sistemas, automações e acompanhamento contínuo." },
            ].map((item) => (
              <div key={item.step}>
                <div className="text-2xl font-bold text-[#D4A843] mb-2">{item.step}</div>
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white mb-1">{item.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Competências */}
        <div>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white tracking-tight mb-8">
            Competências
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competencias.map((comp) => (
              <div
                key={comp.title}
                className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#1A1A1A]"
              >
                <h3 className="text-base font-semibold text-neutral-900 dark:text-white mb-2">
                  {comp.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {comp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
