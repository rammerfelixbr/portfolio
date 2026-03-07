"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "warm";

const themes: Theme[] = ["dark", "warm", "light"];

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme") as Theme;
    if (stored && themes.includes(stored)) {
      setTheme(stored);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.remove("dark", "warm");
      if (theme !== "light") {
        document.documentElement.classList.add(theme);
      }
      localStorage.setItem("theme", theme);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const idx = themes.indexOf(prev);
      return themes[(idx + 1) % themes.length];
    });
  };

  if (!mounted) {
    return <div className="min-h-screen bg-black" />;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
