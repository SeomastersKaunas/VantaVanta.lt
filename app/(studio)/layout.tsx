import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Sanity Studio CMS | Wholesale Sauna Whisks | Handmade B2B Supply | VantaVanta",
  description: "Manage your content with Sanity Studio | Premium birch & oak sauna whisks for SPAs. Authentic handmade quality from Lithuania. Wholesale orders only (min 50 pcs).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
