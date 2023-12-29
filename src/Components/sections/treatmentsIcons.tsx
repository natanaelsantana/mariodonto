export const TreatmentsIcons = () => {
  // Array de objetos com informações sobre cada tratamento
  const treatments = [
    {
      imgSrc:
        "https://mariodontologia.com.br/wp-content/uploads/2022/02/dentist-icon-white-6.png",
      alt: "Profilaxia",
      text: "Profilaxia",
    },
    {
      imgSrc:
        "https://mariodontologia.com.br/wp-content/uploads/2022/02/dentist-icon-white-4.png",
      alt: "Implantes",
      text: "Implantes",
    },
    {
      imgSrc:
        "https://mariodontologia.com.br/wp-content/uploads/2022/02/dentist-icon-white-2.png",
      alt: "Ortodontia",
      text: "Ortodontia",
    },
    {
      imgSrc:
        "https://mariodontologia.com.br/wp-content/uploads/2022/02/dentist-icon-white-1.png",
      alt: "Estética Dentária",
      text: "Estética Dentária",
    },
    {
      imgSrc:
        "https://mariodontologia.com.br/wp-content/uploads/2022/02/dentist-icon-white-5.png",
      alt: "Clareamento",
      text: "Clareamento",
    },
    {
      imgSrc:
        "https://mariodontologia.com.br/wp-content/uploads/2022/02/dentist-icon-white-3.png",
      alt: "Preenchimento Labial",
      text: "Preenchimento Labial",
    },
  ];

  return (
    <section className="bg-maribrown w-full p-16 font-cantataOne text-sm font-medium lg:px-36">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:flex lg:justify-around">
        {treatments.map((treatment, index) => (
          <div key={index} className="p-4 text-center">
            <img
              src={treatment.imgSrc}
              alt={treatment.alt}
              className="mx-auto mb-8 animated-slideDown"
            />
            <h4 className="mb-2 text-white">{treatment.text}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};
