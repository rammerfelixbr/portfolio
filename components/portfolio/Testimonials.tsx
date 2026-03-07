import { AnimatedSection } from "@/lib/animations";

const testimonials = [
  {
    quote:
      "A consultoria transformou completamente nossa operação. Saímos do caos para um fluxo organizado e previsível.",
    name: "Rafaela S.",
    role: "Diretora de Operações",
  },
  {
    quote:
      "O sistema de gestão implementado nos deu visibilidade total sobre o negócio. Hoje tomamos decisões com dados reais.",
    name: "Carlos M.",
    role: "CEO",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-14">
            <span className="inline-block text-[#D4A843] text-sm font-mono tracking-widest uppercase mb-4">
              // DEPOIMENTOS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] tracking-tight">
              O que dizem
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.name} delay={index * 0.15}>
              <div className="relative p-8 sm:p-10 rounded-2xl bg-[var(--foreground)]/[0.02] border border-[var(--foreground)]/[0.06] hover:border-[#D4A843]/20 transition-all duration-500 group h-full">
                <div className="mb-6">
                  <svg
                    width="40"
                    height="32"
                    viewBox="0 0 40 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#D4A843]/40 group-hover:text-[#D4A843]/60 transition-colors duration-500"
                  >
                    <path
                      d="M0 32V19.2C0 15.7333 0.666667 12.5333 2 9.6C3.46667 6.66667 5.86667 3.73333 9.2 0.799999L14.4 4.8C12.2667 6.93333 10.6667 9.06667 9.6 11.2C8.53333 13.2 8 15.3333 8 17.6H16V32H0ZM24 32V19.2C24 15.7333 24.6667 12.5333 26 9.6C27.4667 6.66667 29.8667 3.73333 33.2 0.799999L38.4 4.8C36.2667 6.93333 34.6667 9.06667 33.6 11.2C32.5333 13.2 32 15.3333 32 17.6H40V32H24Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                <p className="text-[var(--foreground)]/80 text-base sm:text-lg leading-relaxed mb-8 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4A843] to-[#B8942E] flex items-center justify-center text-black font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-[var(--foreground)] font-semibold text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-[var(--text-secondary)] text-xs">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
