import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre | Hammer Felix Consulting",
  description:
    "Conheça Hammer Felix — consultor especializado em estruturação operacional, sistemas de gestão e organização de processos para empresas.",
  keywords: [
    "sobre",
    "hammer felix",
    "consultoria operacional",
    "estruturação de empresas",
    "sistemas de gestão",
    "organização de processos",
  ],
};

export default function SobreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
