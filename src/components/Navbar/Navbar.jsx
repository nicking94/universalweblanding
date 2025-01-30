"use client";

import { useState } from "react";
import Link from "next/link";
import logo from "../../../public/images/logo.svg";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Nosotros", path: "/nosotros" },
    { name: "Proyectos", path: "/proyectos" },
    { name: "Contáctanos", path: "/contacto" },
  ];

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
                <Link href={link.path}>
                  <button
                    className={`${
                      link.name === "Contáctanos"
                        ? "bg-violet px-3 text-white py-2 rounded hover:scale-105 transition-all duration-300"
                        : "hover:scale-105 transition-all duration-300"
                    }`}
                  >
                    {link.name}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-violet flex flex-col justify-center items-center z-50">
            <button
              onClick={toggleMenu}
              className="absolute top-6 right-6 focus:outline-none"
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
            <ul className="text-xs space-y-6 text-center">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    onClick={toggleMenu}
                    className={`${
                      link.name === "Contáctanos"
                        ? "bg-violet text-white px-3 py-2 rounded hover:scale-105 transition duration-300"
                        : " hover:scale-105 transition duration-300"
                    }`}
                  >
                    <button
                      className={`${
                        link.name === "Contáctanos"
                          ? "bg-violet text-white px-3 py-2 rounded hover:scale-105 transition duration-300"
                          : " hover:scale-105 transition duration-300"
                      }`}
                    >
                      {" "}
                      {link.name}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
