import type { LucideIcon } from "lucide-react";
import {
  Hammer,
  LayoutPanelTop,
  Ruler,
  Building2,
  PaintRoller,
  Zap,
  Sprout,
  Fan,
} from "lucide-react";

export type ServiceContent = {
  slug: string;
  name: string;
  shortDesc: string;
  category: string;
  icon: LucideIcon;
  heroBadge: string;
  heroHeadingLines: string[];
  heroParagraph: string;
  heroImage: string;
  heroBadgeLabel: string;
  heroBadgeValue: string;
  heroTag: string;
  statLine: string;
  overviewHeading: string;
  overviewParagraphs: string[];
  overviewImage: string;
  overviewBadgeValue: string;
  overviewBadgeLabel: string;
  highlights: string[];
  included: Array<{ title: string; desc: string }>;
  beforeAfter: Array<{ before: string; after: string; label: string }>;
  gallery: Array<{ url: string; alt: string; tall: boolean }>;
  faqs: Array<{ q: string; a: string }>;
  testimonials: Array<{
    name: string;
    location: string;
    initials: string;
    text: string;
  }>;
};

export const SERVICES: Record<string, ServiceContent> = {
  hacking: {
    slug: "hacking",
    name: "Hacking",
    shortDesc: "Controlled hacking and demolition ahead of a renovation.",
    category: "Building & Structural Works",
    icon: Hammer,
    heroBadge: "Building & Structural Works",
    heroHeadingLines: ["Hacking &", "Demolition"],
    heroParagraph:
      "Controlled hacking and demolition works to prepare walls, floors, and fixtures ahead of a renovation — carried out with dust control and debris clearance built in.",
    heroImage:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&h=1000&q=80",
    heroBadgeLabel: "Debris Clearance",
    heroBadgeValue: "Included",
    heroTag: "Site Assessed First",
    statLine: "400+ hacking jobs completed",
    overviewHeading: "Clean, controlled hacking works",
    overviewParagraphs: [
      "Hacking is often the first step of a renovation, and doing it carelessly can crack tiles, damage plumbing, or leave dust throughout the unit. Our crews plan each cut and use dust barriers before any hammer touches the wall.",
      "Suitable for HDB flats, condominiums, landed properties, and commercial units — every job is site-assessed first so you know exactly what's being removed and what it will cost.",
    ],
    overviewImage:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=700&h=900&q=80",
    overviewBadgeValue: "12+",
    overviewBadgeLabel: "Years in SG",
    highlights: [
      "Wall, floor, and tile hacking for renovations",
      "Dust barriers and debris clearance included",
      "Site assessed before work begins",
      "Suitable for HDB, condo, and commercial units",
    ],
    included: [
      {
        title: "Wall & Floor Hacking",
        desc: "Removal of tiles, screed, and partition walls ahead of renovation works.",
      },
      {
        title: "Dust Containment",
        desc: "Barriers and sheeting set up before work begins to protect the rest of your home.",
      },
      {
        title: "Debris Clearance",
        desc: "All rubble and waste cleared and removed from site after each job.",
      },
      {
        title: "Pre-Work Site Check",
        desc: "We assess load-bearing risk and utility lines before any hacking starts.",
      },
    ],
    beforeAfter: [
      {
        before:
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop&auto=format",
        after:
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop&auto=format",
        label: "HDB Bathroom Hacking",
      },
      {
        before:
          "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&auto=format",
        after:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&auto=format",
        label: "Wall Removal for Open Layout",
      },
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=800&fit=crop&auto=format",
        alt: "Hacking works in progress",
        tall: true,
      },
      {
        url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&auto=format",
        alt: "Tile hacking before renovation",
        tall: false,
      },
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&auto=format",
        alt: "Debris cleared after hacking",
        tall: false,
      },
      {
        url: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=800&fit=crop&auto=format",
        alt: "Wall opened up for renovation",
        tall: true,
      },
    ],
    faqs: [
      {
        q: "Will hacking damage my neighbours' units?",
        a: "We use controlled methods and schedule noisy work within permitted hours to minimise disturbance, and check shared walls before starting.",
      },
      {
        q: "Do I need a permit for hacking works?",
        a: "Most non-structural hacking doesn't require a permit, but we'll flag it during the site visit if your job involves load-bearing elements.",
      },
      {
        q: "How long does hacking take?",
        a: "A typical bathroom or kitchen hacking job takes 1–2 days; larger units may take 3–5 days depending on scope.",
      },
      {
        q: "Do you clear the debris afterwards?",
        a: "Yes, debris clearance is included in every hacking job — we don't leave rubble behind.",
      },
    ],
    testimonials: [
      {
        name: "Kenneth Ong",
        location: "Bedok, Singapore",
        initials: "KO",
        text: "Hacked our bathroom walls and floor for a full reno. Clean, careful work and they protected the rest of the flat from dust.",
      },
      {
        name: "Farah Yusof",
        location: "Punggol, Singapore",
        initials: "FY",
        text: "Needed a wall removed to open up the living area. They checked it wasn't load-bearing first, then got it done in a day.",
      },
    ],
  },

  "ceiling-partition": {
    slug: "ceiling-partition",
    name: "Ceiling / Partition",
    shortDesc: "False ceiling and partition wall installation, paint-ready.",
    category: "Building & Structural Works",
    icon: LayoutPanelTop,
    heroBadge: "Building & Structural Works",
    heroHeadingLines: ["Ceiling &", "Partitions"],
    heroParagraph:
      "False ceiling and partition wall installation for homes and offices, from plasterboard ceilings to full room dividers, finished to a clean, paint-ready standard.",
    heroImage:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&h=1000&q=80",
    heroBadgeLabel: "Finish",
    heroBadgeValue: "Paint-Ready",
    heroTag: "Concealed Wiring Option",
    statLine: "350+ ceiling & partition jobs completed",
    overviewHeading: "Ceilings and partitions built to last",
    overviewParagraphs: [
      "A well-installed false ceiling or partition does more than divide a room — it hides wiring, improves acoustics, and gives a clean, finished look. We plan the framework before a single panel goes up.",
      "Whether it's an office partition or a home study nook, our team handles the carpentry, plastering, and finishing so it's ready for paint the moment we're done.",
    ],
    overviewImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&h=900&q=80",
    overviewBadgeValue: "12+",
    overviewBadgeLabel: "Years in SG",
    highlights: [
      "Plasterboard and gypsum ceiling installation",
      "Office and residential partition walls",
      "Concealed wiring and lighting cut-outs on request",
      "Finished ready for painting",
    ],
    included: [
      {
        title: "False Ceiling Installation",
        desc: "Plasterboard and gypsum ceilings, including cove lighting cut-outs.",
      },
      {
        title: "Partition Walls",
        desc: "Office and residential partitions built to your layout plan.",
      },
      {
        title: "Concealed Wiring",
        desc: "Electrical and lighting points routed and hidden within the framework.",
      },
      {
        title: "Paint-Ready Finish",
        desc: "Skimmed and sanded so it's ready to paint straight after installation.",
      },
    ],
    beforeAfter: [
      {
        before:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&auto=format",
        after:
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop&auto=format",
        label: "Office Partition Install",
      },
      {
        before:
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop&auto=format",
        after:
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&auto=format",
        label: "HDB False Ceiling Upgrade",
      },
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=800&fit=crop&auto=format",
        alt: "False ceiling installation",
        tall: true,
      },
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&auto=format",
        alt: "Partition wall framing",
        tall: false,
      },
      {
        url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop&auto=format",
        alt: "Ceiling cove lighting",
        tall: false,
      },
    ],
    faqs: [
      {
        q: "Can you install cove or recessed lighting in the ceiling?",
        a: "Yes — we plan lighting cut-outs into the ceiling framework during installation.",
      },
      {
        q: "How long does a partition wall take to install?",
        a: "A standard office partition takes 2–4 days depending on length and finishing requirements.",
      },
      {
        q: "Is the ceiling suitable for HDB flats?",
        a: "Yes, plasterboard ceilings are common in HDB flats and comply with standard renovation guidelines.",
      },
      {
        q: "Do you paint the ceiling and partition afterwards?",
        a: "We finish surfaces paint-ready; painting itself can be added as part of the same project.",
      },
    ],
    testimonials: [
      {
        name: "Priya Sharma",
        location: "Jurong West, Singapore",
        initials: "PS",
        text: "We needed a partition wall put up in our office and electrical points added. Communication was clear throughout and the job was finished on schedule.",
      },
      {
        name: "Terence Goh",
        location: "Bishan, Singapore",
        initials: "TG",
        text: "False ceiling with cove lighting for our living room — neat finish and no cracks months later.",
      },
    ],
  },

  reinforcement: {
    slug: "reinforcement",
    name: "Reinforcement",
    shortDesc: "Structural reinforcement for walls, beams, and openings.",
    category: "Building & Structural Works",
    icon: Ruler,
    heroBadge: "Building & Structural Works",
    heroHeadingLines: ["Structural", "Reinforcement"],
    heroParagraph:
      "Structural reinforcement work for walls, beams, and openings — planned and executed to support renovations that change a unit's structural layout.",
    heroImage:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&h=1000&q=80",
    heroBadgeLabel: "Assessment",
    heroBadgeValue: "Site-Checked",
    heroTag: "Load-Bearing Certified",
    statLine: "150+ reinforcement projects completed",
    overviewHeading: "Reinforcement done to structural standard",
    overviewParagraphs: [
      "Any structural alteration — a widened opening, a new beam, a load-bearing change — needs to be assessed and reinforced properly, or it puts the whole unit at risk.",
      "We coordinate reinforcement work alongside hacking and rebuilding, so structural integrity is never an afterthought in your renovation.",
    ],
    overviewImage:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=700&h=900&q=80",
    overviewBadgeValue: "12+",
    overviewBadgeLabel: "Years in SG",
    highlights: [
      "Reinforcement for structural alterations",
      "Coordinated with hacking and rebuilding works",
      "Suitable for load-bearing and non-load-bearing changes",
      "Site-assessed before quoting",
    ],
    included: [
      {
        title: "Structural Assessment",
        desc: "On-site evaluation of load-bearing elements before any work begins.",
      },
      {
        title: "Beam & Column Reinforcement",
        desc: "Steel or concrete reinforcement for openings and structural changes.",
      },
      {
        title: "Coordinated Sequencing",
        desc: "Reinforcement planned alongside hacking and rebuilding for safety.",
      },
      {
        title: "Compliance-Minded Work",
        desc: "Works carried out with recognised structural practices in mind.",
      },
    ],
    beforeAfter: [
      {
        before:
          "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop&auto=format",
        after:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&auto=format",
        label: "Reinforced Opening for Open-Concept Kitchen",
      },
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=800&fit=crop&auto=format",
        alt: "Structural reinforcement works",
        tall: true,
      },
      {
        url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&auto=format",
        alt: "Beam reinforcement",
        tall: false,
      },
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&auto=format",
        alt: "Opening reinforcement before renovation",
        tall: false,
      },
    ],
    faqs: [
      {
        q: "How do I know if a wall is load-bearing?",
        a: "Our team assesses this during the site visit before any quote is given — we won't recommend removing or altering a wall without checking first.",
      },
      {
        q: "Do structural changes need approval?",
        a: "Depending on the scope and property type, some structural changes require approval from the relevant authority — we'll advise you on this during assessment.",
      },
      {
        q: "How long does reinforcement work take?",
        a: "This varies by scope — a single beam reinforcement may take a few days, larger structural changes can take 1–2 weeks.",
      },
      {
        q: "Can this be combined with hacking works?",
        a: "Yes, reinforcement is often sequenced together with hacking and rebuilding as part of the same project.",
      },
    ],
    testimonials: [
      {
        name: "Alvin Koh",
        location: "Bukit Timah, Singapore",
        initials: "AK",
        text: "Needed a load-bearing wall assessed before knocking it down for an open-concept kitchen. They checked it properly and reinforced the opening — no shortcuts.",
      },
      {
        name: "Serena Lee",
        location: "Katong, Singapore",
        initials: "SL",
        text: "Our contractor flagged a beam that needed reinforcing mid-renovation. GMS LEE stepped in quickly, assessed it, and had it sorted within the week.",
      },
    ],
  },

  "building-maintenance": {
    slug: "building-maintenance",
    name: "Building Maintenance",
    shortDesc: "Ongoing upkeep, repairs, and inspections for properties.",
    category: "Building & Structural Works",
    icon: Building2,
    heroBadge: "Building & Structural Works",
    heroHeadingLines: ["Building", "Maintenance"],
    heroParagraph:
      "Ongoing building maintenance for residential and commercial properties — general upkeep, repairs, and inspections to keep a property in good condition.",
    heroImage:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&h=1000&q=80",
    heroBadgeLabel: "Response",
    heroBadgeValue: "< 24hrs",
    heroTag: "MCST Friendly",
    statLine: "60+ properties under maintenance",
    overviewHeading: "Reliable, ongoing property upkeep",
    overviewParagraphs: [
      "A property in good condition doesn't happen by accident — it needs scheduled attention across trades, not a scramble every time something breaks.",
      "We act as a single point of contact for MCSTs and property managers, coordinating repairs and inspections across a property so nothing falls through the cracks.",
    ],
    overviewImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&h=900&q=80",
    overviewBadgeValue: "12+",
    overviewBadgeLabel: "Years in SG",
    highlights: [
      "Scheduled or on-call maintenance visits",
      "General repairs across trades",
      "Suitable for MCST and property managers",
      "Single point of contact for recurring work",
    ],
    included: [
      {
        title: "Scheduled Visits",
        desc: "Recurring maintenance rounds set up to a schedule that suits your property.",
      },
      {
        title: "On-Call Repairs",
        desc: "Ad-hoc callouts for issues that come up between scheduled visits.",
      },
      {
        title: "Cross-Trade Coordination",
        desc: "One contact for painting, electrical, plumbing, and general repairs.",
      },
      {
        title: "Condition Reporting",
        desc: "Inspection notes so you always know the state of the property.",
      },
    ],
    beforeAfter: [
      {
        before:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&auto=format",
        after:
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&auto=format",
        label: "Common Area Refresh",
      },
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=800&fit=crop&auto=format",
        alt: "Building maintenance inspection",
        tall: true,
      },
      {
        url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&auto=format",
        alt: "General property repairs",
        tall: false,
      },
      {
        url: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop&auto=format",
        alt: "Scheduled maintenance visit",
        tall: false,
      },
    ],
    faqs: [
      {
        q: "Do you offer maintenance contracts for MCSTs?",
        a: "Yes, we set up scheduled maintenance plans for MCSTs and property managers covering general repairs and inspections.",
      },
      {
        q: "Can you handle multiple trades under one contract?",
        a: "Yes — painting, electrical, plumbing, and general repairs can all be coordinated through a single point of contact.",
      },
      {
        q: "How quickly can you respond to an issue?",
        a: "Same-day or next-day site visits are available for on-call maintenance requests.",
      },
      {
        q: "Do you provide condition reports after each visit?",
        a: "Yes, we provide inspection notes so the state of the property is documented over time.",
      },
    ],
    testimonials: [
      {
        name: "Michelle Wong",
        location: "River Valley, Singapore",
        initials: "MW",
        text: "We put our condo's common areas on a maintenance plan with them — one call covers electrical, painting touch-ups, and general repairs.",
      },
      {
        name: "Joseph Tan",
        location: "Marine Parade, Singapore",
        initials: "JT",
        text: "As the MC chair, having one contractor handle everything from leaks to lighting has made maintenance far less of a headache.",
      },
    ],
  },

  painting: {
    slug: "painting",
    name: "Painting",
    shortDesc: "Interior and exterior painting with surface prep included.",
    category: "Interior & Electrical",
    icon: PaintRoller,
    heroBadge: "Interior & Electrical",
    heroHeadingLines: ["Professional", "Painting"],
    heroParagraph:
      "Interior and exterior painting for homes, offices, and commercial units — surface preparation, patching, and a clean, even finish.",
    heroImage:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&h=1000&q=80",
    heroBadgeLabel: "Workmanship",
    heroBadgeValue: "12-Mo Warranty",
    heroTag: "Free Site Quote",
    statLine: "500+ painting projects completed",
    overviewHeading: "Why professional painting matters",
    overviewParagraphs: [
      "Professional painting goes beyond applying colour to walls. It involves surface preparation, priming, choosing the right paint grade, and applying it with precision — a finish that lasts years, not months.",
      "We work across HDB flats, condominiums, landed properties, and commercial units — using only certified, low-VOC paints applied by teams with years of hands-on experience.",
    ],
    overviewImage:
      "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?auto=format&fit=crop&w=700&h=900&q=80",
    overviewBadgeValue: "12+",
    overviewBadgeLabel: "Years in SG",
    highlights: [
      "Interior and exterior painting",
      "Surface prep, patching, and priming included",
      "Colour consultation on request",
      "Furniture and flooring protected during work",
    ],
    included: [
      {
        title: "Interior Painting",
        desc: "Living rooms, bedrooms, corridors, and feature walls with clean edges.",
      },
      {
        title: "Exterior Painting",
        desc: "Weatherproof coatings for facades and external surfaces.",
      },
      {
        title: "Surface Repairs",
        desc: "Crack filling and skim coat plastering before any paint goes on.",
      },
      {
        title: "Colour Consultation",
        desc: "Advice on palettes and finishes to suit your space and lighting.",
      },
    ],
    beforeAfter: [
      {
        before:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&auto=format",
        after:
          "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&auto=format",
        label: "HDB Interior Repaint",
      },
      {
        before:
          "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&h=400&fit=crop&auto=format",
        after:
          "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&h=400&fit=crop&auto=format",
        label: "Office Feature Wall",
      },
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=600&h=800&fit=crop&auto=format",
        alt: "Interior painting project",
        tall: true,
      },
      {
        url: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=600&h=400&fit=crop&auto=format",
        alt: "Living room repainting",
        tall: false,
      },
      {
        url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=800&fit=crop&auto=format",
        alt: "Exterior facade painting",
        tall: true,
      },
      {
        url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop&auto=format",
        alt: "Condominium corridor painting",
        tall: false,
      },
    ],
    faqs: [
      {
        q: "How much does painting cost in Singapore?",
        a: "Costs typically range from S$0.50–S$2.50 per sq ft depending on coats, surface condition, and paint grade. A 4-room HDB repaint usually falls between S$800–S$1,800.",
      },
      {
        q: "How long does the painting work take?",
        a: "A 4-room HDB flat typically takes 2–3 days; landed properties may take 4–7 days.",
      },
      {
        q: "Do you provide the paint and materials?",
        a: "Yes — all materials, masking tape, and floor protection are supplied by us.",
      },
      {
        q: "Do you provide a warranty on the paintwork?",
        a: "Yes, we offer a 12-month workmanship warranty on all painting projects.",
      },
    ],
    testimonials: [
      {
        name: "Rachel Lim",
        location: "Tampines, Singapore",
        initials: "RL",
        text: "GMS LEE painted my entire 5-room HDB in two days. The crew was professional, punctual, and left the place spotless.",
      },
      {
        name: "Marcus Tan",
        location: "Orchard, Singapore",
        initials: "MT",
        text: "We've used GMS LEE for three commercial units now. Their pricing is fair and they complete on schedule.",
      },
    ],
  },

  electrical: {
    slug: "electrical",
    name: "Electrical",
    shortDesc: "Wiring, fixture installation, and repairs to code.",
    category: "Interior & Electrical",
    icon: Zap,
    heroBadge: "Interior & Electrical",
    heroHeadingLines: ["Electrical", "Services"],
    heroParagraph:
      "Electrical wiring, fixture installation, and repairs for homes and businesses, carried out to Singapore's electrical safety standards.",
    heroImage:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&h=1000&q=80",
    heroBadgeLabel: "Standard",
    heroBadgeValue: "Code Compliant",
    heroTag: "Fault Diagnosis Included",
    statLine: "600+ electrical jobs completed",
    overviewHeading: "Wiring and repairs done to code",
    overviewParagraphs: [
      "Electrical work isn't somewhere to cut corners — faulty wiring is a fire and safety risk. Our electricians carry out every job to Singapore's electrical safety standards, from a single power point to a full rewire.",
      "We handle homes, offices, and commercial units, with fault-finding and safety checks included so problems get fixed at the source, not just patched over.",
    ],
    overviewImage:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=700&h=900&q=80",
    overviewBadgeValue: "12+",
    overviewBadgeLabel: "Years in SG",
    highlights: [
      "Wiring, rewiring, and fixture installation",
      "Lighting, switches, and power point repairs",
      "Fault-finding and safety checks",
      "Work carried out to code",
    ],
    included: [
      {
        title: "Wiring & Rewiring",
        desc: "Full or partial rewiring for homes and offices, done to code.",
      },
      {
        title: "Fixture Installation",
        desc: "Lighting, fans, switches, and power points installed or replaced.",
      },
      {
        title: "Fault Diagnosis",
        desc: "Tracing intermittent faults and tripping circuits to their source.",
      },
      {
        title: "Safety Checks",
        desc: "Inspection of existing wiring and DB boxes for compliance.",
      },
    ],
    beforeAfter: [
      {
        before:
          "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop&auto=format",
        after:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&auto=format",
        label: "DB Box & Wiring Upgrade",
      },
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=800&fit=crop&auto=format",
        alt: "Electrical wiring works",
        tall: true,
      },
      {
        url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&auto=format",
        alt: "Lighting installation",
        tall: false,
      },
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&auto=format",
        alt: "Power point installation",
        tall: false,
      },
    ],
    faqs: [
      {
        q: "Can you fix a tripping circuit breaker?",
        a: "Yes — our electricians diagnose the fault first, then repair the source of the trip rather than just resetting the breaker.",
      },
      {
        q: "Do you install lighting and ceiling fans?",
        a: "Yes, we install and replace lighting fixtures, fans, switches, and power points.",
      },
      {
        q: "Is your electrical work compliant with regulations?",
        a: "All work is carried out to Singapore's electrical safety standards.",
      },
      {
        q: "Can you rewire an older HDB flat?",
        a: "Yes, full or partial rewiring is one of our core services for older units.",
      },
    ],
    testimonials: [
      {
        name: "Priya Sharma",
        location: "Jurong West, Singapore",
        initials: "PS",
        text: "We needed a partition wall put up in our office and electrical points added. Communication was clear throughout and the job was finished on schedule.",
      },
      {
        name: "Hafiz Rahman",
        location: "Sengkang, Singapore",
        initials: "HR",
        text: "Kept tripping our breaker every night — they found a faulty circuit in an hour and fixed it properly.",
      },
    ],
  },

  "garden-maintenance": {
    slug: "garden-maintenance",
    name: "Garden Maintenance",
    shortDesc: "Trimming, planting, and general outdoor upkeep.",
    category: "Outdoor & Maintenance",
    icon: Sprout,
    heroBadge: "Outdoor & Maintenance",
    heroHeadingLines: ["Garden", "Maintenance"],
    heroParagraph:
      "Garden and landscape upkeep for landed homes and commercial grounds — trimming, planting, and general maintenance to keep outdoor spaces tidy.",
    heroImage:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&h=1000&q=80",
    heroBadgeLabel: "Waste Removal",
    heroBadgeValue: "Included",
    heroTag: "Regular Plans Available",
    statLine: "200+ gardens maintained",
    overviewHeading: "Outdoor spaces kept tidy year-round",
    overviewParagraphs: [
      "A garden needs regular attention to stay tidy in Singapore's climate — left unattended, growth gets ahead quickly. We offer both one-off tidy-ups and recurring maintenance visits.",
      "Suitable for landed homes and commercial grounds, every visit ends with green waste and debris cleared, not left in a pile by the gate.",
    ],
    overviewImage:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=700&h=900&q=80",
    overviewBadgeValue: "12+",
    overviewBadgeLabel: "Years in SG",
    highlights: [
      "Regular or one-off garden maintenance",
      "Trimming, weeding, and planting",
      "Suitable for landed homes and commercial grounds",
      "Debris and green waste cleared after each visit",
    ],
    included: [
      {
        title: "Trimming & Pruning",
        desc: "Hedges, shrubs, and trees kept neat and healthy.",
      },
      {
        title: "Weeding",
        desc: "Regular clearing of weeds from beds, lawns, and pathways.",
      },
      {
        title: "Planting",
        desc: "New plants, shrubs, and seasonal flowers added on request.",
      },
      {
        title: "Waste Clearance",
        desc: "Green waste and debris cleared away after every visit.",
      },
    ],
    beforeAfter: [
      {
        before:
          "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop&auto=format",
        after:
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=400&fit=crop&auto=format",
        label: "Landed Home Garden Makeover",
      },
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=800&fit=crop&auto=format",
        alt: "Garden maintenance in progress",
        tall: true,
      },
      {
        url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=400&fit=crop&auto=format",
        alt: "Trimmed hedges and lawn",
        tall: false,
      },
      {
        url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&auto=format",
        alt: "Landscaped garden",
        tall: false,
      },
    ],
    faqs: [
      {
        q: "Do you offer recurring garden maintenance plans?",
        a: "Yes — we set up scheduled visits (weekly, fortnightly, or monthly) as well as one-off tidy-ups.",
      },
      {
        q: "Do you clear the green waste after each visit?",
        a: "Yes, all trimmings and debris are cleared and removed at the end of every visit.",
      },
      {
        q: "Can you plant new shrubs or flowers?",
        a: "Yes, planting is available on request as part of a maintenance visit or as a standalone job.",
      },
      {
        q: "Do you service commercial grounds, not just landed homes?",
        a: "Yes, we maintain gardens and grounds for both landed properties and commercial premises.",
      },
    ],
    testimonials: [
      {
        name: "Grace Tan",
        location: "Holland Village, Singapore",
        initials: "GT",
        text: "Our garden was overgrown after months of neglect — they tidied it up in a day and now come monthly to keep it that way.",
      },
      {
        name: "Benjamin Ho",
        location: "Sembawang, Singapore",
        initials: "BH",
        text: "Reliable monthly visits, always clear the green waste properly, and the lawn has never looked better.",
      },
    ],
  },

  "aircon-service": {
    slug: "aircon-service",
    name: "Aircon Service",
    shortDesc: "Servicing, chemical wash, and repairs for split units.",
    category: "Outdoor & Maintenance",
    icon: Fan,
    heroBadge: "Outdoor & Maintenance",
    heroHeadingLines: ["Aircon", "Servicing"],
    heroParagraph:
      "Air-conditioning servicing, chemical wash, and repairs for split-unit systems in homes and offices, keeping units running efficiently.",
    heroImage:
      "https://images.unsplash.com/photo-1631545806609-42be0263298c?auto=format&fit=crop&w=800&h=1000&q=80",
    heroBadgeLabel: "Plans",
    heroBadgeValue: "From Monthly",
    heroTag: "Gas Top-Up Available",
    statLine: "700+ aircon units serviced",
    overviewHeading: "Keep your aircon running efficiently",
    overviewParagraphs: [
      "A poorly maintained aircon unit uses more power and cools less — regular servicing keeps efficiency up and prevents bigger repairs down the line.",
      "We handle general servicing, chemical wash, gas top-ups, and full installation or re-installation for split-unit systems in homes and offices.",
    ],
    overviewImage:
      "https://images.unsplash.com/photo-1631545806609-42be0263298c?auto=format&fit=crop&w=700&h=900&q=80",
    overviewBadgeValue: "12+",
    overviewBadgeLabel: "Years in SG",
    highlights: [
      "General servicing and chemical wash",
      "Gas top-up and fault diagnosis",
      "Installation and re-installation available",
      "Scheduled maintenance plans available",
    ],
    included: [
      {
        title: "General Servicing",
        desc: "Filter cleaning, coil check, and drainage clearing for regular upkeep.",
      },
      {
        title: "Chemical Wash",
        desc: "Deep cleaning of coils and components to restore cooling efficiency.",
      },
      {
        title: "Gas Top-Up",
        desc: "Refrigerant top-up for units that have lost cooling performance.",
      },
      {
        title: "Installation",
        desc: "New installation or re-installation of split-unit systems.",
      },
    ],
    beforeAfter: [
      {
        before:
          "https://images.unsplash.com/photo-1631545806609-42be0263298c?w=600&h=400&fit=crop&auto=format",
        after:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&auto=format",
        label: "Chemical Wash & Servicing",
      },
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1631545806609-42be0263298c?w=600&h=800&fit=crop&auto=format",
        alt: "Aircon servicing in progress",
        tall: true,
      },
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop&auto=format",
        alt: "Aircon unit maintenance",
        tall: false,
      },
      {
        url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&auto=format",
        alt: "Chemical wash aircon service",
        tall: false,
      },
    ],
    faqs: [
      {
        q: "How often should I service my aircon?",
        a: "General servicing every 3 months and a chemical wash every 6–12 months is typical for most homes.",
      },
      {
        q: "My aircon isn't cooling — what's wrong?",
        a: "This is often low refrigerant gas or a dirty coil — our technicians diagnose the cause during the visit before topping up or cleaning.",
      },
      {
        q: "Do you offer maintenance contracts?",
        a: "Yes, we offer scheduled maintenance plans so servicing happens automatically without you needing to call each time.",
      },
      {
        q: "Can you install a new split-unit system?",
        a: "Yes, we handle new installations as well as re-installations after moving house.",
      },
    ],
    testimonials: [
      {
        name: "Ahmad Rizal",
        location: "Woodlands, Singapore",
        initials: "AR",
        text: "Booked them for an aircon servicing and general building maintenance. Efficient, careful with our fittings, and fairly priced.",
      },
      {
        name: "Cheryl Ng",
        location: "Yishun, Singapore",
        initials: "CN",
        text: "Our unit stopped cooling properly — turned out to be a gas leak. They diagnosed it fast and topped it up the same visit.",
      },
    ],
  },
};

export const SERVICES_LIST = Object.values(SERVICES).map((s) => ({
  slug: s.slug,
  name: s.name,
  shortDesc: s.shortDesc,
  icon: s.icon,
}));
