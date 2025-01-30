import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logo.svg";

const Footer = () => {
  return (
    <footer className=" py-6 px-4 md:px-12 flex flex-col md:flex-row items-center justify-between">
      <div className="text-lg font-bold">
        <Link href="/">
          <Image src={logo} alt="Logo" width={136} height={32} />
        </Link>
      </div>

      <nav className="mb-4 md:mb-0">
        <ul className="flex space-x-6">
          <li>
            <a href="#nosotros" className="hover:text-gray-400">
              Nosotros
            </a>
          </li>
          <li>
            <a href="#proyectos" className="hover:text-gray-400">
              Proyectos
            </a>
          </li>
          <li>
            <a href="#contacto" className="hover:text-gray-400">
              Contáctanos
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex space-x-4">
        <p>facebook</p>
        <p>Instagram</p>
      </div>
    </footer>
  );
};

export default Footer;
