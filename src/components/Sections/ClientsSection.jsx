import React, { useEffect, useState, useRef } from "react";
import ClientsSlider from "../Slider/ClientsSlider";

const ClientsSection = ({
  header,
  title,
  description,
 
}) => {
  const [clientCount, setClientCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);
  const [thingCount, setThingCount] = useState(0);
  const sectionRef = useRef(null);

  const clientTarget = 16;
  const projectTarget = 20;
  const thingTarget = 4;

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
    }, 150);

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
    }, 300);
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
      className="flex flex-col h-full "
    >
      <div className={` shadow-xl shadow-secondaryBlue w-full  `}>
        <div className=" flex flex-row justify-around py-10 mb-10">
          <div className="flex flex-col items-center">
            <span className="text-primaryBlue text-xl lg:text-[8.6rem] font-semibold">{`+${clientCount}`}</span>
            <p className="text-xs lg:text-xl leading-[18px] md:leading-[58px] md:-mt-10 font-semibold text-center">
              Clientes <br /> satisfechos
            </p>
          </div>
         
            <div className="flex flex-col items-center">
              <span className="text-primaryBlue text-xl lg:text-[8.6rem] font-semibold">{`+${projectCount}`}</span>
              <p className="text-xs lg:text-xl leading-[18px] md:leading-[58px] md:-mt-10 font-semibold text-center">
                Proyectos <br /> totales
              </p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-primaryBlue text-xl lg:text-[8.6rem] font-semibold">
                {thingCount}
              </span>
              <p className="text-xs lg:text-xl leading-[18px] md:leading-[58px] md:-mt-10 font-semibold text-center">
                Proyectos <br />en curso
              </p>
            </div>
          </div>
      
      </div>

      <div
        className={`px-4 lg:px-20 flex flex-col w-full  justify-center lg:justify-start overflow-hidden mt-20`}
      >
        <p className="text-primaryBlue text-xxs lg:text-xs lg:leading-[20.8px] font-medium">
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
