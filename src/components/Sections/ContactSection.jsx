const ContactSection = ({
  title,
  description,
  children,
  bg = "bg-white",
}) => {
  return (
    <div className="flex flex-col lg:flex-row w-full h-full py-10">
      <div
        className={`${bg} flex flex-col w-full  justify-center px-4 lg:px-20 lg:py-10  `}
      >
        <h1 className="text-lg lg:text-xl font-semibold lg:leading-[70.4px]">
          {title}
        </h1>
        <p className="text-xxs lg:text-sm font-light lg:leading-[24px] mt-5 mb-10">
          {description}
        </p>
      </div>

      <div
        className={` flex justify-center lg:items-center w-full px-6`}
      >
        {children}
      </div>
    </div>
  );
};

export default ContactSection;
