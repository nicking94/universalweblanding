"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import logo from "../../../public/images/logo.svg";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (path) => {
    setIsMenuOpen(false);

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
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Nosotros", path: "/home/nosotros" },
    { name: "Proyectos", path: "/home/proyectos" },
  ];
  if (pathname === "/home") {
    navLinks.push({ name: "Contáctanos", path: "#contact" });
  }
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header>
      <nav className="px-6 py-5 fixed top-0 left-0 w-full backdrop-blur-sm bg-white/30 z-50">
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold">
            <Link href="/">
              <Image src={logo} alt="Logo" width={136} height={32} />
            </Link>
          </div>

          <button onClick={toggleMenu} className="lg:hidden focus:outline-none">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <ul className="text-xs hidden lg:flex  lg:items-center lg:space-x-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <button
                  onClick={() => handleNavigation(link.path)}
                  className={`${
                    link.path === "#contact"
                      ? "bg-violet px-3 text-white py-2 rounded hover:scale-105 transition-all duration-300"
                      : "hover:scale-105 transition-all duration-300"
                  }`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Menú móvil */}
        <div
          className={`min-h-screen fixed inset-0 bg-white  text-black flex flex-col p-6  z-50 transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="text-lg font-bold">
            <Link href="/">
              <Image src={logo} alt="Logo" width={136} height={32} />
            </Link>
          </div>

          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 focus:outline-none"
            aria-label="Cerrar menú"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex items-center py-10">
            <ul className="text-xs space-y-4 ">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    onClick={toggleMenu}
                    className="hover:scale-105 transition duration-300 font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
