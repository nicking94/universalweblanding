import Button from "../Button/Button";

const ServicesCard = ({ header, title, description, children }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-[64px] h-full py-10 lg:py-20 ">
      <div className="lg:w-1/2 flex flex-col justify-center px-4 lg:px-20 lg:py-10">
        <p className="text-primaryBlue text-xxs lg:text-xs lg:leading-[20.8px] font-medium">
          {header}
        </p>
        <h1 className="text-md lg:text-xl font-semibold lg:leading-[70.4px]">
          {title}
        </h1>
        <p className="text-xs lg:text-sm font-light lg:leading-[24px] mt-5 mb-10">
          {description}
        </p>
      </div>

      <div className={`flex items-center lg:w-1/2 px-4 lg:px-0`}>
        <div className="space-y-8">
          <div className="flex  gap-4">
            <span className="text-primaryBlue text-sm lg:text-md font-semibold">
              -
            </span>
            <p className=" text-sm lg:text-lg lg:leading-[28px]">
              Consultoría de software <br />
              <span className="text-xxs md:text-xs text-primaryBlue">Te guiamos en la mejor estrategia tecnológica para tu negocio.</span>
            </p>
          </div>
          <div className="flex gap-4">
          <span className="text-primaryBlue text-sm lg:text-md font-semibold">
              -
            </span>
            <p className=" text-sm lg:text-lg lg:leading-[28px]">
              Desarrollo de software <br />
              <span className="text-xxs md:text-xs text-primaryBlue">Creamos soluciones a medida, escalables y eficientes.</span>
            </p>
          </div>
          <div className="flex gap-4">
          <span className="text-primaryBlue text-sm lg:text-md font-semibold">
              -
            </span>
            <p className=" text-sm lg:text-lg lg:leading-[28px]">
              Diseño UX/UI <br />
              <span className="text-xxs md:text-xs text-primaryBlue">Diseñamos experiencias intuitivas y atractivas para tus usuarios.</span>
            </p>
          </div>
    
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
