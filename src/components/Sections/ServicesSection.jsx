import Button from "../Button/Button";

const ServicesCard = ({ header, title, description, children }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-[64px] h-full py-10 lg:py-20 ">
      <div className="lg:w-1/2 flex flex-col justify-center px-4 lg:px-20 lg:py-10">
        <p className="text-violet text-xxs lg:text-xs lg:leading-[20.8px] font-medium">
          {header}
        </p>
        <h1 className="text-lg lg:text-xl font-semibold lg:leading-[70.4px]">
          {title}
        </h1>
        <p className="text-xxs lg:text-sm font-light lg:leading-[24px] mt-5 mb-10">
          {description}
        </p>
      </div>

      <div className={`flex items-center lg:w-1/2 px-4 lg:px-0`}>
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <span className="text-violet text-xxs lg:text-xs font-medium">
              01
            </span>
            <p className=" text-sm lg:text-lg lg:leading-[58px]">
              Consultoría de software
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-violet text-xxs lg:text-xs font-medium">
              02
            </span>
            <p className=" text-sm lg:text-lg lg:leading-[58px]">
              Desarrollo de software
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-violet text-xxs lg:text-xs font-medium">
              03
            </span>
            <p className=" text-sm lg:text-lg lg:leading-[58px]">
              Diseño UX/UI
            </p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-violet text-xxs lg:text-xs font-medium">
              04
            </span>
            <p className=" text-sm lg:text-lg lg:leading-[58px]">Testing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
