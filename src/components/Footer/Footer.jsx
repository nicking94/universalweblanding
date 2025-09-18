"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logo.png";
import { usePathname, useRouter } from "next/navigation";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa"; // Importar el icono de TikTok

const Footer = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (path) => {
    if (path.startsWith("#")) {
      setTimeout(() => {
        const section = document.querySelector(path);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      router.push(path);
    }
  };

  return (
    <footer className="bg-tertiaryBlue/20 px-6 py-5 flex flex-col lg:flex-row items-center justify-between">
      <div className="flex items-center text-lg font-bold mb-4 md:mb-0">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="Logo" width={40} height={40} />
          <h1 class="font-abril gradiente text-[.7rem] md:text-[1.5rem] tracking-wide py-2 md:py-0">
            UNIVERSAL APP
          </h1>
        </Link>
      </div>

      <div className="flex space-x-6 lg:mr-20">
        <p className="text-xs font-semibold text-grayMedium">
          {" "}
          Encuentranos en:
        </p>
        <Link
          className="hover:scale-110 transition-all duration-300"
          href="https://www.instagram.com/_universalapp"
          target="_blank"
          title="Instagram"
        >
          <FaInstagramSquare className="text-pink-500" size={30} />
        </Link>
        <Link
          className="hover:scale-110 transition-all duration-300"
          href="https://www.linkedin.com/company/universalweb/"
          target="_blank"
          title="Linkedin"
        >
          <FaLinkedin className="text-blue-500" size={30} />
        </Link>

        <Link
          className="hover:scale-110 transition-all duration-300"
          href="https://www.tiktok.com/@universalapp?_t=ZM-8zq7adP8Kmi&_r=1"
          target="_blank"
          title="TikTok"
        >
          <FaTiktok className="text-black" size={30} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
