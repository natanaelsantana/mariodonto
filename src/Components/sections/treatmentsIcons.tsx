import { useInView } from "react-intersection-observer";

export const TreatmentsIcons = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Garante que a animação seja acionada apenas uma vez
    threshold: 0.4, // Define a porcentagem visível do componente para acionar a animação
  });
  // Array de objetos com informações sobre cada tratamento
  const treatments = [
    {
      imgSrc: "pics/icons/dentist-icon-white-6.webp",
      alt: "Profilaxia",
      text: "Profilaxia",
    },
    {
      imgSrc: "pics/icons/dentist-icon-white-4.webp",
      alt: "Implantes",
      text: "Implantes",
    },
    {
      imgSrc: "pics/icons/dentist-icon-white-2.webp",
      alt: "Ortodontia",
      text: "Ortodontia",
    },
    {
      imgSrc: "pics/icons/dentist-icon-white-1.webp",
      alt: "Estética Dentária",
      text: "Estética Dentária",
    },
    {
      imgSrc: "pics/icons/dentist-icon-white-5.webp",
      alt: "Clareamento",
      text: "Clareamento",
    },
    {
      imgSrc: "pics/icons/dentist-icon-white-3.webp",
      alt: "Preenchimento Labial",
      text: "Preenchimento Labial",
    },
  ];

  return (
    <section
      ref={ref}
      className="bg-maribrown w-full p-16 font-cantataOne text-sm font-medium lg:px-36 "
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:flex lg:justify-around">
        {treatments.map((treatment, index) => (
          <div key={index} className="p-4 text-center">
            <img
              src={treatment.imgSrc}
              alt={treatment.alt}
              className={`mx-auto mb-8 ${inView ? "animated-slideDown" : ""}`}
            />
            <h3 className="mb-2 text-white">{treatment.text}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
