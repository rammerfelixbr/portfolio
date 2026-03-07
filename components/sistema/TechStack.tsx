import { AnimatedSection } from "@/lib/animations";

const technologies = [
  "JavaScript",
  "Firebase",
  "Firestore",
  "Cloud Functions",
  "Vercel",
  "Real-time Sync",
];

export default function TechStack() {
  return (
    <AnimatedSection className="px-6 lg:px-8 max-w-7xl mx-auto pb-20">
      <div className="flex flex-wrap items-center justify-center gap-4">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 rounded-full border border-[var(--foreground)]/5 text-xs text-[var(--text-secondary)] tracking-wider"
          >
            {tech}
          </span>
        ))}
      </div>
    </AnimatedSection>
  );
}
