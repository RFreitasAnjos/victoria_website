import { useState } from "react";
import PageContainer from "../components/PageContainer";
import {
  FaBook,
  FaProjectDiagram,
  FaEnvelope,
  FaCog,
  FaDoorClosed,
  FaPen,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState<string>("material");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const user = {
    name: "Victória Maria",
    avatar:
      "https://res.cloudinary.com/exercice-disp/image/upload/v1756230611/WhatsApp_Image_2025-08-25_at_21.18.13_sk0prw.jpg",
  };

  return (
    <PageContainer>
      <div className="min-h-screen flex bg-blue-50 relative">
        {/* Botão de menu mobile */}
        <button
          className="md:hidden absolute top-4 left-4 z-50 bg-blue-500 text-white p-3 rounded-full shadow-lg focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menu lateral */}
        <aside
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-6 flex flex-col items-center md:items-start transform transition-transform duration-300 z-40
          ${menuOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:relative`}
        >
          {/* Avatar com overlay */}
          <div className="relative w-24 h-24 mb-4 group">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-full h-full rounded-full shadow-lg object-cover transition-transform duration-300 group-hover:scale-105 group-hover:blur-sm"
            />
            <div className="absolute inset-0 rounded-full bg-black bg-opacity-40 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
              <FaPen className="text-white text-xl" />
            </div>
          </div>

          <h2 className="text-xl font-bold text-blue-700 mb-6">{user.name}</h2>

          {/* Botões de ação */}
          <nav className="flex flex-col gap-3 w-full">
            <button
              className={`flex items-center gap-2 px-4 py-2 rounded-lg w-full transition ${
                activeTab === "material"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 hover:bg-blue-200"
              }`}
              onClick={() => {
                setActiveTab("material");
                setMenuOpen(false);
              }}
            >
              <FaBook /> Consultar Material
            </button>
            <button
              className={`flex items-center gap-2 px-4 py-2 rounded-lg w-full transition ${
                activeTab === "projetos"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 hover:bg-blue-200"
              }`}
              onClick={() => {
                setActiveTab("projetos");
                setMenuOpen(false);
              }}
            >
              <FaProjectDiagram /> Projetos em Andamento
            </button>
            <button
              className={`flex items-center gap-2 px-4 py-2 rounded-lg w-full transition ${
                activeTab === "contato"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 hover:bg-blue-200"
              }`}
              onClick={() => {
                setActiveTab("contato");
                setMenuOpen(false);
              }}
            >
              <FaEnvelope /> Entrar em Contato
            </button>
            <button
              className={`flex items-center gap-2 px-4 py-2 rounded-lg w-full transition ${
                activeTab === "configuracoes"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 hover:bg-blue-200"
              }`}
              onClick={() => {
                setActiveTab("configuracoes");
                setMenuOpen(false);
              }}
            >
              <FaCog /> Configurações
            </button>
            <button
              className={`flex items-center gap-2 px-4 py-2 rounded-lg w-full transition ${
                activeTab === "sair"
                  ? "bg-red-500 text-white"
                  : "bg-gray-100 hover:bg-red-200"
              }`}
              onClick={() => {
                setActiveTab("sair");
                setMenuOpen(false);
              }}
            >
              <FaDoorClosed /> Sair
            </button>
          </nav>
        </aside>

        {/* Overlay para mobile quando menu aberto */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-25 z-30 md:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}

        {/* Área central */}
        <main className="flex-1 p-6 md:ml-64 transition-all duration-300">
          {activeTab === "material" && (
            <div className="p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">Materiais Disponíveis</h2>
              <p>Aqui você pode consultar todos os materiais disponíveis para seus estudos.</p>
            </div>
          )}
          {activeTab === "projetos" && (
            <div className="p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">Projetos em Andamento</h2>
              <p>Visualize o status dos seus projetos e atividades em andamento.</p>
            </div>
          )}
          {activeTab === "contato" && (
            <div className="p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">Contato</h2>
              <p>Entre em contato para tirar dúvidas ou solicitar suporte.</p>
            </div>
          )}
          {activeTab === "configuracoes" && (
            <div className="p-6">
              <h2 className="text-2xl font-bold text-blue-700 mb-4">Configurações</h2>
              <p>Entre em contato para tirar dúvidas ou solicitar suporte.</p>
            </div>
          )}
        </main>
      </div>
    </PageContainer>
  );
};

export default UserProfile;
