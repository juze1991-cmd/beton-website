import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://beloncollective.com"),
  title: "BE:LON Collective | Ride together",
  description: "Everyone belongs. Nobody gets dropped.",
  openGraph: {
    title: "BE:LON Collective",
    description: "Ride together. Everyone belongs. Nobody gets dropped.",
    url: "https://beloncollective.com",
    siteName: "BE:LON Collective",
    images: [{ url: "/hero.jpg", width: 1200, height: 630 }],
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
