import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DASARI ABHIRAM | Software Engineer & ServiceNow Developer Portfolio",
  description:
    "Interactive anatomical portfolio of Dasari Abhiram — Software Engineer, Full-Stack Developer, AI, Cloud & ServiceNow CSA/CAD Specialist. Building intelligent software systems.",
  keywords: [
    "Dasari Abhiram",
    "Abhiram Dasari",
    "Software Engineer",
    "Full Stack Developer",
    "ServiceNow CSA",
    "ServiceNow CAD",
    "AWS DevOps",
    "React",
    "Next.js",
    "TypeScript",
    "WebGL Portfolio",
    "Hyderabad Software Engineer",
  ],
  authors: [{ name: "Dasari Abhiram" }],
  creator: "Dasari Abhiram",
  publisher: "Dasari Abhiram",
  metadataBase: new URL("https://dasari-abhiram.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DASARI ABHIRAM | Software Engineer & ServiceNow Developer",
    description:
      "Interactive 3D Anatomical Portfolio of Dasari Abhiram — Full-Stack Web Architecture, ServiceNow Workflows, AWS Cloud & Artificial Intelligence.",
    url: "https://dasari-abhiram.vercel.app",
    siteName: "Dasari Abhiram Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DASARI ABHIRAM | Software Engineer Portfolio",
    description:
      "Interactive 3D Anatomical Portfolio of Dasari Abhiram — Full-Stack, Cloud & ServiceNow Specialist.",
    creator: "@abhiram_dasari",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dasari Abhiram",
    jobTitle: "Software Engineer & ServiceNow Developer",
    url: "https://dasari-abhiram.vercel.app",
    sameAs: [
      "https://github.com/",
      "https://linkedin.com/in/",
    ],
    knowsAbout: [
      "Software Engineering",
      "Full Stack Web Development",
      "ServiceNow Administration & Development",
      "AWS Cloud Infrastructure",
      "React.js & Next.js",
      "TypeScript",
      "Data Structures & Algorithms",
    ],
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "MLR Institute of Technology",
      },
      {
        "@type": "EducationalOrganization",
        name: "Sri Chaitanya Junior Kalasala",
      },
      {
        "@type": "EducationalOrganization",
        name: "Bhashyam High School",
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#e7d5b5] text-[#1a1815] font-sans antialiased selection:bg-[#a87d2a] selection:text-white">
        {children}
      </body>
    </html>
  );
}
