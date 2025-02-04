import React, { useEffect, useState, useRef } from "react";
import ClientsSlider from "../Slider/ClientsSlider";

const ClientsSection = ({
  header,
  title,
  description,
  width = "w-[30%]",
  width2 = "w-[70%]",
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
      className="flex flex-col lg:flex-row h-full px-4 lg:px-20"
    >
      <div className={` w-full lg:${width} lg:px-10 `}>
        <div className=" flex flex-row lg:flex-col space-y-8 -mt-24 space-x-8 lg:space-x-0 justify-center lg:justify-start ">
          <div className="flex flex-col lg:items-center justify-center lg:justify-start py-10 lg:py-0">
            <span className="text-violet text-[8rem] lg:text-xxxl font-semibold">{`+${clientCount}`}</span>
            <p className="text-lg lg:text-xxl leading-[58px] -mt-14 lg:-mt-20 font-semibold text-center">
              Clientes
            </p>
          </div>
          <div className="flex flex-col py-10 lg:py-0">
            <div className="flex flex-col items-center">
              <span className="text-violet text-xl lg:text-[8.6rem] font-semibold">{`+${projectCount}`}</span>
              <p className="text-sm lg:text-lg leading-[58px] -mt-10 font-semibold text-center">
                Proyectos
              </p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-violet text-xl lg:text-[8.6rem] font-semibold">
                {thingCount}
              </span>
              <p className="text-sm lg:text-lg leading-[58px] -mt-10 font-semibold text-center">
                Cosas
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`flex flex-col w-full lg:${width2} justify-center lg:justify-start overflow-hidden`}
      >
        <p className="text-violet text-xxs lg:text-xs lg:leading-[20.8px] font-medium">
          {header}
        </p>
        <h1 className="text-lg lg:text-xl font-semibold lg:leading-[70.4px]">
          {title}
        </h1>
        <p className="text-xxs lg:text-sm font-light lg:leading-[24px] mt-5 mb-10">
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
