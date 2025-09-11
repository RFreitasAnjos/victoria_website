import PageContainer from "../components/PageContainer";
import { FaEnvelope } from "react-icons/fa";

const RecoveryPassword = () => {
  return (
    <PageContainer>
      <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4 py-12">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-6 text-center">
            Recuperar Senha
          </h2>
          <p className="text-gray-700 text-sm sm:text-base mb-6 text-center">
            Digite o e-mail cadastrado no sistema. Enviaremos um link com token para redefinir sua senha.
          </p>

          <form className="flex flex-col gap-4">
            <label className="flex flex-col text-gray-700 text-sm sm:text-base">
              <span className="mb-1">E-mail</span>
              <div className="flex items-center border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-400">
                <span className="px-3 text-blue-500">
                  <FaEnvelope />
                </span>
                <input
                  type="email"
                  placeholder="seuemail@dominio.com"
                  className="flex-1 p-2 outline-none text-gray-800"
                  required
                />
              </div>
            </label>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition"
            >
              Enviar Token
            </button>
          </form>

          <p className="text-center text-gray-500 text-sm mt-6">
            Lembre-se de checar a caixa de spam caso não receba o e-mail.
          </p>
        </div>
      </div>
    </PageContainer>
  );
};

export default RecoveryPassword;
