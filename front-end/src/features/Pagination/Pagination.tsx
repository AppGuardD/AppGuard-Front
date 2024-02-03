import { getActividades } from "@/redux/action-creators/actividades/getActividades"
import { useAppSelector, useAppDispatch } from "@/redux/hooks"

const Pagination: React.FC = () => {
  const dispatch = useAppDispatch()
  const totalPages = useAppSelector(
    state => state.actividadesReducer.totalPages,
  )

  const currentPage = useAppSelector(
    state => state.actividadesReducer.currentPage,
  )
  const handlePrevPage = () => {
    if (currentPage > 1) {
      let page = currentPage - 1
      dispatch(getActividades(page))
    }
  }

  const handleNextPage = () => {
    if (currentPage !== totalPages) {
      let page = currentPage + 1
      dispatch(getActividades(page))
    }
  }
  return (
    <div>
      <button onClick={() => handlePrevPage()} disabled={currentPage <= 1}>
        Anterior
      </button>
      <span>
        Página {currentPage} de {totalPages}
      </span>
      <button
        onClick={() => handleNextPage()}
        disabled={currentPage === totalPages}
      >
        Siguiente
      </button>
    </div>
  )
}

export default Pagination
