import type { Metadata } from "next";
import { DM_Sans, Syne, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Rexona — All Your AI Models in One Playground",
  description:
    "Access GPT-4o, Claude, Gemini, Llama and more in a single unified interface. Generate images, code, PDFs, music and video — powered by Pixa's cutting-edge API.",
  keywords: ["AI playground", "GPT-4o", "Claude", "Gemini", "AI tools", "LLM", "image generation", "Pixa"],
  authors: [{ name: "Pixa" }],
  openGraph: {
    title: "Rexona — All Your AI Models in One Playground",
    description: "One subscription. Every frontier AI model. Unlimited potential.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rexona — All Your AI Models in One Playground",
    description: "One subscription. Every frontier AI model. Unlimited potential.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body
        className={`${dmSans.variable} ${syne.variable} ${dmSerif.variable} font-sans bg-white dark:bg-black text-black dark:text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
