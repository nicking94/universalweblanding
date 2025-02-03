import Image from "next/image";
import React from "react";

const Carrousel = () => {
  const logos = [
    "/icons/carruselIcon1.png",
    "/icons/carruselIcon2.png",
    "/icons/carruselIcon3.png",
    "/icons/carruselIcon4.png",
    "/icons/carruselIcon5.png",
    "/icons/carruselIcon6.png",
    "/icons/carruselIcon1.png",
    "/icons/carruselIcon2.png",
    "/icons/carruselIcon3.png",
    "/icons/carruselIcon4.png",
    "/icons/carruselIcon5.png",
    "/icons/carruselIcon6.png",
    "/icons/carruselIcon1.png",
    "/icons/carruselIcon2.png",
    "/icons/carruselIcon3.png",
    "/icons/carruselIcon4.png",
    "/icons/carruselIcon5.png",
    "/icons/carruselIcon6.png",
    "/icons/carruselIcon1.png",
    "/icons/carruselIcon2.png",
    "/icons/carruselIcon3.png",
    "/icons/carruselIcon4.png",
    "/icons/carruselIcon5.png",
    "/icons/carruselIcon6.png",
  ];

  return (
    <div className="overflow-hidden relative w-full  ">
      <div className="flex animate-slide-left space-x-10 md:space-x-56 p-4 md:p-16">
        {logos.concat(logos).map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            width={350}
            height={350}
            sizes="(max-width: 768px) 200px, 350px"
          />
        ))}
      </div>
    </div>
  );
};

export default Carrousel;
