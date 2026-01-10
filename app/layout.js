import ReactQueryProvider from "../lib/react-query-provider";
import "./globals.css";

export const metadata = {
  title: "Brew-Bite Cafe",
  description: "Order your favorite coffee online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
