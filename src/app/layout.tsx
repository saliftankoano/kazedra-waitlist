import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kazedra",
  description: "Weather based outfit recommendations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <Head>
        {/* Basic SEO Tags */}
        <link rel="icon" type="image/png" href="/kazedra.png" />

        <title>Join Our Weather-Based Outfit Recommendation App Waitlist</title>
        <meta
          name="description"
          content="Be one of the first to experience personalized weather-based outfit suggestions. Join our waitlist today!"
        />
        <meta
          name="keywords"
          content="weather-based outfit app, outfit recommendations, fashion app, personalized style, clothing suggestions"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kazedra.com/" />
        <meta
          property="og:title"
          content="Join Our Weather-Based Outfit Recommendation App Waitlist"
        />
        <meta
          property="og:description"
          content="Be among the first to try our app that provides personalized outfit suggestions based on the weather. Sign up now!"
        />
        <meta
          property="og:image"
          content="https://yourwebsite.com/images/waitlist-banner.jpg"
        />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://yourwebsite.com/waitlist"
        />
        <meta
          property="twitter:title"
          content="Join Our Weather-Based Outfit Recommendation App Waitlist"
        />
        <meta
          property="twitter:description"
          content="Sign up for our waitlist to get personalized outfit suggestions that match the weather. Don't miss out!"
        />
        <meta
          property="twitter:image"
          content="https://yourwebsite.com/images/waitlist-banner.jpg"
        />

        {/* Canonical Tag */}
        <link rel="canonical" href="https://www.kazedra.com/" />
      </Head>
      <body className={clsx(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
