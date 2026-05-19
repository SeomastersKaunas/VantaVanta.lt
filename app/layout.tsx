import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const siteUrl = "https://www.vantavanta.lt";
const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_ID;

const aiDiscoveryLinks = [
  { href: "/llms.txt", type: "text/markdown", title: "VantaVanta LLM context" },
  { href: "/llms-full.txt", type: "text/markdown", title: "VantaVanta full LLM context" },
  { href: "/ai.txt", type: "text/plain", title: "VantaVanta AI policy" },
  { href: "/ai.json", type: "application/json", title: "VantaVanta machine-readable AI policy" },
  { href: "/.well-known/agent-card.json", type: "application/json", title: "VantaVanta Agent Card" },
  { href: "/.well-known/tdmrep.json", type: "application/json", title: "VantaVanta TDM policy" },
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "VantaVanta",
  alternateName: ["VANTA VANTA", "vanta vanta"],
  url: `${siteUrl}/`,
  logo: `${siteUrl}/logo.jpg`,
  image: `${siteUrl}/vanta-showcase.jpg`,
  telephone: "+37061912200",
  areaServed: ["LT", "EU"],
  knowsAbout: [
    "pirties vantos",
    "beržo vantos",
    "ąžuolo vantos",
    "kanadinio ąžuolo vantos",
    "sauna whisks",
    "wholesale sauna supplies",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: `${siteUrl}/`,
  name: "VantaVanta",
  inLanguage: "lt-LT",
  publisher: { "@id": `${siteUrl}/#organization` },
};

const productItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${siteUrl}/#products`,
  name: "VantaVanta pirties vantos",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      url: `${siteUrl}/produktai/berzo`,
      name: "Beržo vanta",
    },
    {
      "@type": "ListItem",
      position: 2,
      url: `${siteUrl}/produktai/europinis-azuolas`,
      name: "Europinio ąžuolo vanta",
    },
    {
      "@type": "ListItem",
      position: 3,
      url: `${siteUrl}/produktai/kanadietisko-azuolo`,
      name: "Kanadietiško ąžuolo vanta",
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pirties vantos – beržo, ąžuolo, kanadinio ąžuolo | VantaVanta",
    template: "%s | VantaVanta",
  },
  description:
    "Beržo, ąžuolo ir kanadinio ąžuolo pirties vantos – rankų darbo, natūraliai džiovintos. Vienetiniai pirkimai ir didmena Lietuvoje. Užsisakyk šiandien.",
  keywords: [
    "pirties vantos",
    "beržo vantos",
    "ąžuolo vantos",
    "kanadinio ąžuolo vantos",
    "vantos pirkti",
    "vantos didmena",
    "pirties aksesuarai",
    "VantaVanta",
  ],
  applicationName: "VantaVanta",
  authors: [{ name: "VantaVanta" }],
  creator: "VantaVanta",
  publisher: "VantaVanta",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "lt_LT",
    alternateLocale: ["en_US", "ru_RU", "pl_PL", "de_DE"],
    url: siteUrl,
    siteName: "VantaVanta",
    title: "Pirties vantos – beržo, ąžuolo, kanadinio ąžuolo | VantaVanta",
    description:
      "Beržo, ąžuolo ir kanadinio ąžuolo pirties vantos – rankų darbo, natūraliai džiovintos. Vienetiniai pirkimai ir didmena Lietuvoje. Užsisakyk šiandien.",
    images: [
      {
        url: "/vanta-showcase.jpg",
        width: 1200,
        height: 630,
        alt: "VantaVanta – pirties vantos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pirties vantos – beržo, ąžuolo, kanadinio ąžuolo | VantaVanta",
    description:
      "Beržo, ąžuolo ir kanadinio ąžuolo pirties vantos – rankų darbo, natūraliai džiovintos. Užsisakyk šiandien.",
    images: ["/vanta-showcase.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },
  verification: {
    google: "UL6f8uizKPfhJ4ciiuCNuZ2vumEz2ona1tiYh-FJdhc",
    other: {
      "msvalidate.01": "2AC6E061163FDABCCADD72B1AB561C50",
      "ai-policy": "/ai.json",
      llms: "/llms.txt",
      "llms-full": "/llms-full.txt",
      "agent-card": "/.well-known/agent-card.json",
      "tdm-reservation": "/.well-known/tdmrep.json",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="lt">
      <head>
        {aiDiscoveryLinks.map((link) => (
          <link
            key={link.href}
            rel="alternate"
            href={link.href}
            type={link.type}
            title={link.title}
          />
        ))}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productItemListSchema) }}
        />
      </head>
      <body className={`bg-white text-black ${inter.className}`}>
        {googleAnalyticsId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${googleAnalyticsId}');
              `}
            </Script>
          </>
        ) : null}
        {children}
      </body>
    </html>
  );
}
