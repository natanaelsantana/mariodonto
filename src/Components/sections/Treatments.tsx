import ButtonWithIcon from "../Button";
import { InView } from "react-intersection-observer";
export const Treatments = () => {
  return (
    <section>
      {/*profilaxia*/}
      <InView triggerOnce={true}>
        {({ inView, ref }) => (
          <section ref={ref} className="w-full flex justify-center">
            <div className=" px-10 py-20 lg:flex lg:justify-center lg:w-4/5">
              <div className=" lg:w-3/5 lg:mr-16">
                <div className="mb-8">
                  <img
                    className={`w-full rounded-3xl shadow-imageShadow ${
                      inView
                        ? "scale-100 ease-in opacity-100 duration-700"
                        : "scale-50 opacity-0"
                    }`}
                    src="pics/Profilaxia-Mari-Odontologia.jpg"
                    alt="Profilaxia"
                    title=""
                  />
                </div>
              </div>
              <div className=" lg:w-2/5">
                <div className="text-left">
                  <h2 className="text-2xl font-normal text-maribrown font-cantataOne pb-4 lg:text-5xl">
                    Profilaxia
                  </h2>
                  <p className="text-lightGray leading-loose pb-4 text-left">
                    A limpeza dos dentes, que inclui raspagem de tártaro e
                    polimento dos dentes, deve ser feita periodicamente, a fim
                    de proporcionar dentes bonitos e saudáveis.
                  </p>
                  <p className="text-lightGray leading-loose pb-4 text-left">
                    A limpeza dos dentes é o meio mais eficiente de prevenção da
                    cárie dentária e das doenças gengivais.
                  </p>
                  <p className="text-lightGray leading-loose pb-4 text-left">
                    E o ideal é fazer uma avaliação preventiva odontológica a
                    cada 6 meses.
                  </p>
                  <p className="text-lightGray leading-loose pb-4 text-left">
                    <strong>Lembre-se:</strong> A saúde começa pela boca!
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
      </InView>

      {/*Implante dentário*/}
      <InView triggerOnce={true}>
        {({ inView, ref }) => (
          <section
            ref={ref}
            className="w-full flex justify-center bg-[#f9f9f9]"
          >
            <div className=" px-10 py-20 lg:flex lg:justify-center lg:w-4/5">
              <div className=" lg:w-3/5 lg:mr-16">
                <div className="mb-8">
                  <img
                    className={`w-full rounded-3xl shadow-imageShadow ${
                      inView
                        ? "scale-100 ease-in opacity-100 duration-700"
                        : "scale-50 opacity-0"
                    }`}
                    src="pics/O-Implante-Dentario.jpg"
                    alt="Implante Dentário"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className=" lg:w-2/5">
                <div className="text-left">
                  <h2 className="text-2xl font-normal text-maribrown font-cantataOne pb-4 lg:text-4xl">
                    Implante Dentário
                  </h2>
                  <p className="text-lightGray leading-loose pb-4 text-left">
                    Todo dente perdido deve ser substituído, para não provocar
                    danos maiores à sua função mastigatória e estética. E o
                    implante dentário é o que de melhor é oferecido, na
                    atualidade, para substituir um dente perdido e restabelecer
                    o seu sorriso.
                    <strong>Nunca é tarde para sorrir!</strong>
                  </p>

                  <ButtonWithIcon buttonText="Saiba mais" iconText="5" />
                </div>
              </div>
            </div>
          </section>
        )}
      </InView>

      {/*Tratamento ortodôntico*/}
      <InView triggerOnce={true}>
        {({ inView, ref }) => (
          <section ref={ref} className="w-full flex justify-center">
            <div className=" px-10 py-20 lg:flex lg:justify-center lg:w-4/5">
              <div className=" lg:w-3/5 lg:mr-16">
                <div className="mb-8">
                  <img
                    className={`w-full rounded-3xl shadow-imageShadow ${
                      inView
                        ? "scale-100 ease-in opacity-100 duration-700"
                        : "scale-50 opacity-0"
                    }`}
                    src="pics/Tratamento-Ortodontico-Mari-Odontologia.jpg"
                    alt="Tratamento Ortodôntico"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className=" lg:w-2/5">
                <div className="text-left">
                  <h2 className="text-2xl font-normal text-maribrown font-cantataOne pb-4 lg:text-4xl lg:leading-normal">
                    Tratamento Ortodôntico
                  </h2>
                  <p>&nbsp;</p>
                  <p className="text-lightGray leading-loose pb-4 text-left">
                    A Ortodontia é a especialidade que visa a correção estética
                    e funcional dos dentes e da face, através de aparelhos fixos
                    e removíveis.
                  </p>
                  <p className="text-lightGray leading-loose pb-4 text-left">
                    Corrige e previne má oclusão dentária, ou seja, o perfeito
                    engrenamento entre os dentes superiores e inferiores, que é
                    importante para a função mastigatória.
                  </p>
                  <p className="text-lightGray leading-loose pb-4 text-left">
                    Trabalhamos com Ortodontia Especializada nos mais atuais e
                    tecnológicos aparelhos para oferecer um tratamento rápido e
                    eficiente.
                  </p>
                  <p className="text-lightGray leading-loose pb-4 text-left">
                    Aparelhos Fixos Metálicos, Cerâmicos e Autoligados.
                  </p>
                  <p className="text-lightGray leading-loose pb-4 text-left">
                    Aparelhos removíveis, Ortopédicos Funcionais dos Maxilares e
                    Aparelhos Invisalign.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
      </InView>

      {/* Facetas de Resina */}
      <InView triggerOnce={true}>
        {({ inView, ref }) => (
          <section
            ref={ref}
            className="w-full flex justify-center bg-[#f9f9f9]"
          >
            <div className=" px-10 py-20 lg:flex lg:justify-center lg:w-4/5">
              <div className=" lg:w-3/5 lg:mr-16">
                <div className="mb-8">
                  <img
                    className={`w-full rounded-3xl shadow-imageShadow ${
                      inView
                        ? "scale-100 ease-in opacity-100 duration-700"
                        : "scale-50 opacity-0"
                    }`}
                    src="pics/Facetas-de-Resina-Mari-Odontologia-scaled.jpg"
                    alt="Facetas de Resina"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className=" lg:w-2/5">
                <div className="text-left">
                  <h2 className="text-2xl font-normal text-maribrown font-cantataOne pb-4 lg:text-4xl lg:leading-normal">
                    Facetas de Resina
                  </h2>
                  <p className="text-lightGray leading-loose pb-4 text-left">
                    As Facetas são realizadas com resina composta e são capazes
                    de modificar a forma, o tamanho e a cor dos dentes de forma
                    rápida e sem dor. Construindo um novo sorriso e resgatando a
                    sua confiança.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
      </InView>

      {/* Clareamento Dental*/}
      <InView triggerOnce={true}>
        {({ inView, ref }) => (
          <section ref={ref} className="w-full flex justify-center">
            <div className=" px-10 py-20 lg:flex lg:justify-center lg:w-4/5">
              <div className=" lg:w-3/5 lg:mr-16">
                <div className="mb-8">
                  <img
                    className={`w-full rounded-3xl shadow-imageShadow ${
                      inView
                        ? "scale-100 ease-in opacity-100 duration-700"
                        : "scale-50 opacity-0"
                    }`}
                    src="pics/Clareamento-Dental.jpg"
                    alt="Clareamento Dental"
                    title=""
                  />
                </div>
              </div>
              <div className=" lg:w-2/5">
                <div className="text-left">
                  <h2 className="text-2xl font-normal text-maribrown font-cantataOne pb-4 lg:text-4xl lg:leading-normal">
                    Clareamento Dental
                  </h2>
                  <p className="text-lightGray leading-loose pb-4 text-left">
                    É o tratamento usado para despigmentação do esmalte dos
                    dentes, promovendo o branqueamento.
                  </p>
                  <p className="text-lightGray leading-loose pb-4 text-left">
                    Pode ser feito no consultório ou na residencia com
                    auto-aplicação, sob a orientação do dentista.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
      </InView>

      {/*Prenchimento Labial*/}
      <InView triggerOnce={true}>
        {({ inView, ref }) => (
          <section
            ref={ref}
            className="w-full flex justify-center bg-[#f9f9f9]"
          >
            <div className=" px-10 py-20 lg:flex lg:justify-center lg:w-4/5">
              <div className=" lg:w-3/5 lg:mr-16">
                <div className="mb-8">
                  <img
                    className={`w-full rounded-3xl shadow-imageShadow ${
                      inView
                        ? "scale-100 ease-in opacity-100 duration-700"
                        : "scale-50 opacity-0"
                    }`}
                    src="pics/Harmonizacao-Oro-Facial.jpg"
                    alt="Preenchimento Labial"
                    title=""
                  />
                </div>
              </div>
              <div className=" lg:w-2/5">
                <div className="text-left">
                  <h2 className="text-2xl font-normal text-maribrown font-cantataOne pb-4 lg:text-4xl lg:leading-normal">
                    Preenchimento Labial
                  </h2>
                  <p className="text-lightGray leading-loose pb-4 text-left">
                    É o procedimento realizado com ácido hialurônico para dar
                    estrutura e hidratação ao lábio dando harmonia ao sorriso.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
      </InView>

      {/*Invisalign*/}
      <InView triggerOnce={true}>
        {({ inView, ref }) => (
          <section ref={ref} className="w-full flex justify-center">
            <div className=" px-10 py-20 lg:flex lg:justify-center lg:w-4/5">
              <div className=" lg:w-3/5 lg:mr-16">
                <div className="mb-8">
                  <img
                    className={`w-full rounded-3xl shadow-imageShadow ${
                      inView
                        ? "scale-100 ease-in opacity-100 duration-700"
                        : "scale-50 opacity-0"
                    }`}
                    src="pics/Propaganda-Aparelho-Invisalign.png"
                    alt="Aparelho Invisalign"
                    title=""
                  />
                </div>
              </div>
              <div className=" lg:w-2/5">
                <div className="text-left">
                  <h2 className="text-2xl font-normal text-maribrown font-cantataOne pb-4 lg:text-4xl lg:leading-normal">
                    O APARELHO INVISALIGN
                  </h2>
                  <p className="text-lightGray leading-loose pb-4 text-left">
                    O sorriso dos seus sonhos de forma rápida, confortável e
                    estética.
                  </p>
                  <p className="text-lightGray leading-loose pb-4 text-left">
                    <strong>Vantagens do tratamento com Invisalign:</strong>
                  </p>
                  <ul className="text-lightGray leading-loose pb-4 text-left">
                    <li>É mais rápido e com resultado previsível.</li>
                    <li>
                      Pode ser removido para se alimentar e higienizar os
                      dentes.
                    </li>
                    <li>
                      É praticamente invisível e não compromete a estética.
                    </li>
                    <li>Menos quebras e emergências.</li>
                  </ul>
                  <ButtonWithIcon
                    buttonText="Agende uma consulta"
                    iconText="5"
                  />
                </div>
              </div>
            </div>
          </section>
        )}
      </InView>
    </section>
  );
};
