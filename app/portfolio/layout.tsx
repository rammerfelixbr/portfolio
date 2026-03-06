import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfólio | Hammer Felix Consulting",
  description:
    "Casos de sucesso e resultados entregues em projetos de estruturação operacional, sistemas de gestão e automação de processos.",
  keywords: [
    "portfólio",
    "casos de sucesso",
    "resultados",
    "consultoria operacional",
    "estruturação empresarial",
    "automação de processos",
    "sistemas de gestão",
  ],
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
