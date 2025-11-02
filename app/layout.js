import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GDAS2025 - Global Defence & Aviation Skills Conference | Dec 8-9, 2025 Malaysia",
  description: "Global Defence and Aviation Skills Conference 2025: Advancing TVET for military and aviation excellence. Network with international experts in Kuala Lumpur. Register now for December 8-9, 2025.",
  keywords: "GDAS, defence conference 2025, aviation skills training, TVET conference, military education, aviation professionals Malaysia, defence summit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
