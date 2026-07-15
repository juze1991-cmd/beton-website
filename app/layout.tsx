import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://beloncollective.com"),
  title: "BE:LON Collective",
  description: "Cycling feels better together. Everyone belongs. Nobody gets dropped.",
  openGraph: {
    title: "BE:LON Collective",
    description: "Cycling feels better together. Everyone belongs. Nobody gets dropped.",
    url: "https://beloncollective.com",
    siteName: "BE:LON Collective",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
