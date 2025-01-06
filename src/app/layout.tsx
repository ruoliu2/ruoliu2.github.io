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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
