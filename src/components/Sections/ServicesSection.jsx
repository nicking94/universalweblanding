import Button from "../Button/Button";

const ServicesCard = ({
  header,
  title,
  description,
  children,
  width = "w-[25%]",
  width2 = "w-[75%]",
  bg = "bg-white",
}) => {
  return (
    <div className="flex gap-[64px] h-full 0 ">
      <div
        className={`${bg} flex flex-col ${width} justify-center px-20 py-10  `}
      >
        <p className="text-violet text-xs leading-[20.8px] font-medium">
          {header}
        </p>
        <h1 className="text-xl font-semibold leading-[70.4px] ">{title}</h1>
        <p className="text-sm font-light leading-[24px] mt-5 mb-10">
          {description}
        </p>
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <span className="text-violet text-xs font-medium">01</span>
            <p className=" text-lg leading-[58px]">Consultoría de software</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-violet text-xs font-medium">02</span>
            <p className=" text-lg leading-[58px]">Desarrollo de software</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-violet text-xs font-medium">03</span>
            <p className=" text-lg leading-[58px]">Diseño UX/UI</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-violet text-xs font-medium">04</span>
            <p className=" text-lg leading-[58px]">Testing</p>
          </div>
        </div>
      </div>

      <div className={`flex justify-center items-center  ${width2}`}>
        {children}
      </div>
    </div>
  );
};

export default ServicesCard;
