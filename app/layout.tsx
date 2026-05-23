import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Facebook Clone",
  description: "Created by abhijan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      
        <script
          dangerouslySetInnerHTML={{
            __html: `
            try {
              const t = localStorage.getItem('theme');
              if (t) document.documentElement.setAttribute('data-theme', t);
            } catch(e) {}
          `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen`}
        style={{
          background: "var(--color-bg-secondary)",
          color: "var(--color-text-primary)",
        }}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
