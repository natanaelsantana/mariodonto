import { Booking } from "../Components/Booking";
import { Header } from "../Components/header";
import { Footer } from "../Components/Footer";
import ButtonWithIcon from "../Components/Button";

export const Facetas = () => {
  return (
    <div>
      <Header />

      {/*Introduction*/}
      <section className="relative flex h-full justify-center mb-10 ">
        <div className="absolute inset-0 bg-facetasResina bg-cover bg-right lg:bg-center opacity-60"></div>
        <div className="relative w-full bg-invisalign-gradient px-10 py-14 lg:py-28  lg:px-48 justify-center">
          <div className="text-left">
            <h1 className="text-3xl font-bold font-cantataOne text-maribrown text-center mb-6">
              Facetas em Resina
            </h1>
          </div>
          <div className="text-center font-openSans text-xl mb-10">
            <p className="mb-6 lg:px-20">
              Existem 2 tipos de pessoas, as que cuidam da saúde e estética e as
              que não cuidam. Qual é o seu tipo?
            </p>
            <p className="mb-6">
              <strong>
                Cuidamos da sua Saúde e Estética, que vão realizar o seu sonho.
              </strong>
            </p>
          </div>
          <ButtonWithIcon iconText="5" buttonText="Agende sua Consulta" />
        </div>
      </section>

      {/*What is*/}
      <section className="w-full h-full px-10 z-10 flex flex-col lg:justify-center lg:items-center lg:pb-10 ">
        <div className="w-full lg:w-4/5 flex flex-col lg:flex-row">
          <div className="h-full rounded-3xl py-5 text-xl text-lightGray leading-loose w-full lg:w-1/2 self-center lg:pr-9">
            <div>
              <h2 className="text-2xl font-semibold font-cantataOne text-maribrown mb-3">
                O que são Facetas em Resina?
              </h2>

              <div className="text-base text-lightGray leading-loose space-y-3">
                <p>
                  As Facetas em Resina direta transformam o aspecto dos dentes,
                  harmonizando o sorriso de forma rápida e natural.
                </p>
                <p>
                  A técnica das Facetas em Resina direta consiste na aplicação
                  de camadas de um material restaurador chamado Resina,
                  diretamente sobre os dentes, sem desgaste, com a finalidade de
                  modificar a cor, o tamanho, a forma e o brilho dos dentes,
                  resultando na melhora da estética com saúde e naturalidade.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-semibold font-cantataOne text-maribrown mb-3 leading-normal">
                Quando é indicado a Faceta em Resina?
              </h2>

              <ul className="px-4 mb-6 text-lightGray leading-loose font-openSans text-base space-y-1 list-disc">
                <p className="mb-6 text-lg">
                  <strong>É indicado para:</strong>
                </p>
                <li>
                  Melhorar a aparência de dentes manchados por cáries ou
                  quebrados
                </li>
                <li>Aproximar dentes separados uns dos outros</li>
                <li>
                  Aumentar dentes muito pequenos ou desgastados pelo atrito
                </li>
                <li>Clarear dentes escurecidos</li>
                <li>Alinhar pequenos desalinhamentos dos dentes</li>
                <li>Harmonizar o sorriso</li>
              </ul>

              <p className="mb-6 font-openSans text-lightGray text-base leading-loose">
                <strong>
                  O tratamento com Faceta em Resina é um dos procedimentos mais
                  realizados nos consultórios odontológicos. A praticidade e
                  preço acessível são as principais vantagens da Faceta, podendo
                  ser realizado até dez dentes em consulta única .
                </strong>
              </p>
            </div>
          </div>
          <div className="py-3 w-full lg:w-1/2 lg:h-1/2 space-y-10 hidden lg:block">
            <img
              src="./src/pics/Facetas-em-resina.jpg"
              alt="Aparelho Invisalign, foto dra Mari"
              className=" "
            />
            <img
              src="./src/pics/facetas-em-resina-2.jpg"
              alt="Aparelho Invisalign, foto dra Mari"
              className=" "
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center py-5 px-10 lg:px-20 lg:mb-20">
        <div className="justify-center text-center">
          <h2 className="text-2xl font-semibold font-cantataOne text-maribrown mb-3 leading-normal">
            Quer saber mais sobre o assunto?
          </h2>
          <p className="mb-6">
            <strong>Entre em contato conosco.</strong>
          </p>

          <div className="text-base font-openSans text-lightGray leading-loose space-y-2 mb-10">
            <p>Dra. Maria de Jesus C. Mari</p>
            <p>Cirurgiã Dentista Experiência de 37 anos</p>
            <p className="mb-6">
              <strong>Oferecemos GARANTIA dos nossos serviços.</strong>
            </p>
          </div>

          <ButtonWithIcon
            iconText="5"
            buttonText="Quero cuidar da minha saúde"
          />
        </div>
      </section>

      <Booking />
      <Footer />
    </div>
  );
};
