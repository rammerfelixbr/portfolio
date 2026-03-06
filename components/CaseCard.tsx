interface CaseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  result: string;
}

export default function CaseCard({ icon, title, description, result }: CaseCardProps) {
  return (
    <div className="group p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#1A1A1A] hover:border-[#D4A843]/50 dark:hover:border-[#D4A843]/50 transition-all duration-300">
      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#D4A843]/10 text-[#D4A843] mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
        {description}
      </p>
      <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[#D4A843]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
          </svg>
          <span className="text-sm font-medium text-[#D4A843]">{result}</span>
        </div>
      </div>
    </div>
  );
}
