"use client";

const PricingSection = () => {
  // Función para generar el enlace de WhatsApp con mensaje personalizado
  const generateWhatsAppLink = (planName, price, description) => {
    const phoneNumber = "5492613077147"; // Reemplaza con tu número de WhatsApp
    const message = `Hola! Estoy interesado en el ${planName}`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  const plans = [
    {
      name: "Plan Mensual",
      price: "ARS $49.000",
      description: "Ideal para probar el sistema",
      features: [
        "Acceso a todas las características",
        "Sin limitaciones de uso",
        "Soporte prioritario por WhatsApp",
        "Actualizaciones incluidas",
        "Sin compromiso de permanencia",
      ],
      cta: "Comenzar ahora",
      popular: false,
    },
    {
      name: "Plan Anual",
      price: "ARS $457.000",
      description: "Ahorra 2 meses con el plan anual",
      features: [
        "Acceso a todas las características",
        "Sin limitaciones de uso",
        "Soporte prioritario por WhatsApp",
        "Actualizaciones incluidas",
        "Sin compromiso de permanencia",
      ],
      cta: "Ahorrar ahora",
      popular: true,
    },
    {
      name: "Pago Único",
      price: "ARS $911.000",
      description: "Acceso permanente al sistema",
      features: [
        "Acceso a todas las características",
        "Sin limitaciones de uso",
        "Soporte prioritario por WhatsApp",
        "Actualizaciones incluidas",
        "Sin compromiso de permanencia",
      ],
      cta: "Invertir una vez",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primaryBlue text-sm font-medium mb-2">
            Precios transparentes
          </p>
          <h2 className="text-md lg:text-xl font-semibold lg:leading-[70.4px] text-grayMedium">
            Planes que se adaptan a tu negocio
          </h2>
          <p className="text-grayMedium text-xs max-w-2xl mx-auto">
            Elige el plan que mejor se ajuste a las necesidades de tu empresa.
            Todos incluyen todas las funcionalidades sin restricciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-lg p-8 shadow-lg transition-all duration-300 hover:shadow-xl h-full ${
                plan.popular
                  ? "border-2 border-primaryBlue transform hover:-translate-y-2"
                  : "border border-gray-200"
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primaryBlue text-white text-xs font-semibold px-4 py-1 rounded-full">
                    Más Popular
                  </span>
                </div>
              )}

              <div className="flex-grow">
                <h3 className="text-xl text-center text-primaryBlue font-bold mb-2">
                  {plan.name}
                </h3>
                <div className="flex flex-col items-center justify-center mb-4">
                  <span className="text-md text-grayMedium font-bold">
                    {plan.price}
                  </span>

                  <p className="text-secondaryBlue text-sm mt-1">
                    {plan.description}
                  </p>
                </div>

                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-primaryBlue mr-2 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-4">
                <a
                  href={generateWhatsAppLink(
                    plan.name,
                    plan.price,
                    plan.description,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-3 px-6 rounded-lg transition-all duration-300 ${
                    plan.popular
                      ? "bg-primaryBlue text-white hover:bg-secondaryBlue"
                      : "bg-secondaryBlue text-white hover:bg-tertiaryBlue"
                  } font-semibold`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
