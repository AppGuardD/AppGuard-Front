import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { getActividades } from "@/redux/action-creators/actividades/getActividades";
import { cleanActividades } from "@/redux/action-creators/actividades/cleanActividades";
import { ActividadesTypes } from "@/redux/actions/actividadesActions";
import CardsActividades from "@/features/Actividades/CardsActividades";
import FilterBar from "@/features/Navigation/FilterBar";
import { ActividadType } from "@/redux/action-types/actividadesTypes";

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
  const dispatch = useAppDispatch();

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
      <Link to={`/home`}>
        <button> Ir atrás </button>
      </Link>
      <FilterBar
        onSearch={(searchTerm) => setFilters({ ...filters, searchTerm })}
        onTypeChange={(selectedType) => setFilters({ ...filters, selectedType })}
        onCostChange={(selectedCost) => setFilters({ ...filters, selectedCost })}
        onOrderChange={(selectedOrder) => setFilters({ ...filters, selectedOrder })}
      />
      <button onClick={applyFilters}>Aplicar Filtros</button>
      <CardsActividades actividades={actividades} />
    </div>
  );
};

export default Actividades;