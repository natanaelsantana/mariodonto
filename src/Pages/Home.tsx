import { Footer } from "../Components/Footer";
import { ScheduleAssessment } from "../Components/Form";
import { Header } from "../Components/header";
import { Contact } from "../Components/sections/Contact";
import { Team } from "../Components/sections/Team";
import { Treatments } from "../Components/sections/Treatments";
import { TreatmentsIcons } from "../Components/sections/treatmentsIcons";

export const Home = () => {
  return (
    <div className="flex flex-col items-center overflow-hidden min-h-screen w-screen">
      <Header />

      <section>
        <div className="h-full lg:relative w-screen ">
          <img
            src="https://mariodontologia.com.br/wp-content/uploads/2022/02/Clinica-Odontologica-Mari-Odontologia-e-Estetica-Dentaria.jpg"
            className="h-full z-10 w-full"
          />
          <div className="p-14 flex-col text-center z-5 lg:absolute lg:top-1/2 lg:left-0 lg:right-0 lg:ml-auto lg:mr-auto lg:transform lg:-translate-y-1/2 lg:mt-12 slide-up">
            <h1 className="text-4xl lg:text-5xl font-normal font-cantataOne text-center text-maribrown lg:text-white lg:text-shadow pb-6 leading-tight">
              Mari Odontologia
            </h1>
            <h2 className="text-2xl lg:text-3xl font-openSans font-normal text-center text-maribrown lg:text-white lg:text-shadow pb-6 leading-normal">
              O seu Sorriso em boas mãos!
            </h2>
            <a
              href="https://api.whatsapp.com/send?phone=551333822412&text=Ol%C3%A1%20estou%20no%20site%20e%20gostaria%20de%20saber..."
              target="_blank"
              rel="whatsapp button"
              className="mt-6 inline-block text-md font-bold font-openSans bg-maribrown text-white py-3 px-6 rounded-full"
            >
              Agende sua visita
            </a>
          </div>
        </div>
      </section>

      <section
        className="relative bg-white"
        style={{
          background: "linear-gradient(180deg, #ffffff 0%, #eff1f4 100%)",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 bg-whiteCircle bg-cover bg-center bg-no-repeat py-24 lg:p-24   ">
          <div className="px-10 py-2 flex justify-center">
            <h2 className="text-2xl font-bold "></h2>
            <p className="text-gray-500 text-left break-words text-lg font-openSans leading-loose">
              “Nossa Filosofia é oferecer aos nossos pacientes uma Odontologia
              de Qualidade, com uma equipe de Especialistas de Excelência.
              Trabalhamos com Aparelhos Ortodônticos de última geração, buscando
              um tratamento rápido e eficiente. Tudo para que você consiga
              Sorrir com mais Segurança.”
            </p>
          </div>
          <div className="px-8 flex items-center justify-center">
            <a
              href="https://api.whatsapp.com/send?phone=551333822412&text=Ol%C3%A1%20estou%20no%20site%20e%20gostaria%20de%20saber..."
              target="_blank"
              rel="whatsapp button"
              className="mt-6 inline-block text-md font-bold font-openSans bg-maribrown text-white py-4 px-6 rounded-full"
            >
              Conversar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <TreatmentsIcons />
      <Treatments />

      {/*Opinião de clientes*/}
      <section>
        <div className="flex flex-col">
          <div className="flex-grow">
            <div className="text-left">
              <h2 className="text-2xl font-bold">
                Veja a opinião de nossos clientes…
              </h2>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex-grow">
              <div className="text-left">
                <p>
                  Tenho 56 anos e sempre sofri com a protrusão da maxila e já
                  havia procurado vários ortodontistas e em 2 anos ela resolveu.
                  <br />
                  Estou feliz e continuarei o tratamento.
                  <br />
                  Super indico.
                </p>
                <span className="font-bold">Fatima Cati F. Maneta</span>
              </div>
            </div>
            <div className="flex-grow">
              <div className="text-left">
                <p>
                  Ótima profissional, atenciosa e muito competente.
                  <br />
                  Já fiz ortodontia com ela, e hj foi extração de siso.
                  Atendimento muito humano.
                </p>
                <span className="font-bold">Oriana Carreira</span>
              </div>
            </div>
            <div className="flex-grow">
              <div className="text-left">
                <p>
                  Ótima profissional! Excelente ambiente , atendimento nota10 ,
                  dr Maria sempre atenciosa.
                </p>
                <span className="font-bold">Tamires Amancio</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Team />
      <ScheduleAssessment />
      <Contact />

      {/*Localizacão */}
      <section>
        <div className="flex justify-around mt-4">
          <div className="flex flex-col items-center">
            <iframe
              className="border-0"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14581.711635280488!2d-46.1956198!3d-23.9806621!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xec45bbbe8359cb7a!2sMari%20Odontologia!5e0!3m2!1spt-BR!2sbr!4v1645985890091!5m2!1spt-BR!2sbr"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
          <div className="flex flex-col items-center">
            <iframe
              className="border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1822.5127171224397!2d-46.25462187342615!3d-23.994878935121672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d1fe2e374cbd39%3A0x72c7031137627d25!2sR.%20Comendador%20Vicente%20Gagliano%2C%2031%20-%20Sala%2033%20-%20Centro%2C%20Guaruj%C3%A1%20-%20SP%2C%2011410-200!5e0!3m2!1spt-BR!2sbr!4v1645988608236!5m2!1spt-BR!2sbr"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
