import Button from "../Button/Button";

const ServicesCard = ({ header, title, description, children }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-[64px] h-full py-10 lg:py-20 ">
      <div className="lg:w-1/2 flex flex-col justify-center px-4 lg:px-20 lg:py-10">
        <p className="text-primaryBlue text-xxs lg:text-xs lg:leading-[20.8px] font-medium">
          {header}
        </p>
        <h1 className="text-lg lg:text-xl font-semibold lg:leading-[70.4px] text-grayMedium">
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
            <p className=" text-primaryBlue text-sm lg:text-lg lg:leading-[28px] font-semibold">
              Plan Mensual <br />
              <span className="text-xs md:text-sm text-grayMedium">
                Pago recurrente mensual con posibilidad de cancelar en cualquier
                momento
              </span>
            </p>
          </div>
          <div className="flex gap-4">
            <span className="text-primaryBlue text-sm lg:text-md font-semibold">
              -
            </span>
            <p className=" text-primaryBlue text-sm lg:text-lg lg:leading-[28px] font-semibold">
              Plan Anual
              <br />
              <span className="text-xs md:text-sm text-grayMedium">
                Ahorra hasta un 20% con un pago anual único. Incluye 2 meses
                gratis
              </span>
            </p>
          </div>
          <div className="flex gap-4">
            <span className="text-primaryBlue text-sm lg:text-md font-semibold">
              -
            </span>
            <p className=" text-primaryBlue text-sm lg:text-lg lg:leading-[28px] font-semibold">
              Pago Único <br />
              <span className="text-xs md:text-sm text-grayMedium">
                Acceso permanente al sistema con actualizaciones y soporte
                técnico incluidos
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
