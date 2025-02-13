import Image from "next/image";
import image1 from "../../../../../public/images/projectsMoldes1.svg";
import image2 from "../../../../../public/images/projectsMoldes2.svg";
import bagIcon from "../../../../../public/icons/bag.png";
import userIcon from "../../../../../public/icons/user.png";

import elementIcon from "../../../../../public/icons/element.png";
import walletIcon from "../../../../../public/icons/wallet.png";
import cartIcon from "../../../../../public/icons/cart.png";
import flashIcon from "../../../../../public/icons/flash.png";
import Button from "@/components/Button/Button";
import sofoconImg from "../../../../../public/images/moldesImg.svg";
import sofoconImg2 from "../../../../../public/images/moldesProject3.svg";
import sofoconImg3 from "../../../../../public/images/sofoconProject3.svg";

const MoldesFacilPage = () => {
  return (
    <div className="py-36 px-4 md:px-20 min-h-screen">
      <div className="flex flex-col items-center gap-[1rem]">
        <p className="font-medium text-xs border rounded-[7.75rem] min-w-[8rem] py-1.5 px-4 md:leading-[20.8px] text-center">
          E-commerce Site & Dashboard
        </p>
        <h1 className="font-semibold text-lg md:text-xl md:leading-[52.8px]">
          MOLDES FÁCIL
        </h1>
        <p className="text-violet font-medium text-sm md:leading-[24px]">
          Moldes de costura a un solo click.
        </p>
      </div>
      <div className="flex w-full h-[40rem] mt-10 ">
        <video
          src="/clips3D/moldesVideo1.mp4"
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
          Moldes Fácil es una tienda online de moldes de ropa, dirigida tanto a
          clientes individuales: B2C como a negocios: B2B. Este proyecto IT
          tiene como objetivo proporcionar una experiencia de compra intuitiva y
          eficiente, permitiendo a los usuarios adquirir moldes en formato
          físico y digital, además de gestionar sus pedidos de manera sencilla.
        </p>
      </div>
      <div className="flex  flex-col gap-3">
        <p className="font-medium text-xs border rounded-[2.75rem] w-[8rem] py-1.5 px-4 leading-[20.8px] text-center">
          Dashboard
        </p>
        <div className="flex flex-col md:flex-row gap-8 ">
          <div className="bg-backgroundGray rounded-[10px] p-10 md:w-[40%] ">
            <h3 className="font-medium text-violet text-lg leading-[52.8px]">
              Gestión de Usuarios y Pedidos
            </h3>
            <ul className="text-violet font-light leading-[44px] text-xs list-disc">
              <li>
                Permite administrar los trabajadores con distintos niveles de
                permisos y accesos.
              </li>
              <li>
                Visualización y control del estado de los pedidos en tiempo
                real.
              </li>
              <li>Seguimiento del proceso de compra hasta la entrega final.</li>
            </ul>
          </div>
          <div className="flex md:justify-end md:items-end bg-violet rounded-[10px]  md:w-[60%]">
            <Image
              className="2xl:w-full 2xl:pl-4 2xl:pt-4"
              src={image1}
              alt="moldes"
            />
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-8 ">
          <div className="flex md:justify-end md:items-end bg-violet rounded-[10px]  md:w-[60%]">
            <Image
              className="2xl:w-full 2xl:pl-4 2xl:pt-4"
              src={image2}
              alt="moldes"
            />
          </div>
          <div className="bg-backgroundGray rounded-[10px] p-10 md:w-[40%] ">
            <h3 className="font-medium text-violet text-lg leading-[52.8px]">
              Gestión del Catálogo de Productos y Seguimiento de Envíos:
            </h3>
            <ul className="text-violet font-light leading-[44px] text-xs list-disc">
              <li>
                Creación, edición y eliminación de categorías y productos.
              </li>
              <li>Administración de stock y disponibilidad de productos.</li>

              <li>Configuración de precios formato físico y digital.</li>
              <li>Integración con sistemas logísticos para rastrear envíos.</li>
              <li>
                Notificaciones automáticas a los clientes sobre el estado del
                pedido vía mail.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row py-10 md:py-20">
        <div className="md:w-1/2">
          <p className="font-light text-textGray text-md mb-4">Tienda Online</p>
          <div className=" space-y-8">
            <div className="gap-[10px] space-y-2">
              <div className="flex items-center gap-3">
                <Image src={bagIcon} alt="moldes" />
                <p className="font-medium text-sm leading-[24px]">
                  Venta de moldes de ropa en formato físico y digital.
                </p>
              </div>
            </div>
            <div className="gap-[10px] space-y-2">
              <div className="flex items-center gap-3">
                <Image src={userIcon} alt="moldes" />
                <p className="font-medium text-sm leading-[24px]">
                  Diferenciación entre clientes B2C y B2B con precios y
                  condiciones específicas para cada segmento.
                </p>
              </div>
            </div>
            <div className="gap-[10px] space-y-2">
              <div className="flex items-center gap-3">
                <Image src={elementIcon} alt="moldes" />
                <p className="font-medium text-sm leading-[24px]">
                  Interfaz intuitiva para la navegación y compra de productos.
                </p>
              </div>
            </div>
            <div className="gap-[10px] space-y-2">
              <div className="flex items-center gap-3">
                <Image src={walletIcon} alt="moldes" />
                <p className="font-medium text-sm leading-[24px]">
                  Sistema de pagos seguro y flexible, con múltiples métodos de
                  pago.
                </p>
              </div>
            </div>
            <div className="gap-[10px] space-y-2">
              <div className="flex items-center gap-3">
                <Image src={cartIcon} alt="moldes" />
                <p className="font-medium text-sm leading-[24px]">
                  Carrito de compras con opciones de modificación antes del
                  pago.
                </p>
              </div>
            </div>
            <div className="gap-[10px] space-y-2">
              <div className="flex items-center gap-3">
                <Image src={flashIcon} alt="moldes" />
                <p className="font-medium text-sm leading-[24px]">
                  Descuentos por compras mayoristas.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center md:w-1/2 text-white h-[20rem] md:h-auto mt-10 md:mt-0">
          <div className=" pointer-events-none absolute top-0 right-0 w-[15%] h-full bg-gradient-to-l from-[#ffffff] to-transparent z-10"></div>
          <Image className="w-full h-full" src={sofoconImg} alt="moldes" />
        </div>
      </div>
      <div className="hidden md:flex  h-[40rem]">
        <Image className="w-full h-full" src={sofoconImg2} alt="moldes" />
      </div>
      <div className="flex flex-col gap-[16px] py-10 md:py-20">
        <p className="font-medium text-xs border rounded-[2.75rem] w-[8rem] py-1.5 px-4 leading-[20.8px] text-center">
          Dashboard
        </p>
        <div className="flex md:gap-[60px] gap-4 ">
          <div className="w-1/2 md:w-full flex flex-col md:flex-row md:space-x-4">
            <div className="md:w-1/2">
              <h3 className="font-medium text-violet text-lg leading-[39.6px] md:leading-[52.8px]">
                Historial de Pedidos y Sistema de Notificaciones
              </h3>
            </div>
            <div className="md:w-1/2">
              <p className="font-light text-sm md:text-md leading-[35.2px] text-grayDark">
                Registro detallado de compras realizadas. Información clara para
                servicio al cliente postventa. Alertas para pedidos nuevos,
                cambios de estado y eventos relevantes. Notificaciones
                personalizadas para clientes y administradores.
              </p>
            </div>
          </div>
          <div className="w-1/2 flex md:hidden  -mr-10 ">
            <Image className="w-full h-full" src={sofoconImg3} alt="moldes" />
          </div>
        </div>
      </div>
      <div className="bg-background-gradient  flex flex-col md:flex-row rounded-tl-[40px] rounded-bl-[40px] md:rounded-[40px] md:border-[5px] border-l-[5px] border-t-[5px] border-b-[5px] border-violet md:pl-10 -mr-4 ">
        <div className="  md:w-1/2 flex flex-col justify-center px-4 md:px-20">
          <h3 className="font-semibold text-[4rem] md:text-[8rem] leading-[80px] md:leading-[140.4px] mb-4">
            MOLDES FÁCIL
          </h3>
          <p className="font-medium text-violet text-md leading-[35.2px] mb-10 md:mb-0">
            La herramienta para el negocio del futuro
          </p>
        </div>
        <div className="flex w-full lg:h-[47rem] mt-10">
          <video
            src="/clips3D/moldesVideo2.mp4"
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
export default MoldesFacilPage;
