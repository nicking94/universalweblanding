import Image from "next/image";
import image1 from "../../../../../public/images/hopProject1.svg";
import image2 from "../../../../../public/images/hopProject2.svg";
import boxIcon from "../../../../../public/icons/box.png";
import mapIcon from "../../../../../public/icons/location.png";
import carIcon from "../../../../../public/icons/carIcon.png";
import ticketIcon from "../../../../../public/icons/ticket.png";
import Button from "@/components/Button/Button";
import sofoconImg from "../../../../../public/images/hopImg.svg";
import sofoconImg2 from "../../../../../public/images/hopImg2.svg";
import sofoconImg3 from "../../../../../public/images/sofoconProject3.svg";

const HopPage = () => {
  return (
    <div className="py-36 px-4 md:px-20 min-h-screen">
      <div className="flex flex-col items-center gap-[1rem]">
        <p className="font-medium text-xs border rounded-[7.75rem] min-w-[8rem] py-1.5 px-4 md:leading-[20.8px] text-center">
          Mobile App & Dashboard
        </p>
        <h1 className="font-semibold text-lg md:text-xl md:leading-[52.8px]">
          HOP
        </h1>
        <p className="text-violet font-medium text-sm md:leading-[24px]">
          Reserva viajes con confianza.
        </p>
      </div>
      <div className="flex w-full lg:h-[47rem] mt-10">
        <video
          src="/clips3D/hopVideo1.mp4"
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover rounded-[40px]"
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 p-4">
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
          Una app de reserva de viajes diseñada para optimizar el servicio de
          transporte en el sector hotelero, permitiendo que recepcionistas y
          conductores aumenten sus ingresos de manera segura y eficiente.
          Nuestra app no solo facilita la conexión entre hoteles y conductores,
          sino que también impulsa el crecimiento económico de sus usuarios. Con
          un sistema eficiente, transparente y rentable, te brindamos la
          oportunidad de expandir tus ingresos de manera segura  
        </p>
      </div>
      <div className="flex  flex-col gap-3">
        <p className="font-medium text-xs border rounded-[2.75rem] w-[8rem] py-1.5 px-4 leading-[20.8px] text-center">
          Mobile App
        </p>
        <div className="flex flex-col md:flex-row gap-8 ">
          <div className="bg-backgroundGray rounded-[10px] p-10 md:w-[40%] ">
            <h3 className="font-medium text-violet text-lg leading-[52.8px]">
              Sistema de Comisiones Justo
            </h3>
            <p className="text-violet font-light leading-[44px] text-xs">
              Los usuarios tienen incentivos para promover los servicios, sin
              costos ocultos.
            </p>
          </div>
          <div className="flex md:justify-end md:items-end bg-violet rounded-[10px]  md:w-[60%]">
            <Image
              className="2xl:w-full 2xl:pl-4 2xl:pt-4"
              src={image1}
              alt="hop"
            />
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-8 ">
          <div className="flex md:justify-end md:items-end bg-violet rounded-[10px]  md:w-[60%]">
            <Image
              className="2xl:w-full 2xl:pl-4 2xl:pt-4"
              src={image2}
              alt="hop"
            />
          </div>
          <div className="bg-backgroundGray rounded-[10px] p-10 md:w-[40%] ">
            <h3 className="font-medium text-violet text-lg leading-[52.8px]">
              Optimización del Servicio
            </h3>
            <p className="text-violet font-light leading-[44px] text-xs">
              Registro de historial de viajes y métricas para mejorar la
              rentabilidad.
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
                <Image src={boxIcon} alt="hop" />
                <p className="font-medium text-sm leading-[24px]">
                  Flexibilidad Horaria
                </p>
              </div>

              <p className="px-10 md:px-16 text-xs font-light leading-[20.8px] ">
                Conductores y recepcionistas pueden gestionar su tiempo y
                disponibilidad según su conveniencia, optimizando su carga de
                trabajo.
              </p>
            </div>
            <div className="gap-[10px] space-y-2">
              <div className="flex items-center gap-3">
                <Image src={mapIcon} alt="hop" />
                <p className="font-medium text-sm leading-[24px]">
                  Mayor Oportunidad de Negocios
                </p>
              </div>

              <p className="px-10 md:px-16 text-xs font-light leading-[20.8px] ">
                La app amplía la red de clientes potenciales, permitiendo que
                hoteles y conductores lleguen a más usuarios de manera sencilla,
                potenciando los ingresos de la empresa.
              </p>
            </div>
            <div className="gap-[10px] space-y-2">
              <div className="flex items-center gap-3">
                <Image src={ticketIcon} alt="hop" />
                <p className="font-medium text-sm leading-[24px]">
                  Facilidad de Uso
                </p>
              </div>

              <p className="px-10 md:px-16 text-xs font-light leading-[20.8px] ">
                Interfaz intuitiva para agilizar la gestión de reservas y
                disponibilidad de conductores, permitiendo una experiencia
                fluida y eficiente.
              </p>
            </div>
            <div className="gap-[10px] space-y-2">
              <div className="flex items-center gap-3">
                <Image src={carIcon} alt="hop" />
                <p className="font-medium text-sm leading-[24px]">
                  Soporte 24/7
                </p>
              </div>

              <p className="px-10 md:px-16 text-xs font-light leading-[20.8px] ">
                Asistencia disponible en todo momento para garantizar el mejor
                servicio.
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center md:w-1/2 text-white h-[20rem] md:h-auto mt-10 md:mt-0">
          <div className=" pointer-events-none absolute top-0 right-0 w-[15%] h-full bg-gradient-to-l from-[#ffffff] to-transparent z-10"></div>
          <Image className="w-full h-full" src={sofoconImg} alt="hop" />
        </div>
      </div>
      <div className="hidden md:flex  h-[40rem]">
        <Image className="w-full h-full" src={sofoconImg2} alt="hop" />
      </div>
      <div className="flex flex-col gap-[16px] py-10 md:py-20">
        <p className="font-medium text-xs border rounded-[2.75rem] w-[8rem] py-1.5 px-4 leading-[20.8px] text-center">
          Dashboard
        </p>
        <div className="flex md:gap-[60px] gap-4 ">
          <div className="w-1/2 md:w-full flex flex-col md:flex-row md:space-x-4">
            <div className="md:w-1/2">
              <h3 className="font-medium text-violet text-lg leading-[39.6px] md:leading-[52.8px]">
                Dashboard administrativo
              </h3>
            </div>
            <div className="md:w-1/2">
              <p className="font-light text-sm md:text-md leading-[35.2px] text-grayDark">
                Seguridad y Transparencia: Sistema de verificación de usuarios 
                y pagos seguros integrados por parte del administrados HOP.
              </p>
            </div>
          </div>
          <div className="w-1/2 flex md:hidden  -mr-10 ">
            <Image className="w-full h-full" src={sofoconImg3} alt="hop" />
          </div>
        </div>
      </div>
      <div className="bg-background-gradient  flex flex-col md:flex-row rounded-tl-[40px] rounded-bl-[40px] md:rounded-[40px] md:border-[5px] border-l-[5px] border-t-[5px] border-b-[5px] border-violet md:pl-10 -mr-4 ">
        <div className="  md:w-1/2 flex flex-col justify-center px-4 md:px-20">
          <h3 className="font-semibold text-[4rem] md:text-[8rem] leading-[80px] md:leading-[140.4px] mb-4">
            HOP
          </h3>
          <p className="font-medium text-violet text-md leading-[35.2px] mb-10 md:mb-0">
            La herramienta para el negocio del futuro
          </p>
        </div>
        <div className="md:w-1/2 flex rounded-[40px]">
          <video
            src="/clips3D/hopVideo2.mp4"
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
export default HopPage;
