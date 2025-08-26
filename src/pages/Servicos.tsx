import PageContainer from "../components/PageContainer";
import { FaCheckCircle, FaChalkboard, FaFileAlt } from "react-icons/fa";

const Servicos = () => {
  return (
    <PageContainer>
      <section data-aos="fade-up" className="bg-gradient-to-b from-blue-100 to-white min-h-screen p-6 sm:p-8 md:p-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-red-700 mb-8 text-center md:text-left">
          Serviços Acadêmicos
        </h2>

        {/* Cards de serviços */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          <div className="flex flex-col items-center p-4 bg-gradient-to-b from-red-100 to-red-200 rounded-xl shadow-md hover:shadow-lg transition h-full max-w-xs mx-auto">
            <FaCheckCircle className="text-red-500 text-3xl mb-2" />
            <h3 className="text-lg font-semibold mb-1 text-center w-full break-words">Correção de Trabalhos</h3>
            <p className="text-gray-700 text-center text-sm w-full break-words">
              Revisão detalhada de trabalhos acadêmicos, apontando melhorias de conteúdo, ortografia, gramática e formatação.
            </p>
          </div>

          <div className="flex flex-col items-center p-4 bg-gradient-to-b from-red-100 to-red-200 rounded-xl shadow-md hover:shadow-lg transition h-full max-w-xs mx-auto">
            <FaFileAlt className="text-red-500 text-3xl mb-2" />
            <h3 className="text-lg font-semibold mb-1 text-center w-full break-words">Roteiros e Apresentações</h3>
            <p className="text-gray-700 text-center text-sm w-full break-words">
              Criação de roteiros estruturados para apresentações, ajudando na organização do conteúdo e tempo de exposição.
            </p>
          </div>

          <div className="flex flex-col items-center p-4 bg-gradient-to-b from-red-100 to-red-200 rounded-xl shadow-md hover:shadow-lg transition h-full max-w-xs mx-auto">
            <FaChalkboard className="text-red-500 text-3xl mb-2" />
            <h3 className="text-lg font-semibold mb-1 text-center w-full break-words">Slides Profissionais</h3>
            <p className="text-gray-700 text-center text-sm w-full break-words">
              Desenvolvimento de slides visuais e claros, facilitando a comunicação do conteúdo com recursos gráficos e design atrativo.
            </p>
          </div>
        </div>




        {/* Tabela de preços */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-300 rounded-lg text-center">
            <thead className="bg-red-200">
              <tr>
                <th className="px-4 py-2">Serviços</th>
                <th className="px-4 py-2">Valores</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-red-100 transition">
                <td className="border px-4 py-2">Correção de Trabalhos</td>
                <td className="border px-4 py-2">A partir de R$ 40,00/h</td>
              </tr>
              <tr className="hover:bg-red-100 transition">
                <td className="border px-4 py-2">Roteiro de Apresentação</td>
                <td className="border px-4 py-2">A partir de R$ 50,00/h</td>
              </tr>
              <tr className="hover:bg-red-100 transition">
                <td className="border px-4 py-2">Slides Profissionais</td>
                <td className="border px-4 py-2">R$ 100,00 *</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-600 mt-4 italic text-center">
          * Consulte os valores, cada serviço podem variar dependendo da complexidade do trabalho
        </p>
      </section>
    </PageContainer>
  );
};

export default Servicos;
