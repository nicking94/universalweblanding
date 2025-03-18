"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import diamanteImg from "../../../../public/images/projects/diamanteNatural.png";
import drGulaImg from "../../../../public/images/projects/drGula.png";
import grHousingImg from "../../../../public/images/projects/grHousing.png";
import stHelenImg from "../../../../public/images/projects/stHelen.png";
import Link from "next/link";

const ProjectsPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);
  return (
    <div className="p-4 md:p-20 bg-background-gradient">
      <h1 className="font-medium text-md leading-[35.2px] text-center mt-28 md:mt-14">
        Explora nuestros Trabajos
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        <div
          data-aos="fade"
          className=" bg-gradient-to-br from-primaryBlue/70 to-black/60 relative h-full rounded-[10px]"
        >
          <Image
            src={diamanteImg}
            alt="tribe"
            className="w-full rounded-[10px]"
          />
          <div className="bg-gradient-to-r from-black/60 to-primaryBlue/70 absolute bottom-0 w-full backdrop-blur-sm text-white p-3 rounded-[10px] ">
            <p className="font-bold leading-[11.96px] text-[0.5rem]">2024</p>
            <h1 className="text-sm font-bold leading-[28px]">
              Diamante Natural
            </h1>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-2 md:space-y-0">
              <p className="text-xs font-light leading-[20px]">E-commerce</p>
              <div className="flex justify-end">
                <Link
                  className="flex items-center justify-center max-w-[14rem] gap-2 bg-primaryBlue py-1 px-4 rounded-md hover:scale-105 transition-all duration-300"
                  href="https://diamantenatural.com.ar/"
                  target="_blank"
                >
                  <p className="text-xxs">Visita el sitio aquí</p>
                  <FaLocationArrow className=" w-8 h-8 p-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade"
          className=" bg-gradient-to-br from-primaryBlue/70 to-black/60 relative h-full rounded-[10px]"
        >
          <Image
            src={drGulaImg}
            alt="tribe"
            className="w-full rounded-[10px]"
          />
          <div className="bg-gradient-to-r from-black/60 to-primaryBlue/70  absolute bottom-0 w-full backdrop-blur-sm text-white p-3 rounded-[10px] ">
            <p className="font-bold leading-[11.96px] text-[0.5rem]">2024</p>
            <h1 className="text-sm font-bold leading-[28px]">Dr. Gula</h1>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-2 md:space-y-0">
              <p className="text-xs font-light leading-[20px]">Landing page</p>
              <div className="flex justify-end">
                <Link
                  className="flex items-center justify-center max-w-[14rem] gap-2 bg-primaryBlue py-1 px-4 rounded-md hover:scale-105 transition-all duration-300"
                  href="https://drgula.netlify.app/"
                  target="_blank"
                >
                  <p className="text-xxs">Visita el sitio aquí</p>
                  <FaLocationArrow className="w-8 h-8 p-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade"
          className=" bg-gradient-to-br from-primaryBlue/70 to-black/60 relative h-full rounded-[10px]"
        >
          <Image
            src={grHousingImg}
            alt="tribe"
            className="w-full rounded-[10px]"
          />
          <div className="bg-gradient-to-r from-black/60 to-primaryBlue/70  absolute bottom-0 w-full backdrop-blur-sm text-white p-3 rounded-[10px] ">
            <p className="font-bold leading-[11.96px] text-[0.5rem]">2025</p>
            <h1 className="text-sm font-bold leading-[28px]">Gr Housing</h1>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-2 md:space-y-0">
              <p className="text-xs font-light leading-[20px]">Landing page</p>
              <div className="flex justify-end">
                <Link
                  className="flex items-center justify-center max-w-[14rem]  gap-2 bg-primaryBlue py-1 px-4 rounded-md hover:scale-105 transition-all duration-300"
                  href="https://grhousing.com.ar/"
                  target="_blank"
                >
                  <p className="text-xs">Visita el sitio aquí</p>
                  <FaLocationArrow className="w-8 h-8 p-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade"
          className=" bg-gradient-to-br from-primaryBlue/70 to-black/60 relative h-full rounded-[10px]"
        >
          <Image
            src={stHelenImg}
            alt="tribe"
            className="w-full rounded-[10px]"
          />
          <div className="bg-gradient-to-r from-black/60 to-primaryBlue/70  absolute bottom-0 w-full backdrop-blur-sm text-white p-3 rounded-[10px] ">
            <p className="font-bold leading-[11.96px] text-[0.5rem]">2024</p>
            <h1 className="text-sm font-bold leading-[28px]">
              St. Helen Institute
            </h1>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-2 md:space-y-0">
              <p className="text-xs font-light leading-[20px]">
                Landing page & dashboard
              </p>
              <div className="flex justify-end">
                <Link
                  className="flex items-center justify-center max-w-[14rem] gap-2 bg-primaryBlue py-1 px-4 rounded-md hover:scale-105 transition-all duration-300"
                  href="https://sthelen-ingles.com.ar/"
                  target="_blank"
                >
                  <p className="text-xs">Visita el sitio aquí</p>
                  <FaLocationArrow className="w-8 h-8 p-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectsPage;
