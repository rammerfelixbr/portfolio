import { AnimatedSection } from "@/lib/animations";

const modules = [
  {
    number: "01",
    title: "Dashboard & Termômetro de Sobrecarga",
    description:
      "Painel central com visão geral de toda a operação. Inclui um termômetro visual que monitora em tempo real a carga de trabalho de cada colaborador — combinando funções ativas e solicitações pendentes — prevenindo sobrecarga e burnout.",
    highlight: "Monitoramento em tempo real",
  },
  {
    number: "02",
    title: "Gestão de Solicitações e Tarefas",
    description:
      "Sistema completo de delegação e acompanhamento de demandas. Priorização por urgência (urgente, alta, média, baixa), filtro por colaborador, calendário integrado, controle de prazos e backlog. Tarefas recorrentes e alertas automáticos.",
    highlight: "Priorização inteligente",
  },
  {
    number: "03",
    title: "Módulo Financeiro Completo",
    description:
      "Gestão financeira integrada com conciliação bancária multi-banco, contas a pagar e receber, projeção de fluxo de caixa para 6 meses, fechamento mensal, análise por categoria e alertas de vencimento automáticos.",
    highlight: "Projeção de 6 meses",
  },
  {
    number: "04",
    title: "Funções e Estrutura por Setor",
    description:
      "Mapeamento completo de responsabilidades por colaborador e por setor. Visualização clara de quem faz o quê, com contagem de funções ativas e filtros por departamento: Financeiro, Atendimento, Comercial, Marketing, Operações e mais.",
    highlight: "Organização por setor",
  },
  {
    number: "05",
    title: "Pedidos, Reuniões e Lembretes",
    description:
      "Canal para solicitações de recursos com fluxo de aprovação. Registro de reuniões com pautas, decisões e histórico. Sistema de lembretes pessoais para compromissos e follow-ups.",
    highlight: "Fluxo de aprovação",
  },
  {
    number: "06",
    title: "Credenciais e Dados da Empresa",
    description:
      "Cofre centralizado de credenciais organizado por setor, com controle de acesso e cópia rápida. Hub de informações da empresa com CNPJ, bancos, equipe e parceiros em um só lugar.",
    highlight: "Segurança centralizada",
  },
];

export default function ModulesList() {
  return (
    <div className="px-6 lg:px-8 max-w-7xl mx-auto py-20 border-t border-[var(--foreground)]/5">
      <AnimatedSection>
        <span className="inline-block text-xs tracking-[0.3em] uppercase text-[var(--gold)] font-medium mb-4">
          // MÓDULOS
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] mb-16">
          Funcionalidades do sistema
        </h2>
      </AnimatedSection>

      {modules.map((module, index) => (
        <AnimatedSection key={module.number} delay={index * 0.06}>
          <div className="group grid grid-cols-1 md:grid-cols-[100px_1fr_auto] gap-6 md:gap-10 py-10 border-b border-[var(--foreground)]/5 hover:border-[var(--gold)]/20 transition-colors">
            <div>
              <span className="text-4xl font-bold bg-gradient-to-b from-[var(--gold)] to-[var(--gold)]/20 bg-clip-text text-transparent">
                {module.number}
              </span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[var(--foreground)] mb-2 group-hover:text-[var(--gold)] transition-colors">
                {module.title}
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed max-w-2xl text-sm">
                {module.description}
              </p>
            </div>
            <div className="hidden md:flex items-center">
              <span className="px-3 py-1 rounded-full border border-[var(--gold)]/20 text-[var(--gold)] text-[10px] uppercase tracking-wider whitespace-nowrap">
                {module.highlight}
              </span>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}
