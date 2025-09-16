import { useState, useEffect } from "react";
import {
  FaBookOpen,
  FaUser,
  FaHandsHelping,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";
import DelayedLink from "./DelayedLink";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [logo, setLogo] = useState<string>(
    "https://res.cloudinary.com/exercice-disp/image/upload/v1756225248/ChatGPT_Image_Aug_26_2025_01_12_40_PM_mcxw2v.png"
  );
  const [bgColor, setBgColor] = useState<string>("bg-blue-500");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (location.pathname === "/servicos") {
      setLogo(
        "https://res.cloudinary.com/exercice-disp/image/upload/v1756225698/Texto_do_seu_par%C3%A1grafo-removebg-preview_2_eugpb8.png"
      );
      setBgColor("bg-red-100 text-red-700");
    } else {
      setLogo(
        "https://res.cloudinary.com/exercice-disp/image/upload/v1756225248/ChatGPT_Image_Aug_26_2025_01_12_40_PM_mcxw2v.png"
      );
      setBgColor("bg-blue-300 text-white");
    }
  }, [location.pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const buttonClass =
    "relative flex items-center gap-2 px-4 py-2 rounded-md text-white bg-gradient-to-r from-blue-500 to-blue-600 \
     before:absolute before:inset-0 before:rounded-md before:border-2 before:border-transparent \
     before:bg-[length:200%_200%] before:bg-gradient-to-r before:from-pink-500 before:via-yellow-500 before:to-blue-500 \
     before:animate-border-move before:opacity-0 before:transition-opacity before:duration-300 \
     hover:before:opacity-100 overflow-hidden \
     text-sm md:text-base px-2 md:px-4 py-1 md:py-2 gap-1 md:gap-2";

  const handleLoginClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  return (
    <nav className={`${bgColor} shadow-md px-6 py-4`}>
      <div className="flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img src={logo} alt="logo" className="w-24" />
        </a>

        {/* Menu desktop */}
        <div className="hidden md:flex gap-4">
          <DelayedLink to="/" className={buttonClass}>
            <span className="relative z-10 flex items-center gap-2">
              <FaBookOpen /> Início
            </span>
          </DelayedLink>
          <DelayedLink to="/sobre" className={buttonClass}>
            <span className="relative z-10 flex items-center gap-2">
              <FaUser /> Sobre
            </span>
          </DelayedLink>
          <DelayedLink to="/servicos" className={buttonClass}>
            <span className="relative z-10 flex items-center gap-2">
              <FaHandsHelping /> Serviços
            </span>
          </DelayedLink>
          <DelayedLink to="/contato" className={buttonClass}>
            <span className="relative z-10 flex items-center gap-2">
              <FaEnvelope /> Contato
            </span>
          </DelayedLink>
          <DelayedLink
            to="/login"
            className={`${buttonClass} cursor-not-allowed opacity-60`}
            onClick={handleLoginClick}
            tabIndex={-1}
            aria-disabled="true"
          >
            <span className="relative z-10 flex items-center gap-2">
              <FaUser /> Login
            </span>
          </DelayedLink>
        </div>

        {/* Botão hamburger mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Menu mobile com transição suave */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="flex flex-col gap-2 mt-4">
          <DelayedLink
            to="/"
            className={buttonClass}
            onClick={() => setIsOpen(false)}
          >
            <span className="relative z-10 flex items-center gap-1 md:gap-2">
              <FaBookOpen className="text-sm md:text-base" /> Início
            </span>
          </DelayedLink>
          <DelayedLink
            to="/sobre"
            className={buttonClass}
            onClick={() => setIsOpen(false)}
          >
            <span className="relative z-10 flex items-center gap-1 md:gap-2">
              <FaUser className="text-sm md:text-base" /> Sobre
            </span>
          </DelayedLink>
          <DelayedLink
            to="/servicos"
            className={buttonClass}
            onClick={() => setIsOpen(false)}
          >
            <span className="relative z-10 flex items-center gap-1 md:gap-2">
              <FaHandsHelping className="text-sm md:text-base" /> Serviços
            </span>
          </DelayedLink>
          <DelayedLink
            to="/contato"
            className={buttonClass}
            onClick={() => setIsOpen(false)}
          >
            <span className="relative z-10 flex items-center gap-1 md:gap-2">
              <FaEnvelope className="text-sm md:text-base" /> Contato
            </span>
          </DelayedLink>
          <DelayedLink
            to="/login"
            className={`${buttonClass} cursor-not-allowed opacity-60`}
            onClick={handleLoginClick}
            tabIndex={-1}
            aria-disabled="true"
          >
            <span className="relative z-10 flex items-center gap-1 md:gap-2">
              <FaUser className="text-sm md:text-base" /> Login
            </span>
          </DelayedLink>
        </div>
      </div>

      {/* Toast para login (exibição temporária) */}
      {showToast && (
        <div className="fixed top-6 right-6 bg-yellow-400 text-gray-900 px-4 py-2 rounded shadow-lg z-50 animate-fade-in">
          Funcionalidade ainda não disponível!
        </div>
      )}
    </nav>
  );
};

export default Navbar;
