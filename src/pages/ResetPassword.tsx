import PageContainer from "../components/PageContainer";
import { FaKey, FaLock } from "react-icons/fa";

const ResetPassword = () => {
  return (
    <PageContainer>
      <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4 py-12">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-6 text-center">
            Redefinir Senha
          </h2>
          <p className="text-gray-700 text-sm sm:text-base mb-6 text-center">
            Insira o token recebido por e-mail e crie uma nova senha.
          </p>

          <form className="flex flex-col gap-4">
            {/* Token */}
            <label className="flex flex-col text-gray-700 text-sm sm:text-base">
              <span className="mb-1">Token</span>
              <div className="flex items-center border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-400">
                <span className="px-3 text-blue-500">
                  <FaKey />
                </span>
                <input
                  type="text"
                  placeholder="Insira o token"
                  className="flex-1 p-2 outline-none text-gray-800"
                  required
                />
              </div>
            </label>

            {/* Nova senha */}
            <label className="flex flex-col text-gray-700 text-sm sm:text-base">
              <span className="mb-1">Nova Senha</span>
              <div className="flex items-center border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-400">
                <span className="px-3 text-blue-500">
                  <FaLock />
                </span>
                <input
                  type="password"
                  placeholder="Digite sua nova senha"
                  className="flex-1 p-2 outline-none text-gray-800"
                  required
                />
              </div>
            </label>

            {/* Confirmar senha */}
            <label className="flex flex-col text-gray-700 text-sm sm:text-base">
              <span className="mb-1">Confirmar Senha</span>
              <div className="flex items-center border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-400">
                <span className="px-3 text-blue-500">
                  <FaLock />
                </span>
                <input
                  type="password"
                  placeholder="Confirme sua nova senha"
                  className="flex-1 p-2 outline-none text-gray-800"
                  required
                />
              </div>
            </label>

            {/* Botão */}
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition"
            >
              Redefinir Senha
            </button>
          </form>

          <p className="text-center text-gray-500 text-sm mt-6">
            Certifique-se de lembrar da nova senha para acessar sua conta.
          </p>
        </div>
      </div>
    </PageContainer>
  );
};

export default ResetPassword;
