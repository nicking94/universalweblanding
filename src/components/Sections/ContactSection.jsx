const ContactSection = ({
  title,
  description,
  children,
  width = "w-[25%]",
  width2 = "w-[75%]",
  bg = "bg-white",
}) => {
  return (
    <div className="flex gap-[64px] h-full py-10">
      <div
        className={`${bg} flex flex-col ${width} justify-center px-20 py-10  `}
      >
        <h1 className="text-xl font-semibold leading-[70.4px] ">{title}</h1>
        <p className="text-sm font-light leading-[24px] mt-5 mb-10">
          {description}
        </p>
      </div>

      <div className={` flex justify-center items-center  ${width2}`}>
        {children}
      </div>
    </div>
  );
};

export default ContactSection;
