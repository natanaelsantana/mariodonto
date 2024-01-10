import ButtonWithIcon from "../Components/Button";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/header";
import { Contact } from "../Components/sections/Contact";
import { Treatments } from "../Components/sections/Treatments";
import { TreatmentsIcons } from "../Components/sections/treatmentsIcons";

export const Tratamentos = () => {
  return (
    <div>
      <Header />

      <section className=" bg-equipamentosBackground bg-cover bg-center w-screen shadow-insideShadow ">
        <div className="flex justify-center bg-linear-gradient bg-cover py-14 px-10 lg:px-32 shadow-insideShadow">
          <div className="w-full md:w-full lg:w-2/3  ">
            <div className="text-center lg:mb-10">
              <h2 className="text-2xl font-medium font-cantataOne text-maribrown mb-6 leading-normal">
                Tratamentos
              </h2>
              <p className="mb-4 text-lightGray leading-loose font-openSans text-lg ">
                A Clínica Mari Odontologia está estabelecida no Guarujá desde
                1997. Temos o compromisso de oferecer aos nossos pacientes uma
                Equipe Especializada de Excelência. Nossa Filosofia é praticar
                uma Odontologia de Qualidade.
              </p>
              <p className="mb-4 text-lightGray leading-loose font-openSans text-lg">
                Os dentes são fundamentais para a mastigação, fala, respiração,
                deglutição e estética. E buscamos ajudá-lo a se sentir melhor e
                garantir sua saúde.
              </p>
            </div>
            <ButtonWithIcon buttonText="Agende uma avaliação" iconText="5" />
          </div>
        </div>
      </section>

      <TreatmentsIcons />
      <Treatments />
      <section className="pb-20">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};
