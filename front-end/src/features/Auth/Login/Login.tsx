import { useForm, SubmitHandler } from "react-hook-form"
import { postLogin } from "../../../redux/action-creators/login/postLogin"
import { useAppDispatch } from "@/redux/hooks"
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { postGoogleLogin } from "@/redux/action-creators/googleLogin/googleLogin";

interface LogData {
  email: string
  password: string
}

interface FormData {
  email: string
  password: string
}
interface credentialResponse{
  credential: string
}
const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch()

  const {
    control,
    handleSubmit,
    register, 
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = data => {
    console.log("Formulario enviado:", data) // Agregar console.log() para depurar
    
    dispatch(postLogin(data))
  }
 

  return (
    
      <div className="h-svh">
        <div className="bg-darkblue-900 text-white p-8 rounded w-96">
          <p className="text-4xl font-semibold mb-4">Iniciar Sesión</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="Email" className="block text-sm font-medium">
                Usuario:
              </label>
              <input
                type="text"
                id="email" // Corregir el typo en el id
                {...register("email")}
                className="mt-1 p-2 w-full border rounded bg-gray-800 text-white"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium">
                Contraseña:
              </label>
              <input
                type="password"
                id="password"
                {...register("password")}
                className="mt-1 p-2 w-full border rounded bg-gray-800 text-white"
              />
            </div>

            <button
              className="flex text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-transparent hover:bg-accent font-semibold py-2 px-4 border rounded"
              type="submit"
            >
              Iniciar Sesión
            </button>
            <GoogleLogin
              onSuccess={credentialResponse  => {
                if (credentialResponse.credential) {
                  const token : string = jwtDecode(credentialResponse.credential)
                  console.log("token",token)
                  dispatch(postGoogleLogin(credentialResponse))
                } else {
                  console.error('No se pudo obtener el token del credencial');
                }
              }}
              onError={() => {
                console.log('Login Failed');
                // Manejar errores aquí, si es necesario
              }}
            />
          </form>
        </div>
      </div>
    
  )
}

export default LoginForm