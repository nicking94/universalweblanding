"use client";
import Image from "next/image";
import image1 from "../../../../../public/images/audifonosProject1.svg";
import image2 from "../../../../../public/images/audifonosProject2.svg";
import menuIcon from "../../../../../public/icons/menu.png";
import mapIcon from "../../../../../public/icons/map.png";
import userIcon from "../../../../../public/icons/user.png";
import messageIcon from "../../../../../public/icons/messages2.png";
import Button from "@/components/Button/Button";
import sofoconImg from "../../../../../public/images/audifonosImg.svg";
import sofoconImg2 from "../../../../../public/images/audifonosProject3.svg";
import sofoconImg3 from "../../../../../public/images/audifonosImg2.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const AudifonosPage = () => {
  const sectionRef = useRef(null);
  const [counts, setCounts] = useState({
    features: 0,
    improvements: 0,
    efficiency: 0,
    clients: 0,
  });
  const targets = {
    features: 50,
    improvements: 200,
    efficiency: 90,
    clients: 120,
  };
  let isCounting = false;
  const intervals = {};

  useEffect(() => {
    const startCounting = () => {
      if (isCounting) return;
      isCounting = true;

      Object.keys(targets).forEach((key) => {
        intervals[key] = setInterval(() => {
          setCounts((prev) => {
            if (prev[key] < targets[key]) {
              return { ...prev, [key]: prev[key] + 1 };
            } else {
              clearInterval(intervals[key]);
              return prev;
            }
          });
        }, 70);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounting();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      Object.values(intervals).forEach(clearInterval);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <div className="py-36 px-4 md:px-20 min-h-screen">
      <div className="flex flex-col items-center gap-[1rem]">
        <p className="font-medium text-xs border rounded-[7.75rem] min-w-[8rem] py-1.5 px-4 md:leading-[20.8px] text-center">
          Landing Page
        </p>
        <h1 className="font-semibold text-lg md:text-xl md:leading-[52.8px]">
          AUDIFONOS
        </h1>
        <p className="text-violet font-medium text-sm md:leading-[24px]">
          Graba. Supervisa. Confía
        </p>
      </div>
      <div className="flex w-full lg:h-[47rem] mt-10">
        <video
          src="/clips3D/audifonosVideo1.mp4"
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover rounded-[40px]"
        />
      </div>
      <div
        ref={sectionRef}
        data-aos="fade"
        className="grid grid-cols-2 md:grid-cols-4 p-4"
      >
        <div className="flex flex-col items-center justify-center">
          <p className="font-semibold text-violet md:leading-[99.22px] text-lg md:text-xxl">
            +{counts.features}
          </p>
          <p className="text-center font-medium md:leading-[24px] text-xxs md:text-sm">
            Features en el dashboard
          </p>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <p className="font-semibold text-violet md:leading-[99.22px] text-lg md:text-xxl">
            +{counts.improvements}%
          </p>
          <p className="text-center font-medium md:leading-[24px] text-xxs md:text-sm">
            Mejoras
          </p>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <p className="font-semibold text-violet md:leading-[99.22px] text-lg md:text-xxl">
            +{counts.efficiency}%
          </p>
          <p className="text-center font-medium md:leading-[24px] text-xxs md:text-sm">
            Mejora en eficacia de ventas
          </p>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <p className="font-semibold text-violet md:leading-[99.22px] text-lg md:text-xxl">
            +{counts.clients}
          </p>
          <p className="text-center font-medium md:leading-[24px] text-xxs md:text-sm">
            Clientes satisfechos
          </p>
        </div>
      </div>
      <div
        data-aos="fade"
        className="flex md:justify-center items-center py-6 md:py-20 md:px-32"
      >
        <p className="italic text-sm leading-[34px] md:text-center text-textGray">
          Audifonos.org es un sitio web especializado en centros auditivos y
          audífonos, diseñado para ayudar a los usuarios a encontrar, comparar y
          comprar los mejores productos según sus necesidades. El sitio combina
          reseñas detalladas, guías de compra, listados organizados, un mapa
          interactivo de centros auditivos y un blog informativo para ofrecer
          una experiencia completa.
        </p>
      </div>
      <div data-aos="fade" className="flex  flex-col gap-3">
        <p className="font-medium text-xs border rounded-[2.75rem] w-[8rem] py-1.5 px-4 leading-[20.8px] text-center">
          Mobile App
        </p>
        <div className="flex flex-col md:flex-row gap-8 ">
          <div className="bg-backgroundGray rounded-[10px] p-10 md:w-[40%] ">
            <h3 className="font-medium text-violet text-lg leading-[52.8px]">
              Reseñas y Comparativas
            </h3>
            <ul className="text-violet font-light leading-[44px] text-xs list-disc">
              <li>
                Reseñas detalladas por usuarios reales sobre los centros
                auditivos
              </li>
              <li>
                Comparativas entre diferentes productos para facilitar la
                elección.
              </li>
            </ul>
          </div>
          <div className="flex md:justify-end md:items-end bg-violet rounded-[10px] p-2 md:pt-10 md:w-[60%]">
            <Image src={image1} alt="audifonos1" />
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-8 ">
          <div className="flex justify-center bg-violet rounded-[10px] p-2 md:pt-10 md:w-[60%]">
            <Image src={image2} alt="audifonos1" />
          </div>
          <div className="bg-backgroundGray rounded-[10px] p-10 md:w-[40%] ">
            <h3 className="font-medium text-violet text-lg leading-[52.8px]">
              Mapa Interactivo de Centros
            </h3>
            <p className="text-violet font-light leading-[44px] text-xs">
               Mapa interactivo que muestra los centros y sus ubicaciones.
              Búsqueda por ubicación y filtros por marca o tipo de auricular.
              Información detallada de centros, como direcciones, horarios y
              especialistas.
            </p>
          </div>
        </div>
      </div>

      <div data-aos="fade" className="flex flex-col md:flex-row py-10 md:py-20">
        <div className="md:w-1/2">
          <p className="font-light text-textGray text-md mb-4">
            Más funcionalidades
          </p>
          <div className="space-y-8">
            <div className="gap-[10px] space-y-2">
              <div className="flex items-center gap-3">
                <Image src={menuIcon} alt="audifonos" />
                <p className="font-medium text-sm leading-[24px]">
                  Listado de Centros Auditivos
                </p>
              </div>

              <ul className="list-disc px-10 md:px-16 text-xs font-light leading-[20.8px] ">
                <li>Listado organizado de centros.</li>
                <li>
                  Filtros y opciones de ordenamiento para una búsqueda
                  personalizada.
                </li>
                <li>Acceso directo a reseñas.</li>
              </ul>
            </div>
            <div className="gap-[10px] space-y-2">
              <div className="flex items-center gap-3">
                <Image src={mapIcon} alt="audifonos" />
                <p className="font-medium text-sm leading-[24px]">
                  Guías de Compra
                </p>
              </div>

              <p className="px-10 md:px-16 text-xs font-light leading-[20.8px] ">
                Guías completas que cubren aspectos como calidad de sonido,
                comodidad, duración de la batería y relación calidad-precio.
              </p>
            </div>
            <div className="gap-[10px] space-y-2">
              <div className="flex items-center gap-3">
                <Image src={messageIcon} alt="audifonos" />
                <p className="font-medium text-sm leading-[24px]">Blog</p>
              </div>

              <ul className="list-disc px-10 md:px-16 text-xs font-light leading-[20.8px] ">
                <li>
                  Artículos informativos sobre tendencias, noticias y
                  lanzamientos en el mundo de los auriculares.
                </li>
                <li>
                  Consejos prácticos para optimizar el uso y mantenimiento de
                  los dispositivos.
                </li>
                <li> Comparativas, guías y análisis profundos de productos.</li>
              </ul>
            </div>
            <div className="gap-[10px] space-y-2">
              <div className="flex items-center gap-3">
                <Image src={userIcon} alt="audifonos" />
                <p className="font-medium text-sm leading-[24px]">
                  Mejoras en la coordinación y comunicación interna
                </p>
              </div>
              <ul className="list-disc px-10 md:px-16 text-xs font-light leading-[20.8px] ">
                <li>
                  Sugerencias de auriculares basadas en las necesidades y
                  preferencias del usuario.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center md:w-1/2 text-white h-[20rem] md:h-auto mt-10 md:mt-0">
          <div className=" pointer-events-none absolute top-0 right-0 w-[15%] h-full bg-gradient-to-l from-[#ffffff] to-transparent z-10"></div>
          <Image className="w-full h-full" src={sofoconImg} alt="audifonos" />
        </div>
      </div>
      <div data-aos="fade" className="hidden md:flex h-[40rem]">
        <Image className="w-full h-full" src={sofoconImg2} alt="audifonos" />
      </div>
      <div data-aos="fade" className="flex flex-col gap-[16px] py-10 md:py-20">
        <p className="font-medium text-xs border rounded-[2.75rem] w-[8rem] py-1.5 px-4 leading-[20.8px] text-center">
          Mobile app
        </p>
        <div className="flex md:gap-[60px] gap-4 ">
          <div className="w-1/2 md:w-full flex flex-col md:flex-row md:space-x-4">
            <div className="md:w-1/2">
              <h3 className="font-medium text-violet text-lg leading-[39.6px] md:leading-[52.8px]">
                Diseño Responsive
              </h3>
            </div>
            <div className="md:w-1/2">
              <p className="font-light text-sm md:text-md leading-[35.2px] text-grayDark">
                Sitio optimizado para su uso en dispositivos móviles, tablets y
                computadoras.
              </p>
            </div>
          </div>
          <div className="w-1/2 flex md:hidden  -mr-10 ">
            <Image
              className="w-full h-full"
              src={sofoconImg3}
              alt="audifonos"
            />
          </div>
        </div>
      </div>
      <div
        data-aos="fade"
        className="bg-background-gradient  flex flex-col md:flex-row rounded-tl-[40px] rounded-bl-[40px] md:rounded-[40px] md:border-[5px] border-l-[5px] border-t-[5px] border-b-[5px] border-violet md:pl-10 -mr-4 "
      >
        <div className="  md:w-1/2 flex flex-col justify-center px-4 md:px-20">
          <h3 className="font-semibold text-[4rem] md:text-[8rem] leading-[80px] md:leading-[140.4px] mb-4">
            AUDÍFONOS
          </h3>
          <p className="font-medium text-violet text-start text-[2rem] md:text-[3rem] leading-[55.2px] mb-10 md:mb-0">
            La herramienta para el <br /> negocio del futuro
          </p>
        </div>
        <div className="md:w-1/2 flex rounded-[40px]">
          <video
            src="/clips3D/audifonosVideo2.mp4"
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover rounded-l-[40px] md:rounded-[40px]"
          />
        </div>
      </div>
      <div
        data-aos="fade"
        className="pt-20 flex flex-col items-center space-y-10"
      >
        <h1 className=" font-light text-lg leading-[52.8px] text-center md:text-start">
          ¿Tienes alguna consulta?
        </h1>
        <Link href="https://wa.me/542616951550">
          <Button text={"Contáctanos"} />
        </Link>
      </div>
    </div>
  );
};
export default AudifonosPage;
