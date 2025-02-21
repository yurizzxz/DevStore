import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Oxanium } from "next/font/google";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const oxanium = Oxanium({
  weight: ["500", "600"],
  subsets: ["latin"],
  variable: "--font-oxanium",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>

      <body className="bg-black text-[#f5eeff]">
        <main>
          <Navbar />
          <div className="max-w-[1240] mx-auto px-5 py-8 md:py-0">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
