import type { Metadata } from "next";
import { Inter, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-bengali",
});

export const metadata: Metadata = {
  title: "MetroX | Bangladesh Metro Network",
  description: "Modern transit companion website for the MetroX metro app in Bangladesh.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${notoBengali.variable}`}>
      <body className="min-h-screen bg-metro-light text-metro-dark antialiased">
        {children}
      </body>
    </html>
  );
}
