import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços | Hammer Felix Consulting",
  description:
    "Conheça os serviços de consultoria em estruturação operacional, sistemas de gestão personalizados, organização de processos e automação.",
  keywords: [
    "serviços",
    "consultoria operacional",
    "estruturação de empresas",
    "sistemas de gestão",
    "automação de processos",
    "organização empresarial",
    "hammer felix consulting",
  ],
};

export default function ServicosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
