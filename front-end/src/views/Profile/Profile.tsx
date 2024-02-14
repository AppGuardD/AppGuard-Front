import React from 'react';
import { jwtDecode } from 'jwt-decode';
import LogoutButton from '../../features/Auth/LogOut/Logout';

interface JwtPayload {
  email: string;
  userName: string;
  rol: string;
  name?:string;
}

export const Profile: React.FC = () => {
  let user: JwtPayload | null = null;

  const token = localStorage.getItem('USER_INFO');

  if (token) {
    user = jwtDecode(token) as JwtPayload;
  } else {
    // Si no hay token, puedes intentar obtener la información del usuario de la credencial de Google,
    // decodificándola si es necesario y extrayendo los datos relevantes
    // Ejemplo:
    const googleCredential = localStorage.getItem('USER_INFO');
    if (googleCredential) {
     user = jwtDecode(googleCredential);
     console.log(user?.email,user?.rol,user?.userName)
    }
  }

  if (!user) {
    return <div>No se pudo cargar la información del usuario.</div>;
  }

  return (
    <div className="bg-darkblue-900 text-white p-8 rounded w-96">
      <h1 className="text-2xl font-semibold mb-4">¡Bienvenido, {user.userName || user.name}!</h1>
      <p className="text-2xl font-semibold mb-4">Email: {user.email}</p>
      <p className="text-2xl font-semibold mb-4">Rol: {user.rol||' Cliente'}</p>
      <LogoutButton />
    </div>
  );
};
