
import type { Action } from "../../actions/googleLoginActions"
import type { Dispatch } from "@reduxjs/toolkit"


export function postGoogleLogin(credentialResponse: any) {
    return function (dispatch: Dispatch<Action>) {
      try {
        const googleCredential = credentialResponse.credential
       
        localStorage.setItem("USER_INFO", googleCredential)
        console.log("Google credential:", googleCredential)
      } catch (error) {
        console.error("Error al manejar la autenticación de Google:", error)
      }
    }
  }