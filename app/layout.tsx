import type { Metadata, Viewport } from "next";
// Fonts are bundled from npm (Fontsource) instead of next/font/google, so the
// build never depends on reaching Google Fonts (which failed on Vercel).
import "@fontsource/marcellus/latin.css";
import "@fontsource/marcellus/latin-ext.css";
import "@fontsource-variable/jost/wght.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Behsat Hakan Sağır · Stajyer Avukat",
  description:
    "Stajyer Avukat Behsat Hakan Sağır. İstanbul Üniversitesi Hukuk Fakültesi mezunu; mesleki deneyim, eğitim, sertifikalar ve iletişim bilgileri.",
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "Behsat Hakan Sağır · Stajyer Avukat",
    description: "İstanbul Üniversitesi Hukuk Fakültesi mezunu stajyer avukat.",
    locale: "tr_TR",
    type: "profile",
  },
};

export const viewport: Viewport = {
  themeColor: "#11213d",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
