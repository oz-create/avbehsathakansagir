import type { Metadata, Viewport } from "next";
import { Jost, Marcellus } from "next/font/google";
import "./globals.css";

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

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
    <html lang="tr" className={`${marcellus.variable} ${jost.variable}`}>
      <body>{children}</body>
    </html>
  );
}
