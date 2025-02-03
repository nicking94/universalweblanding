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
      <button className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white bg-violet/80 p-3 rounded-md ">
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
    </div>
  );
};

export default ClientsSlider;
