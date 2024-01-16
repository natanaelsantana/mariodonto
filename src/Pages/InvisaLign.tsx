import { Booking } from "../Components/Booking";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/header";
import InvisaImg from "/pics/tratamento-invisalign.webp";
import { Helmet } from "react-helmet";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export const InvisaLign = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="O aparelho Invisalign, a solução ideal para você!"
        />
        <meta
          name="keywords"
          content="odontologia, dentista, consultório dentário, saúde bucal, ortodontia, estética dentária, clareamento, preenchimento labial"
        />
      </Helmet>
      <Header />
      <section className="w-full ">
        <div className="h-20 lg:h-72 flex overflow-hidden flex-col relative w-full lg:w-full">
          <div className="relative w-full">
            <img
              src={InvisaImg}
              className="object-cover w-full -translate-y-1/3 opacity-60 lg:opacity-100 "
              alt="Sobre o aparelho Invisalign"
            />
            <div className="absolute inset-0 bg-invisalign-gradient lg:bg-none "></div>
          </div>
        </div>
      </section>

      <section className="w-full h-full pt-5 shadow-invisalignShadow z-10 flex flex-col">
        <div className="bg-white shadow-imageShadow h-full rounded-3xl px-10 py-5 text-xl text-lightGray leading-loose w-4/5 self-center">
          <p className="text-center">
            Mais de 15 milhões de pessoas melhoraram o seu sorriso.
          </p>
          <p className="text-center">
            Parece mágica, mas é apenas a mais alta tecnologia fazendo o seu
            trabalho.
          </p>
          <p className="text-center">
            <strong>
              Aqui na Mari Odontologia nós construímos o seu Sorriso!
            </strong>
          </p>
          <div className="group flex relative text-center animated-slideUp justify-center">
            <a
              className="relative mt-6 text-base font-bold font-openSans bg-maribrown hover:bg-mariYellow text-white py-3 px-6 rounded-full hover:pr-10 hover:pl-4 overflow-hidden transition-all duration-300 ease-linear delay-0 group"
              href="https://api.whatsapp.com/send?phone=551333822412&amp;text=Ol%C3%A1%20estou%20no%20site%20e%20gostaria%20de%20saber..."
              target="_blank"
              rel="ir ao whatsapp"
            >
              Fale conosco e agende sua consulta
              <svg
                className="fill-current text-white opacity-0 group-hover:opacity-100 absolute top-1/2 translate-x-1 right-10 transform -translate-y-1/2 transition-all duration-300 ease-linear delay-0"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/*About Invisalign and video */}
      <section className="w-full h-full pt-5 z-10 flex flex-col ">
        <div className="bg-white shadow-imageShadow h-full text-xl text-lightGray leading-loose w-4/5 self-center rounded-3xl pb-10">
          <div className="rounded-t-3xl bg-black overflow-hidden ">
            <LiteYouTubeEmbed
              id="wc0M5B7hzFc"
              title="YouTube video player invisalign"
              adNetwork={true}
              params=""
              playlist={false}
              playlistCoverId="wc0M5B7hzFc"
              poster="hqdefault"
              noCookie={true}
              webp={true}
            />
          </div>
          <div className="px-10 py-5 mt-10">
            <h2 className="text-2xl lg:text-4xl font-medium font-cantataOne text-maribrown mb-6 ">
              O APARELHO INVISALIGN
            </h2>
            <p className="mb-4 text-lightGray leading-loose font-openSans text-lg">
              O sorriso dos seus sonhos de forma rápida, confortável e estética.
            </p>
          </div>
          <div className="text-left px-10">
            <h3 className="text-xl font-medium font-cantataOne text-maribrown mb-6 leading-normal">
              Vantagens do tratamento com invisalign
            </h3>
            <ul className="mb-4 px-4 text-lightGray leading-loose font-openSans text-base space-y-3 list-disc">
              <li>É mais rápido e com resultado previsível</li>
              <li>
                Pode ser Removido Para se alimentar e higienizar os dentes
              </li>
              <li>É praticamente invisível e não compromete a estética</li>
              <li>Menos quebras e emergências</li>
            </ul>
          </div>
        </div>
      </section>

      {/*Image section */}
      <section className="w-full h-full pt-5 z-10 flex flex-col lg:justify-center lg:items-center lg:py-10 my-10 ">
        <div className="w-full lg:w-4/5 flex flex-col lg:flex-row">
          <div className="h-full rounded-3xl py-5 px-10 text-xl text-lightGray leading-loose w-full lg:w-1/2 self-center">
            <h2 className="text-3xl lg:text-4xl font-medium font-cantataOne text-maribrown mb-10 ">
              Ortodontia com Invisalign
            </h2>
            <p className=" text-base text-lightGray leading-loose">
              O tratamento com Invisalign utiliza alinhadores removíveis, feitos
              sob medida, que são trocados de acordo com a prescrição da
              Invisalign Doctor, Dra. Maria de Jesus.
            </p>
            <div className="mt-5">
              <h3 className="text-lg font-semibold font-openSans text-maribrown mb-6 leading-normal">
                O tratamento é indicado para casos simples e complexos, seguindo
                os principais requisitos:
              </h3>
              <ul className="mb-4 px-4 text-lightGray leading-loose font-openSans text-base space-y-2 list-disc">
                <li>Crianças a parir de 6 anos</li>
                <li>Adolescentes e Adultos</li>
                <li>Para os 50+</li>
              </ul>
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-semibold font-openSans text-maribrown mb-6 ">
                Como funciona?
              </h3>
              <div className="leading-loose space-y-4 font-openSans text-base text-lightGray">
                <p>
                  Após o exame clínico é feito um escaneamento dos dentes e uma
                  documentação ortodôntica.
                </p>
                <p>
                  A Dra Maria de Jesus realiza um planejamento e a Align
                  encaminha uma visualização da movimentação dos dentes e voçê
                  verá uma simulação do resultado do seu tratamento antes de
                  começar.
                </p>
                <p>
                  Sendo aprovado pelo ortodontista e pelo paciente os
                  alinhadores serão fabricados e após alguns dias é iniciado o
                  tratamento.
                </p>
                <p>
                  O Invisalign é um tratamento para os que desejam ter um
                  sorriso bonito e saudável, sem interromper a sua vida.
                </p>
                <p>Meu caso pode ser tratado com Invisalign?</p>
              </div>
            </div>
            <div className="group flex relative text-center animated-slideUp justify-center">
              <a
                className="relative mt-6 text-base font-bold font-openSans bg-maribrown hover:bg-mariYellow text-white py-3 px-6 rounded-full hover:pr-10 hover:pl-4 overflow-hidden transition-all duration-300 ease-linear delay-0 group"
                href="https://api.whatsapp.com/send?phone=551333822412&amp;text=Ol%C3%A1%20estou%20no%20site%20e%20gostaria%20de%20saber..."
                target="_blank"
                rel="ir ao whatsapp"
              >
                Fale conosco e agende sua consulta
                <svg
                  className="fill-current text-white opacity-0 group-hover:opacity-100 absolute top-1/2 translate-x-1 right-10 transform -translate-y-1/2 transition-all duration-300 ease-linear delay-0"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
                </svg>
              </a>
            </div>
          </div>
          <img
            src="pics/Ortodontia-Invisalign-MariFoto.webp"
            alt="Aparelho Invisalign, foto dra Mari"
            className="px-10 py-3 w-full lg:w-1/2"
          />
        </div>
      </section>

      <Booking />

      <Footer />
    </div>
  );
};
