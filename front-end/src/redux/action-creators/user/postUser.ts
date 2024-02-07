import axios from "axios"
import { ActionType } from "../../action-types/userTypes"
import type { Action } from "../../actions/userActions"
import type { Dispatch } from "@reduxjs/toolkit"

interface UserData {
  userName: string
  email: string
  password: string
  typeIdentification: string
  numberIdentification: string
  rol: string
}

export function createUser(userData: UserData) {
  return function (dispatch: Dispatch<Action>) {
    const create = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3001/user/create",
          userData,
        )
        console.log("Request Payload:", userData)

        dispatch({
          type: ActionType.POST,
          payload: response.data.userData,
        })
      } catch (error) {
        console.error("Error creating User:", error)
      }
    }

    create()
  }
}
