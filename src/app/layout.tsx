import "./globals.css";

import { Bebas_Neue, Space_Grotesk } from "next/font/google";

import Background from "@/components/background";
import type { Metadata } from "next";

const spacegr = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const bebasneue = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--BEBAS" });

export const metadata: Metadata = {
  title: "Registration Form",
  description:
    "Registration form using Next.js, TypeScript, Tailwind CSS, framer-motion, reach-hook-form, zod, and SOLID principles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bebasneue.variable} ${spacegr.className} text-WHITE`}>
        <Background />
        {children}
      </body>
    </html>
  );
}
