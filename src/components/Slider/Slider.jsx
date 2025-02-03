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
    <div className="relative w-full">
      <button className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white bg-violet/80 p-3 rounded-md ">
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
        autoplay={{ delay: 4000 }}
        ref={swiperRef}
      >
        <SwiperSlide onClick={handleSlideClick}>
          <ProjectCard
            title="RECAM."
            subtitle="Web App para grabar pantallas"
            description={
              <>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                aspernatur saepe mollitia pariatur voluptate! Aperiam illo
                expedita nemo incidunt recusandae eos, eius provident
                voluptatibus accusamus cumque, facere natus molestiae. Odit?{" "}
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium reprehenderit quia ducimus, corporis exercitationem
                eos eius voluptatem excepturi debitis voluptates quasi,
                necessitatibus cum perferendis repellat minus iste nobis ad
                pariatur!
              </>
            }
          >
            <video
              src="/clips3D/moldesFacil.mp4"
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover"
            />
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
                expedita nemo incidunt recusandae eos, eius provident
                voluptatibus accusamus cumque, facere natus molestiae. Odit?{" "}
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium reprehenderit quia ducimus, corporis exercitationem
                eos eius voluptatem excepturi debitis voluptates quasi,
                necessitatibus cum perferendis repellat minus iste nobis ad
                pariatur!
              </>
            }
          >
            <video
              src="/clips3D/moldesFacil.mp4"
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </ProjectCard>
        </SwiperSlide>
        <SwiperSlide onClick={handleSlideClick}>
          <ProjectCard
            title="SOFOCON"
            subtitle="Web App red social"
            description={
              <>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                aspernatur saepe mollitia pariatur voluptate! Aperiam illo
                expedita nemo incidunt recusandae eos, eius provident
                voluptatibus accusamus cumque, facere natus molestiae. Odit?{" "}
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium reprehenderit quia ducimus, corporis exercitationem
                eos eius voluptatem excepturi debitis voluptates quasi,
                necessitatibus cum perferendis repellat minus iste nobis ad
                pariatur!
              </>
            }
          >
            <video
              src="/clips3D/moldesFacil.mp4"
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </ProjectCard>
        </SwiperSlide>
        <SwiperSlide onClick={handleSlideClick}>
          <ProjectCard
            title="ROXBARF"
            subtitle="Web App red social"
            description={
              <>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                aspernatur saepe mollitia pariatur voluptate! Aperiam illo
                expedita nemo incidunt recusandae eos, eius provident
                voluptatibus accusamus cumque, facere natus molestiae. Odit?{" "}
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium reprehenderit quia ducimus, corporis exercitationem
                eos eius voluptatem excepturi debitis voluptates quasi,
                necessitatibus cum perferendis repellat minus iste nobis ad
                pariatur!
              </>
            }
          >
            <video
              src="/clips3D/moldesFacil.mp4"
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </ProjectCard>
        </SwiperSlide>
        <SwiperSlide onClick={handleSlideClick}>
          <ProjectCard
            title="MOLDES FÁCIL"
            subtitle="Web App red social"
            description={
              <>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                aspernatur saepe mollitia pariatur voluptate! Aperiam illo
                expedita nemo incidunt recusandae eos, eius provident
                voluptatibus accusamus cumque, facere natus molestiae. Odit?{" "}
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium reprehenderit quia ducimus, corporis exercitationem
                eos eius voluptatem excepturi debitis voluptates quasi,
                necessitatibus cum perferendis repellat minus iste nobis ad
                pariatur!
              </>
            }
          >
            <video
              src="/clips3D/moldesFacil.mp4"
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </ProjectCard>
        </SwiperSlide>
        <SwiperSlide onClick={handleSlideClick}>
          <ProjectCard
            title="HOP"
            subtitle="Web App red social"
            description={
              <>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                aspernatur saepe mollitia pariatur voluptate! Aperiam illo
                expedita nemo incidunt recusandae eos, eius provident
                voluptatibus accusamus cumque, facere natus molestiae. Odit?{" "}
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium reprehenderit quia ducimus, corporis exercitationem
                eos eius voluptatem excepturi debitis voluptates quasi,
                necessitatibus cum perferendis repellat minus iste nobis ad
                pariatur!
              </>
            }
          >
            <video
              src="/clips3D/moldesFacil.mp4"
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </ProjectCard>
        </SwiperSlide>
        <SwiperSlide onClick={handleSlideClick}>
          <ProjectCard
            title="AUDÍFONOS"
            subtitle="Web App red social"
            description={
              <>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                aspernatur saepe mollitia pariatur voluptate! Aperiam illo
                expedita nemo incidunt recusandae eos, eius provident
                voluptatibus accusamus cumque, facere natus molestiae. Odit?{" "}
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium reprehenderit quia ducimus, corporis exercitationem
                eos eius voluptatem excepturi debitis voluptates quasi,
                necessitatibus cum perferendis repellat minus iste nobis ad
                pariatur!
              </>
            }
          >
            <video
              src="/clips3D/moldesFacil.mp4"
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </ProjectCard>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
