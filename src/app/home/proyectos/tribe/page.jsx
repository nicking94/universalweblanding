"use client";
import Image from "next/image";
import image1 from "../../../../../public/images/tribeProject1.svg";
import image2 from "../../../../../public/images/tribeProject2.svg";
import peopleIcon from "../../../../../public/icons/people.png";
import filterIcon from "../../../../../public/icons/filter.png";
import refreshIcon from "../../../../../public/icons/refresh.png";
import bagIcon from "../../../../../public/icons/bag.png";
import Button from "@/components/Button/Button";
import sofoconImg from "../../../../../public/images/tribeImg.svg";
import sofoconImg2 from "../../../../../public/images/tribeProject3.svg";
import sofoconImg3 from "../../../../../public/images/sofoconProject3.svg";
import { useEffect, useRef, useState } from "react";

const TribePage = () => {
  return (
    <div className="py-36 px-4 md:px-20 min-h-screen">
      <div className="flex flex-col items-center gap-[1rem]">
        <p className="font-medium text-xs border rounded-[7.75rem] min-w-[8rem] py-1.5 px-4 md:leading-[20.8px] text-center">
          Mobile App
        </p>
        <h1 className="font-semibold text-lg md:text-xl md:leading-[52.8px]">
          TRIBE
        </h1>
        <p className="text-violet font-medium text-sm md:leading-[24px]">
          Conéctate con el mundo que te rodea.
        </p>
      </div>
      <div className="flex w-full lg:h-[47rem] mt-10">
        <video
          src="/clips3D/tribeVideo1.mp4"
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover rounded-[40px]"
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 p-2 md:p-4">
        <div className="flex flex-col items-center justify-center">
          <p className="font-semibold text-violet md:leading-[99.22px] text-lg md:text-xxl">
            +50
          </p>
          <p className="text-center font-medium md:leading-[24px] text-xxs md:text-sm">
            Features en el dashboard
          </p>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <p className="font-semibold text-violet md:leading-[99.22px] text-lg md:text-xxl">
            +200%
          </p>
          <p className="text-center font-medium md:leading-[24px] text-xxs md:text-sm">
            Mejora en administración de la empresa
          </p>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <p className="font-semibold text-violet md:leading-[99.22px] text-lg md:text-xxl">
            +90%
          </p>
          <p className="text-center font-medium md:leading-[24px] text-xxs md:text-sm">
            Mejora en eficacia de ventas
          </p>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <p className="font-semibold text-violet md:leading-[99.22px] text-lg md:text-xxl">
            +120%
          </p>
          <p className="text-center font-medium md:leading-[24px] text-xxs md:text-sm">
            Satisfacción del cliente
          </p>
        </div>
      </div>
      <div className="flex md:justify-center items-center py-6 md:py-20 md:px-32">
        <p className="italic text-sm leading-[34px] md:text-center text-textGray">
          Presentamos TRIBE, la aplicación de redes sociales que transforma la
          forma en que te conectas. Con un mapa mundial interactivo, puedes
          descubrir fácilmente personas, lugares y eventos que coincidan con tus
          intereses.
        </p>
      </div>
      <div className="flex  flex-col gap-3">
        <p className="font-medium text-xs border rounded-[2.75rem] w-[8rem] py-1.5 px-4 leading-[20.8px] text-center">
          Mobile App
        </p>
        <div className="flex flex-col md:flex-row gap-8 ">
          <div className="bg-backgroundGray rounded-[10px] p-10 md:w-[40%] ">
            <h3 className="font-medium text-violet text-lg leading-[52.8px]">
              Busque, explore y conéctese
            </h3>
            <p className="text-violet font-light leading-[44px] text-xs">
              Comparte tus aventuras a través de publicaciones e historias, e
              interactúa con una comunidad que siempre está en movimiento.
            </p>
          </div>
          <div className="overflow-hidden flex md:justify-end md:items-end bg-violet rounded-[10px] px-2 md:pt-10 md:w-[60%]">
            <Image src={image1} alt="tribe" />
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-8 ">
          <div className="flex md:justify-end md:items-end bg-violet rounded-[10px] px-2 md:pt-10 md:w-[60%]">
            <Image src={image2} alt="tribe" />
          </div>
          <div className="bg-backgroundGray rounded-[10px] p-10 md:w-[40%] ">
            <h3 className="font-medium text-violet text-lg leading-[52.8px]">
              Función de mapa interactivo
            </h3>
            <p className="text-violet font-light leading-[44px] text-xs">
              La aplicación tiene como objetivo fomentar la exploración del
              mundo real y las conexiones virtuales, mejorando la interacción
              social tanto local como global.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row py-10 md:py-20">
        <div className="md:w-1/2">
          <p className="font-light text-textGray text-md mb-4">
            Más funcionalidades
          </p>
          <div className="space-y-8">
            <div className="gap-[10px] space-y-2">
              <div className="flex items-center gap-3">
                <Image src={peopleIcon} alt="tribe" />
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
                <Image src={filterIcon} alt="tribe" />
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
                <Image src={refreshIcon} alt="tribe" />
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
                <Image src={bagIcon} alt="tribe" />
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
          <Image
            className="w-[15rem] lg:w-[40rem] h-[27rem] lg:h-[40rem]"
            src={sofoconImg}
            alt="tribe"
          />
        </div>
      </div>
      <div className="hidden md:flex  h-[40rem]">
        <Image className="w-full h-full" src={sofoconImg2} alt="tribe" />
      </div>
      <div className="flex flex-col gap-[16px] py-10 md:py-20">
        <div className="flex md:gap-[60px] gap-4 ">
          <div className="w-1/2 md:w-full flex flex-col md:flex-row md:space-x-4">
            <div className="md:w-1/2">
              <h3 className="font-medium text-violet text-lg leading-[39.6px] md:leading-[52.8px]">
                Busca conexiones cercanas con intereses comunes
              </h3>
            </div>
            <div className="md:w-1/2">
              <p className="font-light text-sm md:text-md leading-[35.2px] text-grayDark">
                Nuestra app utiliza la ubicación para ayudarte a encontrar y
                conocer usuarios con afinidades en común, facilitando encuentros
                significativos y conexiones auténticas.
              </p>
            </div>
          </div>
          <div className="w-1/2 flex md:hidden  -mr-10 ">
            <Image className="w-full h-full" src={sofoconImg3} alt="tribe" />
          </div>
        </div>
      </div>
      <div className="bg-background-gradient  flex flex-col md:flex-row rounded-tl-[40px] rounded-bl-[40px] md:rounded-[40px] md:border-[5px] border-l-[5px] border-t-[5px] border-b-[5px] border-violet md:pl-10 -mr-4 ">
        <div className="  md:w-1/2 flex flex-col justify-center px-4 md:px-20">
          <h3 className="font-semibold text-[4rem] md:text-[8rem] leading-[80px] md:leading-[140.4px] mb-4">
            TRIBE
          </h3>
          <p className="font-medium text-violet text-start text-[2rem] md:text-[3rem] leading-[55.2px] mb-10 md:mb-0">
            La herramienta para el <br /> negocio del futuro
          </p>
        </div>
        <div className="md:w-1/2 flex rounded-[40px]">
          <video
            src="/clips3D/tribeVideo2.mp4"
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover rounded-l-[40px] md:rounded-[40px]"
          />
        </div>
      </div>
      <div className="pt-20 flex flex-col items-center space-y-10">
        <h1 className=" font-light text-lg leading-[52.8px] text-center md:text-start">
          ¿Tienes alguna consulta?
        </h1>
        <Button text={"Contáctanos"} />
      </div>
    </div>
  );
};
export default TribePage;
