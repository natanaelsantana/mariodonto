import { Footer } from "../Components/Footer";
import { Header } from "../Components/header";
import { Contact } from "../Components/sections/Contact";
import { Team } from "../Components/sections/Team";
import { Treatments } from "../Components/sections/Treatments";
import { TreatmentsIcons } from "../Components/sections/treatmentsIcons";
import ButtonWithIcon from "../Components/Button";
import Mariodonto from "/pics/Clinica-Odontologica-Mari-Odontologia-e-Estetica-Dentaria.webp";
import { Helmet } from "react-helmet";

export const Home = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Mari odontologia. O seu sorriso em boas mãos!"
        />
        <meta
          name="keywords"
          content="odontologia, dentista, consultório dentário, saúde bucal, ortodontia, estética dentária, clareamento, preenchimento labial,"
        />
      </Helmet>

      <Header />

      <section>
        <div className=" lg:relative w-screen lg:h-[35vw]">
          <img
            src={Mariodonto}
            className="h-full z-10 w-full"
            alt="Consultório Dra. Mari"
          />
          <div className="p-14 flex-col text-center z-5 lg:absolute lg:top-1/2 lg:left-0 lg:right-0 lg:ml-auto lg:mr-auto lg:transform lg:-translate-y-1/2  ">
            <h1 className="text-4xl lg:text-5xl font-normal font-cantataOne text-center text-maribrown lg:text-white lg:text-shadow pb-6 leading-tight animated-slideUp">
              Mari Odontologia
            </h1>
            <h2 className="text-2xl lg:text-3xl font-openSans font-normal text-center text-maribrown lg:text-white lg:text-shadow pb-6 lg:mb-10 leading-normal animated-slideUp">
              O seu Sorriso em boas mãos!
            </h2>
            <ButtonWithIcon buttonText="Agende sua visita" />
          </div>
        </div>
      </section>

      <section
        className=" bg-white py-20 lg:py-0"
        style={{
          background: "linear-gradient(180deg, #ffffff 0%, #eff1f4 100%)",
        }}
      >
        <div className="flex flex-col lg:flex-row items-center bg-whiteCircle bg-cover bg-center bg-no-repeat lg:px-32 lg:py-16 w-full">
          <div className="px-10 py-2 flex justify-center mb-16 lg:mb-0 lg:w-2/3">
            <p className="text-gray-500 text-left break-words text-lg font-openSans leading-loose">
              “Nossa Filosofia é oferecer aos nossos pacientes uma Odontologia
              de Qualidade, com uma equipe de Especialistas de Excelência.
              Trabalhamos com Aparelhos Ortodônticos de última geração, buscando
              um tratamento rápido e eficiente. Tudo para que você consiga
              Sorrir com mais Segurança.”
            </p>
          </div>

          <ButtonWithIcon buttonText="Conversar por Whatsapp" />
        </div>
      </section>

      <TreatmentsIcons />
      <Treatments />

      {/*Opinião de clientes*/}
      <section className="w-full flex justify-center bg-[#f9f9f9]">
        <div className=" px-10 py-20 lg:flex-col lg:justify-center lg:w-4/5">
          <div>
            <h2 className="text-3xl font-normal font-cantataOne text-maribrown text-center mb-16">
              Veja a opinião de nossos clientes...
            </h2>
          </div>
          <div className="flex flex-col lg:flex lg:flex-row  gap-y-6 lg:gap-x-16">
            <div className="flex-grow mb-6 lg:mb-0 lg:w-1/3">
              <div className="flex-grow p-6 bg-white shadow-opinionShadow">
                <p className="text-base font-openSans text-lightGray mb-4">
                  Tenho 56 anos e sempre sofri com a protrusão da maxila e já
                  havia procurado vários ortodontistas e em 2 anos ela resolveu.
                  Estou feliz e continuarei o tratamento. Super indico.
                </p>
                <span className="font-bold font-openSans text-base text-lightGray">
                  Fatima Cati F. Maneta
                </span>
              </div>
            </div>
            <div className="flex-grow mb-6 lg:mb-0 lg:w-1/3">
              <div className="flex-grow p-6 bg-white shadow-opinionShadow">
                <p className="text-base font-openSans text-lightGray mb-4">
                  Ótima profissional, atenciosa e muito competente.
                  <br />
                  Já fiz ortodontia com ela, e hoje foi extração de siso.
                  Atendimento muito humano.
                </p>
                <span className="font-bold font-openSans text-base text-lightGray">
                  Oriana Carreira
                </span>
              </div>
            </div>
            <div className="flex-grow mb-6 lg:mb-0 lg:w-1/3">
              <div className="flex-grow p-6 bg-white shadow-opinionShadow">
                <p className="text-base font-openSans text-lightGray mb-4">
                  Ótima profissional! Excelente ambiente, atendimento nota 10,
                  Dra. Maria sempre atenciosa.
                </p>
                <span className="font-bold font-openSans text-base text-lightGray">
                  Tamires Amancio
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Team />

      <Contact />

      {/*Localizacão */}
      <section className=" w-full flex flex-col lg:flex justify-center bg-white lg:px-20 py-10">
        <div className="flex flex-col lg:flex-row justify-around mt-4 gap-x-10">
          <div className="flex flex-col lg:flex items-center w-full">
            <iframe
              className="border-0 w-full"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14581.711635280488!2d-46.1956198!3d-23.9806621!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xec45bbbe8359cb7a!2sMari%20Odontologia!5e0!3m2!1spt-BR!2sbr!4v1645985890091!5m2!1spt-BR!2sbr"
              height="450"
              loading="lazy"
              title="Consultório Dra. Mari"
            ></iframe>
          </div>
          <div className="flex flex-col items-center w-full">
            <iframe
              className="border-0 w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1822.5127171224397!2d-46.25462187342615!3d-23.994878935121672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d1fe2e374cbd39%3A0x72c7031137627d25!2sR.%20Comendador%20Vicente%20Gagliano%2C%2031%20-%20Sala%2033%20-%20Centro%2C%20Guaruj%C3%A1%20-%20SP%2C%2011410-200!5e0!3m2!1spt-BR!2sbr!4v1645988608236!5m2!1spt-BR!2sbr"
              height="450"
              loading="lazy"
              title="consultório dra Mari"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
