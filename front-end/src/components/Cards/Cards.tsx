import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Cards: React.FC = () => {
  return (
    <Card className="rounded aspect-square max-h-[300px]">
      <CardHeader>
        <CardTitle>nombre mangrullo</CardTitle>
        <CardDescription>zona mangrullo</CardDescription>
      </CardHeader>
      <CardContent>
        <p>imagen mangrullo</p>
      </CardContent>
    </Card>
  )
}

export default Cards
