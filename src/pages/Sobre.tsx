import DelayedLink from "../components/DelayedLink";
import PageContainer from "../components/PageContainer";
import { FaBook, FaChalkboardTeacher, FaHeart, FaPuzzlePiece, FaSmile, FaGraduationCap, FaUserTie, FaClipboardCheck } from "react-icons/fa";

const Sobre = () => {
  return (
    <PageContainer>
      <section data-aos="fade-up" className="bg-gradient-to-b from-blue-100 to-white min-h-screen p-6 sm:p-8 md:p-12">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-6 text-center md:text-left">
            Contato
          </h2>
        </div>

        <div className="max-w-6xl mx-auto p-6 sm:p-8 md:p-12">
          <div className="bg-gradient-to-r from-white to-blue-50 rounded-2xl shadow-2xl overflow-hidden transition-shadow duration-500 hover:shadow-3xl">

            {/* Seção principal: Foto + Apresentação */}
            <div className="flex flex-col md:flex-row items-center gap-8 p-6 md:p-12">
              <img
                src="https://res.cloudinary.com/exercice-disp/image/upload/v1756230611/WhatsApp_Image_2025-08-25_at_21.18.13_sk0prw.jpg"
                alt="Victória Maria"
                className="w-40 sm:w-48 md:w-56 h-40 sm:h-48 md:h-56 rounded-l-2xl shadow-xl object-cover transform transition-transform duration-500 delay-500 hover:scale-105"
              />
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-700 mb-4">
                  Professora Victória Maria
                </h2>
                <p className="text-gray-800 text-base sm:text-lg md:text-xl text-justify">
                  Olá! Eu sou <strong>Victória Maria</strong>, professora polivalente, apaixonada por transformar o aprendizado em momentos de descoberta e diversão.
                  Atuo em diversos ramos da educação, oferecendo acompanhamento pedagógico, correção de trabalhos acadêmicos e suporte individualizado para cada aluno.
                </p>
              </div>
            </div>

            {/* Grid de Formação e Experiência */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-12 bg-blue-50">

              {/* Formação Acadêmica */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
                <h3 className="text-2xl sm:text-3xl font-bold text-red-700 mb-4 flex items-center gap-2">
                  <FaGraduationCap className="text-red-500" /> Formação Acadêmica
                </h3>
                <ul className="list-none ml-4 list-inside text-gray-800 text-base sm:text-lg md:text-xl space-y-2 ml-4">
                  <li>Licenciatura em História - UNICAP</li>
                  <li>Licenciatura em Pedagogia - UNIASSELVI</li>
                  <li>Pós-graduação em Educação Especial Inclusiva - UNIASSELVI</li>
                </ul>
              </div>

              {/* Experiência Profissional */}
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
                <h3 className="text-2xl sm:text-3xl font-bold text-red-700 mb-4 flex items-center gap-2">
                  <FaUserTie className="text-red-500" /> Experiência Profissional
                </h3>
                <p className="text-gray-800 text-base sm:text-lg md:text-xl text-justify">
                  Atuando em escolas e cursos diversos, sou especializada em criar metodologias adaptadas às necessidades individuais de cada aluno.
                  Possuo ampla experiência no acompanhamento de estudantes de diferentes idades e níveis acadêmicos, desenvolvendo suas habilidades cognitivas e sociais de forma lúdica e inclusiva.
                </p>
              </div>
            </div>
          </div>
        </div>





        {/* Educação Especial */}
        {/* Educação Especial */}
        <div className="flex flex-col md:flex-row mb-12 px-6 sm:px-8 md:px-12 items-center gap-8">
          {/* Card */}
          <div className="flex-1 bg-gradient-to-r from-amber-50 via-white to-amber-100 border-l-8 border-red-500 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl sm:text-3xl font-bold text-red-700 mb-4 flex items-center gap-3">
              <FaHeart className="text-red-500 animate-pulse" /> Educação Especial Inclusiva
            </h3>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl text-justify leading-relaxed">
              Acredito que cada criança possui um <span className="font-semibold text-red-600">potencial único</span>.
              Minha abordagem inclui <span className="text-blue-600 font-medium">metodologias inclusivas</span>, acompanhamento individualizado
              e recursos pedagógicos adaptados para promover aprendizado de qualidade e inclusão plena.
            </p>
          </div>

          {/* Imagem */}
          <div className="hidden md:flex w-full md:w-1/3 justify-center">
            <img
              src="https://res.cloudinary.com/exercice-disp/image/upload/v1756234729/WhatsApp_Image_2025-08-25_at_22.17.24-removebg-preview_mh9vcf.png"
              alt="Educação Especial"
              className="w-60 md:w-72 lg:w-80 object-contain transform hover:scale-105 hover:rotate-1 transition duration-500 drop-shadow-xl"
            />
          </div>

        </div>


        {/* Serviços de Correção e TCC */}
        <div className="mb-12 px-6 sm:px-8 md:px-12 ">
          <h3 className="text-2xl sm:text-3xl font-bold text-red-700 mb-4 flex items-center gap-2">
            <FaClipboardCheck className="text-red-500" /> Serviços Acadêmicos
          </h3>
          <p className="text-gray-800 text-base sm:text-lg md:text-xl text-justify mb-6">
            Ofereço suporte completo em trabalhos acadêmicos, incluindo:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 bg-blue-200 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              <FaBook className="text-red-500 text-2xl" />
              <span>Correção detalhada de trabalhos acadêmicos</span>
            </div>
            <div className="flex items-center gap-3 bg-green-200 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              <FaChalkboardTeacher className="text-red-500 text-2xl" />
              <span>Orientação e acompanhamento de TCCs</span>
            </div>
            <div className="flex items-center gap-3 bg-yellow-200 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              <FaClipboardCheck className="text-red-500 text-2xl" />
              <span>Construção de roteiros e slides para apresentações</span>
            </div>
            <div className="flex items-center gap-3 bg-purple-200 p-4 rounded-lg shadow-sm hover:shadow-md transition">
              <FaPuzzlePiece className="text-red-500 text-2xl" />
              <span>Suporte pedagógico lúdico e individualizado</span>
            </div>
          </div>
          <div className="flex justify-center md:justify-center">
            <DelayedLink to="/servicos" className="mt-6 inline-block bg-red-700 hover:bg-red-600 text-white px-6 py-3 rounded-lg shadow-md transition">
              Ver todos os serviços
            </DelayedLink>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default Sobre;
