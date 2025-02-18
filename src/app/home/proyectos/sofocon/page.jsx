"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import image1 from "../../../../../public/images/projectsSofocon1.svg";
import image2 from "../../../../../public/images/projectsSofocon2.svg";
import boxIcon from "../../../../../public/icons/box.png";
import mapIcon from "../../../../../public/icons/location.png";
import carIcon from "../../../../../public/icons/carIcon.png";
import ticketIcon from "../../../../../public/icons/ticket.png";
import Button from "@/components/Button/Button";
import sofoconImg from "../../../../../public/images/recamImg.svg";
import sofoconImg2 from "../../../../../public/images/sofoconProject2.svg";
import sofoconImg3 from "../../../../../public/images/sofoconProject3.svg";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const SofoconPage = () => {
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
  return (
    <div className="py-36 px-4 md:px-20 min-h-screen">
      <div className="flex flex-col items-center gap-[1rem]">
        <p className="font-medium text-xs border rounded-[7.75rem] min-w-[8rem] py-1.5 px-4 md:leading-[20.8px] text-center">
          Dashboard & Mobile App
        </p>
        <h1 className="font-semibold text-lg md:text-xl md:leading-[52.8px]">
          SOFOCON
        </h1>
        <p className="text-violet font-medium text-sm md:leading-[24px]">
          Sistema integral de gestión para empresas de extintores
        </p>
      </div>
      <div className="flex w-full lg:h-[47rem] mt-10">
        <video
          src="https://s3.novexisconsulting.xyz/novexis-web/sofoconProyecto1.mp4"
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
          Administración optimizada de la empresa con sistema cerrado, diseñado
          para gestionar empleados, clientes, ventas y stock de productos en
          tiempo real. <br /> <br /> App para vendedores que permite a los
          vendedores gestionar pedidos de manera rápida y sencilla. Pueden
          registrar nuevas órdenes, actualizar el estado de los clientes y
          generar reportes desde cualquier lugar, asegurando un flujo de trabajo
          ágil y eficiente.
        </p>
      </div>
      <div data-aos="fade" className="flex  flex-col gap-3">
        <p className="font-medium text-xs border rounded-[2.75rem] w-[8rem] py-1.5 px-4 leading-[20.8px] text-center">
          Dashboard
        </p>
        <div className="flex flex-col md:flex-row gap-8 ">
          <div className="bg-backgroundGray rounded-[10px] p-10 md:w-[40%] ">
            <h3 className="font-medium text-violet text-lg leading-[52.8px]">
              Análisis de métricas de ventas e inventario
            </h3>
            <p className="text-violet font-light leading-[44px] text-xs">
              Descubrirás informes claros y detallados, tanto mensuales como
              anuales, que te facilitarán la toma de decisiones informadas y la
              planificación estratégica.
            </p>
          </div>
          <div className="flex md:justify-end md:items-end bg-violet rounded-[10px]  md:w-[60%]">
            <Image
              className="2xl:w-full 2xl:pl-4 2xl:pt-4"
              src={image1}
              alt="sofocon"
            />
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-8 ">
          <div className="flex md:justify-end md:items-end bg-violet rounded-[10px]  md:w-[60%]">
            <Image
              className="2xl:w-full 2xl:pl-4 2xl:pt-4"
              src={image2}
              alt="sofocon"
            />
          </div>
          <div className="bg-backgroundGray rounded-[10px] p-10 md:w-[40%] ">
            <h3 className="font-medium text-violet text-lg leading-[52.8px]">
              Gestión y administración de personal
            </h3>
            <p className="text-violet font-light leading-[44px] text-xs">
              Asignación y modificación rápida de roles y permisos, garantizando
              que cada empleado sólo tenga acceso a la información necesaria,
              mejorando la seguridad y la organización.
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
                <Image src={boxIcon} alt="sofocon" />
                <p className="font-medium text-sm leading-[24px]">
                  Control de stock y gestión de productos
                </p>
              </div>

              <p className="px-10 md:px-16 text-xs font-light leading-[20.8px] ">
                Permite una gestión precisa del inventario, garantizando que
                siempre haya suficientes productos y que se gestionen
                adecuadamente para evitar errores en la distribución.
              </p>
            </div>
            <div className="gap-[10px] space-y-2">
              <div className="flex items-center gap-3">
                <Image src={mapIcon} alt="sofocon" />
                <p className="font-medium text-sm leading-[24px]">
                  Localización en tiempo real de vendedores
                </p>
              </div>

              <p className="px-10 md:px-16 text-xs font-light leading-[20.8px] ">
                Ofrece la ubicación en tiempo real de los proveedores, lo que
                facilita el seguimiento de su progreso en las rutas y el ajuste
                de la logística según sea necesario.
              </p>
            </div>
            <div className="gap-[10px] space-y-2">
              <div className="flex items-center gap-3">
                <Image src={ticketIcon} alt="sofocon" />
                <p className="font-medium text-sm leading-[24px]">
                  Automatización de la orden de compra
                </p>
              </div>

              <p className="px-10 md:px-16 text-xs font-light leading-[20.8px] ">
                La digitalización y automatización de las órdenes de compra
                mejora la eficiencia, reduce el error humano y acelera el flujo
                de trabajo desde la solicitud hasta la entrega.
              </p>
            </div>
            <div className="gap-[10px] space-y-2">
              <div className="flex items-center gap-3">
                <Image src={carIcon} alt="sofocon" />
                <p className="font-medium text-sm leading-[24px]">
                  Mejoras en la coordinación y comunicación interna
                </p>
              </div>

              <p className="px-10 md:px-16 text-xs font-light leading-[20.8px] ">
                Un tablero de control centralizado facilita la transparencia y
                el acceso a información actualizada, lo que mejora la
                coordinación entre equipos y departamentos, optimizando el flujo
                de trabajo.
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center md:w-1/2 text-white h-[20rem] md:h-auto mt-10 md:mt-0">
          <div className=" pointer-events-none absolute top-0 right-0 w-[15%] h-full bg-gradient-to-l from-[#ffffff] to-transparent z-10"></div>
          <Image className="w-full h-full" src={sofoconImg} alt="sofocon" />
        </div>
      </div>
      <div data-aos="fade" className="hidden md:flex  h-[40rem]">
        <Image className="w-full h-full" src={sofoconImg2} alt="sofocon" />
      </div>
      <div data-aos="fade" className="flex flex-col gap-[16px] py-10 md:py-20">
        <p className="font-medium text-xs border rounded-[2.75rem] w-[8rem] py-1.5 px-4 leading-[20.8px] text-center">
          Mobile app
        </p>
        <div className="flex md:gap-[60px] gap-4 ">
          <div className="w-1/2 md:w-full flex flex-col md:flex-row md:space-x-4">
            <div className="md:w-1/2">
              <h3 className="font-medium text-violet text-lg leading-[39.6px] md:leading-[52.8px]">
                Asignación y gestión de rutas de venta
              </h3>
            </div>
            <div className="md:w-1/2">
              <p className="font-light text-sm md:text-md leading-[35.2px] text-grayDark">
                Fácil creación y delegación de rutas optimizadas para
                vendedores, garantizando que cada vendedor tenga una ruta clara
                y eficiente.
              </p>
            </div>
          </div>
          <div className="w-1/2 flex md:hidden -mr-10 ">
            <Image className="w-full h-full" src={sofoconImg3} alt="sofocon" />
          </div>
        </div>
      </div>
      <div
        data-aos="fade"
        className="bg-background-gradient  flex flex-col md:flex-row rounded-tl-[40px] rounded-bl-[40px] md:rounded-[40px] md:border-[5px] border-l-[5px] border-t-[5px] border-b-[5px] border-violet md:pl-10 -mr-4 "
      >
        <div className="  md:w-1/2 flex flex-col justify-center px-4 md:px-20">
          <h3 className="font-semibold text-[4rem] leading-[80px] md:leading-[140.4px]">
            SOFOCON
          </h3>
          <p className="font-medium text-violet text-start text-md leading-[35.2px] mb-10 md:mb-0">
            La herramienta para el <br /> negocio del futuro
          </p>
        </div>
        <div className="md:w-1/2 flex rounded-[40px]">
          <video
            src="https://s3.novexisconsulting.xyz/novexis-web/sofoconVideo1.mp4"
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
        <Button target="_blank" text={"Contáctanos"} />
        </Link>
      </div>
    </div>
  );
};
export default SofoconPage;
