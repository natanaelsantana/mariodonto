import React from "react";

interface ButtonWithIconProps {
  buttonText: string;
  iconText: string;
}

const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({
  buttonText,
  iconText,
}) => {
  const whatsappLink =
    "https://api.whatsapp.com/send?phone=551333822412&amp;text=Ol%C3%A1%20estou%20no%20site%20e%20gostaria%20de%20saber...";

  return (
    <div className="text-center animated-slideUp">
      <a
        className="relative mt-6 text-md font-bold font-openSans bg-maribrown hover:bg-mariYellow text-white py-3 px-6 rounded-full hover:pr-10 hover:pl-4 overflow-hidden transition-all duration-300 ease-linear delay-0 group"
        href={whatsappLink}
        aria-label="Ir para o whatsapp"
        target="_blank"
        rel="Ir para o whatsapp"
      >
        {buttonText}
        <span className="text-white opacity-0 group-hover:opacity-100 absolute top-1/2 translate-x-1 right-10 transform -translate-y-1/2 text-2xl font-etMoudles transition-all duration-300 ease-linear delay-0">
          {iconText}
        </span>
      </a>
    </div>
  );
};

export default ButtonWithIcon;
