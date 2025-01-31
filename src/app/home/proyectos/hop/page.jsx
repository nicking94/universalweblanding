import Image from "next/image";
import image1 from "../../../../../public/images/projectsRecam1.svg";
import image2 from "../../../../../public/images/projectsRecam2.svg";
import boxIcon from "../../../../../public/icons/box.png";
import mapIcon from "../../../../../public/icons/location.png";
import carIcon from "../../../../../public/icons/carIcon.png";
import ticketIcon from "../../../../../public/icons/ticket.png";
import Button from "@/components/Button/Button";

const HopPage = () => {
  return (
    <div className="py-36 px-20 bg-background-gradient min-h-screen">
      <div className="flex flex-col items-center gap-[1rem]">
        <p className="font-medium text-xs border rounded-[7.75rem] min-w-[8rem] py-1.5 px-4 leading-[20.8px] text-center">
          Mobile App
        </p>
        <h1 className="font-semibold text-xl leading-[52.8px]">HOP</h1>
        <p className="text-violet font-medium text-sm leading-[24px]">
          Graba. Supervisa. Confía
        </p>
      </div>
      <div className="bg-slate-400 flex justify-center items-center h-[35rem] mt-10 text-white">
        video
      </div>
      <div className="flex justify-between p-4">
        <div className="flex flex-col items-center justify-center">
          <p className="font-semibold text-violet leading-[99.22px] text-xxl">
            +100
          </p>
          <p className="text-center font-medium leading-[24px] text-sm">
            Features en el dashboard
          </p>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <p className="font-semibold text-violet leading-[99.22px] text-xxl">
            +200%
          </p>
          <p className="text-center font-medium leading-[24px] text-sm">
            Mejora en administración de la empresa
          </p>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <p className="font-semibold text-violet leading-[99.22px] text-xxl">
            +90%
          </p>
          <p className="text-center font-medium leading-[24px] text-sm">
            Mejora en eficacia de ventas
          </p>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <p className="font-semibold text-violet leading-[99.22px] text-xxl">
            +120
          </p>
          <p className="text-center font-medium leading-[24px] text-sm">
            Clientes satisfechos
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center py-20 px-32">
        <p className="italic text-sm leading-[34px] text-center text-textGray">
          HOP. es una aplicación de escritorio y móvil que permite la
          supervisión de exámenes en entornos remotos, otorgando a los docentes
          la posibilidad monitorear en tiempo real la pantalla y cámara de sus
          estudiantes durante el examen, garantizando una experiencia de
          supervisión fluida y confiable.
        </p>
      </div>
      <div className="flex  flex-col gap-3">
        <p className="font-medium text-xs border rounded-[2.75rem] w-[8rem] py-1.5 px-4 leading-[20.8px] text-center">
          Dashboard
        </p>
        <div className="flex gap-8 ">
          <div className="bg-backgroundGray rounded-[10px] p-10 w-[40%] ">
            <h3 className="font-medium text-violet text-lg leading-[52.8px]">
              Análisis de métricas de ventas e inventario
            </h3>
            <p className="text-violet font-light leading-[44px] text-xs">
              Descubrirás informes claros y detallados, tanto mensuales como
              anuales, que te facilitarán la toma de decisiones informadas y la
              planificación estratégica.
            </p>
          </div>
          <div className="flex justify-end items-end bg-violet rounded-[10px] pt-10 w-[60%]">
            <Image src={image1} alt="hop1" />
          </div>
        </div>
        <div className="flex gap-8">
          <div className="flex justify-center items-end bg-violet rounded-[10px] pt-10 w-[60%]">
            <Image src={image2} alt="hop1" />
          </div>
          <div className=" bg-backgroundGray rounded-[10px] p-10 w-[40%]">
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

      <div className="flex py-20">
        <div className="w-1/2">
          <p className="font-light text-textGray text-md mb-4">
            Más funcionalidades
          </p>
          <div className="space-y-8">
            <div className="gap-[10px] space-y-2">
              <div className="flex items-center gap-3">
                <Image src={boxIcon} />
                <p className="font-medium text-sm leading-[24px]">
                  Control de stock y gestión de productos
                </p>
              </div>

              <p className="px-16 text-xs font-light leading-[20.8px] ">
                Permite una gestión precisa del inventario, garantizando que
                siempre haya suficientes productos y que se gestionen
                adecuadamente para evitar errores en la distribución.
              </p>
            </div>
            <div className="gap-[10px] space-y-2">
              <div className="flex items-center gap-3">
                <Image src={mapIcon} />
                <p className="font-medium text-sm leading-[24px]">
                  Localización en tiempo real de vendedores
                </p>
              </div>

              <p className="px-16 text-xs font-light leading-[20.8px] ">
                Ofrece la ubicación en tiempo real de los proveedores, lo que
                facilita el seguimiento de su progreso en las rutas y el ajuste
                de la logística según sea necesario.
              </p>
            </div>
            <div className="gap-[10px] space-y-2">
              <div className="flex items-center gap-3">
                <Image src={ticketIcon} />
                <p className="font-medium text-sm leading-[24px]">
                  Automatización de la orden de compra
                </p>
              </div>

              <p className="px-16 text-xs font-light leading-[20.8px] ">
                La digitalización y automatización de las órdenes de compra
                mejora la eficiencia, reduce el error humano y acelera el flujo
                de trabajo desde la solicitud hasta la entrega.
              </p>
            </div>
            <div className="gap-[10px] space-y-2">
              <div className="flex items-center gap-3">
                <Image src={carIcon} />
                <p className="font-medium text-sm leading-[24px]">
                  Mejoras en la coordinación y comunicación interna
                </p>
              </div>

              <p className="px-16 text-xs font-light leading-[20.8px] ">
                Un tablero de control centralizado facilita la transparencia y
                el acceso a información actualizada, lo que mejora la
                coordinación entre equipos y departamentos, optimizando el flujo
                de trabajo.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-1/2 bg-slate-400 text-white">
          video
        </div>
      </div>
      <div className="flex justify-center items-center bg-slate-400 text-white h-[40rem]">
        Imagenes
      </div>
      <div className="flex flex-col gap-[16px] py-20">
        <p className="font-medium text-xs border rounded-[2.75rem] w-[8rem] py-1.5 px-4 leading-[20.8px] text-center">
          Mobile app
        </p>
        <div className="flex gap-[60px]">
          <div className="w-1/2">
            <h3 className="font-medium text-violet text-lg leading-[52.8px]">
              Asignación y gestión de rutas de venta
            </h3>
          </div>
          <div className="w-1/2">
            <p className="font-light text-md leading-[35.2px] text-grayDark">
              Fácil creación y delegación de rutas optimizadas para vendedores,
              garantizando que cada vendedor tenga una ruta clara y eficiente.
            </p>
          </div>
        </div>
      </div>
      <div className="flex rounded-[40px] border-[5px] border-violet px-10">
        <div className="w-1/2 flex flex-col justify-center">
          <h3 className="font-semibold text-xl leading-[70.4px]">HOP</h3>
          <p className="font-medium text-violet text-md leading-[35.2px]">
            La herramienta para el negocio del futuro
          </p>
        </div>
        <div className="w-1/2 flex justify-center items-center text-white bg-slate-400 h-[30rem] ">
          video
        </div>
      </div>
      <div className="pt-20 flex flex-col items-center space-y-10">
        <h1 className="font-light text-lg leading-[52.8px]">
          ¿Tienes alguna consulta?
        </h1>
        <Button text={"Contactanos"} />
      </div>
    </div>
  );
};
export default HopPage;
