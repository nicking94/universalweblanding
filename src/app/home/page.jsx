"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import whatsappLogo from "../../../public/images/whatsappLogo.svg";
import Image from "next/image";
import Slider from "@/components/Slider/Slider";
import ServicesCard from "@/components/Sections/ServicesSection";
import Carrousel from "@/components/Carrousel/Carrousel";
import toolsImage from "../../../public/images/ourToolsSection.svg";
import ClientsSection from "@/components/Sections/ClientsSection";
import ContactSection from "@/components/Sections/ContactSection";
import ContactForm from "@/components/Form/ContactForm";

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);
  return (
    <div className=" w-full h-full">
      <section
        id="hero"
        data-aos="fade"
        className="min-h-[100vh] pointer-events-auto "
      >
        <div className="pt-10 flex flex-col items-center text-center ">
          <h1 className="px-4 pt-10 text-lg md:text-xxl font-semibold">
            Convierte tus ideas en software
          </h1>
          <p className="px-4 text-xs md:text-sm font-light text-center ">
            Somos una empresa especializada en{" "}
            <span className="font-medium">
              soluciones de software a medida{" "}
            </span>
            que impulsan la innovación y eficiencia en su negocio
          </p>

          <div className="bg-slate-200 flex justify-center items-center w-full bg-gray-200 h-[48rem]">
            video
          </div>
        </div>
      </section>
      <div className=" fixed bottom-[5%] left-[80%] md:left-[96%] z-50">
        <Image
          className="cursor-pointer hover:scale-105 transition-all duration-300"
          src={whatsappLogo}
          alt="whatsappLogo"
          width={50}
          height={50}
        />
      </div>

      <section
        id="slider"
        data-aos="fade"
        className="flex items-center bg-background-gradient py-20 px-2 "
      >
        <Slider />
      </section>

      <section id="services" data-aos="fade" data-aos-duration="3000">
        <ServicesCard
          width="w-[50%]"
          width2="w-[50%]"
          bg="bg-gray"
          header="Nuestros servicios"
          title="Tenemos todo lo necesario para tu negocio."
          description="Ofrecemos una amplia gama de servicios diseñados para impulsar su transformación digital, optimizar tus procesos y maximizar tu potencial."
        >
          Clip de rotato
        </ServicesCard>
      </section>
      <section id="tools" data-aos="fade-up">
        <div className="py-10">
          <div className="px-20">
            <p className="text-violet text-xs leading-[20.8px] font-medium">
              Nuestras herramientas
            </p>
            <h1 className=" font-semibold text-xl leading-[70px]">
              Trabajamos con las mejores tecnologías del mercado:
            </h1>
          </div>

          <Carrousel />

          <Image className="w-full" src={toolsImage} alt="tools" />
        </div>
      </section>
      <section id="clients" data-aos="fade">
        <ClientsSection
          width="w-[25%]"
          width2="w-[75%]"
          header="Nuestros clientes"
          title="La satisfacción de nuestros clientes es nuestro mayor logro."
          description="Conozca de primera mano como nuestras soluciones han transformado negocios y superado expectativas."
        />
      </section>
      <section
        id="services"
        data-aos="fade"
        data-aos-duration="3000"
        className="bg-background-gradient flex items-center "
      >
        <ContactSection
          width="w-[25%]"
          width2="w-[75%]"
          bg="transparent"
          title="Reserva tu reunión"
          description="¿Listo para dar el siguiente paso? Habla directamente con nuestros fundadores y descubre como podemos transformar tu idea en realidad."
        >
          <ContactForm />
        </ContactSection>
      </section>
    </div>
  );
}
