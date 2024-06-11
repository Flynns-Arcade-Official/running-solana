import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NFT Run Run",
  description: "NFT Run Run",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="/Bonk.png" />
        <meta property="og:title" content="NFT Run Run" />
        <meta property="og:description" content="NFT Run Run Game" />
        <meta property="og:site_name" content="NFT Run Run" />
      </head>
      <link rel="shortcut icon" href="/Bonk.png" type="image/x-icon" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
