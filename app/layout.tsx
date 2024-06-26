import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saaransh Sharma - Software Developer",
  description:
    "Discover the projects and skills of Saaransh Sharma, a passionate software developer committed to continuous growth and mastering new technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="absolute top-0 z-[-2] h-screen w-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#704abb_100%)]">
          {children}
        </div>

        <Analytics />
      </body>
    </html>
  );
}

