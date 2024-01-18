export const Team = () => {
  return (
    <section className="w-full flex justify-center">
      <div className=" px-10 lg:px-0 pb-20 pt-10 lg:flex-col lg:justify-center lg:w-4/5">
        <h2 className="text-2xl lg:text-4xl text-center font-normal  mb-20 font-cantataOne text-maribrown">
          Nossa Equipe
        </h2>
        <div className="flex flex-col lg:flex lg:flex-row  gap-y-2 lg:gap-x-16">
          <div className="flex-grow mb-6 lg:mb-0 lg:w-1/3">
            <div className="flex-grow bg-white shadow-imageShadow rounded-lg ">
              <img
                className="h-1/2 w-full rounded-t-lg shadow-imageShadow"
                src="pics\Mari-Odontologia-em-Guaruja.webp"
                alt="Dra. Maria de Jesus Corrêa Mari"
              />
              <div className="text-center font-cantataOne p-6 text-lightGray font-normal leading-loose">
                <h4 className="mb-4 text-lg text-[#333]">
                  Dra. Maria de Jesus Corrêa Mari
                </h4>
                <p className="text-sm lg:text-base mb-4 text-lightGray">
                  Cirurgiã Dentista
                </p>
                <p className="text-md text-center font-openSans">
                  Especialista em Ortodontia e Ortopedia Funcional dos Maxilares
                  <br />
                  Invisalign Doctor
                  <br />
                  Pós graduada em Prótese
                  <br />
                  Pós graduada em Cirurgia
                  <br />
                  Pós graduada em Disfunção Temporo Mandibular
                </p>
              </div>
            </div>
          </div>

          <div className="flex-grow mb-6 lg:mb-0 lg:w-1/3">
            <div className="flex-grow bg-white shadow-imageShadow rounded-lg ">
              <img
                className="h-1/2 w-full rounded-t-lg shadow-imageShadow"
                src="pics\Dra-Carla-Nairana_4_11zon.webp"
                alt="Dra. Carla Nairana"
              />

              <div className="text-center font-cantataOne p-6 text-lightGray font-normal leading-loose">
                <h4 className="mb-4 text-lg text-[#333]">Dra. Carla Nairana</h4>
                <p className="text-sm lg:text-base mb-4 text-lightGray">
                  Cirurgiã Dentista
                </p>
                <p className="text-md text-center font-openSans">
                  Especialista em Endodontia
                  <br />
                  (Tratamento de canal)
                </p>
              </div>
            </div>
          </div>

          <div className="flex-grow mb-6 lg:mb-0 lg:w-1/3">
            <div className="flex-grow bg-white shadow-imageShadow rounded-lg ">
              <img
                className="h-1/2 w-full rounded-t-lg shadow-imageShadow"
                src="pics\Dr.-Edson-Gracia.webp"
                alt="Dr. Edson Gracia"
              />
              <div className="text-center font-cantataOne p-6 text-lightGray font-normal leading-loose">
                <h4 className="mb-4 text-lg text-[#333]">Dr Edson Gracia</h4>
                <p className="text-sm lg:text-base mb-4 text-lightGray">
                  Cirurgião Dentista
                </p>
                <p className="text-md text-center font-openSans">
                  Especialista em Implantes
                  <br />
                  Pós Graduado em Cirurgia
                  <br />
                  Mestre em Implantodontia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
