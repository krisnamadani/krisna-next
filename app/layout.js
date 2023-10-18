import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "components/navbar";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Krisna Madani",
  description: "Hi i'm krisna welcome to my personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className={`bg-white dark:bg-gray-900 ${inter.className}`}>
        <Navbar />
        {children}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js" />
      </body>
    </html>
  );
}
