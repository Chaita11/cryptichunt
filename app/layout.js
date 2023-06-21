import "./globals.css";
import { Montserrat } from "next/font/google";
import { ConfigProvider } from "antd";
import Navbar from "./Navbar/page";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Surprise?? || CODE 2k23-24",
  description: "WE WELCOME YOU TO THE SURPRISE??",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className="bg-black text-white">
        <div className="containerLayout">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
