import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const siteUrl = "https://www.vantavanta.lt";

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="lt">
      <body className={`bg-white text-black ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
