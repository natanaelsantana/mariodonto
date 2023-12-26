export const ScheduleAssessment = () => {
  return (
    <section className="w-full flex justify-center bg-[#f9f9f9]">
      <div className="flex flex-col px-10 lg:px-0 py-14 lg:flex-col lg:justify-center lg:w-[45%]">
        <h2 className="text-3xl text-center font-normal  mb-14 font-cantataOne text-maribrown">
          Agende uma avaliação
        </h2>
        <div className="flex justify-around mt-4 w-full">
          <div className="flex flex-col items-center w-full">
            <form className="w-full">
              <div className="md:flex md:items-center mb-3  ">
                <div className="w-full">
                  <input
                    className="bg-[#ededed] appearance-none border border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none  focus:border-purple-500"
                    type="text"
                    placeholder="Digite seu Nome"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-3  ">
                <div className="w-full">
                  <input
                    className="bg-[#ededed] appearance-none border border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none  focus:border-purple-500"
                    type="email"
                    placeholder="E-mail"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-3  ">
                <div className="w-full">
                  <input
                    className="bg-[#ededed] appearance-none border border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none  focus:border-purple-500"
                    type="tel"
                    placeholder="Telefone"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-3  ">
                <div className="w-full">
                  <textarea
                    className="bg-[#ededed] appearance-none border border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none  focus:border-purple-500 h-[200px]"
                    placeholder="Digite aqui sua mensagem"
                  ></textarea>
                </div>
              </div>
              <div className="text-center">
                <div className="w-full">
                  <button
                    className=" inline-block text-md font-bold font-openSans bg-maribrown text-white  py-2 px-6 rounded-xl "
                    type="button"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
