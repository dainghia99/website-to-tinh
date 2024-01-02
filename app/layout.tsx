import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AlertModal from "@/components/alert-modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Xin chào thế giới của tớ!",
  description: "Chào công chúa!!!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AlertModal />
        {children}
      </body>
    </html>
  );
}
