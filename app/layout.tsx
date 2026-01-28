import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dreamplanner = localFont({
  variable: "--font-dreamplanner",
  src: "../public/fonts/dreamplanner.woff2",
});

const ember_and_fire = localFont({
  variable: "--font-ember-and-fire",
  src: "../public/fonts/ember-and-fire.woff2",
});

export const metadata: Metadata = {
  title: "Campfire Bangkok",
  description:
    "Game jam for high schoolers in Bangkok! | Join Hack Club's game jam! Build amazing games and compete for epic prizes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${dreamplanner.variable} ${ember_and_fire.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
