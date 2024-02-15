import { Button } from "@/components/ui/button"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination"
import { pageActividades } from "@/redux/action-creators/actividades/pageActividades"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useState } from "react"

const PagesActividades: React.FC = () => {
  const dispatch = useAppDispatch()
  const url: string = useAppSelector(state => state.actividadesReducer.url)
  const currentPage: number = useAppSelector(
    state => state.actividadesReducer.currentPage,
  )
  const totalPages: number = useAppSelector(
    state => state.actividadesReducer.totalPages,
  )
  const [page, setPage] = useState(currentPage)

  const handleNext = () => {
    setPage(prev => {
      const nextPage = prev + 1
      dispatch(pageActividades({ oldUrl: url, page: nextPage }))
      return nextPage
    })
  }

  const handlePrev = () => {
    setPage(prev => {
      const prevPageValue = prev - 1
      dispatch(pageActividades({ oldUrl: url, page: prevPageValue }))
      return prevPageValue
    })
  }

  return (
    <>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            {currentPage === 1 ? (
              <Button disabled variant={"outline"} onClick={handlePrev}>
                Prev
              </Button>
            ) : (
              <Button variant={"outline"} onClick={handlePrev}>
                Prev
              </Button>
            )}
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>{currentPage}</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            {currentPage === totalPages || totalPages ===0 ? (
              <Button disabled variant={"outline"} onClick={handleNext}>
                Next
              </Button>
            ) : (
              <Button variant={"outline"} onClick={handleNext}>
                Next
              </Button>
            )}
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  )
}

export default PagesActividades
