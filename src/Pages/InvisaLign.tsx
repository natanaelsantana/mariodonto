import { Header } from "../Components/header";
import InvisaImg from "../pics/Tratamento-Invisalign.png";

export const InvisaLign = () => {
  return (
    <div className="flex flex-col items-center overflow-hidden min-h-screen w-full">
      <Header />
      <section className="mt-20">
        <div className="h-20 flex overflow-hidden flex-col relative w-full">
          <div className="relative w-full">
            <img
              src={InvisaImg}
              className="object-cover w-full -translate-y-1/3 opacity-50"
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-r from from-transparent from-5% to-95% to-white "></div>
          </div>
        </div>
      </section>
      <section className="w-full h-full bg-zinc-50 p-12">
        <div className="bg-white w-full h-full rounded-lg p-4 text-xl text-zinc-600 leading-loose">
          <div className="text-center">
            Mais de 15 milhões de pessoas melhoraram o seu sorriso.
          </div>
          <div className="text-center">
            Parece mágica, mas é apenas a mais alta tecnologia fazendo o seu
            trabalho.
          </div>
          <div className="text-center">
            <strong>
              Aqui na Mari Odontologia nós construímos o seu Sorriso!
            </strong>
          </div>
          <button
            type="button"
            className="font-bold rounded-full px-4 py-2 leading-normal text-lg text-white bg-maribrown my-3"
          >
            Fale conosco e agende sua consulta
          </button>
        </div>
        <div className="rounded-t-3xl bg-black overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/wc0M5B7hzFc?si=UTUadKdzvtp65B7E"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </section>
    </div>
  );
};
