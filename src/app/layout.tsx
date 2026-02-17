import type {Metadata} from "next";
import "../styles/globals.css";
import {Chakra_Petch, IBM_Plex_Mono} from "next/font/google";
import {siteConfig} from "@/config/site";
import Script from "next/script";

const chakraPetch = Chakra_Petch({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-chakra-petch",
});

const ibmPlexMono = IBM_Plex_Mono({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
    title: siteConfig.title,
    description: siteConfig.description,
    icons: {
        icon: "/icon.png",
        shortcut: "/favicon.ico",
    },
    robots: {
        index: true,
        follow: true,
    },
    metadataBase: new URL(siteConfig.domain),
    alternates: {
        canonical: siteConfig.domain,
    },
    openGraph: {
        title: siteConfig.title,
        description: siteConfig.description,
        url: siteConfig.domain,
        siteName: "Ruo Liu",
        locale: "en_US",
        type: "website",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ruo Liu",
    url: siteConfig.domain,
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${chakraPetch.variable} ${ibmPlexMono.variable}`}>
        <head>
            <Script
                id="json-ld"
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
            />
        </head>
        <body className="font-sans antialiased">{children}</body>
        </html>
    );
}
