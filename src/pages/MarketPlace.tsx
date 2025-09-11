import PageContainer from "../components/PageContainer";
import Card from "../components/Card";
import Filter from "../components/Filter";

const MarketPlace = () => {
  const produtos = [
    {
      id: 1,
      nome: "Produto 1",
      descricao: "Descrição curta do produto 1",
      preco: "R$ 49,99",
      imagem: "https://res.cloudinary.com/exercice-disp/image/upload/v1756230611/WhatsApp_Image_2025-08-25_at_21.18.13_sk0prw.jpg",
    },
    {
      id: 2,
      nome: "Produto 2",
      descricao: "Descrição curta do produto 2",
      preco: "R$ 79,99",
      imagem: "https://res.cloudinary.com/exercice-disp/image/upload/v1756230611/WhatsApp_Image_2025-08-25_at_21.18.13_sk0prw.jpg",
    },
    {
      id: 3,
      nome: "Produto 3",
      descricao: "Descrição curta do produto 3",
      preco: "R$ 99,99",
      imagem: "https://res.cloudinary.com/exercice-disp/image/upload/v1756230611/WhatsApp_Image_2025-08-25_at_21.18.13_sk0prw.jpg",
    },
    {
      id: 4,
      nome: "Produto 4",
      descricao: "Descrição curta do produto 4",
      preco: "R$ 59,99",
      imagem: "https://res.cloudinary.com/exercice-disp/image/upload/v1756230611/WhatsApp_Image_2025-08-25_at_21.18.13_sk0prw.jpg",
    },
  ];

  return (
    <PageContainer>
      <section className="flex flex-col md:flex-row p-6 sm:p-8 md:p-12 gap-6">
        {/* Filtro lateral flutuante */}
        <div className="w-full md:w-1/4 flex-shrink-0">
          <Filter />
        </div>

        {/* Área de cards ocupando maior parte da tela */}
        <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {produtos.map((produto) => (
            <Card
              key={produto.id}
              nome={produto.nome}
              descricao={produto.descricao}
              preco={produto.preco}
              imagem={produto.imagem}
            />
          ))}
        </div>
      </section>
    </PageContainer>
  );
};

export default MarketPlace;
