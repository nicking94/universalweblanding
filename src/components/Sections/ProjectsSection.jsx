import Button from "../Button/Button";

const ProjectCard = ({ title, subtitle, description, children }) => {
  return (
    <div className="flex flex-col md:flex-row px-2 md:px-20 h-full">
      <div className="flex md:w-[75%]">{children}</div>
      <div className="flex flex-col py-10 md:gap-[12px] md:w-[30%]">
        <p className="text-violet text-xxs md:text-xs leading-[20.8px] font-medium">
          Nuestros trabajos
        </p>
        <h1 className="text-lg md:text-xxl font-semibold leading-[88px]">
          {title}
        </h1>
        <p className="font-light leading-[32px] text-sm md:text-md">
          {subtitle}
        </p>
        <p className="text-xxs md:text-sm font-light leading-[24px] mt-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
