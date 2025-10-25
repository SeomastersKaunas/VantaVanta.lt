import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sanity Studio CMS",
  description: "Manage your content with Sanity Studio",
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
