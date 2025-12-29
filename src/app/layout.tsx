import type React from "react";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://thexdevs.com"),
  title: "THE xDEVS - Custom Software & Digital Solutions",
  description:
    "We engineer intelligent, efficient, and future-ready digital solutions. Custom software development, web applications, APIs, and digital presence management.",
  generator: "THE xDEVS",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "//xdevs.jpeg", sizes: "any", type: "image/x-icon" },
      { url: "/xdevs.jpeg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "THE xDEVS - Custom Software & Digital Solutions",
    description:
      "We engineer intelligent, efficient, and future-ready digital solutions. Custom software development, web applications, APIs, and digital presence management.",
    url: "https://thexdevs.com",
    siteName: "THE xDEVS",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "THE xDEVS - Engineering Digital Excellence",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "THE xDEVS - Custom Software & Digital Solutions",
    description:
      "We engineer intelligent, efficient, and future-ready digital solutions. Custom software development, web applications, APIs, and digital presence management.",
    images: ["/image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#030014]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
