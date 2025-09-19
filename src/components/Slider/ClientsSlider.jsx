import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import ClientsCard from "../Cards/ClientsCard";
import rightArrowIcon from "../../../public/icons/rightArrow.png";
import Image from "next/image";

const ClientsSlider = ({ header, title, description }) => {
  const swiperRef = useRef(null);
  const [autoplayActive, setAutoplayActive] = useState(true);

  const handleSlideClick = () => {
    if (swiperRef.current) {
      if (autoplayActive) {
        swiperRef.current.swiper.autoplay.stop();
      } else {
        swiperRef.current.swiper.autoplay.start();
      }
      setAutoplayActive(!autoplayActive);
    }
  };

  return (
    <div className="relative w-full">
      <div className="pointer-events-none absolute top-0 right-0 w-[35%] h-full bg-gradient-to-l from-tertiaryBlue to-transparent z-10"></div>

      <button className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-secondaryBlue p-3 rounded-md ">
        <Image src={rightArrowIcon} alt="rightArrow" />
      </button>

      <Swiper
        spaceBetween={2}
        modules={[Navigation, Pagination, Autoplay]}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
        }}
        navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 2000 }}
        speed={2500}
        ref={swiperRef}
        className="bg-white"
      >
        <SwiperSlide onClick={handleSlideClick}>
          <ClientsCard
            name={"Caja Diaria con Reportes"}
            review={
              "Gestiona apertura y cierre de caja con reportes detallados de ingresos y egresos"
            }
          />
        </SwiperSlide>

        <SwiperSlide onClick={handleSlideClick}>
          <ClientsCard
            name={"Control de Stock y Vencimientos"}
            review={
              "Maneja tu inventario con alertas por vencimiento y control de stock"
            }
          />
        </SwiperSlide>

        <SwiperSlide onClick={handleSlideClick}>
          <ClientsCard
            name={"Ventas con o sin Lector de Código"}
            review={
              "Procesa ventas rápidamente con lector de código de barras o ingreso manual."
            }
          />
        </SwiperSlide>

        <SwiperSlide onClick={handleSlideClick}>
          <ClientsCard
            name={"Cuentas Corrientes"}
            review={
              "Administra las cuentas corrientes de tus clientes con seguimiento de pagos y saldos."
            }
          />
        </SwiperSlide>
        <SwiperSlide onClick={handleSlideClick}>
          <ClientsCard
            name={"Métricas y Reportes"}
            review={
              "Analiza el rendimiento de tu negocio con métricas por día, semana, mes y año."
            }
          />
        </SwiperSlide>
        <SwiperSlide onClick={handleSlideClick}>
          <ClientsCard
            name={"Gestión de Proveedores"}
            review={
              "Mantén un registro organizado de tus proveedores y sus productos."
            }
          />
        </SwiperSlide>
        <SwiperSlide onClick={handleSlideClick}>
          <ClientsCard
            name={"Copias de Seguridad"}
            review={"Protege tu información con copias de seguridad."}
          />
        </SwiperSlide>
        <SwiperSlide onClick={handleSlideClick}>
          <ClientsCard
            name={"Presupuestos"}
            review={
              "Crea y gestiona presupuestos para tus clientes de manera rápida y profesional."
            }
          />
        </SwiperSlide>
        <SwiperSlide onClick={handleSlideClick}>
          <ClientsCard
            name={"Soporte Técnico Humano (No Bots)"}
            review={
              "Recibe asistencia rápida y efectiva por WhatsApp cuando lo necesites."
            }
          />
        </SwiperSlide>
        <SwiperSlide onClick={handleSlideClick}>
          <ClientsCard
            name={"100% Online, Sin Instalación"}
            review={"Accede a tu sistema desde Tablet o PC."}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ClientsSlider;
