import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ProjectCard from "../Sections/ProjectsSection";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "aos/dist/aos.css";
import rightArrowIcon from "../../../public/icons/rightArrow.png";
import Image from "next/image";

const Slider = () => {
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
    <div className="relative w-full  ">
      <button className="hidden md:flex custom-next absolute right-4  md:top-[50%] -translate-y-1/2 z-10 text-white bg-violet/80 p-3 rounded-md ">
        <Image src={rightArrowIcon} alt="rightArrow" />
      </button>

      <Swiper
        data-aos="fade"
        data-aos-duration="2000"
        spaceBetween={50}
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 6000 }}
        speed={1500}
        ref={swiperRef}
      >
        <SwiperSlide onClick={handleSlideClick}>
          <ProjectCard
            title="MOLDES FÁCIL"
            subtitle="Web de compra-venta de tejidos"
            description={
              <>
                Tienda online de moldes de ropa, dirigida tanto a clientes
                individuales: B2C como a negocios: B2B.
                <br />
                <br />
                El objetivo fue proporcionar una experiencia de compra intuitiva
                y eficiente, permitiendo a los usuarios adquirir moldes en
                formato físico y digital.
              </>
            }
          >
            <div className="flex w-full min-h-[18.6rem] lg:lg:h-[33rem] 2xl:h-[47rem] mt-10">
              <video
                src="https://s3.novexisconsulting.xyz/novexis-web/moldes.mp4"
                autoPlay
                muted
                playsInline
                className="w-full h-full object-fill md:rounded-[40px]"
              />
            </div>
          </ProjectCard>
        </SwiperSlide>

        <SwiperSlide onClick={handleSlideClick}>
          <ProjectCard
            title="RECAM."
            subtitle="Web App para grabar pantallas"
            description={
              <>
                Aplicación web de escritorio y móvil que permite la supervisión
                de exámenes en entornos remotos, otorgando a los docentes la
                posibilidad monitorear en tiempo real la pantalla y cámara de
                sus estudiantes durante el examen, garantizando una experiencia
                de supervisión fluida y confiable.
              </>
            }
          >
            <div className="flex w-full min-h-[18.6rem] lg:lg:h-[33rem] 2xl:h-[47rem] mt-10">
              <video
                src="https://s3.novexisconsulting.xyz/novexis-web/recam.mp4"
                autoPlay
                muted
                playsInline
                className="w-full h-full object-fill md:rounded-[40px]"
              />
            </div>
          </ProjectCard>
        </SwiperSlide>
        <SwiperSlide onClick={handleSlideClick}>
          <ProjectCard
            title="HOP"
            subtitle="App móvil red social"
            description={
              <>
                Aplicación de reserva de viajes diseñada para optimizar el
                servicio de transporte en el sector hotelero, permitiendo que
                recepcionistas y conductores aumenten sus ingresos de manera
                segura y eficiente.
                <br />
                <br />
                Facilita no solo la conexión entre hoteles y conductores, sino
                que también impulsa el crecimiento económico de sus usuarios con
                un sistema eficiente, transparente y rentable.
              </>
            }
          >
            <div className="flex w-full min-h-[18.6rem] lg:lg:h-[33rem] 2xl:h-[47rem] mt-10">
              <video
                src="https://s3.novexisconsulting.xyz/novexis-web/hop.mp4"
                autoPlay
                muted
                playsInline
                className="w-full h-full object-fill md:rounded-[40px]"
              />
            </div>
          </ProjectCard>
        </SwiperSlide>
        <SwiperSlide onClick={handleSlideClick}>
          <ProjectCard
            title="TRIBE"
            subtitle="App móvil red social"
            description={
              <>
                Aplicación de redes sociales que transforma la forma en que te
                conectas. Con un mapa mundial interactivo, puedes descubrir
                fácilmente personas, lugares y eventos que coincidan con tus
                intereses.
                <br />
                <br />
                El objetivo principal de esta app es fomentar la exploración del
                mundo real y las conexiones virtuales, mejorando la interacción
                social tanto local como global.
              </>
            }
          >
            <div className="flex w-full min-h-[18.6rem] lg:lg:h-[33rem] 2xl:h-[47rem] mt-10">
              <video
                src="https://s3.novexisconsulting.xyz/novexis-web/tribe.mp4"
                autoPlay
                muted
                playsInline
                className="w-full h-full object-fill md:rounded-[40px]"
              />
            </div>
          </ProjectCard>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
