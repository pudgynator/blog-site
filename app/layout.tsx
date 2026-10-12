import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Blog Site",
  description: "Extreme Blog Site",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full " suppressHydrationWarning>
        <div className="mx-auto max-w-7xl bg-white min-h-dvh shadow-lg flex flex-col border-x border-gray-200">

          <Header />
          <main className="flex-1 p-4">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
