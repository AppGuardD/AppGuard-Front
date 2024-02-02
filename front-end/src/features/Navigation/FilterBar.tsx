import React, { useState } from "react";

interface FilterBarProps {
  onSearch: (searchName: string) => void;
  onTypeChange: (type: string) => void;
  onCostChange: (cost: string) => void;
  onOrderChange: (order: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  onSearch,
  onTypeChange,
  onCostChange,
  onOrderChange,
}) => {
  const [searchName, setSearchTerm] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");
  const [selectedCost, setSelectedCost] = useState<string>("");
  const [selectedOrder, setSelectedOrder] = useState<string>("");

  const handleSearch = () => {
    onSearch(searchName);
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const typeValue = e.target.value;
    setSelectedType(typeValue);
    onTypeChange(typeValue);
  };

  const handleCostChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const costValue = e.target.value;
    setSelectedCost(costValue);
    onCostChange(costValue);
  }; console.log(onCostChange)

  const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const orderValue = e.target.value;
    setSelectedOrder(orderValue);
    onOrderChange(orderValue);
  };

  return (
    <div className="flex items-center justify-between p-4 mb-4 border-b border-primary">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Buscar actividades"
          value={searchName}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mr-2 p-2 border rounded focus:outline-none focus:ring-2 ring-accent text-black"
        />

        <button
          onClick={handleSearch}
          className="transition ease-in-out delay-150 py-2 px-4 mx-2 bg-primary text-white hover:bg-accent rounded"
        >
          Buscar
        </button>

        <select
          value={selectedType}
          onChange={handleTypeChange}
          className="mr-2 p-2 border rounded focus:outline-none focus:ring-2 ring-accent text-black"
        >
          <option value="">Todos los tipos</option>
          <option value="Deportivo">Deportivo</option>
          <option value="Sanitario">Sanitario</option>
          <option value="Cultural">Cultural</option>
        </select>

        <select
          value={selectedCost}
          onChange={handleCostChange}
          className="mr-2 p-2 border rounded focus:outline-none focus:ring-2 ring-accent text-black"
        >
          <option value="">Costo</option>
          <option value="Pago">De pago</option>
          <option value="Gratis">Gratis</option>
        </select>

        <select
          value={selectedOrder}
          onChange={handleOrderChange}
          className="mr-2 p-2 border rounded focus:outline-none focus:ring-2 ring-accent text-black"
        >
          <option value="">Ordenar</option>
          <option value="Mayor Precios">Mejor valorado</option>
          <option value="Menor Precios">Menor valorado</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;

// puedo usar lo que seleccione para compararlo con el campo del modelo. lo igualo al valor del mismo ya que es un enum. 


  /* ejemplo de caso en reducer 
   case ActionType.FILTER:
   const filteredActivities = state.actividades.filter((actividad) => {
    return (
      (selectedType === "" || activity.type === selectedType) &&
      (selectedPayment === "" || activity.payment === selectedPayment)
      );
    });

  return { ...state, actividades: filteredActivities };*/