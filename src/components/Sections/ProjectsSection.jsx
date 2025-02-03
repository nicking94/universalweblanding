import Button from "../Button/Button";

const ProjectCard = ({ title, subtitle, description, children }) => {
  return (
    <div className="flex flex-col lg:flex-row px-2 lg:px-20 w-full h-full">
      <div className="flex w-full lg:w-[75%]">{children}</div>
      <div className="flex flex-col py-10 lg:gap-[12px] lg:w-[30%]">
        <p className="text-violet text-xxs lg:text-xs leading-[20.8px] font-medium">
          Nuestros trabajos
        </p>
        <h1 className="text-lg lg:text-xxl font-semibold lg:leading-[88px]">
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
