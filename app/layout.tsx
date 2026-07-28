import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gmsleepteltd.com"),

  title: {
    default:
      "GMS LEE PTE LTD | Handyman & Building Maintenance Services Singapore",
    template: "%s | GMS LEE PTE LTD",
  },

  description:
    "Professional handyman, building maintenance, painting, electrical, plumbing and renovation services across Singapore. Residential and commercial solutions with fast response and quality workmanship.",

  keywords: [
    "Handyman Singapore",
    "Building Maintenance Singapore",
    "Building Contractor Singapore",
    "Home Repair Singapore",
    "Office Maintenance",
    "Painting Services Singapore",
    "Electrical Services Singapore",
    "Plumbing Services Singapore",
    "Renovation Contractor Singapore",
    "General Contractor Singapore",
    "Commercial Maintenance Singapore",
    "Residential Maintenance Singapore",
    "Property Maintenance Singapore",
    "GMS LEE PTE LTD",
  ],

  authors: [
    {
      name: "GMS LEE PTE LTD",
    },
  ],

  creator: "GMS LEE PTE LTD",

  publisher: "GMS LEE PTE LTD",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://www.gmsleepteltd.com",
  },

  openGraph: {
    title: "Handyman & Building Maintenance Services Singapore",
    description:
      "Reliable handyman, renovation, painting, electrical and plumbing services for homes and businesses across Singapore.",

    url: "https://www.gmsleepteltd.com",

    siteName: "GMS LEE PTE LTD",

    locale: "en_SG",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GMS LEE PTE LTD",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "GMS LEE PTE LTD",
    description:
      "Professional handyman & building maintenance services in Singapore.",

    images: ["/og-image.jpg"],
  },

  category: "Business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} ${barlowCondensed.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
