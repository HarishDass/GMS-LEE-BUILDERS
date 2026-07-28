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

  applicationName: "GMS LEE PTE LTD",

  title: {
    default:
      "Handyman, Renovation & Building Maintenance Services in Singapore | GMS LEE PTE LTD",
    template: "%s | GMS LEE PTE LTD",
  },

  description:
    "GMS LEE PTE LTD provides professional handyman, renovation, painting, plumbing, electrical and building maintenance services across Singapore. Fast response, quality workmanship and reliable service for residential and commercial properties.",

  keywords: [
    "Handyman Singapore",
    "Building Maintenance Singapore",
    "Renovation Contractor Singapore",
    "General Contractor Singapore",
    "Home Repair Singapore",
    "Commercial Renovation Singapore",
    "Residential Renovation Singapore",
    "Office Renovation Singapore",
    "Painting Services Singapore",
    "Electrical Services Singapore",
    "Plumbing Services Singapore",
    "Property Maintenance Singapore",
    "Building Repair Singapore",
    "GMS LEE PTE LTD",
  ],

  authors: [
    {
      name: "GMS LEE PTE LTD",
      url: "https://www.gmsleepteltd.com",
    },
  ],

  creator: "GMS LEE PTE LTD",

  publisher: "GMS LEE PTE LTD",

  category: "Business",

  alternates: {
    canonical: "https://www.gmsleepteltd.com",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },

  openGraph: {
    title: "Handyman, Renovation & Building Maintenance Services in Singapore",

    description:
      "Reliable handyman, renovation, painting, plumbing, electrical and building maintenance services for homes and businesses across Singapore.",

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

    title: "Handyman, Renovation & Building Maintenance Services in Singapore",

    description:
      "Professional handyman, renovation, plumbing, electrical, painting and building maintenance services across Singapore.",

    images: ["/og-image.jpg"],
  },

  // Add this after verifying your website in Google Search Console
  // verification: {
  //   google: "YOUR_GOOGLE_SITE_VERIFICATION_CODE",
  // },

  other: {
    "theme-color": "#14181B",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "GMS LEE PTE LTD",
    url: "https://www.gmsleepteltd.com",
    logo: "https://www.gmsleepteltd.com/logo.png",
    image: "https://www.gmsleepteltd.com/og-image.jpg",
    telephone: "+65 XXXXXXXX", // Replace with your phone number
    email: "info@gmsleepteltd.com", // Replace with your email
    address: {
      "@type": "PostalAddress",
      addressCountry: "SG",
    },
    areaServed: "Singapore",
    priceRange: "$$",
    openingHours: "Mo-Sa 08:00-18:00",
    description:
      "Professional handyman, renovation, painting, plumbing, electrical and building maintenance services across Singapore.",
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} ${barlowCondensed.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
