import type { Metadata } from "next";
import { Geist, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { WorkoutProvider } from "@/context/WorkoutContext";
import { Toaster } from "sonner";
import { Suspense } from "react";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitLog",
  description: "Workout library and daily workout planner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${oswald.variable} flex min-h-screen flex-col bg-[#0d0f12] text-[#f5f5f5]`}
      >
        <WorkoutProvider>
          <Suspense fallback={null}>
            <Navbar />
          </Suspense>

          <main className="flex-1">
            {children}
          </main>

          <Footer />

          <Toaster
            position="top-right"
            theme="dark"
            richColors
          />
        </WorkoutProvider>
      </body>
    </html>
  );
}