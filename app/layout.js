// app/layout.js
import "./globals.css";
import Navbar from "@/components/Navbar";
import StoreToaster from "@/components/StoreToaster";
import ReactQueryProvider from "@/lib/react-query-provider";
import { CartHydrator } from "@/store/CartHydrator";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <ReactQueryProvider>
          <Navbar />
          <main>{children}</main>
          <CartHydrator />
          <StoreToaster />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
