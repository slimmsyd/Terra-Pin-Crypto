import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Web3ModalProvider from "./contexts/Web3Modal";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Terrapin Crypto Solutions",
  description: "Ensuring you are a global leader in Bitcoin, Blockchain, and Web3",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Web3ModalProvider>{children}</Web3ModalProvider>
      </body>
    </html>
  );
}
