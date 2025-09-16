import { FaBookOpen, FaEnvelope, FaFirstOrder, FaHandshake, FaHandsHelping, FaUser } from "react-icons/fa";
import DelayedLink from "../components/DelayedLink";
import PageContainer from "../components/PageContainer";

const Home = () => {
  return (
    <PageContainer>
      <section
        data-aos="fade-up"
        className="bg-gradient-to-b from-blue-100 to-white py-12 px-4 sm:px-6 lg:px-20"
      >
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
          {/* Texto */}
          <div className="flex-1 flex flex-col justify-center items-start space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
              Bem-vindo ao espaço de aprendizado!
            </h1>
            <p className="text-lg text-gray-700 text-justify">
              Aqui você encontrará recursos, conteúdos e serviços para impulsionar
              seu aprendizado de forma prática e divertida.
            </p>

            {/* Direto para o contato do WhatsApp */}
            <div className="flex flex-col justify-center items-center w-full gap-2 mt-4" id="contact-now">
              <div className="relative flex items-center justify-center w-full md:w-auto">
                {/* Borda animada */}
                <div className="animate-spin-slow absolute inset-0 rounded-lg p-1 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 blur-sm pointer-events-none"></div>
                {/* Botão/link */}
                <a
                  href="https://wa.me/5581984671475?text=Olá!%20Estou%20entrando%20em%20contato%20para%20saber%20mais%20sobre%20os%20seus%20serviços."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full inline-flex items-center px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300 md:w-auto justify-center border-4 border-transparent"
                  style={{ zIndex: 1 }}
                >
                  <FaHandshake className="mr-2 animate-bounce text-yellow-300" />
                  Faça já o seu orçamento!
                </a>
              </div>
            </div>

          </div>

          {/* Imagem em destaque */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div
              className="
                w-72 sm:w-72 md:w-80 rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-300
                relative
                bg-blue-100/60 sm:bg-blue-100/60 
              "
            >
              <img
                src="https://res.cloudinary.com/exercice-disp/image/upload/v1756227663/WhatsApp_Image_2025-08-25_at_21.19.06-removebg-preview_tujmhe.png"
                alt="Imagem destaque"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

    </PageContainer>
  );
};

export default Home;
