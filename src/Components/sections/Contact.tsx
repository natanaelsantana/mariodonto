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
          <svg
            className="text-white fill-current"
            xmlns="http://www.w3.org/2000/svg"
            height="36"
            viewBox="0 -960 960 960"
            width="36"
          >
            <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
          </svg>
          <div className="flex flex-col">
            <h4 className="mt-2 mb-4 text-lg font-normal font-cantataOne ">
              Agende uma avaliação
            </h4>
            <a
              className="text-white mb-4 text-sm"
              aria-label="Contato do whatsapp"
              href="https://api.whatsapp.com/send?phone=551333822412"
            >
              (13) 3382-2412
            </a>
            <div className="group relative text-center mt-10">
              <a
                className="relative mt-6 text-md font-bold font-openSans bg-[#0c71c3] hover:bg-mariYellow text-white py-3 px-6 rounded-full hover:pr-10 hover:pl-4 overflow-hidden transition-all duration-300 ease-linear delay-0 group"
                aria-label="Ir para o whatsapp"
                href="https://api.whatsapp.com/send?phone=551333822412&amp;text=Ol%C3%A1%20estou%20no%20site%20e%20gostaria%20de%20saber..."
              >
                Quero Agendar
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
        </div>

        <div className="flex gap-x-4 mb-8 lg:w-1/3">
          <svg
            className="fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            height="38"
            viewBox="0 -960 960 960"
            width="52"
          >
            <path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" />
          </svg>
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
            <svg
              className="fill-current text-white t"
              xmlns="http://www.w3.org/2000/svg"
              height="36"
              viewBox="0 -960 960 960"
              width="36"
            >
              <path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z" />
            </svg>
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
            <svg
              className="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              height="36"
              viewBox="0 -960 960 960"
              width="36"
            >
              <path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z" />
            </svg>
            <div className="flex flex-col">
              <h4 className="mt-2 mb-4 text-xl font-normal font-cantataOne">
                Redes Sociais
              </h4>
              <div className="flex gap-x-2">
                <a
                  aria-label="Perfil do consultório no facebook"
                  href="https://www.facebook.com/ConsultorioOdontologicoMariaDeJesusCMari"
                >
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
                <a
                  aria-label="perfil do consultório no instagram"
                  href="https://www.instagram.com/mariodontologia/"
                >
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
                      fillRule="nonzero"
                      stroke="none"
                      strokeWidth="1"
                      strokeLinecap="butt"
                      strokeLinejoin="miter"
                      strokeMiterlimit="10"
                      strokeDasharray=""
                      strokeDashoffset="0"
                      fontFamily="none"
                      fontWeight="none"
                      fontSize="none"
                      textAnchor="none"
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
