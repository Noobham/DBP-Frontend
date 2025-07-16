import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StoreProvider from "./store/StoreProvider";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
    </html>
  );
}
