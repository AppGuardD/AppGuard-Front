import { Button } from "@/components/ui/button"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination"
import { cleanAdminMangrullos } from "@/redux/action-creators/mangrullos/admin/admin-clean-mangrullos"
import { getAdminMangrullos } from "@/redux/action-creators/mangrullos/admin/admin-get-mangrullos"
import { pageAdminMangrullos } from "@/redux/action-creators/mangrullos/admin/admin-pages-mangrullos"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useEffect, useState } from "react"

const PagesMangTable: React.FC = () => {
  const urlAdmin: string = useAppSelector(
    state => state.mangrullosReducer.urlAdmin,
  )
  const currentPage: number = useAppSelector(
    state => state.mangrullosReducer.currentPageAdmin,
  )
  const totalPages: number = useAppSelector(
    state => state.mangrullosReducer.totalPagesAdmin,
  )
  const [page, setPage] = useState(currentPage)
  const token = localStorage.getItem("TOKEN")

  const dispatch = useAppDispatch()
  useEffect(() => {
    let mounted = true
    const fetchData = async () => {
      await dispatch(getAdminMangrullos({ token: token }))
      if (!mounted) {
        dispatch(cleanAdminMangrullos())
      }
    }
    fetchData()
    return () => {
      mounted = false
    }
  }, [dispatch, token])

  const handleNext = () => {
    setPage(prev => {
      const nextPage = prev + 1
      dispatch(
        pageAdminMangrullos({ oldUrl: urlAdmin, page: nextPage, token: token }),
      )
      return nextPage
    })
  }

  const handlePrev = () => {
    setPage(prev => {
      const prevPageValue = prev - 1
      dispatch(
        pageAdminMangrullos({
          oldUrl: urlAdmin,
          page: prevPageValue,
          token: token,
        }),
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

export default PagesMangTable
