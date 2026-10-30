import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Vivek Interface",
  description:
    "Portfolio of Vivek V, a designer who audits, plans, designs and builds front ends. Side A is rewinding.",
  metadataBase: new URL("https://thevivekinterface.com"),
  openGraph: {
    title: "The Vivek Interface",
    description: "Side A is rewinding. The full site is on its way.",
    url: "https://thevivekinterface.com",
    siteName: "The Vivek Interface",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#E3E7EA",
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,700;12..96,800&family=IBM+Plex+Mono:wght@400;500&family=Manjari:wght@400;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
