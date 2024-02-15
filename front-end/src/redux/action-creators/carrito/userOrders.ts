import { ActionType } from "../../action-types/ordersTypes"
import instance from "@/redux/axios/instance"
import axios, { AxiosError } from "axios"
import { Dispatch } from "redux"

export const getUserOrders = (options: {
  userId: string | null
  token: string | null
}) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: ActionType.GET_USER_ORDERS_REQUEST })

    try {
      const response = await instance({
        method: "get",
        url: `/paymentActivities/userOrders?userId=${options.userId}`,
        headers: {
          tk: options.token,
        },
      })
      console.log(response.data)

      dispatch({
        type: ActionType.GET_USER_ORDERS_SUCCESS,
        payload: response.data.requestData,
      })
    } catch (error: any) {
      console.log("erorr xd", error)
    }
  }
}
