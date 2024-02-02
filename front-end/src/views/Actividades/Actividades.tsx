import { getActividades } from "@/redux/action-creators/actividades/getActividades"
import { cleanActividades } from "@/redux/action-creators/actividades/cleanActividades"
import { useAppSelector, useAppDispatch } from "@/redux/hooks"
import React, { useState, useEffect } from "react";
import CardsActividades from "@/features/Actividades/CardsActividades"
import type { ActividadesTypes } from "@/redux/actions/actividadesActions"
import FilterBar from "@/features/Navigation/FilterBar";
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
       
const Actividades: React.FC = () => {
  const [filters, setFilters] = useState({
    searchTerm: "",
    selectedType: "",
    selectedCost: "",
    selectedOrder: "",
  });

  const actividades: ActividadesTypes[] = useAppSelector(
    (state) => state.actividadesReducer.actividades
  );

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      try {
        await dispatch(getActividades());
      } finally {
        if (!mounted) {
          dispatch(cleanActividades());
        }
      }
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, [dispatch, filters]);

  const applyFilters = () => {
    
    const filteredActivities = actividades.filter((activity) => {
      return (
        activity.activityName.includes(filters.searchTerm) &&
        (filters.selectedType === "" || activity.type === filters.selectedType) &&
        (filters.selectedCost === "" || activity.state === filters.selectedCost)
      );
    });

    // Aplicar ordenamiento
    if (filters.selectedOrder === "Mayor Precios") {
      filteredActivities.sort((a, b) => b.price - a.price);
    } else if (filters.selectedOrder === "Menor Precios") {
      filteredActivities.sort((a, b) => a.price - b.price);
    }

    dispatch({ type: ActividadType.FILTER, payload: filteredActivities });
    console.log("Filters:", filters)
  }; 

  return (
    <div>
      <div className="flex justify-between px-8 ">
        <p className="text-3xl align-baseline">Todas las Actividades</p>
        <Button
          onClick={() => navigate("/home")}
          className="rounded mb-4 border-primary"
          variant={"outline"}
        >
          Ir Atras
        </Button>
      </div>
      <FilterBar
        onSearch={(searchTerm) => setFilters({ ...filters, searchTerm })}
        onTypeChange={(selectedType) => setFilters({ ...filters, selectedType })}
        onCostChange={(selectedCost) => setFilters({ ...filters, selectedCost })}
        onOrderChange={(selectedOrder) => setFilters({ ...filters, selectedOrder })}
      />
      <button onClick={applyFilters}>Aplicar Filtros</button>
      <CardsActividades actividades={actividades} />
    </div>
  )
}

export default Actividades