import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import Navbar from "@/components/NavBar/Navbar";
import Footer from "@/components/Footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Gloobcamp | Learn JavaScript and React.js from scratch",
  description:
    "Improve your knowledge of JavaScript and ReactJS with Gloobcamp. Learn JavaScript and React.js from scratch with our tutorials and guides. Master the fundamentals of JavaScript and build frontend applications with React.js.",
  keywords: [
    "learn JavaScript from scratch, JavaScript tutorial, online JavaScript course, complete JavaScript guide, JavaScript basics, JavaScript fundamentals, JavaScript best practices, advanced JavaScript, JavaScript projects, JavaScript exercises, how to learn React.js, React.js tutorial for beginners, online React.js course, complete React.js guide, React.js components, React.js hooks, React.js and JavaScript ES6, React.js best practices, state and props in React.js, React.js projects, how to use React.js with JavaScript, best resources to learn React.js, frontend development with React.js and JavaScript, React.js code examples, debugging in JavaScript and React.js",
  ],
  alternates: {
    canonical: "https://gloobcamp.vercel.app/",
    languages: {
      en: "https://gloobcamp.vercel.app/",
      es: "https://gloobcamp.vercel.app/",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <ToastContainer />
        <main className="mx-auto px-4 max-w-7xl">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
