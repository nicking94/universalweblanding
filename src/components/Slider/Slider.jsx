import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ProjectsSection from "../Sections/ProjectsSection";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "aos/dist/aos.css";
import rightArrowIcon from "../../../public/icons/rightArrow.png";
import Image from "next/image";
import grHousingImg from "../../../public/images/projects/grHousing.png";
import stHelenImg from "../../../public/images/projects/stHelen.png";
import diamanteNaturalImg from "../../../public/images/projects/diamanteNatural.png";
import drGulaImg from "../../../public/images/projects/drGula.png";

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
    <div className="relative w-full pt-10 md:pt-0  ">
  
      <button className="hidden md:flex custom-next absolute right-4  md:top-[50%] -translate-y-1/2 z-10 text-white bg-primaryBlue/80 p-3 rounded-md ">
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
        autoplay={{ delay: 5000 }}
        speed={1500}
        ref={swiperRef}
      >
        <SwiperSlide onClick={handleSlideClick}>
          <ProjectsSection
            title="GR HOUSING"
            subtitle="Web inmobiliaria"
            description={
              <>
                Landing page dirigida a clientes del sector de bienes raíces,
                con el objetivo de ofrecer una experiencia de navegación
                intuitiva y eficiente, permitiendo a los usuarios encontrar
                propiedades de manera rápida y sencilla.
              </>
            }
          >
            <Image src={grHousingImg} alt="grhousing" />
          </ProjectsSection>
        </SwiperSlide>

        <SwiperSlide onClick={handleSlideClick}>
          <ProjectsSection
            title="ST HELEN INSTITUTE"
            subtitle="Landing page y dashboard - Instituto de inglés"
            description={
              <>
                Sitio web y dashboard para un instituto de inglés, con el
                objetivo de ofrecer una experiencia de navegación intuitiva y eficiente, permitiendo a los
                usuarios encontrar información de manera rápida y sencilla.
              </>
            }
          >
            <Image src={stHelenImg} alt="sthelen" />
          </ProjectsSection>
        </SwiperSlide>
        <SwiperSlide onClick={handleSlideClick}>
          <ProjectsSection
            title="DIAMANTE NATURAL"
            subtitle="E-commerce - Nutricionista"
            description={
              <>
                E-commerce para una nutricionista, con el objetivo de ofrecer
                una experiencia de navegación intuitiva y eficiente, permitiendo
                a los usuarios encontrar productos de manera rápida y sencilla.
              </>
            }
          >
            <Image src={diamanteNaturalImg} alt="diamanteNatural" />
          </ProjectsSection>
        </SwiperSlide>
        <SwiperSlide onClick={handleSlideClick}>
          <ProjectsSection
            title="DR. GULA"
            subtitle="Landing page - Hamburguesería"
            description={
              <>
                Landing page para una hamburguesería, con el objetivo de ofrecer
                una experiencia de navegación intuitiva y eficiente, permitiendo
                a los usuarios encontrar información de manera rápida y
                sencilla.
              </>
            }
          >
            <Image src={drGulaImg} alt="drgula" />
          </ProjectsSection>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
