"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle2,
  Shield,
  Clock,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Crosshair,
  Ruler,
  MessageCircle,
  Quote,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import NavBar from "./Navbar";
import NavBrand from "./NavBrand";
import type { ServiceContent } from "./ServiceData";
import { SERVICES_LIST } from "./ServiceData";

const F_DISPLAY = "font-['Barlow_Condensed',sans-serif]";
const F_MONO = "font-['IBM_Plex_Mono',monospace]";

/* ─── Shared reveal / decorative helpers — match the main sections file ─── */

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
      <div
        className={`${mark} -top-2 -right-2 border-t-[3px] border-r-[3px]`}
      />
      <div
        className={`${mark} -bottom-2 -left-2 border-b-[3px] border-l-[3px]`}
      />
      <div
        className={`${mark} -bottom-2 -right-2 border-b-[3px] border-r-[3px]`}
      />
    </div>
  );
}

function SectionKicker({
  icon: Icon,
  children,
}: {
  icon: LucideIcon;
  children: ReactNode;
}) {
  return (
    <div
      className={`${F_MONO} inline-flex items-center gap-2 text-gold text-xs uppercase tracking-[0.2em] mb-4`}
    >
      <Icon size={13} /> {children}
    </div>
  );
}

/* ─── Hero ───────────────────────────────────────────────────────── */

function Hero({ data, onBack }: { data: ServiceContent; onBack: () => void }) {
  const Icon = data.icon;
  const lastIndex = data.heroHeadingLines.length - 1;
  return (
    <section className="relative bg-[#14181B] overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-0">
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
            <button
              type="button"
              onClick={onBack}
              className={`${F_MONO} cursor-pointer flex items-center gap-2 text-[#ECE8DF]/50 hover:text-gold text-xs uppercase tracking-widest mb-8 transition-colors`}
            >
              <ArrowLeft size={13} /> Back to Services
            </button>
            <div
              className={`${F_MONO} inline-flex flex-wrap items-center gap-2 border border-gold-40 text-gold text-[10px] sm:text-[11px] px-3 py-1.5 mb-7 tracking-[0.1em] sm:tracking-[0.15em] uppercase -rotate-1`}
            >
              <Icon size={12} /> {data.category}
            </div>
          </Animate>

          <Animate delay={80}>
            <h1
              className={`${F_DISPLAY} text-5xl sm:text-6xl md:text-[3.4rem] lg:text-[4.6rem] font-extrabold text-[#ECE8DF] leading-[0.95] uppercase tracking-tight mb-6`}
            >
              {data.heroHeadingLines.map((line, i) =>
                i === lastIndex ? (
                  <span key={i} className="relative inline-block">
                    {line}
                    <span
                      className="absolute left-0 -bottom-1.5 w-full h-2"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(135deg, #927141 0px, #927141 8px, transparent 8px, transparent 16px)",
                      }}
                    />
                  </span>
                ) : (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ),
              )}
            </h1>
          </Animate>

          <Animate delay={160}>
            <p className="text-[#ECE8DF]/55 text-lg leading-relaxed mb-9 max-w-md">
              {data.heroParagraph}
            </p>
          </Animate>

          <Animate delay={240}>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className={`${F_MONO} group inline-flex items-center gap-2 bg-gold hover-bg-gold-2 text-[#14181B] font-semibold text-sm uppercase tracking-widest px-7 py-4 transition-colors`}
              >
                Get a Free Quote
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="tel:+6594485536"
                className={`${F_MONO} inline-flex items-center gap-2 border border-[#ECE8DF]/25 text-[#ECE8DF] hover:bg-[#ECE8DF]/8 text-sm uppercase tracking-widest px-7 py-4 transition-colors`}
              >
                <Phone size={14} /> Call Now
              </a>
            </div>
          </Animate>

          <Animate delay={320}>
            <div
              className={`${F_MONO} mt-14 pt-6 border-t border-[#ECE8DF]/10 flex flex-wrap items-center gap-4 sm:gap-8 text-[#ECE8DF]/45 text-xs uppercase tracking-widest`}
            >
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="text-gold fill-gold" />
                ))}
              </div>
              <span>{data.statLine}</span>
            </div>
          </Animate>
        </div>

        <Animate delay={200} className="hidden md:block">
          <div className="relative pl-6 pt-6">
            <CropFrame>
              <div className="h-[440px] bg-[#1E2429]">
                <img
                  src={data.heroImage}
                  alt={data.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </CropFrame>
            <div className="absolute -bottom-6 -left-6 bg-[#ECE8DF] px-5 py-4 max-w-[190px] shadow-xl">
              <div
                className={`${F_MONO} text-[10px] text-[#55606B] uppercase tracking-widest mb-1`}
              >
                {data.heroBadgeLabel}
              </div>
              <div
                className={`${F_DISPLAY} text-3xl font-bold text-[#14181B] leading-none`}
              >
                {data.heroBadgeValue}
              </div>
            </div>
            <div className="absolute top-0 right-0 bg-gold text-[#14181B] px-4 py-2 rotate-2 shadow-lg">
              <div
                className={`${F_MONO} text-[11px] font-semibold uppercase tracking-widest`}
              >
                {data.heroTag}
              </div>
            </div>
          </div>
        </Animate>
      </div>
      <HazardDivider />
    </section>
  );
}

/* ─── Overview ───────────────────────────────────────────────────── */

function Overview({ data }: { data: ServiceContent }) {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-[#ECE8DF]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <Animate>
          <div className="relative pr-6 pb-6">
            <CropFrame>
              <div className="aspect-[4/5] bg-[#1E2429]">
                <img
                  src={data.overviewImage}
                  alt={`${data.name} team at work`}
                  className="w-full h-full object-cover"
                />
              </div>
            </CropFrame>
            <div className="absolute bottom-0 right-0 bg-[#14181B] text-[#ECE8DF] px-5 py-4 -rotate-2 shadow-xl">
              <div
                className={`${F_DISPLAY} text-3xl font-extrabold text-gold leading-none`}
              >
                {data.overviewBadgeValue}
              </div>
              <div
                className={`${F_MONO} text-[10px] mt-1 uppercase tracking-widest text-[#ECE8DF]/60`}
              >
                {data.overviewBadgeLabel}
              </div>
            </div>
          </div>
        </Animate>

        <div>
          <Animate>
            <SectionKicker icon={data.icon}>Service Overview</SectionKicker>
          </Animate>
          <Animate delay={80}>
            <h2
              className={`${F_DISPLAY} text-4xl md:text-5xl font-extrabold text-[#14181B] leading-[0.98] uppercase mb-6`}
            >
              {data.overviewHeading}
            </h2>
          </Animate>
          {data.overviewParagraphs.map((p, i) => (
            <Animate key={i} delay={160 + i * 60}>
              <p
                className={
                  i === 0
                    ? "text-[#14181B]/70 text-lg leading-relaxed mb-4"
                    : "text-[#55606B] leading-relaxed mb-8"
                }
              >
                {p}
              </p>
            </Animate>
          ))}

          <Animate delay={280}>
            <div className="border border-[#14181B]/12 divide-y divide-[#14181B]/12">
              {data.highlights.map((h) => (
                <div
                  key={h}
                  className="flex items-center justify-between px-4 py-3"
                >
                  <span className="flex items-center gap-3 text-sm font-medium text-[#14181B]">
                    <CheckCircle2 size={15} className="text-[#2C5AA0]" />
                    {h}
                  </span>
                  <span className={`${F_MONO} text-gold text-xs`}>
                    ✓ VERIFIED
                  </span>
                </div>
              ))}
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
}

/* ─── What's Included ────────────────────────────────────────────── */

function WhatsIncluded({ data }: { data: ServiceContent }) {
  const Icon = data.icon;
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-[#14181B]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <Animate>
            <SectionKicker icon={Icon}>Our Services</SectionKicker>
          </Animate>
          <Animate delay={80}>
            <h2
              className={`${F_DISPLAY} text-4xl md:text-5xl font-extrabold text-[#ECE8DF] uppercase leading-none max-w-xl`}
            >
              What's included
            </h2>
          </Animate>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.included.map((item, index) => (
            <Animate key={item.title} delay={index * 80} className="h-full">
              <div className="bg-[#1E2429] border border-[#ECE8DF]/10 p-7 h-full flex flex-col">
                <div className="w-11 h-11 bg-gold flex items-center justify-center mb-5">
                  <Icon size={20} className="text-[#14181B]" />
                </div>
                <h3
                  className={`${F_DISPLAY} text-lg font-extrabold text-[#ECE8DF] uppercase mb-3`}
                >
                  {item.title}
                </h3>
                <p className="text-[#ECE8DF]/55 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Why Choose Us (shared, company-wide) ───────────────────────── */

const FEATURES: Array<{ icon: LucideIcon; title: string; desc: string }> = [
  {
    icon: Sparkles,
    title: "Experienced Professionals",
    desc: "Our tradesmen carry 8–15 years of hands-on experience across HDB, condo, landed, and commercial properties.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Materials",
    desc: "We use certified, trade-grade materials — no diluted or substandard products.",
  },
  {
    icon: MessageCircle,
    title: "Transparent Pricing",
    desc: "Itemised quotations with no hidden costs. What we quote is what you pay.",
  },
  {
    icon: MapPin,
    title: "Islandwide Singapore",
    desc: "We serve all 28 districts across Singapore, from Jurong West to Pasir Ris and Woodlands to Sentosa.",
  },
  {
    icon: Clock,
    title: "Fast Response",
    desc: "Same-day or next-day site visits available. Emergency callouts upon request.",
  },
  {
    icon: Star,
    title: "Satisfaction Guaranteed",
    desc: "We return at no cost if any part of the job falls below our standard within the warranty period.",
  },
];

function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-[#ECE8DF]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <Animate>
            <div className="flex justify-center">
              <SectionKicker icon={Shield}>Our Commitment</SectionKicker>
            </div>
          </Animate>
          <Animate delay={80}>
            <h2
              className={`${F_DISPLAY} text-4xl md:text-5xl font-extrabold text-[#14181B] uppercase leading-none`}
            >
              Why choose GMS LEE
            </h2>
          </Animate>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Animate
                key={feature.title}
                delay={index * 70}
                className="h-full"
              >
                <div className="border border-[#14181B]/12 hover:border-gold p-7 h-full transition-colors duration-300">
                  <div className="w-10 h-10 bg-[#14181B] flex items-center justify-center mb-4">
                    <Icon size={16} className="text-gold" />
                  </div>
                  <h3
                    className={`${F_DISPLAY} text-lg font-extrabold text-[#14181B] uppercase mb-2`}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-[#55606B] text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </Animate>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Process (shared, company-wide) ─────────────────────────────── */

const STEPS: Array<{
  num: string;
  icon: LucideIcon;
  title: string;
  desc: string;
}> = [
  {
    num: "01",
    icon: Phone,
    title: "Contact Us",
    desc: "Call, WhatsApp, or submit your enquiry online. Our team responds within 2 business hours.",
  },
  {
    num: "02",
    icon: Crosshair,
    title: "Site Inspection",
    desc: "We visit your property to assess the scope and any prep work required.",
  },
  {
    num: "03",
    icon: MessageCircle,
    title: "Free Quotation",
    desc: "You receive a detailed, itemised quote — broken down by area, materials, and labour.",
  },
  {
    num: "04",
    icon: Ruler,
    title: "Service Execution",
    desc: "Our team arrives on time, protects your property, and carries out the agreed works.",
  },
  {
    num: "05",
    icon: CheckCircle2,
    title: "Final Inspection",
    desc: "Site supervisor conducts a walk-through with you to ensure every detail meets our standard.",
  },
  {
    num: "06",
    icon: Star,
    title: "Customer Satisfaction",
    desc: "We don't consider the job done until you're genuinely satisfied.",
  },
];

function Process() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-[#14181B]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <Animate>
            <SectionKicker icon={Ruler}>How It Works</SectionKicker>
          </Animate>
          <Animate delay={80}>
            <h2
              className={`${F_DISPLAY} text-4xl md:text-5xl font-extrabold text-[#ECE8DF] uppercase leading-none`}
            >
              Our process
            </h2>
          </Animate>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-8">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <Animate key={step.num} delay={index * 70}>
                <div className="w-16 h-16 flex items-center justify-center border border-gold-40 bg-[#1E2429] mb-5">
                  <Icon size={20} className="text-gold" />
                </div>
                <div
                  className={`${F_MONO} text-gold text-xs tracking-widest mb-1`}
                >
                  {step.num}
                </div>
                <h3
                  className={`${F_DISPLAY} text-base font-extrabold text-[#ECE8DF] uppercase mb-2`}
                >
                  {step.title}
                </h3>
                <p className="text-[#ECE8DF]/45 text-xs leading-relaxed">
                  {step.desc}
                </p>
              </Animate>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Before & After ─────────────────────────────────────────────── */

const BEFORE_AFTER_COLS: Record<number, string> = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
};

function BeforeAfter({ data }: { data: ServiceContent }) {
  if (!data.beforeAfter.length) return null;
  const colsClass =
    BEFORE_AFTER_COLS[Math.min(data.beforeAfter.length, 3)] ?? "md:grid-cols-3";
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-[#ECE8DF]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <Animate>
            <SectionKicker icon={Sparkles}>Results</SectionKicker>
          </Animate>
          <Animate delay={80}>
            <h2
              className={`${F_DISPLAY} text-4xl md:text-5xl font-extrabold text-[#14181B] uppercase leading-none`}
            >
              Before &amp; after
            </h2>
          </Animate>
        </div>
        <div className={`grid ${colsClass} gap-6`}>
          {data.beforeAfter.map((item, index) => (
            <Animate key={item.label} delay={index * 90}>
              <div className="relative overflow-hidden mb-2">
                <div className="relative h-[200px]">
                  <img
                    src={item.before}
                    alt={`Before: ${item.label}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-end p-3 bg-gradient-to-t from-[#14181B]/80 to-transparent">
                    <span
                      className={`${F_MONO} text-[10px] uppercase tracking-widest text-[#ECE8DF]`}
                    >
                      Before
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 py-2">
                <div className="flex-1 h-px bg-[#14181B]/15" />
                <span className={`${F_MONO} text-gold text-xs`}>↓</span>
                <div className="flex-1 h-px bg-[#14181B]/15" />
              </div>
              <div className="relative overflow-hidden group cursor-pointer">
                <div className="relative h-[200px]">
                  <img
                    src={item.after}
                    alt={`After: ${item.label}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-end p-3 bg-gradient-to-t from-[#927141]/85 to-transparent">
                    <span
                      className={`${F_MONO} text-[10px] uppercase tracking-widest text-[#14181B] font-semibold`}
                    >
                      After
                    </span>
                  </div>
                </div>
              </div>
              <p
                className={`${F_MONO} text-xs uppercase tracking-widest text-[#14181B] font-semibold pt-3`}
              >
                {item.label}
              </p>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Gallery ────────────────────────────────────────────────────── */

function Gallery({ data }: { data: ServiceContent }) {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-[#14181B]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <Animate>
            <SectionKicker icon={Crosshair}>Our Work</SectionKicker>
          </Animate>
          <Animate delay={80}>
            <h2
              className={`${F_DISPLAY} text-4xl md:text-5xl font-extrabold text-[#ECE8DF] uppercase leading-none`}
            >
              Project gallery
            </h2>
          </Animate>
        </div>
        <div className="columns-2 lg:columns-4 gap-4 space-y-4">
          {data.gallery.map((img, index) => (
            <Animate
              key={index}
              delay={index * 70}
              className="break-inside-avoid"
            >
              <div
                className="relative overflow-hidden cursor-pointer group mb-4"
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full object-cover transition-transform duration-500"
                  style={{
                    display: "block",
                    height: img.tall ? 340 : 200,
                    transform: active === index ? "scale(1.05)" : "scale(1)",
                  }}
                />
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(146,113,65,0.55), rgba(20,24,27,0.7))",
                    opacity: active === index ? 1 : 0,
                  }}
                />
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ────────────────────────────────────────────────────────── */

function FAQ({ data }: { data: ServiceContent }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-[#ECE8DF]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-14">
          <Animate>
            <SectionKicker icon={Quote}>Common Questions</SectionKicker>
          </Animate>
          <Animate delay={80}>
            <h2
              className={`${F_DISPLAY} text-4xl md:text-5xl font-extrabold text-[#14181B] uppercase leading-none`}
            >
              Frequently asked questions
            </h2>
          </Animate>
        </div>
        <div className="border-t border-[#14181B]/12">
          {data.faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <Animate
                key={index}
                delay={index * 40}
                className="border-b border-[#14181B]/12"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between py-5 text-left gap-6"
                  onClick={() => setOpen(isOpen ? null : index)}
                >
                  <span className="font-semibold text-sm text-[#14181B]">
                    {faq.q}
                  </span>
                  <span
                    className={`w-8 h-8 flex-shrink-0 border flex items-center justify-center transition-colors ${isOpen ? "border-gold text-gold" : "border-[#14181B]/20 text-[#14181B]"}`}
                  >
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-5 text-sm leading-relaxed text-[#55606B]">
                    {faq.a}
                  </p>
                )}
              </Animate>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials ───────────────────────────────────────────────── */

function Testimonials({ data }: { data: ServiceContent }) {
  const [active, setActive] = useState(0);
  const items = data.testimonials;
  const prev = () => setActive((v) => (v - 1 + items.length) % items.length);
  const next = () => setActive((v) => (v + 1) % items.length);

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-[#14181B]">
      <div className="max-w-6xl mx-auto px-6">
        <Animate>
          <div className="text-center mb-16">
            <div
              className={`${F_MONO} inline-flex items-center gap-2 text-gold text-xs uppercase tracking-[0.2em] mb-4`}
            >
              <Quote size={13} /> Client Reports
            </div>
            <h2
              className={`${F_DISPLAY} text-4xl font-extrabold text-[#ECE8DF] uppercase`}
            >
              What our clients say
            </h2>
          </div>
        </Animate>
        <div className="max-w-3xl mx-auto">
          <Animate>
            <div className="relative bg-[#ECE8DF] p-6 sm:p-10 mb-8">
              <div
                className={`${F_MONO} absolute top-0 right-0 bg-gold text-[#14181B] text-[10px] px-3 py-1.5 uppercase tracking-widest`}
              >
                Verified Client
              </div>
              <div className="flex gap-1 mb-6 mt-6 sm:mt-0">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="text-[#14181B]/80 text-lg sm:text-xl leading-relaxed mb-8 min-h-[145px] sm:min-h-[170px]">
                {items[active].text}
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className={`${F_MONO} w-11 h-11 bg-[#14181B] text-[#ECE8DF] flex items-center justify-center font-semibold text-sm`}
                  >
                    {items[active].initials}
                  </div>
                  <div>
                    <div className="font-semibold text-[#14181B]">
                      {items[active].name}
                    </div>
                    <div
                      className={`${F_MONO} flex items-center gap-1 text-[#55606B] text-xs mt-0.5`}
                    >
                      <MapPin size={10} /> {items[active].location}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    aria-label="Previous testimonial"
                    onClick={prev}
                    className="w-9 h-9 border border-[#14181B]/20 hover:bg-[#14181B]/5 flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft size={15} className="text-[#14181B]" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next testimonial"
                    onClick={next}
                    className="w-9 h-9 border border-[#14181B]/20 hover:bg-[#14181B]/5 flex items-center justify-center transition-colors"
                  >
                    <ChevronRight size={15} className="text-[#14181B]" />
                  </button>
                </div>
              </div>
            </div>
          </Animate>
          <div className="flex justify-center gap-2">
            {items.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`View testimonial ${index + 1}`}
                onClick={() => setActive(index)}
                className={`h-1.5 transition-all duration-300 ${active === index ? "w-8 bg-gold" : "w-1.5 bg-[#ECE8DF]/20"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ────────────────────────────────────────────────────────── */

function CTA({ data }: { data: ServiceContent }) {
  return (
    <section
      id="contact"
      className="scroll-mt-24 py-16 sm:py-20 md:py-28 bg-[#ECE8DF]"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <Animate>
          <div className="flex justify-center">
            <SectionKicker icon={Sparkles}>Start Your Project</SectionKicker>
          </div>
          <h2
            className={`${F_DISPLAY} text-4xl md:text-5xl font-extrabold text-[#14181B] uppercase leading-none mb-6`}
          >
            Need {data.name.toLowerCase()} services?
          </h2>
          <p className="text-[#55606B] leading-relaxed mb-10 max-w-xl mx-auto">
            Get a free, no-obligation quote within 24 hours. Our team serves all
            residential and commercial properties across Singapore.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className={`${F_MONO} group inline-flex items-center gap-2 bg-gold hover-bg-gold-2 text-[#14181B] font-semibold text-sm uppercase tracking-widest px-7 py-4 transition-colors`}
            >
              Request Free Quote
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="tel:+6594485536"
              className={`${F_MONO} inline-flex items-center gap-2 border border-[#14181B]/25 text-[#14181B] hover:bg-[#14181B]/5 text-sm uppercase tracking-widest px-7 py-4 transition-colors`}
            >
              <Phone size={14} /> Call +65 9448 5536
            </a>
          </div>
        </Animate>
      </div>
    </section>
  );
}

/* ─── Related Services ───────────────────────────────────────────── */

function RelatedServices({ data }: { data: ServiceContent }) {
  const related = SERVICES_LIST.filter((s) => s.slug !== data.slug).slice(0, 6);
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-[#14181B]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <Animate>
            <SectionKicker icon={Crosshair}>More from GMS LEE</SectionKicker>
          </Animate>
          <Animate delay={80}>
            <h2
              className={`${F_DISPLAY} text-4xl md:text-5xl font-extrabold text-[#ECE8DF] uppercase leading-none`}
            >
              Related services
            </h2>
          </Animate>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((item, index) => {
            const Icon = item.icon;
            return (
              <Animate key={item.slug} delay={index * 70}>
                <Link
                  href={`/services/${item.slug}`}
                  className="flex items-start gap-4 p-6 border border-[#ECE8DF]/10 hover:border-gold transition-colors duration-300 group"
                >
                  <Icon size={20} className="text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3
                      className={`${F_DISPLAY} text-lg font-extrabold text-[#ECE8DF] uppercase mb-1`}
                    >
                      {item.name}
                    </h3>
                    <p className="text-[#ECE8DF]/50 text-xs leading-relaxed">
                      {item.shortDesc}
                    </p>
                  </div>
                  <ArrowRight
                    size={14}
                    className="text-gold ml-auto flex-shrink-0 mt-1 group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </Animate>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Service Areas (shared, company-wide) ───────────────────────── */

const AREAS = [
  "Jurong",
  "Woodlands",
  "Yishun",
  "Tampines",
  "Ang Mo Kio",
  "Bukit Timah",
  "Novena",
  "Orchard",
  "Punggol",
  "Sengkang",
  "Bishan",
  "Toa Payoh",
  "Clementi",
  "Queenstown",
  "Bedok",
  "Pasir Ris",
  "Hougang",
  "Serangoon",
  "Islandwide Singapore",
];

function ServiceAreasSection() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-[#ECE8DF]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14 text-center">
          <Animate>
            <div className="flex justify-center">
              <SectionKicker icon={MapPin}>Where We Work</SectionKicker>
            </div>
          </Animate>
          <Animate delay={80}>
            <h2
              className={`${F_DISPLAY} text-4xl md:text-5xl font-extrabold text-[#14181B] uppercase leading-none`}
            >
              Areas we serve
            </h2>
          </Animate>
          <Animate delay={140}>
            <p className="text-[#55606B] leading-relaxed mt-5 max-w-lg mx-auto">
              From Jurong to Pasir Ris, Woodlands to Sentosa — our teams cover
              every district across Singapore.
            </p>
          </Animate>
        </div>

        <Animate delay={200}>
          <div className="flex flex-wrap justify-center gap-3">
            {AREAS.map((area) => {
              const isIslandwide = area === "Islandwide Singapore";
              return (
                <span
                  key={area}
                  className={`${F_MONO} text-xs uppercase tracking-widest px-4 py-2.5 border transition-colors duration-200 ${
                    isIslandwide
                      ? "bg-gold border-gold text-[#14181B] font-semibold"
                      : "border-[#14181B]/15 text-[#14181B]/70 hover:border-gold hover:text-[#14181B]"
                  }`}
                >
                  {area}
                </span>
              );
            })}
          </div>
        </Animate>
      </div>
    </section>
  );
}

/* ─── Footer (shared, company-wide) ──────────────────────────────── */

function Footer() {
  return (
    <footer className="bg-[#14181B] text-[#ECE8DF]">
      <HazardDivider />
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <NavBrand />
            <p className="text-[#ECE8DF]/45 text-sm leading-relaxed mt-4 mb-6">
              Singapore's trusted builders and handyman service.
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                aria-label="Chat with us"
                className="w-9 h-9 bg-[#ECE8DF]/8 flex items-center justify-center hover-bg-gold hover:text-[#14181B] transition-colors duration-200"
              >
                <MessageCircle size={15} />
              </button>
            </div>
          </div>
          <div>
            <div
              className={`${F_MONO} text-gold text-xs uppercase tracking-widest mb-5`}
            >
              Support
            </div>
            <div className={`${F_MONO} space-y-4 text-xs`}>
              <div className="flex items-start gap-3 text-[#ECE8DF]/55">
                <Phone size={13} className="text-gold mt-0.5" /> +65 9448 5536
              </div>
              <div className="flex items-start gap-3 text-[#ECE8DF]/55">
                <Mail size={13} className="text-gold mt-0.5" />{" "}
                gmslee2022@gmail.com
              </div>
            </div>
          </div>
          <div>
            <div
              className={`${F_MONO} text-gold text-xs uppercase tracking-widest mb-5`}
            >
              Location
            </div>
            <div className={`${F_MONO} space-y-4 text-xs`}>
              <div className="flex items-start gap-3 text-[#ECE8DF]/55">
                <MapPin size={13} className="text-gold mt-0.5" /> 102 Serangoon
                RD, Singapore 218 007
              </div>
              <div className="flex items-start gap-3 text-[#ECE8DF]/55">
                <Shield size={13} className="text-gold mt-0.5" /> UEN 202235278W
              </div>
            </div>
          </div>
          <div>
            <div
              className={`${F_MONO} text-gold text-xs uppercase tracking-widest mb-5`}
            >
              Links
            </div>
            <div className={`${F_MONO} space-y-3 text-xs`}>
              {["FAQ", "Service Areas", "Book a Service", "Privacy Policy"].map(
                (label) => (
                  <div
                    key={label}
                    className="text-[#ECE8DF]/45 hover-text-gold cursor-pointer transition-colors"
                  >
                    {label}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
        <div
          className={`${F_MONO} border-t border-[#ECE8DF]/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-widest`}
        >
          <div className="text-[#ECE8DF]/30">
            © 2026 GMS LEE BUILDERS PTE. LTD. All rights reserved.
          </div>
          <div className="text-[#ECE8DF]/30">Registered in Singapore</div>
        </div>
      </div>
    </footer>
  );
}

function StickyMobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex border-t border-gold-40">
      <a
        href="#contact"
        className={`${F_MONO} flex-1 py-4 text-center bg-gold text-[#14181B] text-xs font-bold tracking-widest uppercase`}
      >
        Free Quote
      </a>
      <a
        href="tel:+6594485536"
        className={`${F_MONO} flex-1 py-4 text-center bg-[#14181B] text-[#ECE8DF] text-xs font-bold tracking-widest uppercase`}
      >
        Call Now
      </a>
    </div>
  );
}

function SEOSchema({ data }: { data: ServiceContent }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "GMS LEE BUILDERS PTE. LTD.",
    description: data.overviewParagraphs[0],
    url: `https://gmslee.com.sg/services/${data.slug}`,
    telephone: "+6594485536",
    email: "gmslee2022@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "102 Serangoon RD",
      addressLocality: "Singapore",
      postalCode: "218007",
      addressCountry: "SG",
    },
    areaServed: "Singapore",
    priceRange: "$$",
    openingHours: "Mo-Sa 08:00-18:00",
    serviceType: [data.name],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */

export default function ServicePageTemplate({
  data,
}: {
  data: ServiceContent;
}) {
  const router = useRouter();

  const goToSection = (href: string) => {
    if (window.location.pathname !== "/") {
      router.push(`/${href}`);
      return;
    }

    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  

  return (
    <>
      <SEOSchema data={data} />
      <div className="bg-[#ECE8DF]">
        <NavBar scrolled onNavigate={goToSection} onSelectService={(slug) => router.push(`/services/${slug}`)} />
        <main>
          <Hero data={data} onBack={() => goToSection("#services")} />
          <Overview data={data} />
          <WhatsIncluded data={data} />
          <WhyChooseUs />
          <Process />
          <BeforeAfter data={data} />
          <Gallery data={data} />
          <FAQ data={data} />
          <Testimonials data={data} />
          <CTA data={data} />
          <RelatedServices data={data} />
          <ServiceAreasSection />
        </main>
        <Footer />
        <StickyMobileCTA />
      </div>
    </>
  );
}
