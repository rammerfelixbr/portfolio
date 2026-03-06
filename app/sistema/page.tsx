import type { Metadata } from "next";
import SystemFeature from "@/components/SystemFeature";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sistema de Gestão | Hammer",
  description: "Conheça o sistema de gestão desenvolvido por Hammer: controle de tarefas, conciliação financeira, monitoramento de equipes e muito mais.",
};

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    title: "Gerenciamento de Tarefas e Solicitações Internas",
    description: "Sistema centralizado para criar, atribuir e acompanhar tarefas entre setores. Cada solicitação é registrada com responsável, prazo e status, garantindo que nada se perca.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Conciliação Financeira",
    description: "Módulo para controle de entradas e saídas, conciliação bancária e acompanhamento do fluxo de caixa. Relatórios automáticos que facilitam a tomada de decisão financeira.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
    title: "Termômetro de Sobrecarga de Funcionários",
    description: "Indicador visual que monitora a carga de trabalho de cada colaborador, identificando riscos de sobrecarga antes que afetem a produtividade e o bem-estar da equipe.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    title: "Registro de Reuniões e Histórico",
    description: "Documentação automática de reuniões com registro de participantes, pautas, decisões e ações definidas. Histórico completo acessível a qualquer momento.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
    title: "Gerenciamento de Credenciais e Links Importantes",
    description: "Cofre centralizado e seguro para armazenar credenciais de sistemas, links importantes e informações de acesso, organizado por setor e com controle de permissões.",
  },
];

export default function SistemaPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white tracking-tight">
            Sistema de <span className="text-[#D4A843]">Gestão</span>
          </h1>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Desenvolvi um sistema de gestão completo e personalizado, construído para resolver os problemas reais que encontro nas empresas que atendo. Cada módulo foi pensado para trazer clareza e controle à operação.
          </p>
        </div>

        {/* System Overview */}
        <div className="mb-12 p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#111111]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "5", label: "Módulos integrados" },
              { value: "100%", label: "Personalizado" },
              { value: "24/7", label: "Acesso online" },
              { value: "Real-time", label: "Dados atualizados" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-[#D4A843]">{stat.value}</div>
                <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">
            Funcionalidades
          </h2>
          {features.map((feature) => (
            <SystemFeature
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 rounded-2xl border border-[#D4A843]/30 bg-[#D4A843]/5 text-center">
          <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
            Quer um sistema assim para sua empresa?
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-xl mx-auto">
            Posso adaptar e implementar um sistema de gestão sob medida para a realidade do seu negócio.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#D4A843] text-black font-semibold text-sm hover:bg-[#B8942E] transition-colors"
          >
            Solicitar uma Demonstração
          </Link>
        </div>
      </div>
    </div>
  );
}
