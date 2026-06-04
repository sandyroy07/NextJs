import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Sandeep Roy | Full Stack Developer",
  description:
    "Full Stack Web Developer skilled in C, C++, Java, Python, and Machine Learning. Building modern, performant web applications.",
  keywords: [
    "Sandeep Roy",
    "Full Stack Developer",
    "Web Developer",
    "Python",
    "Machine Learning",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        {children}
      </body>
    </html>
  );
}
