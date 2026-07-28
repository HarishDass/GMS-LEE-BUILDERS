"use client";

import { useEffect, useState } from "react";
import {
  HeroSection,
  StatsSection,
  AboutSection,
  ServicesSection,
  PortfolioSection,
  TestimonialsSection,
  ContactSection,
  FooterSection,
} from "../components/landing/Sections";
import Navbar from "../components/Navbar";
import { useRouter } from "next/navigation";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const goToSection = (href: string) => {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        if (href === "#home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      });
    });
  };

  return (
    <div className="min-h-screen bg-[#ECE8DF]">
      <Navbar
        scrolled={scrolled}
        onNavigate={goToSection}
        onSelectService={(slug) => router.push(`/services/${slug}`)}
      />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
