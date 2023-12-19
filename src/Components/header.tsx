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
    { label: "Option 1", to: "/tratamentos/opcao-1" },
    { label: "Option 2", to: "/tratamentos/opcao-2" },
  ];

  const links = [
    { to: "/", text: "Home" },
    { to: "/quem-somos", text: "Quem Somos" },
    { to: "/tratamentos", text: "Os Tratamentos" },
    { to: "/aparelho-invisalign", text: "Invisalign" },
  ];

  return (
    <header className="bg-white top-0 w-full items-center flex justify-center fixed z-30">
      <div className="w-4/5 flex self-center items-center justify-between p-2 z-30">
        <img
          src="./src/pics/Logo-Mari-Odontologia-Guaruja.fw_.png"
          alt="Mari Odonto Logo"
          className={`transition-all duration-500`}
          style={{ height: `${imageSize}px` }}
        />
        <nav>
          <ul className="flex items-center space-x-8 h-full">
            {links.map((link) => (
              <li key={link.to}>
                {link.to === "/tratamentos" ? (
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
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md text-[#571e0d] hover:opacity-75">
          Os Tratamentos
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-[#571e0d] hover:opacity-75"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {options.map((option) => (
              <Menu.Item key={option.to}>
                {({ active }) => (
                  <Link
                    to={option.to}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
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
