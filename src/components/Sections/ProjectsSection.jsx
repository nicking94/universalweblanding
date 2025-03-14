const ProjectsSection = ({ title, subtitle, description, children }) => {
  return (
    <div className=" flex flex-col-reverse lg:flex-row px-4 lg:px-0 w-full h-full ">
      <div className=" md:w-1/2">{children}</div>
      <div className="md:w-1/2 flex flex-col justify-center px-10  ">
        
        <h1 className="text-lg xl:text-xxl font-semibold lg:leading-[88px]">
          {title}
        </h1>
        <p className="font-light  lg:leading-[32px] text-sm lg:text-md">
          {subtitle}
        </p>
        <p className="text-xxs lg:text-sm font-light lg:leading-[24px] lg:mt-4 ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectsSection;
