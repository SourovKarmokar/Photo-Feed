import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";



export const metadata: Metadata = {
  title: "PhotoFeed",
  description: "A Photo Feed App Built With Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"     
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        <div className="container my-4 lg:my-8">
           {children}
        </div>
      </body>
    </html>
  );
}
