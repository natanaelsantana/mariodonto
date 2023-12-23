export const Team = () => {
  return (
    <section>
      {" "}
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold">Nossa Equipe</h2>
        <div className="flex justify-around mt-4">
          <div className="flex flex-col items-center">
            <img
              className="w-48 h-48 object-cover"
              src="https://mariodontologia.com.br/wp-content/uploads/2022/02/Mari-Odontologia-em-Guaruja.jpg"
              alt="Dra. Maria de Jesus Corrêa Mari"
            />
            <h4 className="mt-2 text-xl font-semibold">
              Dra. Maria de Jesus Corrêa Mari
            </h4>
            <p className="text-sm text-gray-500">Cirurgiã Dentista</p>
            <div className="text-xs text-center">
              Especialista em Ortodontia e Ortopedia Funcional dos Maxilares
              <br />
              Invisalign Doutor
              <br />
              Pós graduado em Prótese
              <br />
              Pós graduado em Cirurgia
              <br />
              Pós graduado em Disfunção Temporo Mandibular
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-48 h-48 object-cover"
              src="https://mariodontologia.com.br/wp-content/uploads/2022/02/Dra-Carla-Nairana.jpg"
              alt="Dra. Carla Nairana"
            />
            {/* Adicione informações sobre Dra. Carla Nairana aqui */}
          </div>
        </div>
      </div>
    </section>
  );
};
