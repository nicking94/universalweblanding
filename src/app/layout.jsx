import Footer from "@/components/Footer/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import CustomCursor from "@/components/Cursor/CustomCursor";
import { Kanit } from "next/font/google";
import Image from "next/image";
import whatsappLogo from "../../public/images/whatsappLogo.svg";
import Link from "next/link";

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
        <div className="block lg:hidden fixed bottom-[5%] left-[86%] md:left-[90%] lg:left-[96%] z-50">
          <Link href="https://wa.me/542616951550">
            <Image
              className="cursor-pointer hover:scale-105 transition-all duration-300"
              src={whatsappLogo}
              alt="whatsappLogo"
              width={50}
              height={50}
            />
          </Link>
        </div>
        <div className=" w-[300px] h-[300px]  hidden lg:flex fixed top-[89.8%] 2xl:top-[93.3%] left-[91.5%] 2xl:left-[94%] translate-x-[-50%] translate-y-[-50%] z-50">
          <Link href="https://wa.me/542616951550">
            <video
              className="cursor-pointer"
              src="/clips3D/chat.webm"
              muted
              loop
              autoPlay
            ></video>
          </Link>
        </div>
        <CustomCursor />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
