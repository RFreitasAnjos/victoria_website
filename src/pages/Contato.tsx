import { FaInstagram, FaWhatsapp, FaLinkedin, FaDownload } from "react-icons/fa";
import PageContainer from "../components/PageContainer";

const Contato = () => {
  return (
    <PageContainer>
      <section data-aos="fade-up" className="bg-gradient-to-b from-blue-100 to-white min-h-screen p-6 sm:p-8 md:p-12">
        <div className="flex flex-col items-center md:items-start">
          <div className="text-3xl sm:text-4xl font-bold text-blue-700 mb-6 text-center md:text-left">
            <h2 className="text-center">Contato</h2>
          </div>
          <div>
            <p className="mb-6 text-gray-700 text-center md:text-left">
              Entre em contato para orientações e acompanhamentos personalizados.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2 bg-gradient-to-r from-white to-blue-50 rounded-2xl shadow-2xl overflow-hidden transition-shadow duration-500 hover:shadow-3xl p-6 md:p-12">
            <div className="flex flex-col md:flex-row">
              {/* Formulário */}
              <form className="flex-1 flex flex-col gap-4 max-w-md mx-auto md:mx-0">
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <textarea
                  placeholder="Sua mensagem"
                  className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none h-32"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>

          {/* Card de Redes Sociais */}
          <div className=" w-full md:w-1/2 bg-gradient-to-r from-white to-blue-50 rounded-2xl shadow-2xl overflow-hidden transition-shadow duration-500 hover:shadow-3xl p-6  flex-1 flex flex-col justify-center gap-4 max-w-md mx-auto md:mx-0">

            {/* Instagram Card */}
            <a
              href="https://www.instagram.com/profvictoriamaria"
              target="_blank"
              rel="noopener noreferrer"
              className="relative bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-400 rounded-xl shadow-lg overflow-hidden h-60 flex items-center justify-center hover:scale-105 transition-transform duration-300"
            >
              <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/exercice-disp/image/upload/v1756233941/WhatsApp_Image_2025-08-26_at_15.45.18_tk8xsd.jpg')] bg-cover bg-center opacity-30"></div>
              <FaInstagram className="text-white text-4xl z-10" />
              <span className="absolute bottom-2 right-2 text-white font-bold z-10 text-sm">Instagram</span>
            </a>


            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/seu_usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-blue-700 text-white px-4 py-3 rounded-xl shadow hover:bg-blue-800 transition-colors duration-300"
            >
              <FaLinkedin className="text-2xl" />
              <span>LinkedIn</span>
            </a>

            {/* Download Currículo */}
            <a
              href="../../public/CV-victoriavasconcelos (pedagogia).pdf"
              download
              className="flex items-center gap-3 bg-gray-800 text-white px-4 py-3 rounded-xl shadow hover:bg-gray-900 transition-colors duration-300"
            >
              <FaDownload className="text-2xl" />
              <span>Download Currículo</span>
            </a>

          </div>
        </div>

      </section>
    </PageContainer>
  );
};

export default Contato;
