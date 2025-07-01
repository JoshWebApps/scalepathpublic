import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

import SmoothScroll from "@/components/scroll/SmoothScroll";
import Footer from "@/components/Footer";
import CaptchaWrapper from "@/components/Recaptcha/CaptchaWrapper";
import Script from "next/script";

const neueMontreal = localFont({
  src: [
    {
      path: "../public/fonts/NeueMontreal-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/NeueMontreal-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/NeueMontreal-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/NeueMontreal-Book.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/NeueMontreal-Thin.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/NeueMontreal-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-neue-montreal",
});

export const metadata: Metadata = {
  title: "ScalePath",
  description: "Future-Proof IT Solutions, Built for You.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          data-website-id="685287aef8537944912edd80"
          data-domain="scalepath.it.com"
          src="/js/script.js"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${neueMontreal.variable} bg-primary tracking-tighter text-secondary font-neue-montreal`}
      >
        <CaptchaWrapper>
          <SmoothScroll>
            {children}
            <Footer />
          </SmoothScroll>
        </CaptchaWrapper>
      </body>
    </html>
  );
}
