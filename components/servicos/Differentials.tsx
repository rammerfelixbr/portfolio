import { AnimatedSection } from "@/lib/animations";

const diferenciais = [
  {
    number: "01",
    title: "Sob medida",
    description:
      "Cada solução é desenhada exclusivamente para a sua realidade. Nada de modelos genéricos ou pacotes prontos.",
  },
  {
    number: "02",
    title: "Do zero à autonomia",
    description:
      "Acompanhamento completo desde o diagnóstico até a implementação final, garantindo que sua equipe opere com independência.",
  },
  {
    number: "03",
    title: "Tecnologia + Estratégia",
    description:
      "Uma combinação única de visão estratégica com execução técnica que transforma planejamento em sistemas funcionais.",
  },
];

export default function Differentials() {
  return (
    <section className="py-24 sm:py-32 bg-[var(--foreground)]/[0.02]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] tracking-tight">
              Por que escolher a{" "}
              <span className="text-gold-gradient">
                Hammer Felix Consulting
              </span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
          {diferenciais.map((item, index) => (
            <AnimatedSection key={item.number} delay={index * 0.15}>
              <div className="text-center md:text-left">
                <span className="inline-block text-5xl sm:text-6xl font-bold text-[var(--gold)] opacity-40 mb-4">
                  {item.number}
                </span>
                <h3 className="text-lg font-bold text-[var(--foreground)] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
