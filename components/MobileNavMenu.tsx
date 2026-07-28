import type { LucideIcon } from "lucide-react";

type ServiceItem = { name: string; slug: string };
type ServiceCategory = {
  title: string;
  icon: LucideIcon;
  items: ServiceItem[];
};
type NavLink = { label: string; href: string; dropdown?: boolean };

const F_MONO = "font-['IBM_Plex_Mono',monospace]";

export default function MobileNavMenu({
  navLinks,
  categories,
  totalCount,
  mobileServicesOpen,
  onToggleServices,
  onNavigate,
  onSelectService,
  onClose,
}: {
  navLinks: NavLink[];
  categories: ServiceCategory[];
  totalCount: number;
  mobileServicesOpen: boolean;
  onToggleServices: () => void;
  onNavigate: (href: string) => void;
  onSelectService: (slug: string) => void;
  onClose: () => void;
}) {
  return (
    <div className="md:hidden bg-[#ECE8DF] border-t border-[#14181B]/10 px-6 py-5 flex flex-col gap-4 max-h-[75vh] overflow-y-auto">
      {navLinks.map((link) =>
        link.dropdown ? (
          <div key={link.label}>
            <button
              onClick={onToggleServices}
              className={`${F_MONO} flex items-center justify-between w-full text-xs uppercase tracking-widest text-[#14181B]/70`}
            >
              <span>
                {link.label}{" "}
                <span className="text-[#14181B]/35">({totalCount})</span>
              </span>
              <ChevronRightIcon open={mobileServicesOpen} />
            </button>
            {mobileServicesOpen && (
              <div className="mt-3 ml-2 space-y-4">
                {categories.map((cat) => (
                  <div key={cat.title}>
                    <div
                      className={`${F_MONO} text-gold text-[10px] uppercase tracking-widest mb-2`}
                    >
                      {cat.title}
                    </div>
                    <ul className="space-y-1.5">
                      {cat.items.map((it) => (
                        <li key={it.slug}>
                          <button
                            onClick={() => {
                              onSelectService(it.slug);
                              onClose();
                            }}
                            className="text-left text-[#14181B]/55 text-xs"
                          >
                            {it.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <a
            key={link.label}
            href={link.href}
            onClick={(event) => {
              event.preventDefault();
              onNavigate(link.href);
              onClose();
            }}
            className={`${F_MONO} text-xs uppercase tracking-widest text-[#14181B]/70`}
          >
            {link.label}
          </a>
        ),
      )}
      <a
        href="#contact"
        onClick={(event) => {
          event.preventDefault();
          onNavigate("#contact");
          onClose();
        }}
        className={`${F_MONO} inline-flex justify-center items-center gap-2 bg-gold text-[#14181B] font-semibold text-xs uppercase tracking-widest px-5 py-3`}
      >
        Get a Quote
      </a>
    </div>
  );
}

function ChevronRightIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-90" : ""}`}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
