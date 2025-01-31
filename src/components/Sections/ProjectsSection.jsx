import Button from "../Button/Button";

const ProjectCard = ({ title, subtitle, description, children }) => {
  return (
    <div className="flex gap-[64px] px-20 py-10 h-full">
      <div className="flex flex-col gap-[12px] w-[30%]">
        <p className="text-violet text-xs leading-[20.8px] font-medium">
          Nuestros trabajos
        </p>
        <h1 className="text-xxl font-semibold leading-[88px]">{title}</h1>
        <p className="font-light leading-[32px] text-md">{subtitle}</p>
        <p className="text-sm font-light leading-[24px] mt-4">{description}</p>

        <div className="mt-10">
          <Button text="Ver proyecto" />
        </div>
      </div>
      <div className="flex justify-center items-center h-[640px] bg-white w-[75%]">
        {children}
      </div>
    </div>
  );
};

export default ProjectCard;
