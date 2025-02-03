import React, { useEffect, useState, useRef } from "react";
import ClientsSlider from "../Slider/ClientsSlider";

const ClientsSection = ({
  header,
  title,
  description,
  width = "w-[30%]",
  width2 = "w-[70%]",
  bg = "bg-white",
}) => {
  const [clientCount, setClientCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);
  const [thingCount, setThingCount] = useState(0);
  const sectionRef = useRef(null);

  const clientTarget = 15;
  const projectTarget = 9;
  const thingTarget = 45;

  const startCounting = () => {
    const clientInterval = setInterval(() => {
      setClientCount((prev) => {
        if (prev < clientTarget) {
          return prev + 1;
        } else {
          clearInterval(clientInterval);
          return prev;
        }
      });
    }, 100);

    const projectInterval = setInterval(() => {
      setProjectCount((prev) => {
        if (prev < projectTarget) {
          return prev + 1;
        } else {
          clearInterval(projectInterval);
          return prev;
        }
      });
    }, 100);

    const thingInterval = setInterval(() => {
      setThingCount((prev) => {
        if (prev < thingTarget) {
          return prev + 1;
        } else {
          clearInterval(thingInterval);
          return prev;
        }
      });
    }, 100);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCounting();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col md:flex-row h-full  px-2 md:px-20"
    >
      <div className={`${bg} w-full md:${width} `}>
        <div className=" flex flex-row md:flex-col space-y-8 -mt-24 space-x-8 md:space-x-0 justify-center md:justify-start ">
          <div className="flex flex-col md:items-center justify-center md:justify-start py-10 md:py-0">
            <span className="text-violet text-[8rem] md:text-xxxl font-semibold">{`+${clientCount}`}</span>
            <p className="text-lg md:text-xxl leading-[58px] -mt-14 md:-mt-20 font-semibold text-center">
              Clientes
            </p>
          </div>
          <div className="flex flex-col py-10 md:py-0">
            <div className="flex flex-col items-center">
              <span className="text-violet text-xl md:text-[8.6rem] font-semibold">{`+${projectCount}`}</span>
              <p className="text-sm md:text-lg leading-[58px] -mt-10 font-semibold text-center">
                Proyectos
              </p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-violet text-xl md:text-[8.6rem] font-semibold">
                {thingCount}
              </span>
              <p className="text-sm md:text-lg leading-[58px] -mt-10 font-semibold text-center">
                Cosas
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${bg} flex flex-col w-full md:${width2} justify-center`}>
        <p className="text-violet text-xxs md:text-xs md:leading-[20.8px] font-medium">
          {header}
        </p>
        <h1 className="text-lg md:text-xl font-semibold md:leading-[70.4px]">
          {title}
        </h1>
        <p className="text-xxs md:text-sm font-light md:leading-[24px] mt-5 mb-10">
          {description}
        </p>
        <div>
          <ClientsSlider />
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;
