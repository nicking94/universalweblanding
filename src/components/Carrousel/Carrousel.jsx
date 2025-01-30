import Image from "next/image";
import React from "react";

const Carrousel = () => {
  const logos = [
    "/icons/carruselIcon1.png",
    "/icons/carruselIcon2.png",
    "/icons/carruselIcon3.png",
    "/icons/carruselIcon4.png",
    "/icons/carruselIcon5.png",
    "/icons/carruselIcon1.png",
    "/icons/carruselIcon2.png",
    "/icons/carruselIcon3.png",
    "/icons/carruselIcon4.png",
    "/icons/carruselIcon5.png",
  ];

  return (
    <div className="overflow-hidden relative w-full  ">
      <div className="flex animate-slide-left space-x-20 p-10">
        {logos.concat(logos).map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            width={150}
            height={150}
          />
        ))}
      </div>
    </div>
  );
};

export default Carrousel;
