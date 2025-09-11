import { FaShoppingCart } from "react-icons/fa";

interface CardProps {
  nome: string;
  descricao: string;
  preco: string;
  imagem: string;
}

const Card: React.FC<CardProps> = ({ nome, descricao, preco, imagem }) => {
  return (
    <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-4 flex flex-col items-center max-w-xs mx-auto h-full group overflow-hidden">
      
      {/* Imagem com overlay */}
      <div className="w-full h-48 mb-4 overflow-hidden rounded-xl relative">
        <img
          src={imagem}
          alt={nome}
          className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center transition duration-500">
          <button className="opacity-0 group-hover:opacity-100 bg-white text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md transition">
            Ver Mais
          </button>
        </div>
      </div>

      {/* Conteúdo */}
      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 text-center truncate">
        {nome}
      </h3>
      <p className="text-gray-600 text-sm sm:text-base text-center mb-4 line-clamp-3">
        {descricao}
      </p>
      <p className="text-red-600 font-bold text-lg mb-4">{preco}</p>

      {/* Botão Comprar */}
      <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition">
        <FaShoppingCart /> Comprar
      </button>
    </div>
  );
};

export default Card;
