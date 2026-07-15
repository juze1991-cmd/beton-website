import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://beloncollective.com"),
  title: "BE:LON Collective",
  description: "Ride together. Everyone belongs. Nobody gets dropped.",
  openGraph: {
    title: "BE:LON Collective",
    description: "Ride together. Everyone belongs. Nobody gets dropped.",
    images: ["/hero.jpg"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
