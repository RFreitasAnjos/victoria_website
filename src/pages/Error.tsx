import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12 text-center max-w-md">
        <FaExclamationTriangle className="text-red-500 text-6xl mb-6 animate-pulse mx-auto" />
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-4">
          Página Não Encontrada
        </h2>
        <p className="text-gray-600 mb-6">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        <Link
          to="/home"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Voltar para Início
        </Link>
      </div>
    </div>
  );
};

export default Error;
