import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--foreground)]/5 bg-[var(--background)]">
      <div className="gold-line w-full" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div>
              <span className="text-lg font-semibold tracking-wide text-[var(--foreground)]">
                Hammer<span className="text-gold-gradient font-bold"> Felix</span>
              </span>
              <span className="block text-[10px] uppercase tracking-[0.25em] text-[var(--text-secondary)] -mt-0.5">
                Consulting
              </span>
            </div>
            <p className="mt-4 text-sm text-[var(--text-secondary)] leading-relaxed max-w-sm">
              Transformando empresas com organização operacional inteligente, sistemas de gestão sob medida e consultoria estratégica.
            </p>
          </div>
          <div className="md:col-span-3">
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-[var(--gold)] font-semibold mb-5">
              Navegação
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/sobre", label: "Sobre" },
                { href: "/servicos", label: "Serviços" },
                { href: "/sistema", label: "Sistema de Gestão" },
                { href: "/portfolio", label: "Portfólio" },
                { href: "/contato", label: "Contato" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-[var(--gold)] font-semibold mb-5">
              Contato
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:rammerfelix@gmail.com" className="text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors duration-300">
                  rammerfelix@gmail.com
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/rammer-felix-34a0583b1/" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--text-secondary)] hover:text-[var(--foreground)] transition-colors duration-300">
                  LinkedIn
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link href="/contato" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[var(--gold)] hover:text-[var(--gold-bright)] transition-colors">
                Solicitar consultoria
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-[var(--foreground)]/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[var(--text-secondary)]">
            &copy; {new Date().getFullYear()} Hammer Felix Consulting. Todos os direitos reservados.
          </p>
          <p className="text-xs text-[var(--text-secondary)]">
            Estruturação &middot; Organização &middot; Resultados
          </p>
        </div>
      </div>
    </footer>
  );
}
