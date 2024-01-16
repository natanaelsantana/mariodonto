import { useInView } from "react-intersection-observer";

export const Booking = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Garante que a animação seja acionada apenas uma vez
    threshold: 0.3, // Define a porcentagem visível do componente para acionar a animação
  });

  return (
    <section className="bg-contactBackGround w-full flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat py-10">
      <div
        ref={ref}
        className={`text-white lg:flex justify-around lg:items-center w-4/5 shadow-contactShadow bg-maribrown  rounded-[14vw] rounded-t-none lg:rounded-3x lg:rounded-t-none  px-8 py-14 lg:px-12 lg:py-16 ${
          inView ? "animated-slideDown" : ""
        }`}
      >
        <h2 className="text-center text-2xl font-cantataOne font-medium lg:text-4xl pb-10 lg:pb-0">
          Marque sua consulta
        </h2>

        <div className="group flex relative text-center animated-slideUp justify-center">
          <a
            className="relative text-base font-bold font-openSans border-white border-4 hover:bg-mariYellow hover:border-mariYellow text-white py-3 px-3 rounded-full hover:pr-10 hover:pl-4 overflow-hidden transition-all duration-300 ease-linear delay-0 group"
            href="https://api.whatsapp.com/send?phone=551333822412&amp;text=Ol%C3%A1%20estou%20no%20site%20e%20gostaria%20de%20saber..."
            target="_blank"
            rel="whatsapp button"
          >
            Converse por Whatsapp
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
      <div className="flex gap-x-2 mt-10">
        <a
          href="https://www.facebook.com/ConsultorioOdontologicoMariaDeJesusCMari"
          aria-label="Perfil do consulório no facebook"
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
          href="https://www.instagram.com/mariodontologia/"
          aria-label="perfil do consultório no instagram"
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
                <circle cx="31.5" cy="16.5" r="1.5" fill="#ffffff"></circle>
                <path
                  d="M30,37h-12c-3.859,0 -7,-3.14 -7,-7v-12c0,-3.86 3.141,-7 7,-7h12c3.859,0 7,3.14 7,7v12c0,3.86 -3.141,7 -7,7zM18,13c-2.757,0 -5,2.243 -5,5v12c0,2.757 2.243,5 5,5h12c2.757,0 5,-2.243 5,-5v-12c0,-2.757 -2.243,-5 -5,-5z"
                  fill="#ffffff"
                ></path>
              </g>
            </g>
          </svg>
        </a>
      </div>
    </section>
  );
};
