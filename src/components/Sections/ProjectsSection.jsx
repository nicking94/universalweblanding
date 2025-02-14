import Button from "../Button/Button";

const ProjectCard = ({ title, subtitle, description, children }) => {
  return (
    <div className="xl:relative flex flex-col lg:flex-row px-4 lg:px-0 w-full h-full ">
      <div className=" flex md:w-[75%] xl:w-[80%] pb-10">{children}</div>
      <div className="  xl:relative 2xl:absolute  xl:right-36 flex flex-col  xl:py-10 lg:gap-[12px] md:w-[35%] xl:w-[30%]">
        <p className="text-violet text-xxs lg:text-xs leading-[20.8px] font-medium">
          Nuestros trabajos
        </p>
        <h1 className="text-lg xl:text-xxl font-semibold lg:leading-[88px]">
          {title}
        </h1>
        <p className="font-light  lg:leading-[32px] text-sm lg:text-md">
          {subtitle}
        </p>
        <p className="text-xxs lg:text-sm font-light lg:leading-[24px] lg:mt-4 pb-10 md:pb-0">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
