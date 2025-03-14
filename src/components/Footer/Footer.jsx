"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logo.png";
import { usePathname, useRouter } from "next/navigation";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

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
    <footer className="px-6 py-5 flex flex-col lg:flex-row items-center justify-between">
      <div className="flex items-center text-lg font-bold mb-4 md:mb-0">
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} alt="Logo" width={40} height={40} />
          <h1 class="font-abril gradiente text-[.7rem] md:text-[1.5rem] tracking-wide py-2 md:py-0">
            UNIVERSAL WEB
          </h1>
        </Link>
      </div>

      <div className="flex space-x-6 lg:mr-20">
        <Link
          className="hover:scale-110 transition-all duration-300"
          href="https://www.instagram.com/universalweb.nk/"
          target="_blank"
          title="Instagram"
        >
          <FaInstagramSquare className="text-pink-500" size={30} />
        </Link>
        <Link
          className="hover:scale-110 transition-all duration-300"
          href="https://www.linkedin.com/company/universalweb"
          target="_blank"
          title="Linkedin"
        >
          <FaLinkedin className="text-blue-500" size={30} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
