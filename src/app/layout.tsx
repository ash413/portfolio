import { ThemeProvider } from "@/context/ThemeContext";
import { Inter } from 'next/font/google'
import './globals.css'
import React from "react";

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-darkBg transition-color duration:300`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}