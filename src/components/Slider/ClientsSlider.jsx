import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import ClientsCard from "../Cards/ClientsCard";

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
    <Swiper
      spaceBetween={2}
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 4000 }}
      ref={swiperRef}
    >
      <SwiperSlide onClick={handleSlideClick}>
        <ClientsCard />
      </SwiperSlide>

      <SwiperSlide onClick={handleSlideClick}>
        <ClientsCard />
      </SwiperSlide>
      <SwiperSlide onClick={handleSlideClick}>
        <ClientsCard />
      </SwiperSlide>
      <SwiperSlide onClick={handleSlideClick}>
        <ClientsCard />
      </SwiperSlide>
      <SwiperSlide onClick={handleSlideClick}>
        <ClientsCard />
      </SwiperSlide>
    </Swiper>
  );
};

export default ClientsSlider;
