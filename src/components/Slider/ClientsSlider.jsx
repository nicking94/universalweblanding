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
import hopClientImg from "../../../public/images/hopClient.png";
import tribeClientImg from "../../../public/images/tribeClient.png";
import sofoconClientImg from "../../../public/images/logoSofocon.svg";
import farmaciaClientImg from "../../../public/images/logoFarmacia.jpg";

const ClientsSlider = () => {
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
      <div className=" pointer-events-none absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-white to-transparent z-10"></div>

      <button className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white bg-violet/80 p-3 rounded-md ">
        <Image src={rightArrowIcon} alt="rightArrow" />
      </button>

      <Swiper
        spaceBetween={2}
        modules={[Navigation, Pagination, Autoplay]}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
        }}
        navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 6000 }}
        speed={1500}
        ref={swiperRef}
      >
        <SwiperSlide onClick={handleSlideClick}>
          <ClientsCard
            imageSrc={hopClientImg}
            name={"José Oquendo"}
            company={"Servicios de transporte Oti, SPA"}
            review={
              " Nuestra empresa necesitaba una solución Mobile personalizada con compromiso y eficiencia. Destacamos un diseño que captó nuestra visión y la transparencia administrativa que facilitó comprender aspectos técnicos. Aunque la comunicación puede mejorar, valoramos su interés en una relación comercial a largo plazo. Experiencia positiva y profesional."
            }
            website={"http://transporteoti.cl/"}
            websiteText={"@transporteoti.cl"}
          />
        </SwiperSlide>
        <SwiperSlide onClick={handleSlideClick}>
          <ClientsCard
            imageSrc={tribeClientImg}
            name={"Tribe"}
            company={"Red social"}
            review={`Después de haber tenido una mala experiencia y haber perdido el entusiasmo para nuestro proyecto, hemos podido tener la suerte de conocer a Emiliano y su equipo de Novexis. Trabajando con ellos en el desarrollo de una app innovadora en el sector travel, hemos vuelto a tener las ganas y la ambición para seguir adelante. Todo el equipo mostró profesionalismo, creatividad y una gran capacidad para convertir nuestra visión en una aplicación intuitiva y funcional. Resolviendo dudas y preguntas en cualquier momento.
La comunicación fue fluida y el resultado superó nuestras expectativas. ¡100% recomendados!`}
            website={"https://tribeapp.es/"}
            websiteText={"@tribeapp"}
          />
        </SwiperSlide>
     
        <SwiperSlide onClick={handleSlideClick}>
          <ClientsCard
            imageSrc={sofoconClientImg}
            name={"Sofocón"}
            company={"Materiales contra incendio"}
            review={`Agradecemos a Novexis por el desarrollo de nuestra app y plataforma web de gestión de ventas. Desde el inicio, su comunicación impecable y trato humano hicieron el proceso fluído. Destacamos el profesionalismo de Emiliano, Jonas y Alicia, quienes captaron nuestras necesidades y entregaron una herramienta eficaz para optimizar ventas y procesos. Recomendamos a Novexis por su confiabilidad e innovación.`}
            website={"https://generalfire.uy/login"}
            websiteText={"@Sofocón"}
          />
        </SwiperSlide>
        <SwiperSlide onClick={handleSlideClick}>
          <ClientsCard
            imageSrc={farmaciaClientImg}
            name={"Farmacia Crotti"}
            company={"Insumos farmacéuticos"}
            review={`La experiencia con Novexis fue gratificante y recomendable. Siempre a disposición de las consultas, dudas y predispuestos a asesorar. Cumpliendo con nuestras expectativas y llevando el proyecto, que es muy importante para nosotros, de manera profesional.`}
            website={"https://generalfire.uy/login"}
            websiteText={"@Farmacia Crotti"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ClientsSlider;
