import { useState } from "react";
import {
  ArrowRight,
  Building2,
  ChevronDown,
  LucideIcon,
  Menu,
  PaintRoller,
  Sprout,
  X,
} from "lucide-react";
import NavBrand from "./NavBrand";
import ServicesMegaMenu from "./ServicesMegaMenu";
import MobileNavMenu from "./MobileNavMenu";

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services", dropdown: true },
  { label: "Recent Works", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];
type ServiceItem = { name: string; slug: string };
type ServiceCategory = {
  title: string;
  icon: LucideIcon;
  items: ServiceItem[];
};
const RAW_CATEGORIES: Array<{
  title: string;
  icon: LucideIcon;
  items: string[];
}> = [
  {
    title: "Building & Structural Works",
    icon: Building2,
    items: [
      "Hacking",
      "Ceiling / Partition",
      "Reinforcement",
      "Building Maintenance",
    ],
  },
  {
    title: "Interior & Electrical",
    icon: PaintRoller,
    items: ["Painting", "Electrical"],
  },
  {
    title: "Outdoor & Maintenance",
    icon: Sprout,
    items: ["Garden Maintenance", "Aircon Service"],
  },
];

const SERVICE_CATEGORIES: ServiceCategory[] = RAW_CATEGORIES.map((cat) => ({
  title: cat.title,
  icon: cat.icon,
  items: cat.items.map((name) => ({ name, slug: slugify(name) })),
}));
const TOTAL_SERVICE_COUNT = SERVICE_CATEGORIES.reduce(
  (n, cat) => n + cat.items.length,
  0,
);
const F_MONO = "font-['IBM_Plex_Mono',monospace]";
export default function NavBar({
  scrolled,
  onNavigate,
  onSelectService,
}: {
  scrolled: boolean;
  onNavigate: (href: string) => void;
  onSelectService: (slug: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-[#ECE8DF]/97 backdrop-blur-md shadow-[0_1px_0_#14181B22] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onNavigate("#home");
          }}
        >
          <NavBrand dark={scrolled} />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) =>
            l.dropdown ? (
              <div
                key={l.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <a
                  href={l.href}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(l.href);
                  }}
                  className={`${F_MONO} flex items-center gap-1.5 text-xs uppercase tracking-widest transition-colors ${
                    scrolled
                      ? "text-[#14181B]/60 hover:text-[#14181B]"
                      : "text-[#ECE8DF]/55 hover:text-[#ECE8DF]"
                  }`}
                >
                  {l.label}
                  <ChevronDown
                    size={12}
                    className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </a>
                {servicesOpen && (
                  <ServicesMegaMenu
                    categories={SERVICE_CATEGORIES}
                    totalCount={TOTAL_SERVICE_COUNT}
                    onSelectService={onSelectService}
                  />
                )}
              </div>
            ) : (
              <a
                key={l.label}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate(l.href);
                }}
                className={`${F_MONO} text-xs uppercase tracking-widest transition-colors ${
                  scrolled
                    ? "text-[#14181B]/60 hover:text-[#14181B]"
                    : "text-[#ECE8DF]/55 hover:text-[#ECE8DF]"
                }`}
              >
                {l.label}
              </a>
            ),
          )}
        </nav>

        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            onNavigate("#contact");
          }}
          className={`${F_MONO} hidden md:inline-flex items-center gap-2 bg-gold hover-bg-gold-2 text-[#14181B] font-semibold text-xs uppercase tracking-widest px-5 py-3 transition-colors`}
        >
          Get a Quote <ArrowRight size={13} />
        </a>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <X
              size={22}
              className={scrolled ? "text-[#14181B]" : "text-[#ECE8DF]"}
            />
          ) : (
            <Menu
              size={22}
              className={scrolled ? "text-[#14181B]" : "text-[#ECE8DF]"}
            />
          )}
        </button>
      </div>

      {open && (
        <MobileNavMenu
          navLinks={NAV_LINKS}
          categories={SERVICE_CATEGORIES}
          totalCount={TOTAL_SERVICE_COUNT}
          mobileServicesOpen={mobileServicesOpen}
          onToggleServices={() => setMobileServicesOpen((value) => !value)}
          onNavigate={(href) => {
            onNavigate(href);
            setOpen(false);
          }}
          onSelectService={(slug) => {
            onSelectService(slug);
            setOpen(false);
          }}
          onClose={() => setOpen(false)}
        />
      )}
    </header>
  );
}
