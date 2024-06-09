import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Industrial Web Company",
  description: "Building the web.",
  icons: {
    // icon: "/icons/favicon.ico",
    shortcut: "/icons/favicon-32x32.png",
    apple: "/icons/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/icons/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
      {
        rel: "icon",
        url: "/icons/android-chrome-192x192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        rel: "icon",
        url: "/icons/android-chrome-512x512.png",
        type: "image/png",
        sizes: "512x512",
      },
      {
        rel: "mask-icon",
        url: "/icons/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
