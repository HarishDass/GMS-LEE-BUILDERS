export type ServiceDefinition = {
  slug: string;
  title: string;
  category: string;
  eyebrow: string;
  description: string;
  image: string;
  highlights: string[];
  details: Array<{
    title: string;
    description: string;
  }>;
};

export const SERVICES: ServiceDefinition[] = [
  {
    slug: "painting",
    title: "Painting & Coating",
    category: "Interior & Electrical",
    eyebrow: "Painting & Coating",
    description:
      "From HDB flats to landed homes and commercial offices, our team delivers crisp finishes, careful prep, and durable coatings that stand up to Singapore's climate.",
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Interior and exterior painting",
      "Surface preparation and crack repairs",
      "Low-VOC premium paint systems",
      "Fast turnaround with clean handover",
    ],
    details: [
      {
        title: "What we do",
        description:
          "We manage everything from wall prep and patching to colour consultation, masking, and final finishing so the result feels polished and long-lasting.",
      },
      {
        title: "Why it matters",
        description:
          "In Singapore's humid climate, proper priming and premium coatings protect walls from peeling, mould, and premature fading.",
      },
      {
        title: "Our standard",
        description:
          "Every job is protected with drop sheets, careful masking, site supervision, and a final quality check before handover.",
      },
    ],
  },
  {
    slug: "hacking",
    title: "Hacking & Demolition",
    category: "Building & Structural Works",
    eyebrow: "Building Works",
    description:
      "Controlled hacking and demolition work that prepares spaces for renovation with dust control, debris removal, and careful site planning.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Wall, floor, and tile hacking",
      "Dust barriers and debris clearance",
      "Site assessed before work begins",
      "Suitable for HDB, condo, and commercial units",
    ],
    details: [
      {
        title: "Safe execution",
        description:
          "We plan each job around the existing structure and clear the site so that renovation work can proceed without delays.",
      },
      {
        title: "Flexible scope",
        description:
          "The service can be tailored for small repairs, full flat demolition, or preparatory works ahead of a larger project.",
      },
    ],
  },
  {
    slug: "ceiling-partition",
    title: "Ceiling & Partition Works",
    category: "Building & Structural Works",
    eyebrow: "Interior Build-Out",
    description:
      "From plasterboard ceilings to clean room dividers, we deliver structural interior finishes that are neat, durable, and ready for painting.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Plasterboard and gypsum ceiling installation",
      "Residential and office partition walls",
      "Concealed wiring and lighting cut-outs",
      "Paint-ready finish",
    ],
    details: [
      {
        title: "Built to fit",
        description:
          "We create partitions and ceilings that align with your room layout and future renovation plans.",
      },
      {
        title: "Clean finish",
        description:
          "The final surface is prepared for paint or other interior finishes with minimal visible joints.",
      },
    ],
  },
  {
    slug: "reinforcement",
    title: "Reinforcement Works",
    category: "Building & Structural Works",
    eyebrow: "Structural Support",
    description:
      "We support renovations that change layout or load paths with structural reinforcement carried out professionally and safely.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Structural alterations planned and executed",
      "Wall and beam reinforcement options",
      "Site assessment before quoting",
      "Coordination with other trades",
    ],
    details: [
      {
        title: "Safety first",
        description:
          "Structural modifications are scoped and checked so the work remains compliant and reliable.",
      },
      {
        title: "Renovation-ready",
        description:
          "We can support retrofits that need extra support before hacking, carpentry, or new partitions proceed.",
      },
    ],
  },
  {
    slug: "building-maintenance",
    title: "Building Maintenance",
    category: "Outdoor & Maintenance",
    eyebrow: "Property Upkeep",
    description:
      "Reliable maintenance support for residential and commercial properties, from general repairs to recurring site upkeep.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Scheduled or on-call visits",
      "General repairs across trades",
      "Suitable for MCST and property managers",
      "Single point of contact",
    ],
    details: [
      {
        title: "Preventive care",
        description:
          "Routine upkeep helps catch issues early and keeps properties looking and functioning well.",
      },
      {
        title: "Flexible support",
        description:
          "We can respond to urgent repairs or create recurring plans for long-term property care.",
      },
    ],
  },
  {
    slug: "electrical",
    title: "Electrical Works",
    category: "Interior & Electrical",
    eyebrow: "Electrical Service",
    description:
      "Certified electrical work for homes, offices, and retail spaces including wiring, fixture installation, and repairs.",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Wiring and rewiring works",
      "Lighting and power point repairs",
      "Safety checks and fault-finding",
      "Work carried out to code",
    ],
    details: [
      {
        title: "Safe installations",
        description:
          "We work carefully and provide practical recommendations so electrical upgrades remain dependable.",
      },
      {
        title: "Responsive support",
        description:
          "From quick repairs to full installation scopes, we keep projects moving with clear communication.",
      },
    ],
  },
  {
    slug: "garden-maintenance",
    title: "Garden Maintenance",
    category: "Outdoor & Maintenance",
    eyebrow: "Outdoor Care",
    description:
      "Garden and landscape support for landed homes and commercial grounds, keeping outdoor areas neat and cared for.",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Regular or one-off maintenance",
      "Trimming, weeding, and planting",
      "Suitable for landed homes and commercial grounds",
      "Green waste cleared after visits",
    ],
    details: [
      {
        title: "Regular upkeep",
        description:
          "We help keep outdoor spaces looking tidy with planned or on-demand maintenance visits.",
      },
      {
        title: "Flexible scheduling",
        description:
          "Choose a recurring package or arrange a single service depending on the condition of the property.",
      },
    ],
  },
  {
    slug: "aircon-service",
    title: "Aircon Service",
    category: "Outdoor & Maintenance",
    eyebrow: "Cooling Care",
    description:
      "Air-conditioning servicing, repairs, and chemical wash for split-unit systems in homes and offices.",
    image:
      "https://images.unsplash.com/photo-1631545806609-42be0263298c?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "General servicing and chemical wash",
      "Gas top-up and fault diagnosis",
      "Installation and re-installation available",
      "Scheduled maintenance plans available",
    ],
    details: [
      {
        title: "Reliable performance",
        description:
          "We keep cooling systems efficient through preventative maintenance and accurate fault diagnosis.",
      },
      {
        title: "Flexible appointments",
        description:
          "We can arrange one-off appointments or recurring service plans depending on your property needs.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}
