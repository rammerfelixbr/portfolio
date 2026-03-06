"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:rammerfelix@gmail.com?subject=Consultoria - ${encodeURIComponent(formData.name)}${formData.company ? ` (${encodeURIComponent(formData.company)})` : ""}&body=${encodeURIComponent(`Nome: ${formData.name}\nE-mail: ${formData.email}\nEmpresa: ${formData.company || "Não informada"}\n\nMensagem:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-[var(--gold)]/30 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-[var(--gold)]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Mensagem preparada</h3>
        <p className="text-[var(--text-secondary)] text-sm max-w-sm mx-auto">
          Seu cliente de e-mail deve ter aberto. Caso contrário, envie para rammerfelix@gmail.com
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-xs uppercase tracking-widest text-[var(--gold)] hover:text-[var(--gold-bright)] transition-colors"
        >
          Nova mensagem
        </button>
      </motion.div>
    );
  }

  const inputClasses = (field: string) =>
    `w-full px-0 py-3 bg-transparent border-0 border-b ${
      focusedField === field ? "border-[var(--gold)]" : "border-white/10"
    } text-white placeholder-white/20 focus:outline-none focus:ring-0 text-sm transition-colors duration-300`;

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label className="block text-[11px] uppercase tracking-[0.15em] text-[var(--gold)] font-medium mb-3">
            Nome *
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            onFocus={() => setFocusedField("name")}
            onBlur={() => setFocusedField(null)}
            className={inputClasses("name")}
            placeholder="Seu nome completo"
          />
        </div>
        <div>
          <label className="block text-[11px] uppercase tracking-[0.15em] text-[var(--gold)] font-medium mb-3">
            E-mail *
          </label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField(null)}
            className={inputClasses("email")}
            placeholder="seu@email.com"
          />
        </div>
      </div>
      <div>
        <label className="block text-[11px] uppercase tracking-[0.15em] text-[var(--gold)] font-medium mb-3">
          Empresa
        </label>
        <input
          type="text"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          onFocus={() => setFocusedField("company")}
          onBlur={() => setFocusedField(null)}
          className={inputClasses("company")}
          placeholder="Nome da sua empresa"
        />
      </div>
      <div>
        <label className="block text-[11px] uppercase tracking-[0.15em] text-[var(--gold)] font-medium mb-3">
          Mensagem *
        </label>
        <textarea
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          onFocus={() => setFocusedField("message")}
          onBlur={() => setFocusedField(null)}
          className={`${inputClasses("message")} resize-none`}
          placeholder="Descreva brevemente o que você precisa..."
        />
      </div>
      <motion.button
        type="submit"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="w-full py-4 bg-[var(--gold)] text-black font-semibold text-sm uppercase tracking-widest hover:bg-[var(--gold-bright)] transition-colors duration-300"
      >
        Enviar Mensagem
      </motion.button>
    </form>
  );
}
