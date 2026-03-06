interface SystemFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function SystemFeature({ icon, title, description }: SystemFeatureProps) {
  return (
    <div className="flex gap-4 p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#1A1A1A] hover:border-[#D4A843]/50 dark:hover:border-[#D4A843]/50 transition-all duration-300">
      <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-[#D4A843]/10 text-[#D4A843]">
        {icon}
      </div>
      <div>
        <h3 className="text-base font-semibold text-neutral-900 dark:text-white mb-1">
          {title}
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
