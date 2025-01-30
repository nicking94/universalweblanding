import ClientsCard from "../Cards/ClientsCard";
import ClientsSlider from "../Slider/ClientsSlider";

const ClientsSection = ({
  header,
  title,
  description,
  width = "w-[25%]",
  width2 = "w-[75%]",
  bg = "bg-white",
}) => {
  return (
    <div className="flex  h-full">
      <div className={`${bg}  ${width} px-20`}>
        <div className=" space-y-8 -mt-24">
          <div className="flex flex-col items-center ">
            <span className=" text-violet text-xxxl font-semibold">+1</span>
            <p className="text-xxl leading-[58px] -mt-20 font-semibold">
              Clientes
            </p>
          </div>
          <div className="flex flex-col items-center ">
            <span className=" text-violet text-[8.6rem] font-semibold">+9</span>
            <p className="text-lg leading-[58px] -mt-10 font-semibold">
              Proyectos
            </p>
          </div>
          <div className="flex flex-col items-center ">
            <span className=" text-violet text-[8.6rem] font-semibold">45</span>
            <p className="text-lg leading-[58px] -mt-10 font-semibold">Cosas</p>
          </div>
        </div>
      </div>

      <div className={`${bg} flex flex-col ${width2} justify-center  px-20   `}>
        <p className="text-violet text-xs leading-[20.8px] font-medium">
          {header}
        </p>
        <h1 className="text-xl font-semibold leading-[70.4px] ">{title}</h1>
        <p className="text-sm font-light leading-[24px] mt-5 mb-10">
          {description}
        </p>
        <div>
          <ClientsSlider />
        </div>
      </div>
    </div>
  );
};

export default ClientsSection;
