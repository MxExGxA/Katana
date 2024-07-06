import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KATANA | NEXUS Studio",
  description:
    "Experience the thrill of samurai combat in 'Katana.' Choose your character, master unique abilities, and embark on a quest to find your own unique katana. Join the ultimate online samurai battles today!",
  icons: {
    icon: "/image/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
