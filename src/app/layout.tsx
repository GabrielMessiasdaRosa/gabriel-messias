import Cursor from "@/components/cursor";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { Ubuntu_Mono } from "next/font/google";
import * as React from "react";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Gabriel Messias da Rosa",
  description: "Generated by create next app",
};

const ubuntu_mono = Ubuntu_Mono({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt"
      className="font-mono scroll-smooth bg-gray-100 text-gray-50"
    >
      <body className={`block-main-scroll ${ubuntu_mono.className}`}>
        <Providers>
          <Cursor />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
