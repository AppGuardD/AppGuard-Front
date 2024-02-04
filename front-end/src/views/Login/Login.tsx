import React from "react";
import { useForm , SubmitHandler } from "react-hook-form";
import { postLogin } from "../../redux/action-creators/login/postLogin";
import { useAppDispatch } from "@/redux/hooks";

interface LogData {
  email: string;
  password: string;
}
interface FormData {
  email: string;
  password: string;
}


const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    register, // Agrega la función register aquí
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // Aquí puedes manejar los datos del formulario
    console.log(data);

    // Llama a tu acción para iniciar sesión
    dispatch(postLogin(data));
  };
// const handleLogin = ()=> ;
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-darkblue-900 text-white p-8 rounded w-96">
        <h2 className="text-2xl font-semibold mb-4">Iniciar Sesión</h2>
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
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
