import { Header } from "../Components/header";

export const Home = () => {
  return (
    <div className="flex flex-col items-center overflow-hidden min-h-screen w-full">
      <Header />

      <section>
        <div className="relative h-full">
          <img
            src="https://mariodontologia.com.br/wp-content/uploads/2022/02/Clinica-Odontologica-Mari-Odontologia-e-Estetica-Dentaria.jpg"
            className="z-10"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center">
            <h1 className="text-4xl font-bold">Mari Odontologia</h1>
            <h2 className="text-2xl">O seu Sorriso em boas mãos!</h2>
            <a
              href="https://api.whatsapp.com/send?phone=551333822412&text=Ol%C3%A1%20estou%20no%20site%20e%20gostaria%20de%20saber..."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded"
            >
              Agende sua visita
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-white p-8">
            <h2 className="text-2xl font-bold mb-4"></h2>
            <p className="text-gray-800">
              “Nossa Filosofia é oferecer aos nossos pacientes uma Odontologia
              de Qualidade, com uma equipe de Especialistas de Excelência.
              Trabalhamos com Aparelhos Ortodônticos de última geração, buscando
              um tratamento rápido e eficiente. Tudo para que você consiga
              Sorrir com mais Segurança.”
            </p>
          </div>

          <div className="bg-white p-8 flex items-center justify-center">
            <a
              href="https://api.whatsapp.com/send?phone=551333822412&amp;text=Ol%C3%A1%20estou%20no%20site%20e%20gostaria%20de%20saber..."
              target="_blank"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Conversar Por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="bg-black w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
          {/* Profilaxia */}
          <div className=" p-4 text-center">
            <img
              src="https://mariodontologia.com.br/wp-content/uploads/2022/02/dentist-icon-white-6.png"
              alt="Profilaxia"
              className="mx-auto mb-4"
            />
            <h4 className="font-bold text-lg mb-2">Profilaxia</h4>
          </div>

          {/* Implantes */}
          <div className=" p-4 text-center">
            <img
              src="https://mariodontologia.com.br/wp-content/uploads/2022/02/dentist-icon-white-4.png"
              alt="Implantes"
              className="mx-auto mb-4"
            />
            <h4 className="font-bold text-lg mb-2">Implantes</h4>
          </div>

          {/* Ortodontia */}
          <div className=" p-4 text-center">
            <img
              src="https://mariodontologia.com.br/wp-content/uploads/2022/02/dentist-icon-white-2.png"
              alt="Ortodontia"
              className="mx-auto mb-4"
            />
            <h4 className="font-bold text-lg mb-2">Ortodontia</h4>
          </div>

          {/* Estética Dentária */}
          <div className=" p-4 text-center">
            <img
              src="https://mariodontologia.com.br/wp-content/uploads/2022/02/dentist-icon-white-1.png"
              alt="Estética Dentária"
              className="mx-auto mb-4"
            />
            <h4 className="font-bold text-lg mb-2">Estética Dentária</h4>
          </div>

          {/* Clareamento */}
          <div className=" p-4 text-center">
            <img
              src="https://mariodontologia.com.br/wp-content/uploads/2022/02/dentist-icon-white-5.png"
              alt="Clareamento"
              className="mx-auto mb-4"
            />
            <h4 className="font-bold text-lg mb-2">Clareamento</h4>
          </div>

          {/* Preenchimento Labial */}
          <div className="bg-black p-4 text-center">
            <img
              src="https://mariodontologia.com.br/wp-content/uploads/2022/02/dentist-icon-white-3.png"
              alt="Preenchimento Labial"
              className="mx-auto mb-4"
            />
            <h4 className="font-bold text-lg mb-2">Preenchimento Labial</h4>
          </div>
        </div>
      </section>
    </div>
  );
};
