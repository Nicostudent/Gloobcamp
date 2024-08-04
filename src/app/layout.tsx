import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import NavBar from "@/components/Navbar";
import { ToastContainer } from 'react-toastify';
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Gloobcamp",
  description:
    "Improve your knowledge of JavaScript and ReactJS with Gloobcamp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavBar />
        <ToastContainer />
        <main className="max-w-7xl mx-auto py-24 px-4">{children}</main>
      </body>
    </html>
  );
}
