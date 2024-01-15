import { Booking } from "../Components/Booking";
import { Header } from "../Components/header";
import { Footer } from "../Components/Footer";
import ButtonWithIcon from "../Components/Button";
import { Helmet } from "react-helmet";

export const Implante = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Implante dentário, seu sorriso mais belo!"
        />
        <meta
          name="keywords"
          content="odontologia, dentista, consultório dentário, saúde bucal, ortodontia, estética dentária, clareamento, preenchimento labial, implante dentário"
        />
      </Helmet>
      <Header />

      {/*Introduction*/}
      <section className="relative flex h-full justify-center mb-10 ">
        <div
          className="absolute inset-0 bg-implanteDentario bg-cover bg-right lg:bg-center opacity-60"
          role="img"
          aria-label="Implante dentário"
        ></div>
        <div className="relative w-full bg-invisalign-gradient px-10 py-14 lg:py-28  lg:px-48 justify-center">
          <div className="text-left">
            <h1 className="text-3xl font-bold font-cantataOne text-maribrown text-center mb-6">
              Implante Dentário
            </h1>
          </div>
          <div className="text-center font-openSans text-xl mb-10">
            <p className="mb-6">
              Você perdeu a vontade de sorrir e se alimentar? <br /> Está na
              hora de dar um passo para a construção do seu sorriso.
            </p>
            <p className="mb-6">
              <strong>Fale conosco e agende sua consulta</strong>
            </p>
          </div>
          <ButtonWithIcon buttonText="Fale conosco" />
        </div>
      </section>

      {/*What is*/}
      <section className="w-full h-full px-10 z-10 flex flex-col lg:justify-center lg:items-center lg:pb-10 mb-10  ">
        <div className="w-full lg:w-4/5 flex flex-col lg:flex-row ">
          <div className="h-full rounded-3xl py-5 text-xl text-lightGray leading-loose w-full lg:w-1/2 self-center lg:pr-9">
            <div>
              <h2 className="text-2xl lg:text-3xl font-semibold font-cantataOne text-maribrown mb-3">
                O que são implantes dentários?
              </h2>
              <div className="text-base text-lightGray leading-loose space-y-3">
                <p>
                  São cilindros de titânio instalados nos ossos dos maxilares
                  com o objetivo de substituir dentes ausentes.
                </p>
                <p>
                  Semelhante aos dentes naturais, tem a finalidade de
                  restabelecer a estética, a mastigação, o conforto e segurança.
                </p>
                <p>
                  O implante pode ser feito para substituir um único dente ou
                  para paciente desdentado total, com a prótese total fixa sobre
                  implantes, solução excelente e rápida.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-2xl lg:text-3xl font-semibold font-cantataOne text-maribrown mb-3 ">
                Como é feito o tratamento?
              </h2>
              <div className="text-base text-lightGray leading-loose space-y-3">
                <p>
                  O tratamento é feito em duas etapas: Cirúrgica e protética.
                </p>
                <p>
                  <strong>Etapa cirúrgica:</strong> O implante é instalado no
                  osso, com anestesia local e após um período ele ficará
                  integrado ao osso maxilar.
                </p>
                <p>
                  <strong>Etapa protética:</strong> Consiste em realizar a
                  prótese e fixar sobre o implante com parafuso.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-2xl lg:text-3xl font-semibold font-cantataOne text-maribrown mb-3 leading-normal">
                Benefícios do Implante Dentário:
              </h2>
              <ul className="px-4 text-lightGray leading-loose font-openSans text-base space-y-1 list-decimal">
                <li>Aparência e função semelhante ao dente natural</li>
                <li>Possibilita deixar o céu da boca livre</li>
                <li>Evita dores causadas pelas próteses removíveis</li>
                <li> Melhora o aspecto facial</li>
                <li>Facilita a higienização</li>
                <li>É fixo</li>
              </ul>
            </div>

            <ButtonWithIcon buttonText="Fale conosco" />
          </div>
          <img
            src="pics/Implante-Dentario-Mari-Odontologia-scaled.webp"
            alt="Aparelho Invisalign, foto dra Mari"
            className=" py-3 w-full lg:w-1/2"
          />
        </div>
      </section>

      <Booking />
      <Footer />
    </div>
  );
};
