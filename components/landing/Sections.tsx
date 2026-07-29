"use client";

import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";
import { Input, Select, Button } from "antd";
import type { LucideIcon } from "lucide-react";
import {
  Hammer,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle2,
  Shield,
  Clock,
  ChevronLeft,
  ChevronRight,
  Crosshair,
  Ruler,
  PaintRoller,
  Zap,
  LayoutPanelTop,
  Wrench,
  Sprout,
  Fan,
  Building2,
  Send,
  Quote,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import NavBrand from "../NavBrand";

const F_DISPLAY = "font-['Barlow_Condensed',sans-serif]";
const F_MONO = "font-['IBM_Plex_Mono',monospace]";

type ServiceItem = { name: string; slug: string };
type ServiceCategory = { title: string; icon: LucideIcon; items: ServiceItem[] };
type ServiceDetail = {
  category: string;
  icon: LucideIcon;
  description: string;
  image: string;
  highlights: string[];
};
type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function Animate({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, visible } = useInView();

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = Math.ceil(to / 50);
    const id = setInterval(() => {
      start += step;
      if (start >= to) {
        setCount(to);
        clearInterval(id);
      } else setCount(start);
    }, 20);
    return () => clearInterval(id);
  }, [visible, to]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function HazardDivider({ className = "" }) {
  return (
    <div
      className={`h-2.5 w-full ${className}`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, #927141 0px, #927141 14px, #14181B 14px, #14181B 28px)",
      }}
    />
  );
}

function CropFrame({ children }: { children: ReactNode }) {
  const mark = "absolute w-5 h-5 border-gold";
  return (
    <div className="relative">
      <div className="relative overflow-hidden">{children}</div>
      <div className={`${mark} -top-2 -left-2 border-t-[3px] border-l-[3px]`} />
      <div className={`${mark} -top-2 -right-2 border-t-[3px] border-r-[3px]`} />
      <div className={`${mark} -bottom-2 -left-2 border-b-[3px] border-l-[3px]`} />
      <div className={`${mark} -bottom-2 -right-2 border-b-[3px] border-r-[3px]`} />
    </div>
  );
}

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const RAW_CATEGORIES: Array<{ title: string; icon: LucideIcon; items: string[] }> = [
  {
    title: "Building & Structural Works",
    icon: Building2,
    items: ["Hacking", "Ceiling / Partition", "Reinforcement", "Building Maintenance"],
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

export const SERVICE_CATEGORIES: ServiceCategory[] = RAW_CATEGORIES.map((cat) => ({
  title: cat.title,
  icon: cat.icon,
  items: cat.items.map((name) => ({ name, slug: slugify(name) })),
}));

export const TOTAL_SERVICE_COUNT = SERVICE_CATEGORIES.reduce(
  (count, cat) => count + cat.items.length,
  0,
);

const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  hacking: {
    category: "Building & Structural Works",
    icon: Hammer,
    description:
      "Controlled hacking and demolition works to prepare walls, floors, and fixtures ahead of a renovation — carried out with dust control and debris clearance built in.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80",
    highlights: [
      "Wall, floor, and tile hacking for renovations",
      "Dust barriers and debris clearance included",
      "Site assessed before work begins",
      "Suitable for HDB, condo, and commercial units",
    ],
  },
  "ceiling-partition": {
    category: "Building & Structural Works",
    icon: LayoutPanelTop,
    description:
      "False ceiling and partition wall installation for homes and offices, from plasterboard ceilings to full room dividers, finished to a clean, paint-ready standard.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80",
    highlights: [
      "Plasterboard and gypsum ceiling installation",
      "Office and residential partition walls",
      "Concealed wiring and lighting cut-outs on request",
      "Finished ready for painting",
    ],
  },
  reinforcement: {
    category: "Building & Structural Works",
    icon: Ruler,
    description:
      "Structural reinforcement work for walls, beams, and openings — planned and executed to support renovations that change a unit's structural layout.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
    highlights: [
      "Reinforcement for structural alterations",
      "Coordinated with hacking and rebuilding works",
      "Suitable for load-bearing and non-load-bearing changes",
      "Site-assessed before quoting",
    ],
  },
  "building-maintenance": {
    category: "Building & Structural Works",
    icon: Building2,
    description:
      "Ongoing building maintenance for residential and commercial properties — general upkeep, repairs, and inspections to keep a property in good condition.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    highlights: [
      "Scheduled or on-call maintenance visits",
      "General repairs across trades",
      "Suitable for MCST and property managers",
      "Single point of contact for recurring work",
    ],
  },
  painting: {
    category: "Interior & Electrical",
    icon: PaintRoller,
    description:
      "Interior and exterior painting for homes, offices, and commercial units — surface preparation, patching, and a clean, even finish.",
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=900&q=80",
    highlights: [
      "Interior and exterior painting",
      "Surface prep, patching, and priming included",
      "Colour consultation on request",
      "Furniture and flooring protected during work",
    ],
  },
  electrical: {
    category: "Interior & Electrical",
    icon: Zap,
    description:
      "Electrical wiring, fixture installation, and repairs for homes and businesses, carried out to Singapore's electrical safety standards.",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=900&q=80",
    highlights: [
      "Wiring, rewiring, and fixture installation",
      "Lighting, switches, and power point repairs",
      "Fault-finding and safety checks",
      "Work carried out to code",
    ],
  },
  "garden-maintenance": {
    category: "Outdoor & Maintenance",
    icon: Sprout,
    description:
      "Garden and landscape upkeep for landed homes and commercial grounds — trimming, planting, and general maintenance to keep outdoor spaces tidy.",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=900&q=80",
    highlights: [
      "Regular or one-off garden maintenance",
      "Trimming, weeding, and planting",
      "Suitable for landed homes and commercial grounds",
      "Debris and green waste cleared after each visit",
    ],
  },
  "aircon-service": {
    category: "Outdoor & Maintenance",
    icon: Fan,
    description:
      "Air-conditioning servicing, chemical wash, and repairs for split-unit systems in homes and offices, keeping units running efficiently.",
    image:
      "https://images.unsplash.com/photo-1631545806609-42be0263298c?auto=format&fit=crop&w=900&q=80",
    highlights: [
      "General servicing and chemical wash",
      "Gas top-up and fault diagnosis",
      "Installation and re-installation available",
      "Scheduled maintenance plans available",
    ],
  },
};

function getServiceBySlug(slug: string) {
  for (const cat of SERVICE_CATEGORIES) {
    const item = cat.items.find((entry) => entry.slug === slug);
    if (item) return { name: item.name, ...SERVICE_DETAILS[slug] };
  }
  return null;
}

export function HeroSection() {
  return (
    <section id="home" className="relative bg-[#14181B] overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-0">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#2C5AA0 1px,transparent 1px),linear-gradient(90deg,#2C5AA0 1px,transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative grid md:grid-cols-2 gap-14 items-center pb-14 sm:pb-20">
        <div>
          <Animate>
            <div className={`${F_MONO} inline-flex flex-wrap items-center gap-2 border border-gold-40 text-gold text-[10px] sm:text-[11px] px-3 py-1.5 mb-7 tracking-[0.1em] sm:tracking-[0.15em] uppercase -rotate-1`}>
              <Crosshair size={12} /> SG Licensed &amp; Fully Insured Builders
            </div>
          </Animate>

          <Animate delay={80}>
            <h1 className={`${F_DISPLAY} text-5xl sm:text-6xl md:text-[3.4rem] lg:text-[4.6rem] font-extrabold text-[#ECE8DF] leading-[0.95] uppercase tracking-tight mb-6`}>
              <span className="relative inline-block">
                Build. Repair. Maintain.
                <span
                  className="absolute left-0 -bottom-1.5 w-full h-2"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(135deg, #927141 0px, #927141 8px, transparent 8px, transparent 16px)",
                  }}
                />
              </span>
            </h1>
          </Animate>

          <Animate delay={160}>
            <p className="text-[#ECE8DF]/55 text-lg leading-relaxed mb-9 max-w-md">
              Trusted building and handyman services — from painting and electrical work to hacking, partitions, and aircon servicing, for homes and businesses across Singapore.
            </p>
          </Animate>

          <Animate delay={240}>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className={`${F_MONO} group inline-flex items-center gap-2 bg-gold hover-bg-gold-2 text-[#14181B] font-semibold text-sm uppercase tracking-widest px-7 py-4 transition-colors`}>
                Get a Free Quote
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className={`${F_MONO} inline-flex items-center gap-2 border border-[#ECE8DF]/25 text-[#ECE8DF] hover:bg-[#ECE8DF]/8 text-sm uppercase tracking-widest px-7 py-4 transition-colors`}>
                Our Services
              </a>
            </div>
          </Animate>

          <Animate delay={320}>
            <div className={`${F_MONO} mt-14 pt-6 border-t border-[#ECE8DF]/10 flex flex-wrap items-center gap-4 sm:gap-8 text-[#ECE8DF]/45 text-xs uppercase tracking-widest`}>
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} size={11} className="text-gold fill-gold" />
                ))}
              </div>
              <span>1,000+ jobs completed</span>
            </div>
          </Animate>
        </div>

        <Animate delay={200} className="hidden md:block">
          <div className="relative pl-6 pt-6">
            <CropFrame>
              <div className="h-[440px] bg-[#1E2429]">
                <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&h=1000&q=80" alt="Builder carrying out home repairs" className="w-full h-full object-cover" />
              </div>
            </CropFrame>

            <div className="absolute -bottom-6 -left-6 bg-[#ECE8DF] px-5 py-4 max-w-[190px] shadow-xl">
              <div className={`${F_MONO} text-[10px] text-[#55606B] uppercase tracking-widest mb-1`}>Response time</div>
              <div className={`${F_DISPLAY} text-3xl font-bold text-[#14181B] leading-none`}>&lt; 24hrs</div>
            </div>
            <div className="absolute top-0 right-0 bg-gold text-[#14181B] px-4 py-2 rotate-2 shadow-lg">
              <div className={`${F_MONO} text-[11px] font-semibold uppercase tracking-widest`}>100% Satisfaction</div>
            </div>
          </div>
        </Animate>
      </div>

      <HazardDivider />
    </section>
  );
}

const STATS = [
  { icon: Clock, value: 10, suffix: "+", label: "Years of Experience", sub: "In building & maintenance" },
  { icon: Wrench, value: 1000, suffix: "+", label: "Projects Completed", sub: "Across Singapore" },
  { icon: Shield, value: 100, suffix: "%", label: "Customer Satisfaction", sub: "Builders & handyman services" },
];

export function StatsSection() {
  return (
    <section className="bg-[#ECE8DF] py-0">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#14181B]/12">
          {STATS.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Animate key={stat.label} delay={index * 100} className="py-10 md:px-8 first:pl-0 last:pr-0">
                <div className="flex items-start justify-between mb-4">
                  <Icon size={20} className="text-[#2C5AA0]" strokeWidth={1.75} />
                  <span className={`${F_MONO} text-[10px] text-[#55606B] uppercase tracking-widest`}>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className={`${F_DISPLAY} text-5xl font-extrabold text-[#14181B] leading-none`}>
                  <Counter to={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-semibold text-[#14181B] mt-3 text-sm">{stat.label}</div>
                <div className={`${F_MONO} text-[#55606B] text-xs mt-1 tracking-wide`}>{stat.sub}</div>
              </Animate>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const CHECKS = [
  { icon: Shield, label: "Background checked" },
  { icon: CheckCircle2, label: "Fully insured" },
  { icon: Clock, label: "On-time guarantee" },
  { icon: Star, label: "5-star rated" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 bg-[#ECE8DF]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <Animate>
          <div className="relative pr-6 pb-6">
            <CropFrame>
              <div className="aspect-[4/5] bg-[#1E2429]">
                <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&h=900&q=80" alt="Professional building and handyman team at work" className="w-full h-full object-cover" />
              </div>
            </CropFrame>
            <div className="absolute bottom-0 right-0 bg-[#14181B] text-[#ECE8DF] px-5 py-4 -rotate-2 shadow-xl">
              <div className={`${F_DISPLAY} text-3xl font-extrabold text-gold leading-none`}>10+</div>
              <div className={`${F_MONO} text-[10px] mt-1 uppercase tracking-widest text-[#ECE8DF]/60`}>Years in SG</div>
            </div>
          </div>
        </Animate>

        <div>
          <Animate>
            <div className={`${F_MONO} flex items-center gap-2 text-[#2C5AA0] text-xs uppercase tracking-[0.2em] mb-4`}>
              <Ruler size={13} /> Builders &amp; Handyman Expertise
            </div>
          </Animate>
          <Animate delay={80}>
            <h2 className={`${F_DISPLAY} text-4xl md:text-5xl font-extrabold text-[#14181B] leading-[0.98] uppercase mb-6`}>
              Reliable building solutions for your Singapore property
            </h2>
          </Animate>
          <Animate delay={160}>
            <p className="text-[#14181B]/70 text-lg leading-relaxed mb-4">
              Our building and handyman team delivers trusted repairs, installations, and maintenance for homes and businesses in Singapore. From painting and electrical work to hacking, partitions, and structural reinforcement, every job is completed with care and expertise.
            </p>
          </Animate>
          <Animate delay={220}>
            <p className="text-[#55606B] leading-relaxed mb-8">
              Certified professionals, background-checked and fully insured — trained to handle HDB flats, condominiums, landed properties, and commercial spaces across the island.
            </p>
          </Animate>

          <Animate delay={280}>
            <div className="border border-[#14181B]/12 divide-y divide-[#14181B]/12">
              {CHECKS.map((check) => {
                const Icon = check.icon;
                return (
                  <div key={check.label} className="flex items-center justify-between px-4 py-3">
                    <span className="flex items-center gap-3 text-sm font-medium text-[#14181B]">
                      <Icon size={15} className="text-[#2C5AA0]" />
                      {check.label}
                    </span>
                    <span className={`${F_MONO} text-gold text-xs`}>✓ VERIFIED</span>
                  </div>
                );
              })}
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-28 bg-[#14181B]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <Animate>
            <div className={`${F_MONO} flex items-center gap-2 text-gold text-xs uppercase tracking-[0.2em] mb-4`}>
              <Hammer size={13} /> Our Services
            </div>
          </Animate>
          <Animate delay={80}>
            <h2 className={`${F_DISPLAY} text-4xl md:text-5xl font-extrabold text-[#ECE8DF] uppercase leading-none max-w-xl`}>
              Services built for your Singapore property
            </h2>
          </Animate>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {SERVICE_CATEGORIES.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <Animate key={cat.title} delay={index * 100} className="h-full">
                <div className="bg-[#1E2429] border border-[#ECE8DF]/10 p-7 h-full flex flex-col">
                  <div className="w-11 h-11 bg-gold flex items-center justify-center mb-5">
                    <Icon size={20} className="text-[#14181B]" />
                  </div>
                  <h3 className={`${F_DISPLAY} text-xl font-extrabold text-[#ECE8DF] uppercase mb-4`}>{cat.title}</h3>
                  <ul className="space-y-2.5 flex-1">
                    {cat.items.map((item) => (
                      <li key={item.slug}>
                        <Link href={`/services/${item.slug}`} className="group flex items-start gap-2 text-[#ECE8DF]/60 hover:text-[#ECE8DF] text-sm text-left transition-colors">
                          <span className="w-1.5 h-1.5 bg-gold flex-shrink-0 mt-2" />
                          <span className="underline-offset-2 group-hover:underline">{item.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Animate>
            );
          })}
        </div>

        <Animate delay={300}>
          <div className="mt-12 text-center">
            <a href="#contact" className={`${F_MONO} group inline-flex items-center gap-2 bg-gold hover-bg-gold-2 text-[#14181B] font-semibold text-sm uppercase tracking-widest px-7 py-3.5 transition-colors`}>
              Get Started
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </Animate>
      </div>
    </section>
  );
}

export function ServiceDetailSection({
  slug,
  onBack,
  onSelectService,
  onNavigate,
}: {
  slug: string;
  onBack: () => void;
  onSelectService: (slug: string) => void;
  onNavigate: (href: string) => void;
}) {
  const service = getServiceBySlug(slug);
  const category = SERVICE_CATEGORIES.find((entry) => entry.title === service?.category);
  const related = category ? category.items.filter((entry) => entry.slug !== slug) : [];

  if (!service) {
    return (
      <section className="pt-32 pb-24 bg-[#ECE8DF] min-h-screen">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#14181B]">We couldn't find that service.</p>
          <button onClick={onBack} className={`${F_MONO} mt-6 inline-flex items-center gap-2 text-[#2C5AA0] text-xs uppercase tracking-widest`}>
            <ArrowLeft size={13} /> Back to services
          </button>
        </div>
      </section>
    );
  }

  return (
    <div className="pt-24 sm:pt-28 md:pt-32 bg-[#ECE8DF]">
      <section className="max-w-6xl mx-auto px-6 pb-16 sm:pb-20 md:pb-24">
        <button onClick={onBack} className={`${F_MONO} inline-flex items-center gap-2 text-[#2C5AA0] text-xs uppercase tracking-widest mb-8 hover:text-[#14181B] transition-colors`}>
          <ArrowLeft size={13} /> Back to services
        </button>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          <div>
            <div className={`${F_MONO} flex items-center gap-2 text-[#2C5AA0] text-xs uppercase tracking-[0.2em] mb-4`}>
              <Crosshair size={13} /> {service.category}
            </div>
            <h1 className={`${F_DISPLAY} text-4xl md:text-5xl font-extrabold text-[#14181B] uppercase leading-[0.98] mb-6`}>{service.name}</h1>
            <p className="text-[#14181B]/70 text-lg leading-relaxed mb-8">{service.description}</p>

            <div className="border border-[#14181B]/12 divide-y divide-[#14181B]/12 mb-8">
              {service.highlights.map((highlight) => (
                <div key={highlight} className="flex items-start gap-3 px-4 py-3">
                  <CheckCircle2 size={15} className="text-[#2C5AA0] flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-[#14181B]">{highlight}</span>
                </div>
              ))}
            </div>

            <a href="#contact" onClick={(event) => { event.preventDefault(); onNavigate("#contact"); }} className={`${F_MONO} group inline-flex items-center gap-2 bg-gold hover-bg-gold-2 text-[#14181B] font-semibold text-sm uppercase tracking-widest px-7 py-4 transition-colors`}>
              Get a Free Quote
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <CropFrame>
            <div className="h-[360px] md:h-[440px] bg-[#1E2429]">
              <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
            </div>
          </CropFrame>
        </div>

        {related.length > 0 && (
          <div className="mt-16 pt-10 border-t border-[#14181B]/12">
            <div className={`${F_MONO} text-[#55606B] text-xs uppercase tracking-widest mb-5`}>Related in {service.category}</div>
            <div className="flex flex-wrap gap-3">
              {related.map((item) => (
                <button key={item.slug} onClick={() => onSelectService(item.slug)} className={`${F_MONO} text-xs uppercase tracking-widest px-4 py-2.5 border border-[#14181B]/15 text-[#14181B]/70 hover:bg-[#14181B] hover:text-[#ECE8DF] hover:border-[#14181B] transition-colors`}>
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </section>
      <HazardDivider />
    </div>
  );
}

const PORTFOLIO = [
  {
    title: "HDB Ceiling & Partition Installation",
    category: "Structural",
    img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=500&h=400&q=80",
  },
  {
    title: "Office Repainting Project",
    category: "Interior",
    img: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=500&h=500&q=80",
  },
  {
    title: "Condo Aircon Servicing",
    category: "Maintenance",
    img: "https://images.unsplash.com/photo-1631545806609-42be0263298c?auto=format&fit=crop&w=500&h=400&q=80",
  },
  {
    title: "Landed Home Garden Makeover",
    category: "Maintenance",
    img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=500&h=400&q=80",
  },
];

export function PortfolioSection() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Structural", "Interior", "Maintenance"];
  const filtered = filter === "All" ? PORTFOLIO : PORTFOLIO.filter((item) => item.category === filter);

  return (
    <section id="portfolio" className="py-16 sm:py-20 md:py-28 bg-[#ECE8DF]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <Animate>
              <div className={`${F_MONO} flex items-center gap-2 text-[#2C5AA0] text-xs uppercase tracking-[0.2em] mb-4`}>
                <Crosshair size={13} /> Our Recent Work
              </div>
            </Animate>
            <Animate delay={80}>
              <h2 className={`${F_DISPLAY} text-4xl md:text-5xl font-extrabold text-[#14181B] uppercase leading-none mb-3`}>
                See our work in Singapore
              </h2>
            </Animate>
            <Animate delay={140}>
              <p className="text-[#55606B] max-w-md">
                Browse a selection of completed building and handyman projects for homes and businesses throughout Singapore.
              </p>
            </Animate>
          </div>
          <Animate delay={100}>
            <div className={`${F_MONO} grid grid-cols-4 sm:inline-flex border border-[#14181B]/15 w-full sm:w-auto`}>
              {categories.map((category) => (
                <button key={category} onClick={() => setFilter(category)} className={`px-2 sm:px-4 py-2.5 text-[10px] sm:text-xs uppercase tracking-widest transition-colors border-r last:border-r-0 border-[#14181B]/15 ${filter === category ? "bg-[#14181B] text-[#ECE8DF]" : "text-[#14181B]/60 hover:bg-[#14181B]/5"}`}>
                  {category}
                </button>
              ))}
            </div>
          </Animate>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((item, index) => (
            <Animate key={item.title} delay={index * 70}>
              <div className="group relative overflow-hidden bg-[#14181B] cursor-pointer shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="aspect-[4/5]">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#14181B]/92 via-[#14181B]/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className={`${F_MONO} text-gold text-[10px] uppercase tracking-widest mb-1`}>{item.category}</div>
                  <div className="text-[#ECE8DF] font-semibold text-sm">{item.title}</div>
                </div>
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  {
    name: "Wei Lin Tan",
    location: "Tampines, Singapore",
    initials: "WT",
    text: "The team repainted our whole flat and patched up some ceiling cracks along the way. Prompt, tidy, and professional from start to finish. Highly recommend for any home repair work in Singapore.",
  },
  {
    name: "Priya Sharma",
    location: "Jurong West, Singapore",
    initials: "PS",
    text: "We needed a partition wall put up in our office and electrical points added. Communication was clear throughout and the job was finished on schedule.",
  },
  {
    name: "Ahmad Rizal",
    location: "Woodlands, Singapore",
    initials: "AR",
    text: "Booked them for an aircon servicing and general building maintenance. Efficient, careful with our fittings, and fairly priced. Will use them again.",
  },
];

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const prev = () => setActive((value) => (value - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setActive((value) => (value + 1) % TESTIMONIALS.length);

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-[#14181B]">
      <div className="max-w-6xl mx-auto px-6">
        <Animate>
          <div className="text-center mb-16">
            <div className={`${F_MONO} inline-flex items-center gap-2 text-gold text-xs uppercase tracking-[0.2em] mb-4`}>
              <Quote size={13} /> Client Reports
            </div>
            <h2 className={`${F_DISPLAY} text-4xl font-extrabold text-[#ECE8DF] uppercase`}>What our clients say</h2>
          </div>
        </Animate>

        <div className="max-w-3xl mx-auto">
          <Animate>
            <div className="relative bg-[#ECE8DF] p-6 sm:p-10 mb-8 transition-[height] duration-300">
              <div className={`${F_MONO} absolute top-0 right-0 bg-gold text-[#14181B] text-[10px] px-3 py-1.5 uppercase tracking-widest`}>Verified Client</div>
              <div className="flex gap-1 mb-6 mt-6 sm:mt-0">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} size={15} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="text-[#14181B]/80 text-lg sm:text-xl leading-relaxed mb-8 min-h-[145px] sm:min-h-[170px]">{TESTIMONIALS[active].text}</p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className={`${F_MONO} w-11 h-11 bg-[#14181B] text-[#ECE8DF] flex items-center justify-center font-semibold text-sm`}>{TESTIMONIALS[active].initials}</div>
                  <div>
                    <div className="font-semibold text-[#14181B]">{TESTIMONIALS[active].name}</div>
                    <div className={`${F_MONO} flex items-center gap-1 text-[#55606B] text-xs mt-0.5`}>
                      <MapPin size={10} /> {TESTIMONIALS[active].location}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button onClick={prev} className="w-9 h-9 border border-[#14181B]/20 hover:bg-[#14181B]/5 flex items-center justify-center transition-colors">
                    <ChevronLeft size={15} className="text-[#14181B]" />
                  </button>
                  <button onClick={next} className="w-9 h-9 border border-[#14181B]/20 hover:bg-[#14181B]/5 flex items-center justify-center transition-colors">
                    <ChevronRight size={15} className="text-[#14181B]" />
                  </button>
                </div>
              </div>
            </div>
          </Animate>

          <div className="flex justify-center gap-2">
            {TESTIMONIALS.map((_, index) => (
              <button key={index} onClick={() => setActive(index)} className={`h-1.5 transition-all duration-300 ${active === index ? "w-8 bg-gold" : "w-1.5 bg-[#ECE8DF]/20"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

export function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleInput = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSelect = (value: string) => setForm((prev) => ({ ...prev, service: value }));

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New service request from ${form.name}`,
          from_name: "GMS LEE Builders Website",
          name: form.name,
          phone: form.phone,
          email: form.email,
          service: form.service,
          message: form.message,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setStatus("sent");
        setForm({ name: "", phone: "", email: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-28 bg-[#ECE8DF]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        <div>
          <Animate>
            <div className={`${F_MONO} flex items-center gap-2 text-[#2C5AA0] text-xs uppercase tracking-[0.2em] mb-4`}>
              <Send size={13} /> Get In Touch
            </div>
          </Animate>
          <Animate delay={80}>
            <h2 className={`${F_DISPLAY} text-4xl md:text-5xl font-extrabold text-[#14181B] uppercase leading-none mb-5`}>
              Get in touch for building services
            </h2>
          </Animate>
          <Animate delay={140}>
            <p className="text-[#55606B] leading-relaxed mb-10">
              Ready to get started? Fill in the form or reach out directly — we respond within 1 business day.
            </p>
          </Animate>

          <div className="border border-[#14181B]/12 divide-y divide-[#14181B]/12">
            {[
              { icon: Phone, label: "Ganesan (Operations Manager)", value: "+65 9448 5536" },
              { icon: Mail, label: "Email", value: "gmslee2022@gmail.com" },
              { icon: MapPin, label: "Location", value: "17 Veerasamy Rd, Singapore 207325" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Animate key={item.label} delay={200 + index * 70}>
                  <div className="flex items-center gap-4 px-5 py-4">
                    <Icon size={17} className="text-[#2C5AA0] flex-shrink-0" />
                    <div>
                      <div className={`${F_MONO} text-[10px] text-[#55606B] uppercase tracking-widest`}>{item.label}</div>
                      <div className="font-medium text-[#14181B] mt-0.5 text-sm">{item.value}</div>
                    </div>
                  </div>
                </Animate>
              );
            })}
          </div>
        </div>

        <Animate delay={100}>
          <div className="bg-white p-5 sm:p-8 shadow-xl shadow-black/5 border border-[#14181B]/8">
            {status === "sent" ? (
              <div className="text-center py-14">
                <div className="w-16 h-16 bg-gold flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={28} className="text-[#14181B]" />
                </div>
                <h3 className={`${F_DISPLAY} text-2xl font-extrabold text-[#14181B] uppercase mb-2`}>Request Sent</h3>
                <p className="text-[#55606B]">We will get back to you within 1 business day.</p>
              </div>
            ) : (
              <>
                <h3 className={`${F_DISPLAY} text-xl font-extrabold text-[#14181B] uppercase mb-6`}>Request a Service</h3>
                {status === "error" && (
                  <div className={`${F_MONO} bg-red-50 border border-red-200 text-red-700 text-xs px-4 py-3 mb-4`}>
                    Something went wrong sending your request. Please try again, or call us directly at +65 9448 5536.
                  </div>
                )}
                <form onSubmit={submit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { name: "name", label: "Name", placeholder: "Your name", type: "text" },
                      { name: "phone", label: "Phone", placeholder: "+65 XXXX XXXX", type: "tel" },
                    ].map((field) => {
                      const fieldName = field.name as keyof FormState;
                      return (
                        <div key={field.name}>
                          <label className={`${F_MONO} block text-[10px] text-[#55606B] uppercase tracking-widest mb-1.5`}>{field.label}</label>
                          <Input name={field.name} type={field.type} value={form[fieldName]} onChange={handleInput} placeholder={field.placeholder} required={field.name === "name"} size="large" className="w-full rounded-none border-[#14181B]/20 hover:border-[#14181B]/40 focus:border-[#2C5AA0]" />
                        </div>
                      );
                    })}
                  </div>
                  <div>
                    <label className={`${F_MONO} block text-[10px] text-[#55606B] uppercase tracking-widest mb-1.5`}>Email</label>
                    <Input name="email" type="email" required value={form.email} onChange={handleInput} placeholder="your@email.com" size="large" className="w-full rounded-none border-[#14181B]/20 hover:border-[#14181B]/40 focus:border-[#2C5AA0]" />
                  </div>
                  <div>
                    <label className={`${F_MONO} block text-[10px] text-[#55606B] uppercase tracking-widest mb-1.5`}>Service Type</label>
                    <Select value={form.service || undefined} onChange={handleSelect} size="large" options={[{ value: "", label: "Select a service", disabled: true }, { value: "Building & Structural Works", label: "Building & Structural Works" }, { value: "Interior & Electrical", label: "Interior & Electrical" }, { value: "Outdoor & Maintenance", label: "Outdoor & Maintenance" }, { value: "Other", label: "Other" }]} className="w-full rounded-none" />
                  </div>
                  <div>
                    <label className={`${F_MONO} block text-[10px] text-[#55606B] uppercase tracking-widest mb-1.5`}>Message</label>
                    <Input.TextArea name="message" value={form.message} onChange={handleInput} rows={4} placeholder="Tell us about your building or maintenance needs..." className="w-full rounded-none border-[#14181B]/20 hover:border-[#14181B]/40 focus:border-[#2C5AA0]" />
                  </div>
                  <Button type="primary" htmlType="submit" disabled={status === "sending"} className={`${F_MONO} !w-full !h-12 !rounded-none !bg-[#14181B] !border-0 !text-[#ECE8DF] !font-semibold !uppercase !tracking-widest hover:!bg-gold hover:!text-[#14181B] disabled:!opacity-60 flex items-center justify-center gap-2`}>
                    {status === "sending" ? "Sending..." : "Submit Request"} <Send size={14} />
                  </Button>
                </form>
              </>
            )}
          </div>
        </Animate>
      </div>
    </section>
  );
}

export function FooterSection() {
  return (
    <footer className="bg-[#14181B] text-[#ECE8DF]">
      <HazardDivider />
      <div className="max-w-6xl mx-auto px-6 py-16">
        <Animate>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <NavBrand />
              <p className="text-[#ECE8DF]/45 text-sm leading-relaxed mt-4 mb-6">Singapore's trusted builders and handyman service.</p>
              <div className="flex gap-3">
                {[MessageCircle].map((Icon, index) => (
                  <button key={index} className="w-9 h-9 bg-[#ECE8DF]/8 flex items-center justify-center hover-bg-gold hover:text-[#14181B] transition-colors duration-200">
                    <Icon size={15} />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className={`${F_MONO} text-gold text-xs uppercase tracking-widest mb-5`}>Support</div>
              <div className={`${F_MONO} space-y-4 text-xs`}>
                <div className="flex items-start gap-3 text-[#ECE8DF]/55">
                  <Phone size={13} className="text-gold mt-0.5" /> +65 9448 5536
                </div>
                <div className="flex items-start gap-3 text-[#ECE8DF]/55">
                  <Mail size={13} className="text-gold mt-0.5" /> gmslee2022@gmail.com
                </div>
              </div>
            </div>

            <div>
              <div className={`${F_MONO} text-gold text-xs uppercase tracking-widest mb-5`}>Location</div>
              <div className={`${F_MONO} space-y-4 text-xs`}>
                <div className="flex items-start gap-3 text-[#ECE8DF]/55">
                  <MapPin size={13} className="text-gold mt-0.5" /> 17 Veerasamy Rd, Singapore 207325
                </div>
                <div className="flex items-start gap-3 text-[#ECE8DF]/55">
                  <Shield size={13} className="text-gold mt-0.5" /> UEN 202235278W
                </div>
              </div>
            </div>

            <div>
              <div className={`${F_MONO} text-gold text-xs uppercase tracking-widest mb-5`}>Links</div>
              <div className={`${F_MONO} space-y-3 text-xs`}>
                {['FAQ', 'Service Areas', 'Book a Service', 'Privacy Policy'].map((label) => (
                  <div key={label} className="text-[#ECE8DF]/45 hover-text-gold cursor-pointer transition-colors">{label}</div>
                ))}
              </div>
            </div>
          </div>
        </Animate>

        <div className={`${F_MONO} border-t border-[#ECE8DF]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-widest`}>
          <div className="text-[#ECE8DF]/30">© 2026 GMS LEE BUILDERS PTE. LTD. All rights reserved.</div>
          <div className="text-[#ECE8DF]/30">Registered in Singapore</div>
        </div>
      </div>
    </footer>
  );
}
