import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ProjectCard from "../Sections/ProjectsSection";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import AOS from "aos";
import "aos/dist/aos.css";

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
    <Swiper
      data-aos="fade"
      data-aos-duration="2000"
      spaceBetween={50}
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 4000 }}
      ref={swiperRef}
    >
      <SwiperSlide onClick={handleSlideClick}>
        <ProjectCard
          title="RECam."
          subtitle="Web App para grabar pantallas"
          description={
            <>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              aspernatur saepe mollitia pariatur voluptate! Aperiam illo
              expedita nemo incidunt recusandae eos, eius provident voluptatibus
              accusamus cumque, facere natus molestiae. Odit? <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium reprehenderit quia ducimus, corporis exercitationem
              eos eius voluptatem excepturi debitis voluptates quasi,
              necessitatibus cum perferendis repellat minus iste nobis ad
              pariatur!
            </>
          }
          buttonText="Ver proyecto"
          onButtonClick={() => console.log("Botón clickeado")}
        >
          <p>Clip del proyecto</p>
        </ProjectCard>
      </SwiperSlide>

      <SwiperSlide onClick={handleSlideClick}>
        <ProjectCard
          title="TRIBE"
          subtitle="Web App red social"
          description={
            <>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              aspernatur saepe mollitia pariatur voluptate! Aperiam illo
              expedita nemo incidunt recusandae eos, eius provident voluptatibus
              accusamus cumque, facere natus molestiae. Odit? <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium reprehenderit quia ducimus, corporis exercitationem
              eos eius voluptatem excepturi debitis voluptates quasi,
              necessitatibus cum perferendis repellat minus iste nobis ad
              pariatur!
            </>
          }
          buttonText="Ver proyecto"
          onButtonClick={() => console.log("Botón clickeado")}
        >
          <p>Clip del proyecto</p>
        </ProjectCard>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
