import type { Metadata } from "next";
import Script from "next/script";
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

// Extend the Window interface to include dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}

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
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA4_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
