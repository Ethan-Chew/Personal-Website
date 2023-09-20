import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "./theme-provider";
import Head from 'next/head';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ethan Chew',
  description: `Hi! I&apos;m Ethan Chew, a ${ Math.floor((new Date().getTime() - new Date(2006, 10, 19).getTime()) / (1000 * 60 * 60 * 24 * 365.25)) }-year-old student from Singapore, currently studying Information Technology at Ngee Ann Polytechnic.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          { children }
        </ThemeProvider>
      </body>
    </html>
  )
}
