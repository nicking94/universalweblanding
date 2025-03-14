"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import Slider from "@/components/Slider/Slider";
import ServicesCard from "@/components/Sections/ServicesSection";
import Carrousel from "@/components/Carrousel/Carrousel";
import ClientsSection from "@/components/Sections/ClientsSection";
import ContactSection from "@/components/Sections/ContactSection";
import ContactForm from "@/components/Form/ContactForm";

export default function HomePage() {
  const words = ["idea", "plan"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 250;
  const deletingSpeed = 250;
  const delayBetweenWords = 3000;
  const [showCursor, setShowCursor] = useState(true);
  const [animateContainer, setAnimateContainer] = useState(false);
  const videoRef = useRef(null);

  const handleAnimation = () => {
    setTimeout(() => {
      setAnimateContainer(true);
      setTimeout(() => setShowHero2(true), 600);
    }, 3000);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

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
        <div className=" h-[90vh] lg:h-[100vh] flex flex-col items-center text-center ">
          <h1 className="mt-20 2xl:mt-28  px-4 pt-10 text-lg lg:text-xxl font-semibold ">
            Convierte tu{" "}
            <span className="gradiente">
              {displayedText}
              {showCursor ? "| " : ""}
            </span>{" "}
            en software
          </h1>
          <p className=" mt-10 px-4 text-pretty lg:px-60 text-sm lg:text-md font-light text-center">
            Creamos{" "}
            <span className="font-medium">soluciones de software a medida</span>{" "}
            con tecnología de vanguardia para maximizar la eficiencia y la
            innovación en tu empresa.
          </p>
          <div className="w-full mt-60">
            <button className="animate-pulse  bg-primaryBlue w-[15rem] text-sm transition-all duration-300 hover:scale-105 text-white py-4 px-6 rounded-[8px] hover:bg-primaryBlue/90">
              Conoce más
            </button>
          </div>
        </div>
      </section>

      <section
        id="services"
        data-aos="fade"
        data-aos-duration="3000"
        className="shadow-xl shadow-secondaryBlue"
      >
        <ServicesCard
          header="Servicios"
          title="Simplifica, optimiza y crece."
          description="Te ofrecemos las herramientas digitales perfectas para transformar tu negocio y alcanzar nuevas metas."
        />
      </section>

      <section
        id="tools"
        data-aos="fade-up"
        className="shadow-xl shadow-secondaryBlue"
      >
        <div className="py-10">
          <div className=" px-4 lg:px-20">
            <p className="text-primaryBlue text-xxs lg:text-xs lg:leading-[20.8px] font-medium">
              Tecnologías
            </p>
            <h1 className="font-semibold text-md lg:text-xl lg:leading-[70px]">
              Trabajamos con las mejores tecnologías del mercado
            </h1>
          </div>
          <Carrousel />
        </div>
      </section>

      <section
        id="slider"
        data-aos="fade"
        className="flex flex-col bg-background-gradient shadow-xl shadow-secondaryBlue py-10"
      >
        <h1 className="font-semibold text-primaryBlue text-xxs lg:text-xs lg:leading-[70px] px-4 md:px-20">
          Proyectos
        </h1>
        <Slider />
      </section>
      <section
        id="clients"
        data-aos="fade"
        className="shadow-xl shadow-secondaryBlue"
      >
        <ClientsSection
          header="Clientes"
          title="Nuestro mayor éxito es el tuyo."
          description="Descubre cómo ayudamos a empresas como la tuya a crecer, innovar y superar desafíos."
        />
      </section>

      <section
        id="contact"
        data-aos="fade"
        data-aos-duration="3000"
        className="bg-background-gradient flex flex-col lg:flex-row lg:items-center py-10 shadow-xl shadow-secondaryBlue"
      >
        <ContactSection
          bg="transparent"
          title="Reserva tu reunión"
          description="Reserva una reunión y descubre cómo transformar tu idea en un proyecto exitoso."
        >
          <ContactForm />
        </ContactSection>
      </section>
    </div>
  );
}
