import { Footer } from "../Components/Footer";
import { Header } from "../Components/header";
import { Team } from "../Components/sections/Team";
import { TreatmentsIcons } from "../Components/sections/treatmentsIcons";
import { Contact } from "../Components/sections/Contact";
import ButtonWithIcon from "../Components/Button";

export const QuemSomos = () => {
  return (
    <div>
      <Header />

      <section className=" bg-maribrown w-screen ">
        <div className="bg-quemSomosBackground bg-cover bg-right bg-no-repeat h-full rounded-bl-[30px] lg:rounded-bl-[10vw] ">
          <div className="relative h-full w-screen bg-radial-gradient py-10 px-10 lg:pb-10 rounded-bl-[30px] lg:p-32 lg:pt-60 lg:rounded-bl-[10vw] lg:flex shadow-imageShadow ">
            <div className="w-full lg:w-2/3 lg:flex-col lg:justify-center ">
              <div className="text-left">
                <h1 className="text-2xl text-left font-normal lg:text-4xl text-[#333] font-cantataOne mb-4">
                  O seu Sorriso em boas mãos!
                </h1>
                <h2 className="text-xl text-[#000000] opacity-30 mb-16 ">
                  Lembre-se: A saúde começa pela boca!
                </h2>
              </div>
              <div className="mt-4 mb-16">
                <a
                  className="relative mt-6 text-md font-bold font-openSans bg-maribrown hover:bg-[#ecb00c] text-white py-3 px-6 rounded-full hover:pr-10 hover:pl-4 overflow-hidden transition-all duration-300 ease-linear delay-0 group"
                  href="https://api.whatsapp.com/send?phone=551333822412&amp;text=Ol%C3%A1%20estou%20no%20site%20e%20gostaria%20de%20saber..."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agende uma avaliação
                  <span className=" text-white opacity-0 group-hover:opacity-100 absolute top-1/2 translate-x-1 right-10 transform -translate-y-1/2 text-2xl font-etMoudles transition-all duration-300 ease-linear delay-0">
                    5
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-equipamentosBackground bg-cover bg-center w-screen shadow-insideShadow ">
        <div className="flex justify-center bg-linear-gradient  bg-cover py-14 px-10 lg:px-32 shadow-insideShadow">
          <div className="w-full md:w-full lg:w-full  ">
            <div className="text-center">
              <h2 className="text-2xl font-medium font-cantataOne text-maribrown mb-6 leading-normal">
                Especialista em Ortodontia e Ortopedia Funcional dos Maxilares
              </h2>
              <p className="mb-4 text-lightGray leading-loose font-openSans text-lg">
                Nossa Filosofia é oferecer aos nossos pacientes uma Odontologia
                de Qualidade, com uma equipe de Especialistas de Excelência.
                Trabalhamos com Aparelhos Ortodônticos de última geração,
                buscando um tratamento rápido e eficiente. Tudo para que você
                consiga Sorrir com mais Segurança.
              </p>
            </div>
            <ButtonWithIcon buttonText="Fale conosco" iconText="5" />
          </div>
        </div>
      </section>

      <TreatmentsIcons />

      <section className="text-center bg-white px-10 pt-16">
        <div>
          <h2 className="text-2xl font-medium font-cantataOne text-maribrown mb-4">
            Técnico
          </h2>
          <p className="text-lg text-lightGray font-openSans leading-loose">
            Dra Maria de Jesus C. Mari
            <br />
            CRO 45084
            <br />
            Cirurgiã Dentista desde 1985
            <br />
            Especialista em Ortodontia e Ortopedia Funcional dos Maxilares
            <br />
            Credenciada pela Align Technology como Invisalign Doctor
          </p>
        </div>
      </section>

      <Team />

      <section className="pb-20 w-full">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};
