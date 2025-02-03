const ContactSection = ({
  title,
  description,
  children,
  width = "w-[30%]",
  width2 = "w-[70%]",
  bg = "bg-white",
}) => {
  return (
    <div className="flex flex-col md:flex-row md:gap-[64px] h-full py-10">
      <div
        className={`${bg} flex flex-col w-full md:${width} justify-center px-2 md:px-20 md:py-10  `}
      >
        <h1 className="text-lg md:text-xl font-semibold md:leading-[70.4px]">
          {title}
        </h1>
        <p className="text-xxs md:text-sm font-light md:leading-[24px] mt-5 mb-10">
          {description}
        </p>
      </div>

      <div
        className={` flex justify-center md:items-center w-full md:${width2}`}
      >
        {children}
      </div>
    </div>
  );
};

export default ContactSection;
