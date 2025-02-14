"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import image1 from "../../../../../public/images/roxBarfProject1.svg";
import image2 from "../../../../../public/images/roxBarfProject2.svg";
import dangerIcon from "../../../../../public/icons/danger.png";
import heartIcon from "../../../../../public/icons/heart.png";
import filterIcon from "../../../../../public/icons/filter.png";
import bagIcon from "../../../../../public/icons/bag2.png";
import Button from "@/components/Button/Button";
import sofoconImg from "../../../../../public/images/roxbarfImg.svg";
import sofoconImg2 from "../../../../../public/images/roxBarfProject3.svg";
import sofoconImg3 from "../../../../../public/images/roxbarfProject3.svg";
import Link from "next/link";

const RoxbarfPage = () => {
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
          ROXBARF
        </h1>
        <p className="text-violet font-medium text-sm md:leading-[24px]">
          Graba. Supervisa. Confía
        </p>
      </div>
      <div className="flex w-full lg:h-[47rem] mt-10">
        <video
          src="/clips3D/roxbarfVideo1.mp4"
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover rounded-[40px]"
        />
      </div>
      <div data-aos="fade" className="grid grid-cols-2 md:grid-cols-4 p-4">
        <div className="flex flex-col items-center justify-center">
          <p className="font-semibold text-violet md:leading-[99.22px] text-lg md:text-xxl">
            +100
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
            Mejoras
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
            +120
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
          Rox Barf está diseñada para facilitar la compra de productos y
          servicios para mascotas, ofreciendo una experiencia personalizada y
          conveniente para los dueños de animales. Su objetivo es centralizar
          todo lo relacionado con el cuidado de las mascotas, desde la compra de
          alimentos y accesorios hasta la programación de servicios
          veterinarios.
        </p>
      </div>
      <div data-aos="fade" className="flex  flex-col gap-3">
        <p className="font-medium text-xs border rounded-[2.75rem] w-[8rem] py-1.5 px-4 leading-[20.8px] text-center">
          Mobile App
        </p>
        <div className="flex flex-col md:flex-row gap-8 ">
          <div className="bg-backgroundGray rounded-[10px] p-10 md:w-[40%] ">
            <h3 className="font-medium text-violet text-lg leading-[52.8px]">
              Venta de Productos
            </h3>
            <ul className="text-violet font-light leading-[44px] text-xs list-disc">
              <li>
                Amplio catálogo de productos para mascotas, incluyendo
                alimentos, correas, caniles, juguetes, y más.
              </li>
              <li>
                Búsqueda y filtrado por tipo de mascota, marca, categoría o
                necesidad específica.
              </li>
            </ul>
          </div>
          <div className="flex md:justify-end md:items-end bg-violet rounded-[10px] p-2 md:pt-10 md:w-[60%]">
            <Image src={image1} alt="roxbarf" />
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-8 ">
          <div className="flex justify-center bg-violet rounded-[10px] p-2 md:pt-10 md:w-[60%]">
            <Image src={image2} alt="roxbarf" />
          </div>
          <div className="bg-backgroundGray rounded-[10px] p-10 md:w-[40%] ">
            <h3 className="font-medium text-violet text-lg leading-[52.8px]">
              Servicios Veterinarios
            </h3>
            <ul className="text-violet font-light leading-[44px] text-xs list-disc">
              <li>
                Agendamiento de citas veterinarias directamente desde la app.
              </li>
              <li>
                Recordatorios para vacunas, desparasitación y chequeos
                regulares.
              </li>
            </ul>
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
                <Image src={dangerIcon} alt="roxbarf" />
                <p className="font-medium text-sm leading-[24px]">
                  Sistema de Fidelidad
                </p>
              </div>

              <ul className="list-disc px-10 md:px-16 text-xs font-light leading-[20.8px] ">
                <li>Acumulación de puntos por cada compra realizada.</li>
                <li>
                  Canje de puntos por descuentos, productos gratuitos o
                  servicios especiales.
                </li>
              </ul>
            </div>
            <div className="gap-[10px] space-y-2">
              <div className="flex items-center gap-3">
                <Image src={heartIcon} alt="roxbarf" />
                <p className="font-medium text-sm leading-[24px]">
                  Perfil de Mascotas
                </p>
              </div>

              <ul className="list-disc px-10 md:px-16 text-xs font-light leading-[20.8px] ">
                <li>
                  Creación de perfiles personalizados para cada mascota,
                  incluyendo nombre, raza, edad, peso y necesidades específicas.
                </li>
                <li>
                  Notificaciones personalizadas basadas en las necesidades de
                  cada mascota, como:
                  <br />
                  -Recordatorios para comprar alimentos. <br />
                  -Alertas para visitas al veterinario. <br />
                  -Avisos sobre vacunas o tratamientos médicos. <br />
                </li>
              </ul>
            </div>
            <div className="gap-[10px] space-y-2">
              <div className="flex items-center gap-3">
                <Image src={filterIcon} alt="roxbarf" />
                <p className="font-medium text-sm leading-[24px]">
                  Notificaciones Inteligentes
                </p>
              </div>
              <ul className="list-disc px-10 md:px-16 text-xs font-light leading-[20.8px] ">
                <li>
                  Alertas personalizadas según el historial de compras y el
                  perfil de la mascota.
                </li>
                <li>
                  Sugerencias de productos o servicios basadas en las
                  necesidades detectadas.
                </li>
              </ul>
            </div>
            <div className="gap-[10px] space-y-2">
              <div className="flex items-center gap-3">
                <Image src={bagIcon} alt="roxbarf" />
                <p className="font-medium text-sm leading-[24px]">
                  Historial de Compras y Servicios
                </p>
              </div>
              <ul className="list-disc px-10 md:px-16 text-xs font-light leading-[20.8px] ">
                <li>Registro de todas las compras y servicios contratados.</li>
                <li>
                  Acceso rápido a pedidos recurrentes (como alimentos) para
                  facilitar la recompra.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center md:w-1/2 text-white h-[20rem] md:h-auto mt-10 md:mt-0">
          <div className=" pointer-events-none absolute top-0 right-0 w-[15%] h-full bg-gradient-to-l from-[#ffffff] to-transparent z-10"></div>
          <Image
            className="w-[15rem] lg:w-[40rem] h-[27rem] lg:h-[40rem]"
            src={sofoconImg}
            alt="roxbarf"
          />
        </div>
      </div>
      <div data-aos="fade" className="hidden md:flex  h-[40rem]">
        <Image className="w-full h-full" src={sofoconImg2} alt="roxbarf" />
      </div>
      <div data-aos="fade" className="flex flex-col gap-[16px] py-10 md:py-20">
        <p className="font-medium text-xs border rounded-[2.75rem] w-[8rem] py-1.5 px-4 leading-[20.8px] text-center">
          Mobile app
        </p>
        <div className="flex md:gap-[60px] gap-4 ">
          <div className="w-1/2 md:w-full flex flex-col md:flex-row md:space-x-4">
            <div className="md:w-1/2">
              <h3 className="font-medium text-violet text-lg leading-[39.6px] md:leading-[52.8px]">
                Integración con Tiendas Físicas
              </h3>
            </div>
            <div className="md:w-1/2">
              <p className="font-light text-sm md:text-md leading-[35.2px] text-grayDark">
                Opción para recoger productos en tiendas cercanas o recibirlos a
                domicilio. Localización de veterinarias y tiendas asociadas
                mediante un mapa integrado.
              </p>
            </div>
          </div>
          <div className="w-1/2 flex md:hidden  -mr-10 ">
            <Image className="w-full h-full" src={sofoconImg3} alt="roxbarf" />
          </div>
        </div>
      </div>
      <div
        data-aos="fade"
        className="bg-background-gradient  flex flex-col md:flex-row rounded-tl-[40px] rounded-bl-[40px] md:rounded-[40px] md:border-[5px] border-l-[5px] border-t-[5px] border-b-[5px] border-violet md:pl-10 -mr-4 "
      >
        <div className="  md:w-1/2 flex flex-col justify-center px-4 md:px-20">
          <h3 className="font-semibold text-[4rem] md:text-[8rem] leading-[80px] md:leading-[140.4px] mb-4">
            ROXBARF
          </h3>
          <p className="font-medium text-violet text-start text-[2rem] md:text-[3rem] leading-[55.2px] mb-10 md:mb-0">
            La herramienta para el <br /> negocio del futuro
          </p>
        </div>
        <div className="md:w-1/2 flex rounded-[40px]">
          <video
            src="/clips3D/roxbarfVideo2.mp4"
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
export default RoxbarfPage;
