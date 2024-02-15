import type { Action } from "@/redux/actions/userActions";
import type { Dispatch } from "@reduxjs/toolkit";
import { ActionType } from "@/redux/action-types/userTypes";
import instance from "@/redux/axios/instance";
import type { RootState } from "../../store"; 

export function updateUser(options: {
  userId:string|null  
  formData: any;
  token: string | null;
}) {
  return async function (dispatch: Dispatch<Action>, getState: () => RootState) {
    try {
      
      
      const response = await instance({
        method: "put",
        url: `/user/update/${options.userId}`, // Utilizar el ID del usuario para la URL de la solicitud
        data: options.formData,
        headers: {
     tk:options.token
        },
      });

      dispatch({
        type: ActionType.PUT,
        payload: response.data,
      });

    } catch (error) {
      console.error("Error editing user", error);
    }
  };
}
