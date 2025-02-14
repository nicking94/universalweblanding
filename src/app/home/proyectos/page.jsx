"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import hopImg from "../../../../public/images/hopProject.svg";
import arrowIcon from "../../../../public/images/buttonArrow.png";
import moldesImg from "../../../../public/images/moldesProject.svg";
import audifonosImg from "../../../../public/images/audifonosProject.svg";
import sofoconImg from "../../../../public/images/sofoconProject.svg";
import recamImg from "../../../../public/images/recamProject.svg";
import tribeImg from "../../../../public/images/tribeProject.svg";
import roxbarfImg from "../../../../public/images/roxbarfProject.svg";
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
        Nuestros Trabajos
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 ">
        <div data-aos="fade" className=" relative h-full rounded-[10px]">
          <Image src={hopImg} alt="tribe" className="w-full rounded-[10px]" />
          <div className="bg-gradient-to-r from-[#B750AD60] to-[#7CA3D160] absolute bottom-0 w-full backdrop-blur-sm text-white p-3 rounded-[10px] ">
            <p className="font-bold leading-[11.96px] text-[0.5rem]">2024</p>
            <h1 className="text-sm font-bold leading-[28px]">HOP</h1>
            <div className="flex justify-between items-center">
              <p className="text-xs font-light leading-[20px]">
                Software de administración de empresas y app de ventas
              </p>
              <Link href="/home/proyectos/hop">
                <Image
                  src={arrowIcon}
                  alt="hop"
                  className="hover:scale-105 transition-all duration-300"
                />
              </Link>
            </div>
          </div>
        </div>
        <div data-aos="fade" className=" relative h-full rounded-[10px]">
          <Image
            src={moldesImg}
            alt="tribe"
            className="w-full rounded-[10px]"
          />
          <div className="bg-gradient-to-r from-[#B750AD60] to-[#7CA3D160] absolute bottom-0 w-full backdrop-blur-sm text-white p-3 rounded-[10px] ">
            <p className="font-bold leading-[11.96px] text-[0.5rem]">2024</p>
            <h1 className="text-sm font-bold leading-[28px]">Moldes Fácil</h1>
            <div className="flex justify-between items-center">
              <p className="text-xs font-light leading-[20px]">
                Software de administración de empresas y app de ventas
              </p>
              <Link href="/home/proyectos/moldesFacil">
                <Image
                  src={arrowIcon}
                  alt="moldesFacil"
                  className="hover:scale-105 transition-all duration-300"
                />
              </Link>
            </div>
          </div>
        </div>
        <div data-aos="fade" className=" relative h-full rounded-[10px]">
          <Image
            src={audifonosImg}
            alt="tribe"
            className="w-full rounded-[10px]"
          />
          <div className="bg-gradient-to-r from-[#B750AD60] to-[#7CA3D160] absolute bottom-0 w-full backdrop-blur-sm text-white p-3 rounded-[10px] ">
            <p className="font-bold leading-[11.96px] text-[0.5rem]">2024</p>
            <h1 className="text-sm font-bold leading-[28px]">Audifonos</h1>
            <div className="flex justify-between items-center">
              <p className="text-xs font-light leading-[20px]">
                Software de administración de empresas y app de ventas
              </p>
              <Link href="/home/proyectos/audifonos">
                <Image
                  src={arrowIcon}
                  alt="audifonos"
                  className="hover:scale-105 transition-all duration-300"
                />
              </Link>
            </div>
          </div>
        </div>
        <div data-aos="fade" className=" relative h-full rounded-[10px]">
          <Image
            src={sofoconImg}
            alt="tribe"
            className="w-full rounded-[10px]"
          />
          <div className="bg-gradient-to-r from-[#B750AD60] to-[#7CA3D160] absolute bottom-0 w-full backdrop-blur-sm text-white p-3 rounded-[10px] ">
            <p className="font-bold leading-[11.96px] text-[0.5rem]">2024</p>
            <h1 className="text-sm font-bold leading-[28px]">Sofocon</h1>
            <div className="flex justify-between items-center">
              <p className="text-xs font-light leading-[20px]">
                Software de administración de empresas y app de ventas
              </p>
              <Link href="/home/proyectos/sofocon">
                <Image
                  src={arrowIcon}
                  alt="sofocon"
                  className="hover:scale-105 transition-all duration-300"
                />
              </Link>
            </div>
          </div>
        </div>
        <div data-aos="fade" className=" relative h-full rounded-[10px]">
          <Image src={recamImg} alt="tribe" className="w-full rounded-[10px]" />
          <div className="bg-gradient-to-r from-[#B750AD60] to-[#7CA3D160] absolute bottom-0 w-full backdrop-blur-sm text-white p-3 rounded-[10px] ">
            <p className="font-bold leading-[11.96px] text-[0.5rem]">2024</p>
            <h1 className="text-sm font-bold leading-[28px]">RECam</h1>
            <div className="flex justify-between items-center">
              <p className="text-xs font-light leading-[20px]">
                Software de administración de empresas y app de ventas
              </p>
              <Link href="/home/proyectos/RECam">
                <Image
                  src={arrowIcon}
                  alt="RECam"
                  className="hover:scale-105 transition-all duration-300"
                />
              </Link>
            </div>
          </div>
        </div>
        <div data-aos="fade" className=" relative h-full rounded-[10px]">
          <Image src={tribeImg} alt="tribe" className="w-full rounded-[10px]" />
          <div className="bg-gradient-to-r from-[#B750AD60] to-[#7CA3D160] absolute bottom-0 w-full backdrop-blur-sm text-white p-3 rounded-[10px] ">
            <p className="font-bold leading-[11.96px] text-[0.5rem]">2024</p>
            <h1 className="text-sm font-bold leading-[28px]">Tribe</h1>
            <div className="flex justify-between items-center">
              <p className="text-xs font-light leading-[20px]">
                Software de administración de empresas y app de ventas
              </p>
              <Link href="/home/proyectos/tribe">
                <Image
                  src={arrowIcon}
                  alt="tribe"
                  className="hover:scale-105 transition-all duration-300"
                />
              </Link>
            </div>
          </div>
        </div>
        <div data-aos="fade" className=" relative h-full rounded-[10px]">
          <Image
            src={roxbarfImg}
            alt="tribe"
            className="w-full rounded-[10px]"
          />
          <div className="bg-gradient-to-r from-[#B750AD60] to-[#7CA3D160] absolute bottom-0 w-full backdrop-blur-sm text-white p-3 rounded-[10px] ">
            <p className="font-bold leading-[11.96px] text-[0.5rem]">2024</p>
            <h1 className="text-sm font-bold leading-[28px]">Roxbarf</h1>
            <div className="flex justify-between items-center">
              <p className="text-xs font-light leading-[20px]">
                Software de administración de empresas y app de ventas
              </p>
              <Link href="/home/proyectos/roxbarf">
                <Image
                  src={arrowIcon}
                  alt="roxbarf"
                  className="hover:scale-105 transition-all duration-300"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectsPage;
