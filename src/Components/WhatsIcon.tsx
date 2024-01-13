export const WhatsappIcon = () => {
  return (
    <div className="hidden fixed bottom-5 left-5 lg:block z-99 ">
      <a
        className="h-full w-full group flex "
        target="_blank"
        href="https://api.whatsapp.com/send?phone=551333822412&text=Ol%C3%A1%20estou%20no%20site%20e%20gostaria%20de%20saber..."
        aria-label="Ir ao whatsapp"
      >
        <img
          src="pics/icons/whatsapp.webp"
          alt="Imagem do whatsapp"
          className="h-1/2 w-4/5 shadow-whatsappShadow rounded-full"
        />
        <p className="hidden group-hover:block whitespace-nowrap absolute top-1/2 transform -translate-y-1/2 p-3 left-full bg-[#fff] border drop-shadow-md rounded-full ">
          Precisa de ajuda?
        </p>
      </a>
    </div>
  );
};
