import Cursor from "@/components/molecules/cursor";
import Footer from "@/components/organisms/footer";
import Navbar from "@/components/organisms/navbar";
import type { Metadata } from "next";
import { Ubuntu_Mono } from "next/font/google";
import * as React from "react";
import "./globals.css";
import { Providers } from "./providers";
import WppCtaPopup from "@/components/molecules/wpp-cta-popup";

export const metadata: Metadata = {
  title: "Gabriel Messias da Rosa",
  description:
    "Gabriel é um desenvolvedor com ampla experiência em ReactJS e NextJS, além de ter conhecimentos em NodeJS, Typescript, TailwindCSS, Framer motion, entre outras tecnologias.",
  keywords: [
    "Gabriel Messias da Rosa",
    "Gabriel Messias",
    "Gabriel Rosa",
    "Gabriel",
    "Messias",
    "Rosa",
    "Desenvolvedor",
    "Front-end",
    "Frontend",
    "Front-end Developer",
    "Frontend Developer",
    "React",
    "ReactJS",
    "NextJS",
    "NodeJS",
    "Typescript",
    "TailwindCSS",
    "Framer motion",
    "Tailwind",
    "Tailwind CSS",
    "TailwindCSS",
    "Tailwind UI",
    "TailwindUI",
    "Tailwind UI Developer",
    "TailwindUI Developer",
    "Portfolio",
    "Portfólio",
    "Portfólio Gabriel Messias da Rosa",
    "Portfólio Gabriel Messias",
    "Portfólio Gabriel Rosa",
    "Portfólio Gabriel",
    "Portfólio Messias",
    "Portfólio Rosa",
    "Portfólio Desenvolvedor",
    "Portfólio Front-end",
    "Portfólio Frontend",
    "Portfólio Front-end Developer",
    "Portfólio Frontend Developer",
    "Portfólio React",
    "Portfólio ReactJS",
    "Portfólio NextJS",
    "Portfólio NodeJS",
    "Portfólio Typescript",
    "Portfólio TailwindCSS",
    "Portfólio Framer motion",
    "Portfólio Tailwind",
    "Portfólio Tailwind CSS",
    "Portfólio TailwindUI",
    "Portfólio Tailwind UI Developer",
    "Portfólio TailwindUI Developer",
    "Recrutamento",
    "Recrutamento Gabriel Messias da Rosa",
    "Recrutamento Gabriel Messias",
    "Recrutamento Gabriel Rosa",
    "Recrutamento Gabriel",
    "Desenvolvedor Gabriel Messias da Rosa",
    "Desenvolvedor Gabriel Messias",
    "Desenvolvedor Gabriel Rosa",
    "Criador de sites",
    "Criador de sites Gabriel Messias da Rosa",
    "Criador de sites Gabriel Messias",
    "Criador de sites Gabriel Rosa",
    "Criador de sites Gabriel",
    "Anjo Gabriel",
    "Brasil",
    "Brasil Gabriel Messias da Rosa",
    "Brasil Gabriel Messias",
    "Brasil Gabriel Rosa",
    "Brasil Gabriel",
    "NestJS",
    "NestJS Gabriel Messias da Rosa",
    "NestJS Gabriel Messias",
  ],
  openGraph: {
    title: "Gabriel Messias da Rosa",
    description: `Gabriel é um desenvolvedor com ampla experiência em ReactJS e NextJS, além de ter conhecimentos em NodeJS, Typescript, TailwindCSS, Framer motion, entre outras tecnologias.`,
    type: "website",
    locale: "pt_BR",
    url: "https://gabrielmessiasdarosa.dev",
    siteName: "Gabriel Messias da Rosa",
    images: [
      {
        url: "https://gabrielmessiasdarosa.dev/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gabriel Messias da Rosa",
      },
    ],
  },
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
          <WppCtaPopup />
          <Cursor />
          <div className="flex flex-1 justify-center items-center bg-yellow-100">
            <span>🚧</span>
            <text className="text-gray-700 font-bold px-2">
              <span>👨‍💻</span>
              Esta página está em construção e pode receber atualizações a
              qualquer momento.
            </text>
            <span>🚧</span>
          </div>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
