import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import ClientsCard from "../Cards/ClientsCard";
import StarRating from "@/components/StarRating/StarRating"; 
import rightArrowIcon from "../../../public/icons/rightArrow.png";
import Image from "next/image";
import diamanteNaturalLogo from "../../../public/images/logos/diamanteNaturalLogo.svg"
import drGulaLogo from "../../../public/images/logos/drGulaLogo.jpg"
import iphoneMomentLogo from "../../../public/images/logos/iphoneMomentLogo.png"
import stHelenLogo from "../../../public/images/logos/stHelenLogo.jpg"

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
      <div className="pointer-events-none absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-white to-transparent z-10"></div>

      <button className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white bg-primaryBlue/80 p-3 rounded-md ">
        <Image src={rightArrowIcon} alt="rightArrow" />
      </button>

      <Swiper
        spaceBetween={2}
        modules={[Navigation, Pagination, Autoplay]}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
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
            imageSrc={diamanteNaturalLogo}
            name={"Diamante Natural"}
      
            review={"Queríamos llevar nuestra dietética al mundo digital con un eCommerce funcional y atractivo, y el equipo superó nuestras expectativas. Captaron nuestra visión a la perfección, ofreciendo un diseño intuitivo y una experiencia de compra fluida para nuestros clientes. Además, la comunicación fue clara en todo momento, lo que nos permitió comprender cada detalle del proceso. Profesionalismo, compromiso y eficiencia en cada etapa del desarrollo. ¡Altamente recomendados!"}
            website={"https://diamantenatural.com.ar/"}
            websiteText={"@Diamante_Natural"}
            rating={5}
          />
        </SwiperSlide>

        <SwiperSlide onClick={handleSlideClick}>
          <ClientsCard
            imageSrc={drGulaLogo}
            name={"Dr. Gula"}
            review={"Mostraron un gran profesionalismo, creatividad y entendieron perfectamente nuestra visión, creando una página web intuitiva y atractiva. Estuvieron disponibles para resolver todas nuestras dudas en cualquier momento, y la comunicación fue excelente. El resultado final superó nuestras expectativas"}
            website={"https://drgula.netlify.app/"}
            websiteText={"@Dr_Gula"}
            rating={5}
          />
        
        </SwiperSlide>

        <SwiperSlide onClick={handleSlideClick}>
          <ClientsCard
            imageSrc={iphoneMomentLogo}
            name={"Iphone Moment"}
            review={"Agradecemos enormemente a Universal Web por el desarrollo de nuestro dashboard administrativo para la gestión de nuestra tienda Apple. Desde el comienzo, la comunicación fue clara y fluida, lo que hizo que todo el proceso fuera muy sencillo. Nicolás, Mauro y Randall, demostraron un alto nivel de profesionalismo al captar nuestras necesidades y entregar una herramienta eficiente que optimiza nuestras ventas y procesos. Sin duda, recomendamos a Universal Web por su confiabilidad, creatividad e innovación en cada proyecto."}
            website={""}
            websiteText={"@Iphone Moment"}
            rating={5}
          />
       
        </SwiperSlide>

        <SwiperSlide onClick={handleSlideClick}>
          <ClientsCard
            imageSrc={stHelenLogo}
            name={"St. Helen Institute"}
            
            review={"La experiencia con Universal Web fue sumamente gratificante y recomendable. Estuvieron siempre disponibles para responder nuestras consultas, resolver dudas y brindar asesoramiento. El equipo cumplió con todas nuestras expectativas, llevando adelante el desarrollo de la landing page y el dashboard para nuestro instituto de inglés de manera profesional. Agradecemos su dedicación y compromiso en este proyecto tan importante para nosotros"}
            website={"https://sthelen-ingles.com.ar/"}
            websiteText={"@St.Helen"}
            rating={5}
          />
          
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ClientsSlider;
