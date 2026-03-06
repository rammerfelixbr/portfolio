import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sistema de Gestão | Hammer Felix Consulting",
  description:
    "Conheça o sistema de gestão desenvolvido por Hammer Felix Consulting: controle de tarefas, conciliação financeira, monitoramento de equipes e muito mais.",
  keywords: [
    "sistema de gestão",
    "gestão empresarial",
    "controle de tarefas",
    "conciliação financeira",
    "termômetro de sobrecarga",
    "registro de reuniões",
    "gestão de credenciais",
    "hammer felix consulting",
  ],
};

export default function SistemaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
