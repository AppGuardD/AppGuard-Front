import { useNavigate } from "react-router-dom"

const TopBar: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="flex p-4 m-8 rounded border border-primary">
      <div className="basis-1/2">
        <span className="align-middle text-3xl font-bold">
          Panel de Control
        </span>
      </div>
      <div className="flex basis-1/2 place-content-end">
        <button
          onClick={() => navigate("/")}
          className="mx-4 flex text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-transparent hover:bg-accent font-semibold py-2 px-4 border rounded"
        >
          Actividades
        </button>
        <button
          onClick={() => navigate("/")}
          className=" mx-4 flex text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-transparent hover:bg-accent font-semibold py-2 px-4 border rounded"
        >
          Mangrullos
        </button>
        <button
          onClick={() => navigate("/")}
          className="mx-4 flex text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-transparent hover:bg-accent font-semibold py-2 px-4 border rounded"
        >
          Consejos
        </button>
      </div>
    </div>
  )
}

export default TopBar
