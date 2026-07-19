import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} — Full-stack разработчик`,
  description: `Портфолио ${site.name} — full-stack разработчика (React, Next.js, Node.js).`,
  keywords: [
    "full-stack разработчик",
    "React",
    "Next.js",
    "Node.js",
    site.name,
  ],
  authors: [{ name: site.name, url: site.github }],
  openGraph: {
    title: `${site.name} — Full-stack разработчик`,
    description: `Портфолио ${site.name} — full-stack разработчика.`,
    url: site.url,
    siteName: site.name,
    locale: "ru_RU",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.nameEn,
    alternateName: site.name,
    birthDate: `${site.birthYear}`,
    url: site.url,
    email: `mailto:${site.email}`,
    sameAs: [site.github, site.telegram],
    jobTitle: "Full-stack developer",
  };

  return (
    <html lang="ru" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
