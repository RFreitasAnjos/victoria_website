import PageContainer from "../components/PageContainer";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import SocialLogin from "../components/SocialLogin";

const Register = () => {
  return (
    <PageContainer>
      <div className="min-h-screen flex items-center justify-center bg-blue-50 px-4">
        {/* Card de registro */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 w-full max-w-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-6 text-center">
            Criar Conta
          </h2>

          {/* Formulário */}
          <form className="flex flex-col gap-4">
            {/* Nome completo */}
            <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400 transition">
              <FaUser className="text-gray-400" />
              <input
                type="text"
                placeholder="Nome completo"
                className="w-full outline-none text-gray-700"
              />
            </div>

            {/* E-mail */}
            <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400 transition">
              <FaEnvelope className="text-gray-400" />
              <input
                type="email"
                placeholder="E-mail"
                className="w-full outline-none text-gray-700"
              />
            </div>

            {/* Senha */}
            <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400 transition">
              <FaLock className="text-gray-400" />
              <input
                type="password"
                placeholder="Senha"
                className="w-full outline-none text-gray-700"
              />
            </div>

            {/* Confirmar senha */}
            <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400 transition">
              <FaLock className="text-gray-400" />
              <input
                type="password"
                placeholder="Confirmar senha"
                className="w-full outline-none text-gray-700"
              />
            </div>

            {/* Botão */}
            <button
              type="submit"
              className="bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition font-semibold"
            >
              Registrar
            </button>
          </form>

          <div className="text-center mt-2">
            <div>
              Acessar com
            </div>
            <SocialLogin />
          </div>

          {/* Link de login */}
          <p className="text-center text-gray-500 mt-4 text-sm">
            Já possui conta?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Entrar
            </a>
          </p>
        </div>
      </div>
    </PageContainer>
  );
};

export default Register;
