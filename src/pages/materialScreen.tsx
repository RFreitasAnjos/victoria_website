import PageContainer from "../components/PageContainer";

interface MaterialScreenProps {
  title?: string;
  description?: string;
  content?: React.ReactNode; // Aqui você pode passar o componente com o conteúdo do material
}

const MaterialScreen: React.FC<MaterialScreenProps> = ({
  title = "Título do Material",
  description = "Descrição breve do material educacional, contextualizando seu conteúdo.",
  content,
}) => {
  return (
    <PageContainer>
      <div className="min-h-screen bg-blue-50 p-6 sm:p-8 md:p-12 flex flex-col gap-6">
        {/* Cabeçalho do material */}
        <header className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-blue-700">{title}</h1>
            <p className="text-gray-700 mt-2">{description}</p>
          </div>
        </header>

        {/* Conteúdo do material */}
        <main className="flex-1 bg-white rounded-xl shadow-md p-6">
          {content ? (
            <div className="w-full h-full">{content}</div>
          ) : (
            <p className="text-gray-500 text-center py-20">
              Nenhum conteúdo disponível no momento.
            </p>
          )}
        </main>
      </div>
    </PageContainer>
  );
};

export default MaterialScreen;
