"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import image1 from "../../../../../public/images/projectsRecam1.svg";
import image2 from "../../../../../public/images/projectsRecam2.svg";
import calendarIcon from "../../../../../public/icons/calendar.png";
import categoryIcon from "../../../../../public/icons/category.png";
import messageIcon from "../../../../../public/icons/messages.png";
import eyeIcon from "../../../../../public/icons/eye.png";
import Button from "@/components/Button/Button";
import sofoconImg from "../../../../../public/images/recamImg.svg";
import sofoconImg2 from "../../../../../public/images/recamImg2.svg";
import sofoconImg3 from "../../../../../public/images/recamProject3.svg";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const RecamPage = () => {
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
          Web App
        </p>
        <h1 className="font-semibold text-lg md:text-xl md:leading-[52.8px]">
          RECam
        </h1>
        <p className="text-violet font-medium text-sm md:leading-[24px]">
          Graba. Supervisa. Confía.
        </p>
      </div>
      <div className="flex w-full lg:h-[47rem] 2xl:mt-10">
        <video
          src="/clips3D/recamVideo1.mp4"
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
          RECam. es una aplicación de escritorio y móvil que permite la
          supervisión de exámenes en entornos remotos, otorgando a los docentes
          la posibilidad monitorear en tiempo real la pantalla y cámara de sus
          estudiantes durante el examen, garantizando una experiencia de
          supervisión fluida y confiable.
        </p>
      </div>
      <div data-aos="fade" className="flex  flex-col gap-3">
        <p className="font-medium text-xs border rounded-[2.75rem] w-[8rem] py-1.5 px-4 leading-[20.8px] text-center">
          Dashboard
        </p>
        <div className="flex flex-col md:flex-row gap-8 ">
          <div className="bg-backgroundGray rounded-[10px] p-10 md:w-[40%] ">
            <h3 className="font-medium text-violet text-lg leading-[52.8px]">
              Supervisión sin distracciones innecesarias
            </h3>
            <p className="text-violet font-light leading-[44px] text-xs">
              Esquema de navegación que facilita el acceso a todas las funciones
              de supervisión con claridad y facilidad.
            </p>
          </div>
          <div className="flex md:justify-end md:items-end bg-violet rounded-[10px]  md:w-[60%]">
            <Image
              className="2xl:w-full 2xl:pl-4 2xl:pt-4"
              src={image1}
              alt="recam"
            />
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-8 ">
          <div className="flex md:justify-end md:items-end bg-violet rounded-[10px]  md:w-[60%]">
            <Image
              className="2xl:w-full 2xl:pl-4 2xl:pt-4"
              src={image2}
              alt="recam"
            />
          </div>
          <div className="bg-backgroundGray rounded-[10px] p-10 md:w-[40%] ">
            <h3 className="font-medium text-violet text-lg leading-[52.8px]">
              Comunicación directa entre docente y estudiante
            </h3>
            <p className="text-violet font-light leading-[44px] text-xs">
              Aseguramos que cualquier duda pueda ser resuelta en tiempo real
              sin afectar el flujo del examen.
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
                <Image src={calendarIcon} alt="recam" />
                <p className="font-medium text-sm leading-[24px]">
                  Exámenes programados
                </p>
              </div>

              <p className="px-10 md:px-16 text-xs font-light leading-[20.8px] ">
                Los examenes podrán ser creados con anticipación, permitiendo
                mayor  planificación y organización  al profesor.
              </p>
            </div>
            <div className="gap-[10px] space-y-2">
              <div className="flex items-center gap-3">
                <Image src={categoryIcon} alt="recam" />
                <p className="font-medium text-sm leading-[24px]">
                  Gestión de grupos de participantes
                </p>
              </div>

              <p className="px-10 md:px-16 text-xs font-light leading-[20.8px] ">
                El profesor podrá generar grupos de estudiantes facilitanto la
                creación de exámenes.
              </p>
            </div>
            <div className="gap-[10px] space-y-2">
              <div className="flex items-center gap-3">
                <Image src={eyeIcon} alt="recam" />
                <p className="font-medium text-sm leading-[24px]">
                  Control  de participación de grupos de estudiantes en vivo
                </p>
              </div>

              <p className="px-10 md:px-16 text-xs font-light leading-[20.8px] ">
                Durante el examen el profesor será capaz de observar en tiempo
                real la cámara de hasta 42 estudiantes en simultaneo.
              </p>
            </div>
            <div className="gap-[10px] space-y-2">
              <div className="flex items-center gap-3">
                <Image src={messageIcon} alt="recam" />
                <p className="font-medium text-sm leading-[24px]">
                  Seguimiento personalizado
                </p>
              </div>

              <p className="px-10 md:px-16 text-xs font-light leading-[20.8px] ">
                Cámara y pantalla en tiempo real del estudiante para hacer un
                seguimiento focalizado para el cumplimiento de las normas.
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center md:w-1/2 text-white h-[20rem] md:h-auto mt-10 md:mt-0">
          <div className=" pointer-events-none absolute top-0 right-0 w-[15%] h-full bg-gradient-to-l from-[#ffffff] to-transparent z-10"></div>
          <Image className="w-full h-full" src={sofoconImg} alt="recam" />
        </div>
      </div>
      <div data-aos="fade" className="hidden md:flex  h-[40rem]">
        <Image className="w-full h-full" src={sofoconImg2} alt="recam" />
      </div>
      <div data-aos="fade" className="flex flex-col gap-[16px] py-10 md:py-20">
        <p className="font-medium text-xs border rounded-[2.75rem] w-[8rem] py-1.5 px-4 leading-[20.8px] text-center">
          Desktop
        </p>
        <div className="flex md:gap-[60px] gap-4 ">
          <div className="w-1/2 md:w-full flex flex-col md:flex-row md:space-x-4">
            <div className="md:w-1/2">
              <h3 className="font-medium text-violet text-lg leading-[39.6px] md:leading-[52.8px]">
                Chat integrado y Almacenamiento de examenes
              </h3>
            </div>
            <div className="md:w-1/2">
              <p className="font-light text-sm md:text-md leading-[35.2px] text-grayDark">
                Posibilidad de enviar mensajes tanto al grupo como a los
                participantes individualmente. Al finalizar el tiempo del exámen
                las grabaciones serán guardadas para su posterior revisión.
              </p>
            </div>
          </div>
          <div className="w-1/2 flex md:hidden -mr-10 ">
            <Image className="w-full h-full" src={sofoconImg3} alt="recam" />
          </div>
        </div>
      </div>
      <div
        data-aos="fade"
        className="bg-background-gradient  flex flex-col md:flex-row rounded-tl-[40px] rounded-bl-[40px] md:rounded-[40px] md:border-[5px] border-l-[5px] border-t-[5px] border-b-[5px] border-violet md:pl-10 -mr-4 "
      >
        <div className="md:w-1/2 flex flex-col justify-center px-4 md:px-0">
          <h3 className="font-semibold text-xl leading-[70.4px]">RECam</h3>
          <p className="font-medium text-violet text-md leading-[35.2px] mb-10 md:mb-0">
            Tecnología al servicio de la educación. 
          </p>
        </div>
        <div className="md:w-1/2 flex  rounded-[40px] ">
          <video
            src="/clips3D/recamVideo2.mp4"
            autoPlay
            muted
            playsInline
            className="w-full h-full object-fill rounded-l-[40px] md:rounded-[40px]"
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
export default RecamPage;
