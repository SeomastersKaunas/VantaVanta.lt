import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Wholesale Sauna Whisks | Handmade B2B Supply | VantaVanta",
  description: "Premium birch & oak sauna whisks for SPAs. Authentic handmade quality from Lithuania. Wholesale orders only (min 50 pcs).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-white text-black ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
