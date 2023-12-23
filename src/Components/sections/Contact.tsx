export const Contact = () => {
  return (
    <section>
      <div className="flex justify-around mt-4">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <span className="text-4xl"></span>
            <h4 className="mt-2 text-xl font-semibold">Agende uma avaliação</h4>
            <a
              className="text-white"
              href="https://api.whatsapp.com/send?phone=551333822412"
            >
              (13) 3382-2412
            </a>
            <a
              className="mt-2 bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 rounded"
              href="https://api.whatsapp.com/send?phone=551333822412&amp;text=Ol%C3%A1%20estou%20no%20site%20e%20gostaria%20de%20saber..."
            >
              Quero Agendar
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <span className="text-4xl"></span>
            <h4 className="mt-2 text-xl font-semibold">Nossa Localização</h4>
            <p>Estrada de Pernambuco, 1287, sala 5, Balneário de Pernambuco.</p>
            <p>
              Rua Vicente Gagliano, 31, sala 33, Pitangueiras – Guarujá – SP
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <span className="text-4xl"></span>
            <h4 className="mt-2 text-xl font-semibold">Nossos Horários</h4>
            <p>
              Segunda a Sexta
              <br />
              9:00 – 12:30 e 14:00 – 18:00
            </p>
            <h4 className="mt-2 text-xl font-semibold">Redes Sociais</h4>
            <a
              className="text-blue-600"
              href="https://www.facebook.com/ConsultorioOdontologicoMariaDeJesusCMari"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
