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
  title: "Gloobcamp",
  description:
    "Improve your knowledge of JavaScript and ReactJS with Gloobcamp.",
  keywords: [
    "HTML, CSS, NEXTJS, REACTJS, LEARN, JS, REACT, react next js tutorial, next.js react, learn next js, react next js typescript tutorial, next js react essentials, next js react native, next js react query, next js react router, next js react bootstrap, next js react context, next js react testing library, next js react three fiber, next.js react app, next js react admin, next js react api, next js react developer tools, next js react server components, next.js el framework de react para producción",
  ],
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
