import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
              <span className="text-[#D4A843]">H</span>ammer
            </Link>
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Consultor de estruturação operacional e sistemas de gestão. Transformando empresas através de organização e tecnologia.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white uppercase tracking-wider mb-4">
              Navegação
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/sobre", label: "Sobre" },
                { href: "/servicos", label: "Serviços" },
                { href: "/sistema", label: "Sistema" },
                { href: "/portfolio", label: "Portfólio" },
                { href: "/contato", label: "Contato" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-[#D4A843] dark:hover:text-[#D4A843] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white uppercase tracking-wider mb-4">
              Contato
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:rammerfelix@gmail.com"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-[#D4A843] dark:hover:text-[#D4A843] transition-colors"
                >
                  rammerfelix@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/hammer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-[#D4A843] dark:hover:text-[#D4A843] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-neutral-200 dark:border-neutral-800">
          <p className="text-center text-xs text-neutral-500 dark:text-neutral-600">
            &copy; {new Date().getFullYear()} Hammer. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
