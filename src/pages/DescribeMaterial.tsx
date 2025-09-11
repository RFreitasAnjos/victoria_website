import { FaShoppingCart, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface DescribeMaterialProps {
  nome?: string;
  descricao?: string;
  preco?: string;
  imagem?: string;
}

const DescribeMaterial: React.FC<DescribeMaterialProps> = ({
  nome = "Nome do Material",
  descricao = "Descrição completa do material, detalhando conteúdo, objetivos e características. Pode incluir informações adicionais como autor, formato, duração ou benefícios de uso.",
  preco = "$49,99",
  imagem = "https://res.cloudinary.com/exercice-disp/image/upload/v1756230611/WhatsApp_Image_2025-08-25_at_21.18.13_sk0prw.jpg",
}) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start p-6 md:p-12">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden">
        {/* Imagem */}
        <div className="md:w-1/2 h-72 md:h-auto relative">
          <img
            src={imagem}
            alt={nome}
            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Conteúdo */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{nome}</h2>
            <p className="text-gray-700 text-sm md:text-base mb-4">{descricao}</p>
            <p className="text-red-600 font-bold text-xl md:text-2xl">{preco}</p>
          </div>

          {/* Botões */}
          <div className="flex flex-wrap gap-4 mt-6">
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition">
              <FaShoppingCart /> Comprar
            </button>
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md transition"
            >
              <FaArrowLeft /> Voltar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescribeMaterial;
