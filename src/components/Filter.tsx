import { useState } from "react";

const Filter: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories = [
    "História",
    "Artes",
    "Educação Especial",
    "Materiais de Pesquisa",
    "Matemática",
    "Ciências",
    "Literatura",
  ];

  const handleToggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <aside className="bg-white p-3 rounded-xl shadow-lg w-full md:w-64 flex-shrink-0 sticky top-24">
      <h2 className="text-lg font-bold text-blue-700 mb-3">Filtrar Materiais</h2>
      <div className="flex flex-col gap-2">
        {categories.map((category) => (
          <label
            key={category}
            className="flex items-center gap-2 cursor-pointer hover:bg-blue-50 rounded-md px-2 py-1 transition"
          >
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 text-blue-600"
              checked={selectedCategories.includes(category)}
              onChange={() => handleToggleCategory(category)}
            />
            <span className="text-gray-700 text-sm">{category}</span>
          </label>
        ))}
      </div>
      <button
        className="mt-4 w-full bg-blue-600 text-white py-1.5 rounded-lg shadow-md hover:bg-blue-700 transition text-sm"
        onClick={() => console.log("Categorias selecionadas:", selectedCategories)}
      >
        Aplicar Filtro
      </button>
    </aside>
  );
};

export default Filter;
