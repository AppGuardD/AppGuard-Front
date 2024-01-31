import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  username: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // Aquí puedes manejar los datos del formulario
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center h-screen">
    <div className="bg-darkblue-900 text-white p-8 rounded w-96">
      <h2 className="text-2xl font-semibold mb-4">Iniciar Sesión</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium">
            Usuario:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="mt-1 p-2 w-full border rounded bg-gray-800 text-white" 
          />
          <span>{errors.username?.message}</span>
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium">
            Contraseña:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="mt-1 p-2 w-full border rounded bg-gray-800 text-white"
          />
          <span>{errors.password?.message}</span>
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