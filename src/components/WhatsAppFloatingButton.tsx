import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloatingButton = () => {
  return (
    <a
      href="https://wa.me/5581984671475?text=Olá!%20Estou%20entrando%20em%20contato%20para%20saber%20mais%20sobre%20os%20seus%20serviços."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 rounded-full shadow-lg flex items-center justify-center text-white text-2xl 
                 hover:bg-green-600 hover:scale-110 transition-transform duration-300 z-50
                 animate-pulse"
      title="Fale conosco no WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppFloatingButton;
