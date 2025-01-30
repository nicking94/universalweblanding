import Image from "next/image";
import image1 from "../../../../../public/images/projectsRecam1.svg";
import image2 from "../../../../../public/images/projectsRecam2.svg";
const RecamPage = () => {
  return (
    <div className="py-36 px-20 bg-background-gradient min-h-screen">
      <div className="flex flex-col items-center gap-[1rem]">
        <p className="font-light text-xs border rounded-[7.75rem] w-[6rem] py-1.5 px-4 leading-[20.8px]">
          Web app
        </p>
        <h1 className="font-semibold text-xl leading-[52.8px]">RECam</h1>
        <p className="text-violet font-medium text-sm leading-[24px]">
          Graba. Supervisa. Confía
        </p>
      </div>
      <div className="bg-slate-400 flex justify-center items-center h-[35rem] mt-10">
        video
      </div>
      <div className="flex justify-between p-4">
        <div className="flex flex-col items-center justify-center">
          <p className="font-semibold text-violet leading-[99.22px] text-xxl">
            +100
          </p>
          <p className="text-center font-medium leading-[24px] text-sm">
            Features en el dashboard
          </p>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <p className="font-semibold text-violet leading-[99.22px] text-xxl">
            +200%
          </p>
          <p className="text-center font-medium leading-[24px] text-sm">
            Mejora en administración de la empresa
          </p>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <p className="font-semibold text-violet leading-[99.22px] text-xxl">
            +90%
          </p>
          <p className="text-center font-medium leading-[24px] text-sm">
            Mejora en eficacia de ventas
          </p>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <p className="font-semibold text-violet leading-[99.22px] text-xxl">
            +120
          </p>
          <p className="text-center font-medium leading-[24px] text-sm">
            Clientes satisfechos
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center py-20 px-60">
        <p className="italic text-sm leading-[34px] text-center text-textGray">
          RECam. es una aplicación de escritorio y móvil que permite la
          supervisión de exámenes en entornos remotos, otorgando a los docentes
          la posibilidad monitorear en tiempo real la pantalla y cámara de sus
          estudiantes durante el examen, garantizando una experiencia de
          supervisión fluida y confiable.
        </p>
      </div>
      <div className="flex  flex-col gap-3">
        <p className="font-light text-xs border rounded-[2.75rem] w-[7rem] py-1.5 px-4 leading-[20.8px]">
          Dashboard
        </p>
        <div className="flex gap-8 ">
          <div className="bg-backgroundGray rounded-[10px] p-10 w-[40%] ">
            <h3 className="font-medium text-violet text-lg leading-[52.8px]">
              Análisis de métricas de ventas e inventario
            </h3>
            <p className="text-violet font-light leading-[44px] text-xs">
              Descubrirás informes claros y detallados, tanto mensuales como
              anuales, que te facilitarán la toma de decisiones informadas y la
              planificación estratégica.
            </p>
          </div>
          <div className="flex justify-end items-end bg-violet rounded-[10px] pt-10 w-[60%]">
            <Image src={image1} alt="recam1" />
          </div>
        </div>
        <div className="flex gap-8">
          <div className="flex justify-center items-end bg-violet rounded-[10px] pt-10 w-[60%]">
            <Image src={image2} alt="recam1" />
          </div>
          <div className=" bg-backgroundGray rounded-[10px] p-10 w-[40%]">
            <h3 className="font-medium text-violet text-lg leading-[52.8px]">
              Gestión y administración de personal
            </h3>
            <p className="text-violet font-light leading-[44px] text-xs">
              Asignación y modificación rápida de roles y permisos, garantizando
              que cada empleado sólo tenga acceso a la información necesaria,
              mejorando la seguridad y la organización.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RecamPage;
