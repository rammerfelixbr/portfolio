"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:rammerfelix@gmail.com?subject=Contato via Portfólio - ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Nome: ${formData.name}\nE-mail: ${formData.email}\n\nMensagem:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#D4A843]/10">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-[#D4A843]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
          Mensagem preparada!
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400">
          Seu cliente de e-mail deve ter aberto com a mensagem. Caso contrário, envie diretamente para rammerfelix@gmail.com.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm text-[#D4A843] hover:underline"
        >
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
          Nome
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#1A1A1A] text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#D4A843]/50 focus:border-[#D4A843] transition-colors"
          placeholder="Seu nome"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
          E-mail
        </label>
        <input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#1A1A1A] text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#D4A843]/50 focus:border-[#D4A843] transition-colors"
          placeholder="seu@email.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
          Mensagem
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-[#1A1A1A] text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#D4A843]/50 focus:border-[#D4A843] transition-colors resize-none"
          placeholder="Como posso ajudar?"
        />
      </div>
      <button
        type="submit"
        className="w-full px-6 py-3 rounded-lg bg-[#D4A843] text-black font-semibold text-sm hover:bg-[#B8942E] transition-colors"
      >
        Enviar Mensagem
      </button>
    </form>
  );
}
