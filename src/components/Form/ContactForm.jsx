import { useState } from "react";
import { InlineWidget } from "react-calendly";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [activeTab, setActiveTab] = useState("calendly");
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = String(currentDate.getMonth() + 1).padStart(2, "0");

  const monthYear = `${currentYear}-${currentMonth}`;

  return (
    <div className=" w-full shadow-lg h-full ">
      <div className="flex w-full">
        <button
          className={`p-3 w-1/2 text-center text-primaryBlue ${
            activeTab === "calendly"
              ? "bg-white rounded-tr-lg rounded-tl-lg font-medium"
              : "bg-transparent font-light"
          }`}
          onClick={() => setActiveTab("calendly")}
        >
          Reunión online
        </button>
        <button
          className={`p-3 w-1/2 text-center text-primaryBlue ${
            activeTab === "contact"
              ? "bg-white rounded-tr-lg rounded-tl-lg font-medium"
              : "bg-transparent font-light"
          }`}
          onClick={() => setActiveTab("contact")}
        >
          Formulario de contacto
        </button>
      </div>

      {activeTab === "calendly" ? (
        <div className="w-full bg-white min-h-[630px]  ">
          <InlineWidget
            url={`https://calendly.com/universalweb/30min?locale=es&preview_source=et_card&month=${monthYear}`}
          
          />
        </div>
      ) : (
        <div className="w-full ">
          <form
            className="flex flex-col justify-between w-full min-h-[630px] p-4 bg-white"
          >
            <div className="w-full space-y-3">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full p-3 border-b border-primaryBlue outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border-b border-primaryBlue outline-none"
              />
              <textarea
                placeholder="Mensaje"
                className="w-full h-full p-3 border-b border-primaryBlue outline-none"
                rows="4"
              />
            </div>
            <div className="flex pb-4 justify-center">
              <button
                type="submit"
                className="hover:scale-105 transition-all duration-300 w-[15rem] bg-primaryBlue  text-white py-4 rounded-lg"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
