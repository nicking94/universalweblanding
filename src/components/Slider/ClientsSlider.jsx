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
import clientImg from "../../../public/images/hopClient.png";

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
          768: { slidesPerView: 2 },
        }}
        navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 4000 }}
        ref={swiperRef}
      >
        <SwiperSlide onClick={handleSlideClick}>
          <ClientsCard
            imageSrc={clientImg}
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
            imageSrc={clientImg}
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
            imageSrc={clientImg}
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
            imageSrc={clientImg}
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
            imageSrc={clientImg}
            name={"José Oquendo"}
            company={"Servicios de transporte Oti, SPA"}
            review={
              " Nuestra empresa necesitaba una solución Mobile personalizada con compromiso y eficiencia. Destacamos un diseño que captó nuestra visión y la transparencia administrativa que facilitó comprender aspectos técnicos. Aunque la comunicación puede mejorar, valoramos su interés en una relación comercial a largo plazo. Experiencia positiva y profesional."
            }
            website={"http://transporteoti.cl/"}
            websiteText={"@transporteoti.cl"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ClientsSlider;
