"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/sistema", label: "Sistema" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-[#0A0A0A]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white">
            <span className="text-[#D4A843]">H</span>ammer
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-[#D4A843] dark:hover:text-[#D4A843] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
          </nav>

          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-neutral-600 dark:text-neutral-400"
              aria-label="Menu"
            >
              {mobileOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav className="md:hidden pb-4 border-t border-neutral-200 dark:border-neutral-800 pt-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-[#D4A843] dark:hover:text-[#D4A843] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
