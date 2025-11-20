import { Inter } from "next/font/google";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import { Metadata } from "next";
import Footer from "@/components/Footer";

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
        <LanguageProvider>
          <Header />
          <main className="">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
