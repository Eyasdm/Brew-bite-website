// app/layout.js
import "./globals.css";
import Navbar from "@/components/Navbar";
import ReactQueryProvider from "@/lib/react-query-provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <ReactQueryProvider>
          <Navbar />
          <main>{children}</main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
