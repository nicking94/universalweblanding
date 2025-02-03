import Button from "../Button/Button";

const ServicesCard = ({ header, title, description, children }) => {
  return (
    <div className="flex flex-col md:flex-row md:gap-[64px] h-full py-10 md:py-20 ">
      <div className="md:w-1/2 flex flex-col justify-center px-2 md:px-20 md:py-10">
        <p className="text-violet text-xxs md:text-xs md:leading-[20.8px] font-medium">
          {header}
        </p>
        <h1 className="text-lg md:text-xl font-semibold md:leading-[70.4px]">
          {title}
        </h1>
        <p className="text-xxs md:text-sm font-light md:leading-[24px] mt-5 mb-10">
          {description}
        </p>
      </div>

      <div className={`flex items-center md:w-1/2 px-2 md:px-0`}>
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <span className="text-violet text-xxs md:text-xs font-medium">
              01
            </span>
            <p className=" text-sm md:text-lg md:leading-[58px]">
              Consultoría de software
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-violet text-xxs md:text-xs font-medium">
              02
            </span>
            <p className=" text-sm md:text-lg md:leading-[58px]">
              Desarrollo de software
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-violet text-xxs md:text-xs font-medium">
              03
            </span>
            <p className=" text-sm md:text-lg md:leading-[58px]">
              Diseño UX/UI
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-violet text-xxs md:text-xs font-medium">
              04
            </span>
            <p className=" text-sm md:text-lg md:leading-[58px]">Testing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
