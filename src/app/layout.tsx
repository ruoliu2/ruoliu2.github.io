import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ruo Liu - Software Engineer",
  description:
    "Ruo Liu is a software engineer at Apple, specializing in distributed systems, machine learning, and software engineering.",
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Ruo Liu - Software Engineer",
    description:
      "Software engineer at Apple specializing in distributed systems and machine learning",
    url: "https://ruoliu.dev",
    siteName: "Ruo Liu",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
