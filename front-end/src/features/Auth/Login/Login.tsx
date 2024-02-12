import { useForm, SubmitHandler } from "react-hook-form"
import { postLogin } from "../../../redux/action-creators/login/postLogin"
import { useAppDispatch } from "@/redux/hooks"
import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';

interface LogData {
  email: string
  password: string
}

interface FormData {
  email: string
  password: string
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
    

    console.log(data)

    // Llama a tu acción para iniciagit r sesión
    dispatch(postLogin(data))
  }
  // const handleLogin = ()=> ;
  return (
  <GoogleOAuthProvider clientId="204945610405-eaj4cam96mbfrom5fj3m3hadk3guep9s.apps.googleusercontent.com">
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
              id="emial"
              {...register("email")} // Vincula el campo al estado de react-hook-form
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
              {...register("password")} // Vincula el campo al estado de react-hook-form
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
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>;
        </form>
      </div>
    </div>
    </GoogleOAuthProvider>
  )
}

export default LoginForm
