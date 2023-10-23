import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "components/navbar";
import Footer from "components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Krisna Madani",
  description: "Hi i'm krisna welcome to my personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`bg-white dark:bg-gray-900 ${inter.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
