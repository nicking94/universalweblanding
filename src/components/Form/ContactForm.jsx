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

  return (
    <div className=" flex flex-col w-full shadow-lg h-full mr-36 ">
      <div className="flex w-full ">
        <button
          className={`p-3 w-1/2 text-center text-violet  ${
            activeTab === "calendly"
              ? "bg-white rounded-tr-lg rounded-tl-lg font-medium"
              : "bg-transparent font-light"
          }`}
          onClick={() => setActiveTab("calendly")}
        >
          Reunión online
        </button>
        <button
          className={`p-3 w-1/2 text-center text-violet ${
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
        <div className="w-full h-[700px] bg-white ">
          <InlineWidget
            url="https://calendly.com/novexis-consulting/45min?preview_source=et_card&month=2025-01"
            styles={{ height: "100%", width: "100%" }}
          />
        </div>
      ) : (
        <div className="w-full h-[700px]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-between w-full h-[700px] p-4 bg-white"
          >
            <div className="w-full  space-y-3">
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="Nombre"
                className="w-full p-3 border-b border-violet outline-none"
              />
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Email"
                className="w-full p-3 border-b border-violet outline-none"
              />
              <textarea
                {...register("message", { required: true })}
                placeholder="Mensaje"
                className="w-full h-full p-3 border-b border-violet outline-none"
                rows="4"
              />
            </div>
            <div className="flex pb-4 justify-center">
              <button
                type="submit"
                className=" w-[15rem] bg-pink-600 text-white py-4 rounded-lg"
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
