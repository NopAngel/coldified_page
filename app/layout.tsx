import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ConvexClientProvider } from "./ConvexClientProvider";
import Footer from "@/components/footer";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coldified",
  description: "Coldified - Page.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <ConvexClientProvider>{children}</ConvexClientProvider>
        <Footer />
      </body>
    </html>
  );
}
