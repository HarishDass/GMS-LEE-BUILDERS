import type { LucideIcon } from "lucide-react";

type ServiceItem = { name: string; slug: string };
type ServiceCategory = {
  title: string;
  icon: LucideIcon;
  items: ServiceItem[];
};

const F_MONO = "font-['IBM_Plex_Mono',monospace]";

export default function ServicesMegaMenu({
  categories,
  totalCount,
  onSelectService,
}: {
  categories: ServiceCategory[];
  totalCount: number;
  onSelectService: (slug: string) => void;
}) {
  return (
    <div className="absolute right-0 top-full pt-3 z-50">
      <div className="bg-[#14181B] border border-[#ECE8DF]/15 shadow-2xl w-[min(560px,90vw)]">
        <div
          className={`${F_MONO} flex items-center justify-between px-8 pt-6 pb-4 border-b border-[#ECE8DF]/10 text-[10px] uppercase tracking-widest text-[#ECE8DF]/40`}
        >
          <span>All Services</span>
          <span>
            {totalCount} services · {categories.length} categories
          </span>
        </div>
        <div className="p-8 grid grid-cols-3 gap-8">
          {categories.map((cat) => {
            const Icon = cat.icon;

            return (
              <div key={cat.title}>
                <div
                  className={`${F_MONO} flex items-center justify-between gap-2 text-gold text-[10px] uppercase tracking-widest mb-3`}
                >
                  <span className="flex items-center gap-2">
                    <Icon size={13} /> {cat.title}
                  </span>
                  <span className="text-[#ECE8DF]/30">{cat.items.length}</span>
                </div>
                <ul className="space-y-2">
                  {cat.items.map((it) => (
                    <li key={it.slug}>
                      <button
                        onClick={() => onSelectService(it.slug)}
                        className="text-left text-[#ECE8DF]/60 hover:text-[#ECE8DF] text-xs leading-snug transition-colors"
                      >
                        {it.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
