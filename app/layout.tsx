import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, Bellefair } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const bellefair = Bellefair({
  variable: "--font-bellefair",
  subsets: ["latin"],
  weight: "400",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Space Tourism",
  description: "So, you want to travel to space",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bellefair.variable} ${barlowCondensed.variable} ${barlow.variable} h-full antialiased`}
    >
      <body className="relative min-h-full bg-dark font-body text-white">
        <Header />
        {children}
      </body>
    </html>
  );
}
