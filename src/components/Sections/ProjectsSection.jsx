import Button from "../Button/Button";

const ProjectCard = ({ title, subtitle, description, children }) => {
  return (
    <div className="2xl:relative flex flex-col lg:flex-row px-4 lg:px-20 w-full h-full">
      <div className="flex md:w-[75%] 2xl:w-[85%]">{children}</div>
      <div className=" md:relative 2xl:absolute  2xl:right-52 flex flex-col lg:py-10 lg:gap-[12px] md:w-[35%] 2xl:w-[30%]">
        <p className="text-violet text-xxs lg:text-xs leading-[20.8px] font-medium">
          Nuestros trabajos
        </p>
        <h1 className="text-lg 2xl:text-xxl font-semibold lg:leading-[88px]">
          {title}
        </h1>
        <p className="font-light lg:leading-[32px] text-sm lg:text-md">
          {subtitle}
        </p>
        <p className="text-xxs lg:text-sm font-light lg:leading-[24px] mt-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
