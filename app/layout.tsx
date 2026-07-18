import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "BAMAROUF STUDIO — A House of Specialists";
const description = "A shared architectural address for three independent practices in digital experiences, graphic design, and systems engineering.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);

  return {
    metadataBase,
    title,
    description,
    applicationName: "BAMAROUF STUDIO",
    keywords: ["BAMAROUF STUDIO", "Tarik Bamarouf", "noor", "Khaled Bamarouf"],
    alternates: { canonical: "/" },
    icons: {
      icon: [{ url: "/favicon.png", type: "image/png" }],
      apple: [{ url: "/icon.png", type: "image/png" }],
    },
    openGraph: {
      type: "website",
      title,
      description,
      siteName: "BAMAROUF STUDIO",
      locale: "en_US",
      alternateLocale: ["ar_SA"],
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "BAMAROUF STUDIO, A House of Specialists" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
    robots: { index: true, follow: true },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
