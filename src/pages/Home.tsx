import { FaBookOpen, FaEnvelope, FaHandsHelping, FaUser } from "react-icons/fa";
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

            {/* Botões */}
            <div className="flex w-full gap-2 mt-4">
              <DelayedLink
                to="/sobre"
                className="flex-1 flex items-center justify-center gap-1 bg-blue-500 hover:bg-blue-600 text-white px-2 py-2 rounded-md shadow-md transition text-sm sm:px-4 sm:text-base"
              >
                <FaUser /> Sobre
              </DelayedLink>

              <DelayedLink
                to="/servicos"
                className="flex-1 flex items-center justify-center gap-1 bg-blue-500 hover:bg-blue-600 text-white px-2 py-2 rounded-md shadow-md transition text-sm sm:px-4 sm:text-base"
              >
                <FaHandsHelping /> Serviços
              </DelayedLink>

              <DelayedLink
                to="/contato"
                className="flex-1 flex items-center justify-center gap-1 bg-blue-500 hover:bg-blue-600 text-white px-2 py-2 rounded-md shadow-md transition text-sm sm:px-4 sm:text-base"
              >
                <FaEnvelope /> Contato
              </DelayedLink>
            </div>

          </div>

          {/* Imagem em destaque */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="w-64 sm:w-72 md:w-80 rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-300">
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
