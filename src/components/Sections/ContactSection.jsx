const ContactSection = ({
  title,
  description,
  children,
  width = "w-[30%]",
  width2 = "w-[70%]",
  bg = "bg-white",
}) => {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-[64px] h-full py-10">
      <div
        className={`${bg} flex flex-col w-full lg:${width} justify-center px-4 lg:px-20 lg:py-10  `}
      >
        <h1 className="text-lg lg:text-xl font-semibold lg:leading-[70.4px]">
          {title}
        </h1>
        <p className="text-xxs lg:text-sm font-light lg:leading-[24px] mt-5 mb-10">
          {description}
        </p>
      </div>

      <div
        className={` flex justify-center lg:items-center w-full lg:${width2}`}
      >
        {children}
      </div>
    </div>
  );
};

export default ContactSection;
