"use client";

import { useTheme } from "@/lib/theme";
import { motion } from "framer-motion";

const themeConfig = {
  dark: {
    label: "Tema quente",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-[var(--gold)]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    rotation: 0,
  },
  warm: {
    label: "Modo claro",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-[var(--gold)]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.047 6.75 6.75 0 0015.362 5.214z" />
      </svg>
    ),
    rotation: 120,
  },
  light: {
    label: "Modo escuro",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-[var(--text-secondary)]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
      </svg>
    ),
    rotation: 240,
  },
} as const;

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const config = themeConfig[theme];

  return (
    <button
      onClick={toggleTheme}
      className="relative w-9 h-9 flex items-center justify-center rounded-full border border-[var(--foreground)]/10 hover:border-[var(--gold)]/50 transition-colors duration-300"
      aria-label={config.label}
    >
      <motion.div
        animate={{ rotate: config.rotation }}
        transition={{ duration: 0.4 }}
      >
        {config.icon}
      </motion.div>
    </button>
  );
}
