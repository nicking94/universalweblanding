"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import hopClientImg from "../../../public/images/hopClient.png";
import tribeClientImg from "../../../public/images/tribeClient.png";
import Slider from "@/components/Slider/Slider";
import ServicesCard from "@/components/Sections/ServicesSection";
import Carrousel from "@/components/Carrousel/Carrousel";
import toolsImage from "../../../public/images/ourToolsSection.svg";
import ClientsSection from "@/components/Sections/ClientsSection";
import ContactSection from "@/components/Sections/ContactSection";
import ContactForm from "@/components/Form/ContactForm";
import Button from "@/components/Button/Button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HomePage() {
  const words = ["idea", "plan"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 250;
  const deletingSpeed = 250;
  const delayBetweenWords = 3000;
  const [showCursor, setShowCursor] = useState(true);
  const [showHero2, setShowHero2] = useState(false);
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
      {/* Hero 2 */}
      <motion.section
        id="hero2"
        className="min-h-[100vh] pointer-events-auto bg-black text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: showHero2 ? 1 : 0 }}
        transition={{ duration: 1 }}
        style={{ display: showHero2 ? "block" : "none" }}
      >
        <div className="min-h-[100vh] md:pt-10 flex flex-col justify-center px-4 md:px-20">
          <h1 className="px-4 pt-10 text-lg lg:text-xxl font-semibold">
            Convierte tu{" "}
            <span className="text-violet">
              {displayedText}
              {showCursor ? "| " : ""}
            </span>{" "}
            en software
          </h1>
          <p className="px-4 text-xs lg:text-sm font-light mb-10">
            Somos una empresa especializada en{" "}
            <span className="font-medium">soluciones de software a medida</span>{" "}
            que impulsan la innovación y eficiencia en su negocio.
          </p>
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <Link href="/home/proyectos">
              <Button text={"Ver proyectos"} />
            </Link>

            <div className="flex">
              <Image
                className="rounded-full"
                src={hopClientImg}
                alt="hop"
                width={30}
              />
              <Image
                className="-ml-3 rounded-full"
                src={tribeClientImg}
                alt="tribe"
                width={30}
              />
            </div>
            <p>+50 empresas ya han confiado en nosotros.</p>
          </div>
        </div>
      </motion.section>

      {/* Hero 1 */}
      {!showHero2 && (
        <section id="hero1" className="md:min-h-[100vh] pointer-events-auto">
          <div className="lg:mt-20 2xl:mt-28 relative h-[90vh] lg:h-[100vh] flex flex-col items-center text-center ">
            <h1 className="absolute top-[1rem] lg:top-[-5rem] px-4 pt-10 text-lg lg:text-xxl font-semibold z-50">
              Convierte tu{" "}
              <span className="text-violet">
                {displayedText}
                {showCursor ? "| " : ""}
              </span>{" "}
              en software
            </h1>
            <p className="absolute top-[12rem] lg:top-[4rem] px-4 text-xs lg:text-sm font-light text-center mb-10 z-50">
              Somos una empresa especializada en{" "}
              <span className="font-medium">
                soluciones de software a medida
              </span>{" "}
              que impulsan la innovación y eficiencia en su negocio.
            </p>
            <motion.div
              className=" relative flex flex-col items-center w-full h-full "
              animate={animateContainer ? { scale: 3, opacity: 0 } : {}}
              transition={{ duration: 1 }}
            >
              <video
                ref={videoRef}
                src="https://s3.novexisconsulting.xyz/novexis-web/laptopHome.mp4"
                muted
                playsInline
                className=" relative w-full h-full lg:object-fill rounded-[40px]"
              />
              <div className="absolute top-[50%] lg:top-[63%] 2xl:top-[67%] w-full flex justify-center">
                <button
                  className="hover:scale-105 transition-all duration-300 font-medium text-xxs md:text-xs bg-violet text-white py-[0.55rem] md:py-[0.75rem] px-[1.3rem] md:px-[1.5rem] rounded-[8px] hover:bg-violet/90"
                  onClick={handleAnimation}
                >
                  Click aquí
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      <section
        id="slider"
        data-aos="fade"
        className="flex flex-col lg:flex-row lg:items-center bg-background-gradient mb-10"
      >
        <Slider />
      </section>
      <section id="services" data-aos="fade" data-aos-duration="3000">
        <ServicesCard
          header="Nuestros servicios"
          title="Tenemos todo lo necesario para tu negocio."
          description="Ofrecemos una amplia gama de servicios diseñados para impulsar su transformación digital, optimizar tus procesos y maximizar tu potencial."
        />
      </section>
      <section id="tools" data-aos="fade-up">
        <div className="py-10">
          <div className=" px-4 lg:px-20">
            <p className="text-violet text-xxs lg:text-xs lg:leading-[20.8px] font-medium">
              Nuestras tecnologías
            </p>
            <h1 className="font-semibold text-lg lg:text-xl lg:leading-[70px]">
              Trabajamos con las mejores tecnologías del mercado
            </h1>
          </div>
          <Carrousel />
          <Image className="w-full" src={toolsImage} alt="tools" />
        </div>
      </section>
      <section id="clients" data-aos="fade">
        <ClientsSection
          width="w-[30%]"
          width2="w-[70%]"
          header="Nuestros clientes"
          title="La satisfacción de nuestros clientes es nuestro mayor logro."
          description="Conozca de primera mano cómo nuestras soluciones han transformado negocios y superado expectativas."
        />
      </section>
      <section
        id="contact"
        data-aos="fade"
        data-aos-duration="3000"
        className="bg-background-gradient flex flex-col lg:flex-row lg:items-center py-10"
      >
        <ContactSection
          width="w-[55%]"
          width2="w-[45%]"
          bg="transparent"
          title="Reserva tu reunión"
          description="¿Listo para dar el siguiente paso? Habla directamente con nuestros fundadores y descubre cómo podemos transformar tu idea en realidad."
        >
          <ContactForm />
        </ContactSection>
      </section>
    </div>
  );
}
