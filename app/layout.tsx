import { cn } from "@/lib/utils";
import "./globals.css";

import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";
import { fontHeading, fontMono, fontSans } from "@/lib/font";

export const metadata = {
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable,
          fontMono.variable,
          fontHeading.variable
          // inter.className
        )}
      >
        {/* <Navbar /> */}
        <Toaster richColors />
        {children}
      </body>
    </html>
  );
}
