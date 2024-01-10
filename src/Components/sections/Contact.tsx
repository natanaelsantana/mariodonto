import { useInView } from "react-intersection-observer";

export const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Garante que a animação seja acionada apenas uma vez
    threshold: 0.1, // Define a porcentagem visível do componente para acionar a animação
  });
  return (
    <section
      ref={ref}
      className="bg-contactBackGround w-full flex justify-center bg-cover bg-center bg-no-repeat "
    >
      <div
        className={`text-white lg:flex justify-around w-4/5 shadow-contactShadow bg-maribrown  rounded-[14vw] rounded-t-none lg:rounded-3x lg:rounded-t-none px-4 py-10 lg:px-12 lg:py-10 ${
          inView ? "animated-slideDown" : ""
        }`}
      >
        <div className="flex gap-x-4 mb-8 lg:w-1/3">
          <span className="text-4xl font-etMoudles"></span>
          <div className="flex flex-col">
            <h4 className="mt-2 mb-4 text-lg font-normal font-cantataOne ">
              Agende uma avaliação
            </h4>
            <a
              className="text-white mb-4 text-sm"
              href="https://api.whatsapp.com/send?phone=551333822412"
            >
              (13) 3382-2412
            </a>
            <div className="group relative text-center mt-10">
              <a
                className="relative mt-6 text-md font-bold font-openSans bg-[#0c71c3] hover:bg-mariYellow text-white py-3 px-6 rounded-full hover:pr-10 hover:pl-4 overflow-hidden transition-all duration-300 ease-linear delay-0 group"
                href="https://api.whatsapp.com/send?phone=551333822412&amp;text=Ol%C3%A1%20estou%20no%20site%20e%20gostaria%20de%20saber..."
              >
                Quero Agendar
                <span className="text-white opacity-0 group-hover:opacity-100 absolute top-1/2 translate-x-1 right-10 transform -translate-y-1/2 text-2xl font-etMoudles transition-all duration-300 ease-linear delay-0">
                  5
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex gap-x-4 mb-8 lg:w-1/3">
          <span className="text-4xl font-etMoudles"></span>
          <div className="flex-col font-openSans text-sm leading-loose ">
            <h4 className="mt-2 text-xl font-normal font-cantataOne mb-2">
              Nossa Localização
            </h4>
            <p className="mb-4">
              Estrada de Pernambuco, 1287, sala 5, Balneário de Pernambuco.
            </p>
            <p>
              Rua Vicente Gagliano, 31, sala 33, Pitangueiras – Guarujá – SP
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:w-1/3 ">
          <div className="flex gap-x-4 mb-8">
            <span className="text-4xl font-etMoudles"></span>
            <div className="flex flex-col ">
              <h4 className="mt-2 text-xl font-normal font-cantataOne mb-2">
                Nossos Horários
              </h4>
              <p className="text-sm leading-loose">
                Segunda a Sexta
                <br />
                9:00 – 12:30 e 14:00 – 18:00
              </p>
            </div>
          </div>

          <div className="flex gap-x-4">
            <span className="text-4xl font-etMoudles"></span>
            <div className="flex flex-col">
              <h4 className="mt-2 mb-4 text-xl font-normal font-cantataOne">
                Redes Sociais
              </h4>
              <div className="flex gap-x-2">
                <a href="https://www.facebook.com/ConsultorioOdontologicoMariaDeJesusCMari">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="50"
                    height="50"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#3F51B5"
                      d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                    ></path>
                    <path
                      fill="#FFF"
                      d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"
                    ></path>
                  </svg>
                </a>
                <a href="https://www.instagram.com/mariodontologia/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="50"
                    height="50"
                    viewBox="0,0,256,256"
                  >
                    <g
                      fill="none"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray=""
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                    >
                      <g transform="scale(5.33333,5.33333)">
                        <path
                          d="M34.017,41.99l-20,0.019c-4.4,0.004 -8.003,-3.592 -8.008,-7.992l-0.019,-20c-0.004,-4.4 3.592,-8.003 7.992,-8.008l20,-0.019c4.4,-0.004 8.003,3.592 8.008,7.992l0.019,20c0.005,4.401 -3.592,8.004 -7.992,8.008z"
                          fill="#f55376"
                        ></path>
                        <path
                          d="M24,31c-3.859,0 -7,-3.14 -7,-7c0,-3.86 3.141,-7 7,-7c3.859,0 7,3.14 7,7c0,3.86 -3.141,7 -7,7zM24,19c-2.757,0 -5,2.243 -5,5c0,2.757 2.243,5 5,5c2.757,0 5,-2.243 5,-5c0,-2.757 -2.243,-5 -5,-5z"
                          fill="#ffffff"
                        ></path>
                        <circle
                          cx="31.5"
                          cy="16.5"
                          r="1.5"
                          fill="#ffffff"
                        ></circle>
                        <path
                          d="M30,37h-12c-3.859,0 -7,-3.14 -7,-7v-12c0,-3.86 3.141,-7 7,-7h12c3.859,0 7,3.14 7,7v12c0,3.86 -3.141,7 -7,7zM18,13c-2.757,0 -5,2.243 -5,5v12c0,2.757 2.243,5 5,5h12c2.757,0 5,-2.243 5,-5v-12c0,-2.757 -2.243,-5 -5,-5z"
                          fill="#ffffff"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
