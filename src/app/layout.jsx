import Footer from "@/components/Footer/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import CustomCursor from "@/components/Cursor/CustomCursor";
import { Kanit } from "next/font/google";
import Image from "next/image";
import whatsappLogo from "../../public/images/whatsappLogo.svg";

export const metadata = {
  title: "Novexis Consulting",
  description: "Novexis consulting website",
};

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-kanit",
});
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${kanit.variable} min-h-screen flex flex-col`}>
        <div className="block md:hidden fixed bottom-[5%] left-[80%] lg:left-[96%] z-50">
          <Image
            className="cursor-pointer hover:scale-105 transition-all duration-300"
            src={whatsappLogo}
            alt="whatsappLogo"
            width={50}
            height={50}
          />
        </div>
        {/* <div className=" cursor-pointer hidden md:block fixed bottom-[3%] left-[20%] lg:left-[65%] z-50">
          <video
            className="w-30 h-30"
            src="/clips3D/chat.webm"
            muted
            loop
            autoPlay
          ></video>
        </div> */}
        <CustomCursor />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
