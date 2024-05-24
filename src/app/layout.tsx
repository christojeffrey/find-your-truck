import type { Metadata } from "next";
import "./globals.css";
import { Chivo } from "next/font/google";
const chivo = Chivo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Find Your Truck",
  description: "Find the truck that suits you!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${chivo.className} max-w-lg mx-auto`}>{children}</body>
    </html>
  );
}
