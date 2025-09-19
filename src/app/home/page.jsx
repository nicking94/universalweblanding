"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import ServicesCard from "@/components/Sections/ServicesSection";
import Carrousel from "@/components/Carrousel/Carrousel";
import ClientsSection from "@/components/Sections/ClientsSection";
import Link from "next/link";
import ClientsSlider from "@/components/Slider/ClientsSlider";
import PricingSection from "@/components/Sections/PricingSection";

export default function HomePage() {
  const words = ["negocio", "stock", "economía"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenWords = 3000;
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  useEffect(() => {
    const word = words[currentWordIndex];
    let timeout;

    if (!isDeleting) {
      if (displayedText.length < word.length) {
        timeout = setTimeout(() => {
          setDisplayedText(word.substring(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), delayBetweenWords);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(word.substring(0, displayedText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWordIndex]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 800);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <section
        id="hero1"
        className=" bg-[url('/images/heroImg.jpg')] bg-cover bg-center bg-no-repeat md:min-h-[100vh] pointer-events-auto"
      >
        <div className="relative h-[100vh] flex flex-col items-center text-center ">
          <h1 className="mt-20 2xl:mt-28 px-4 pt-2 text-md md:text-lg lg:text-xxl font-semibold ">
            La gestión de tu <br />
            <span className="gradiente">
              {displayedText}
              {showCursor ? "| " : ""}
            </span>{" "}
            más fácil
          </h1>
          <p className="mb-2 lg:mb-8 text-xs lg:text-sm italic ">
            Gestión simple, resultados reales
          </p>
          <div className="w-full px-6 gap-4 flex flex-col lg:flex-row justify-center items-center text-white ">
            <div className="bg-primaryBlue shadow-2xl shadow-primaryBlue/80 rounded lg:h-[40vh] lg:w-1/2 flex flex-col justify-center space-y-4 text-start p-4">
              <div className="flex items-start">
                <div className="bg-white p-1 lg:p-2 rounded-full mr-3 mt-2">
                  <svg
                    className="w-3 lg:w-5 h-3 lg:h-5 text-primaryBlue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-xs lg:text-sm">
                    Control total
                  </h3>
                  <p className="text-xxs lg:text-xs">
                    Monitorea todas las operaciones de tu negocio
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-1 lg:p-2 rounded-full mr-3 mt-2">
                  <svg
                    className="w-3 lg:w-5 h-3 lg:h-5 text-primaryBlue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-xs lg:text-sm">
                    Reportes automatizados
                  </h3>
                  <p className="text-xxs lg:text-xs">
                    Genera informes detallados de ventas, inventario y finanzas
                    automáticamente.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-1 lg:p-2 rounded-full mr-3 mt-2">
                  <svg
                    className="w-3 lg:w-5 h-3 lg:h-5 text-primaryBlue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-xs lg:text-sm">
                    Seguridad de datos
                  </h3>
                  <p className="text-xxs lg:text-xs">
                    Disfruta de la tranquilidad de tener tus datos protegidos
                    con backups
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex  flex-col justify-center bg-primaryBlue shadow-2xl shadow-primaryBlue/80 rounded lg:h-[40vh] lg:w-1/2  space-y-4 text-start p-4">
              <div className="flex items-start">
                <div className="bg-white p-1 lg:p-2 rounded-full mr-3 mt-2">
                  <svg
                    className="w-3 lg:w-5 h-3 lg:h-5 text-primaryBlue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-xs lg:text-sm">
                    Diseñado para dueños de negocios
                  </h3>
                  <p className="text-xxs lg:text-xs">
                    Optimizado para ofrecerte el control absoluto de tu empresa
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-1 lg:p-2 rounded-full mr-3 mt-2">
                  <svg
                    className="w-3 lg:w-5 h-3 lg:h-5 text-primaryBlue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-xs lg:text-sm">En la nube</h3>
                  <p className="text-xxs lg:text-xs">
                    Accede a tu información desde tu tablet o PC
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-1 lg:p-2 rounded-full mr-3 mt-2">
                  <svg
                    className="w-3 lg:w-5 h-3 lg:h-5  text-primaryBlue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-xs lg:text-sm">
                    Rápido y eficiente
                  </h3>
                  <p className="text-xxs lg:text-xs">
                    Optimiza tus procesos y ahorra tiempo en tareas repetitivas.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-8 2xl:mt-[10vh]">
            <Link
              href="https://universalappkioskos.vercel.app/login"
              target="_blank"
            >
              <button className=" bg-primaryBlue w-auto text-xs lg:text-sm transition-all duration-300 hover:scale-105 text-white py-2 2xl:py-4 px-4 2xl:px-8 rounded-[8px] hover:bg-primaryBlue/90">
                Click Aquí para probar la demo x 7 días
              </button>
            </Link>
            <p className="text-xs mt-2">Usuario: demo | Contraseña: demo</p>
          </div>
        </div>
      </section>

      <section
        id="clients"
        data-aos="fade"
        className="shadow-md shadow-tertiaryBlue/30"
      >
        <ClientsSection
          header="Conoce más sobre el sistema"
          title="Nuestro mayor éxito es el tuyo."
          description="Descubre cómo ayudamos a empresas como la tuya a crecer y superar desafíos."
        />
      </section>

      <section
        id="services"
        data-aos="fade"
        data-aos-duration="3000"
        className="shadow-md shadow-tertiaryBlue/30"
      >
        <ServicesCard
          header="Nuestros Planes"
          title="Ofrecemos planes de pago que se ajustan a cada bolsillo"
          description="Nuestros planes se adaptan a tu presupuesto, ofreciendo flexibilidad y confianza en la solución que necesitas para tu negocio."
        />
      </section>

      <section id="pricing" className="shadow-md shadow-tertiaryBlue/30">
        <PricingSection />
      </section>
      <section
        id="tools"
        data-aos="fade-up"
        className="shadow-md shadow-tertiaryBlue/30"
      >
        <div className="py-10">
          <div className=" px-4 lg:px-20">
            <p className="text-primaryBlue text-xxs lg:text-xs lg:leading-[20.8px] font-medium">
              Nuestros clientes
            </p>
            <h1 className="text-md lg:text-xl font-semibold lg:leading-[70.4px] text-grayMedium">
              Clientes que confían en nosotros
            </h1>
          </div>
          <Carrousel />
        </div>
      </section>
    </div>
  );
}
