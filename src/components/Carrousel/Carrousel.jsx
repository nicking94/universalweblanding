import Image from "next/image";
import React from "react";

const Carrousel = () => {
  const logos = [
    "/images/logos/diamanteNaturalLogo.svg",
    "/images/logos/iphoneMomentLogo.png",
    "/images/logos/logoLodemaria.webp",
    "/images/logos/logoBaronguille.jpg",
    "/images/logos/logoElpolloloco.jpeg",
    "/images/logos/logoCmtecnostore.jpg",
    "/images/logos/logoAirba.webp",
    "/images/logos/diamanteNaturalLogo.svg",
    "/images/logos/iphoneMomentLogo.png",
    "/images/logos/logoLodemaria.webp",
    "/images/logos/logoBaronguille.jpg",
    "/images/logos/logoElpolloloco.jpeg",
    "/images/logos/logoCmtecnostore.jpg",
    "/images/logos/logoAirba.webp",
    "/images/logos/diamanteNaturalLogo.svg",
    "/images/logos/iphoneMomentLogo.png",
    "/images/logos/logoLodemaria.webp",
    "/images/logos/logoBaronguille.jpg",
    "/images/logos/logoElpolloloco.jpeg",
    "/images/logos/logoCmtecnostore.jpg",
    "/images/logos/logoAirba.webp",
    "/images/logos/diamanteNaturalLogo.svg",
    "/images/logos/iphoneMomentLogo.png",
    "/images/logos/logoLodemaria.webp",
    "/images/logos/logoBaronguille.jpg",
    "/images/logos/logoElpolloloco.jpeg",
    "/images/logos/logoCmtecnostore.jpg",
    "/images/logos/logoAirba.webp",
    "/images/logos/diamanteNaturalLogo.svg",
    "/images/logos/iphoneMomentLogo.png",
    "/images/logos/logoLodemaria.webp",
    "/images/logos/logoBaronguille.jpg",
    "/images/logos/logoElpolloloco.jpeg",
    "/images/logos/logoCmtecnostore.jpg",
    "/images/logos/logoAirba.webp",
    "/images/logos/diamanteNaturalLogo.svg",
    "/images/logos/iphoneMomentLogo.png",
    "/images/logos/logoLodemaria.webp",
    "/images/logos/logoBaronguille.jpg",
    "/images/logos/logoElpolloloco.jpeg",
    "/images/logos/logoCmtecnostore.jpg",
    "/images/logos/logoAirba.webp",
  ];

  return (
    <div className="overflow-hidden relative w-full mt-10  ">
      <div className="flex animate-slide-left space-x-5 lg:space-x-40 p-4 lg:p-16">
        {logos.concat(logos).map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            width={80}
            height={80}
            className="rounded"
          />
        ))}
      </div>
    </div>
  );
};

export default Carrousel;
