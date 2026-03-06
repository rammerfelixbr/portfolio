import type { Metadata } from "next";
import { Lexend_Deca } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const lexendDeca = Lexend_Deca({
  variable: "--font-lexend-deca",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hammer Felix Consulting | Estruturação Operacional & Sistemas de Gestão",
  description:
    "Consultoria especializada em estruturação operacional, organização de empresas e desenvolvimento de sistemas de gestão personalizados.",
  keywords: [
    "consultoria",
    "estruturação operacional",
    "gestão empresarial",
    "sistemas de gestão",
    "automação de processos",
    "organização de empresas",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${lexendDeca.variable} antialiased`}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
