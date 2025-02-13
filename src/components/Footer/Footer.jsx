"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logo.svg";
import { usePathname, useRouter } from "next/navigation";
import facebookLogo from "../../../public/icons/facebook.png";
import instagramLogo from "../../../public/icons/instagram.png";
import linkedinLogo from "../../../public/icons/linkedin.png";

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
    <footer className="py-6 px-4 lg:px-12 flex flex-col lg:flex-row items-center justify-between">
      <div className="flex items-center text-lg font-bold mb-4 md:mb-0">
        <Link href="/">
          <Image src={logo} alt="Logo" width={136} height={32} />
        </Link>
      </div>

      <nav className="mb-4 lg:mb-0 ">
        <ul className="flex items-center space-x-6 hover:text-gray-400 ">
          <li className="hover:scale-105 transition duration-300">
            <Link href="/home/nosotros">Nosotros</Link>
          </li>
          <li className="hover:scale-105 transition duration-300">
            <Link href="/home/proyectos">Proyectos</Link>
          </li>
          {pathname === "/home" && (
            <li>
              <button
                onClick={() => handleNavigation("#contact")}
                className="hover:scale-105 transition duration-300"
              >
                Contáctanos
              </button>
            </li>
          )}
        </ul>
      </nav>

      <div className="flex space-x-4 lg:mr-60">
        <Link
          className="hover:scale-110 transition-all duration-300"
          href="https://www.facebook.com/NovexisConsultingS.A.S/"
        >
          <Image src={facebookLogo} alt="facebook" />
        </Link>
        <Link
          className="hover:scale-110 transition-all duration-300"
          href="https://www.instagram.com/novexisconsulting/"
        >
          <Image src={instagramLogo} alt="facebook" />
        </Link>
        <Link
          className="hover:scale-110 transition-all duration-300"
          href="https://www.linkedin.com/company/novexis-consulting"
        >
          <Image src={linkedinLogo} alt="facebook" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
