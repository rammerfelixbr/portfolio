interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="group p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#1A1A1A] hover:border-[#D4A843]/50 dark:hover:border-[#D4A843]/50 transition-all duration-300">
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#D4A843]/10 text-[#D4A843] mb-4 group-hover:bg-[#D4A843]/20 transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
