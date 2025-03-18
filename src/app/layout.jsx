import Footer from "@/components/Footer/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import whatsappLogo from "../../public/images/whatsappLogo.svg";
import Link from "next/link";
import { Roboto } from "next/font/google";

export const metadata = {
  title: "Universal Web",
  description: "Universal web website",
  openGraph: {
    title: "Universal Web",
    description: "Universal web website",
    url: "https://universalwebsite.vercel.app/home",
    siteName: "Universal Web",
    images: [
      {
        url: "https://tu-dominio.vercel.app/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Logo de Universal Web",
      },
    ],
    type: "website",
  },
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
  variable: "--font-roboto",
});

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${roboto.variable} min-h-screen flex flex-col`}>
        <div className="fixed bottom-[5%] left-[86%] md:left-[90%] lg:left-[96%] z-50">
          <Link href="https://wa.me/542613077147" target="_blank">
            <Image
              className="cursor-pointer hover:scale-105 transition-all duration-300"
              src={whatsappLogo}
              alt="whatsappLogo"
              width={50}
              height={50}
            />
          </Link>
        </div>

        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
