import { Button } from "@/components/ui/button"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination"
import { pageActAdmin } from "@/redux/action-creators/actividades/admin/admin-pages-actividades"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useState } from "react"

const PagesActTable: React.FC = () => {
  const dispatch = useAppDispatch()
  const urlAdmin: string = useAppSelector(
    state => state.actividadesReducer.urlAdmin,
  )
  const currentPage: number = useAppSelector(
    state => state.actividadesReducer.currentPageAdmin,
  )
  const totalPages: number = useAppSelector(
    state => state.actividadesReducer.totalPagesAdmin,
  )
  const [page, setPage] = useState(currentPage)
  const token = localStorage.getItem("TOKEN")

  const handleNext = () => {
    setPage(prev => {
      const nextPage = prev + 1
      dispatch(pageActAdmin({ oldUrl: urlAdmin, page: nextPage, token: token }))
      return nextPage
    })
  }

  const handlePrev = () => {
    setPage(prev => {
      const prevPageValue = prev - 1
      dispatch(
        pageActAdmin({ oldUrl: urlAdmin, page: prevPageValue, token: token }),
      )
      return prevPageValue
    })
  }

  return (
    <>
      <Pagination className="mb-auto mr-8">
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
            {currentPage === totalPages ? (
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

export default PagesActTable
