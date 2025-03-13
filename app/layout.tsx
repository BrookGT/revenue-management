"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.setAttribute("data-theme", storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <html lang="en" data-theme={theme}>
      <body className={`${inter.variable} ${geistMono.variable} antialiased bg-base-100 text-neutral`}>

        {/* Navbar */}
        <header className="w-full sticky top-2 left-0 right-0 z-50 max-w-6xl mx-auto flex justify-between items-center py-3 px-6 bg-white shadow-md rounded-xl mt-4">
          <h1 className="text-2xl font-bold text-[info]">🏠 Rent Bridge</h1>
          <nav className="space-x-6 flex items-center">
            <Link href="/houses" className="text-[info] font-medium hover:underline">Houses</Link>
            <Link href="/chat" className="text-[info] font-medium hover:underline">Chat</Link>
            <Link href="/account" className="text-[info] font-medium hover:underline">Account</Link>
            <Link href="/signup" className="px-4 py-2 bg-secondary text-white font-medium rounded-full hover:opacity-80">Sign Up / Log in</Link>
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="ml-4 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 bg-gray-200 dark:bg-gray-800 hover:opacity-80"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </nav>
        </header>

        {/* Page Content */}
        <main className="min-h-screen flex flex-col items-center bg-base p-6">{children}</main>
      </body>
    </html>
  );
}
