import type { Metadata } from "next";
import { Instrument_Serif, Inter, DM_Mono } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "FREEWAY — 拿回你的自由",
  description:
    "不靠意志力，不靠痛苦。通过认知觉醒，让你从「戒烟者」变成「从不需要烟的人」。",
  openGraph: {
    title: "FREEWAY — 拿回你的自由",
    description:
      "不靠意志力，不靠痛苦。通过认知觉醒，让你从「戒烟者」变成「从不需要烟的人」。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${instrumentSerif.variable} ${inter.variable} ${dmMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
