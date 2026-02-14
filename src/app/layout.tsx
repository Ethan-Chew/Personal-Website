import NavigationBar from "@/components/NavigationBar";
import type { Metadata } from "next";
import { ThemeProvider } from 'next-themes'
import { Inter } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import { TldrProvider } from "@/context/TldrContext";

export const metadata: Metadata = {
  title: "Ethan Chew",
  description: `Hey! I'm Ethan Chew, a ${ Math.floor((new Date().getTime() - new Date(2006, 10, 19).getTime()) / (1000 * 60 * 60 * 24 * 365.25)) }-year old student developer, private pilot, and photographer from Singapore.`,
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-background dark:bg-darkbackground duration-150 ${inter.className}`}
      >
        <TldrProvider>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <NavigationBar />
            {children}
            <Analytics />
          </ThemeProvider>
        </TldrProvider>
      </body>
    </html>
  );
}
