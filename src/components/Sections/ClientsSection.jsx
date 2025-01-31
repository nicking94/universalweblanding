import React, { useEffect, useState, useRef } from "react";
import ClientsCard from "../Cards/ClientsCard";
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
    <div ref={sectionRef} className="flex h-full">
      <div className={`${bg} ${width} px-20`}>
        <div className="space-y-8 -mt-24 ">
          <div className="flex flex-col items-center">
            <span className="text-violet text-xxxl font-semibold">{`+${clientCount}`}</span>
            <p className="text-xxl leading-[58px] -mt-20 font-semibold">
              Clientes
            </p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-violet text-[8.6rem] font-semibold">{`+${projectCount}`}</span>
            <p className="text-lg leading-[58px] -mt-10 font-semibold">
              Proyectos
            </p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-violet text-[8.6rem] font-semibold">
              {thingCount}
            </span>
            <p className="text-lg leading-[58px] -mt-10 font-semibold">Cosas</p>
          </div>
        </div>
      </div>

      <div className={`${bg} flex flex-col ${width2} justify-center px-20`}>
        <p className="text-violet text-xs leading-[20.8px] font-medium">
          {header}
        </p>
        <h1 className="text-xl font-semibold leading-[70.4px]">{title}</h1>
        <p className="text-sm font-light leading-[24px] mt-5 mb-10">
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
