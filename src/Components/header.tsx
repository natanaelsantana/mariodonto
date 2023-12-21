import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes: (string | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}

export const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    setActiveSection(pathname);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const imageSize = scrollPosition > 50 ? "40" : "96";

  const treatmentOptions = [
    { label: "Implante Dentário", to: "/tratamentos/implante-dentario" },
    { label: "Facetas em Resina", to: "/tratamentos/facetas-resina" },
  ];

  const links = [
    { to: "/", text: "Home" },
    { to: "/quem-somos", text: "Quem Somos" },
    { to: "/tratamentos", text: "Os Tratamentos" },
    { to: "/aparelho-invisalign", text: "Invisalign" },
  ];

  const isMobile = window.innerWidth <= 768;

  return (
    <header className=" py-2 sm:p-0 bg-white top-0 w-full max-h-fit items-center flex justify-center fixed z-30">
      <div className="w-4/5 sm:w-4/5 flex self-center items-center justify-between p-2 z-30">
        <img
          src="./src/pics/Logo-Mari-Odontologia-Guaruja.fw_.png"
          alt="Mari Odonto Logo"
          className={`transition-all duration-500 
          `}
          style={{ height: isMobile ? "12vw" : `${imageSize}px` }}
        />

        <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="#571e0d" // Cor marron
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h20M4 12h20M4 18h20"
            ></path>
          </svg>
        </div>

        <nav
          className={`lg:flex ${
            isMobile
              ? "flex-col justify-center flex items-start w-3/4 ml-10 sm:m-0 border-[#571e0d] border-t-4 sm:border-0 space-y-4 absolute top-full left-0 right-0 bg-white p-4 "
              : "hidden"
          } ${isMenuOpen ? "" : "hidden"} `}


        >
          <ul
            className={`flex items-stretch space-x-8 ${
              isMobile
                ? "flex-col items-center border border-gray-200"
                : "lg:flex"
            }`}
          >
            {links.map((link) => (
              <li key={link.to}>
                {link.to === "/tratamentos" && !isMobile ? (
                  <DropdownMenu options={treatmentOptions} />
                ) : (
                  <Link
                    to={link.to}
                    className={
                      activeSection === link.to ? "nav-link active" : "nav-link"
                    }
                    onClick={() => setActiveSection(link.to)}
                  >
                    {link.text}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

interface DropdownMenuProps {
  options: { label: string; to: string }[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ options }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Menu
      as="div"
      className="relative inline-block text-left"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        <Menu.Button
          className={`inline-flex w-full justify-center gap-x-1.5 rounded-md text-[#571e0d] ${
            isHovered ? "opacity-75" : ""
          }`}
        >
          <Link to={"/tratamentos"}>Os Tratamentos</Link>
          <ChevronDownIcon
            className={`-mr-1 h-5 w-5 text-[#571e0d] ${
              isHovered ? "opacity-75" : ""
            }`}
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        show={isHovered}
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-200"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-10 py-5 w-56 origin-top-right border-t-4 border-[#571e0d] bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className=" px-5 text-center">
            {options.map((option) => (
              <Menu.Item key={option.to}>
                {({ active }) => (
                  <Link
                    to={option.to}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block py-3 text-sm "
                    )}
                  >
                    {option.label}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

// ...
