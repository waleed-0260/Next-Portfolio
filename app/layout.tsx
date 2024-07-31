import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Home/Footer";
// import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Waleed's Portfolio",
  description: "Personal Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ThemeProvider> */}
        <Header/>{children}
        <Footer/>
        {/* </ThemeProvider> */}
        {/* <Script type="text/javascript" src="vanilla-tilt.js"/> */}
        {/* <Script type="text/javascript" src="vanilla-tilt.js"></Script> */}

        </body>
    </html>
  );
}
