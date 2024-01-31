import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { isValidUsername, isValidEmail, isValidPassword } from "./ValidationsRegister"; // Ajusta la ruta según tu estructura de carpetas

interface RegistrationFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegistrationForm: React.FC = () => {
  const { handleSubmit, formState: { errors } } = useForm<RegistrationFormData>();
  const [disabler, setDisabler] = useState(false);

  const onSubmit = async (data: RegistrationFormData) => {
    const validationErrors: Record<string, string | null> = {
      username: isValidUsername(data.username),
      email: isValidEmail(data.email),
      password: isValidPassword(data.password),
      confirmPassword: data.password !== data.confirmPassword ? "Las contraseñas deben coincidir" : null,
    };


    if (Object.values(validationErrors).some(error => error !== null)) {
      return;
    }

    
    setDisabler(true);
  };

  return (
    <div className="flex justify-center items-center h-screen">
    <div className="bg-darkblue-900 text-white p-8 rounded w-96">
      <h2 className="text-2xl font-semibold mb-4">Registro</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
        <label htmlFor="username" className="text-lg mb-4">
          Nombre de Usuario:
          <input
            type="text"
            id="username"
            name="username"
            className="mt-1 p-2 w-full border rounded bg-gray-800 text-white"
          />
          {errors.username && <span className="error text-sm"></span>}
        </label>
        <br />

        <label htmlFor="email" className="text-lg mb-4">
          Correo Electrónico:
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border rounded bg-gray-800 text-white"
          />
          {errors.email && <span className="error text-sm"></span>}
        </label>
        <br />

        <label htmlFor="password" className="text-lg mb-4">
          Contraseña:
          <input
            type="password"
            id="password"
            name="password"
            className="mt-1 p-2 w-full border rounded bg-gray-800 text-white"
          />
          {errors.password && <span className="error text-sm"></span>}
        </label>
        <br />

        <label htmlFor="confirmPassword" className="text-lg mb-4">
          Confirmar Contraseña:
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="mt-1 p-2 w-full border rounded bg-gray-800 text-white"
          />
          {errors.confirmPassword && <span className="error text-sm"></span>}
        </label>
        <br />

        <button
          className="flex text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-transparent hover:bg-accent font-semibold py-2 px-4 border rounded"
          type="submit"
          disabled={disabler}
        >
          Registrarse
        </button>
      </form>
    </div>
  </div>
  );
};

export default RegistrationForm;