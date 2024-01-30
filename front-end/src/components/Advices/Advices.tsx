import type { AdvicesType } from "@/redux/actions/advicesActions"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cleanAdvices } from "@/redux/action-creators/advices/cleanAdvices"
import { getAdvices } from "@/redux/action-creators/advices/getAdvices"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { useEffect } from "react"

const Advices: React.FC = () => {
  const dispatch = useAppDispatch()
  const advices: AdvicesType[] = useAppSelector(
    state => state.advicesReducer.advices,
  )

  useEffect(() => {
    let mounted = true
    const fetchData = async () => {
      await dispatch(getAdvices())
      if (!mounted) {
        dispatch(cleanAdvices())
      }
    }
    fetchData()
    return () => {
      mounted = false
    }
  }, [dispatch])

  return (
    <div>
      {advices?.map(advice => (
        <Card key={advice.id} className="flex aspect-[3/1] rounded h-60 mb-8">
          <CardHeader className="basis-1/3">
            <div className="overflow-hidden rounded aspect-square h-48">
              <img
                className="object-cover aspect-square h-48"
                src={advice.image}
                alt=""
              />
            </div>
          </CardHeader>
          <CardContent className="py-6 pl-0 basis-2/3">
            <CardTitle>{advice.title}</CardTitle>
            <p>{advice.comment}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default Advices
