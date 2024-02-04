import React, { useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { createUser } from "../../redux/action-creators/user/postUser";

interface FormProps {
  userName: string;
  email: string;
  password: string;
  typeIdentification: string;
  numberIdentification: string;
  rol: string;
}

const CreateUserForm: React.FC<FormProps> = () => {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<FormProps>({
    userName: "",
    email: "",
    password: "",
    typeIdentification: "",
    numberIdentification: "",
    rol: "",
  });

  // Manejar cambios en el formulario
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Manejar envío del formulario
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Handling submit with data:', formData);
    dispatch(createUser(formData));
  };

  return (
    <div className="flex justify-center items-center h-screen" >
       <div className="bg-darkblue-900 text-white p-8 rounded w-96">
       <h2 className="text-2xl font-semibold mb-4">Registro</h2>
    <form   onSubmit={handleSubmit}  className="flex flex-col items-center" >
      <label className="text-lg mb-4">
        UserName:
        <input
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded bg-gray-800 text-white"
        />
      </label>
      <label  >
        Email:
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded bg-gray-800 text-white"
        />
      </label >
      <label className="text-lg mb-4">
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded bg-gray-800 text-white"
        />
      </label>
      <label className="text-lg mb-4">
      typeIdentification:
        <input
          type="text"
          name="typeIdentification"
          value={formData.typeIdentification}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded bg-gray-800 text-white"
        />
      </label>
      <label className="text-lg mb-4">
      numberIdentification:
        <input
          type="text"
          name="numberIdentification"
          value={formData.numberIdentification}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded bg-gray-800 text-white"
        />
      </label>          
      <label className="text-lg mb-4">
      rol:
        <input
          type="text"
          name="rol"
          value={formData.rol}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded bg-gray-800 text-white"
        />
      </label>
     
      <button className="flex text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-transparent hover:bg-accent font-semibold py-2 px-4 border rounded"
       type="submit">Crear Usuario</button>
    </form>
    </div>
    </div>
  );
};

export default CreateUserForm;