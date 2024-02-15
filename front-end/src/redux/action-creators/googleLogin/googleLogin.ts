import type { Action } from "../../actions/googleLoginActions";
import type { Dispatch } from "@reduxjs/toolkit";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { createUser } from "../user/postUser"; // Importa la acción para el registro de usuario

interface GoogleTokenPayload extends JwtPayload {
  name: string;
  email: string;
  // Agrega otras propiedades si es necesario
}

export function postGoogleLogin(credentialResponse: any) {
  return async function (dispatch: Dispatch<any>) {
    try {
      const googleCredential = credentialResponse.credential;
      localStorage.setItem("TOKEN", googleCredential);

      // Decodificar el token para obtener la información del usuario
      const tokenData = jwtDecode<GoogleTokenPayload>(googleCredential);
      console.log("Datos del token decodificado:", tokenData);
      
      const { name, email } = tokenData;
      if (!name || !email) {
        throw new Error("No se encontró información de nombre o correo electrónico en el token de Google.");
      }

      // Construir el objeto de usuario con los datos de Google OAuth
      const userData = {
        userName: name,
        email: email,
        password: name, // Utilizar el nombre como contraseña temporal
        typeIdentification: "DNI", // Definir tipo de identificación
        numberIdentification: "", // Dejar vacío
        rol: "Cliente", // Definir rol como Cliente
      };
      console.log("Datos del usuario a registrar:", userData);

      // Despachar la acción para registrar al usuario en el backend
      await dispatch(createUser(userData));
      
      console.log("Usuario registrado exitosamente con Google OAuth:", userData);
    } catch (error) {
      console.error("Error al manejar la autenticación de Google:", error);
    }
  };
}
