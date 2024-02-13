import type { Action } from "@/redux/actions/reviewActions"
import type { Dispatch } from "@reduxjs/toolkit"
import { ReviewType } from "@/redux/action-types/reviewTypes"
import axios from "axios"

const instance = axios.create({
  baseURL: "http://localhost:3001/api",
  //baseURL: "https://appguard-back.onrender.com/",
})

interface ReviewData {
  activityId?: string
  userId?: string
}

interface FormData {
  comment: string
  qualification: number
}

export function createReviewActividades(options: {
  reviewData: ReviewData
  formData: FormData
}) {
  return async function (dispatch: Dispatch<Action>) {
    try {
      const requestData = {
        activityId: options.reviewData.activityId,
        userId: options.reviewData.userId,
        comment: options.formData.comment,
        qualification: options.formData.qualification,
      }

      console.log(requestData, "request data")
      const url = "/reviewActivity/create"
      const response = await instance.post(url, requestData)

      dispatch({
        type: ReviewType.POST,
        payload: response.data,
      })
    } catch (error) {
      console.error("Error creating review", error)
    }
  }
}
