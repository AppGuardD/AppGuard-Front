import { ReviewMangrullosType } from "@/redux/action-types/reviewMangrullosTypes"
import type { Action } from "@/redux/actions/reviewMangrullosAction"
import type { Dispatch } from "@reduxjs/toolkit"

import axios from "axios"

const instance = axios.create({
  baseURL: "http://localhost:3001/api",
  //baseURL: "https://appguard-back.onrender.com/",
})

interface ReviewData {
  mangrulloId?: string
  userId?: string
}

interface FormData {
  comment: string
  qualification: number
}

export function createReviewMangrullos(options: {
  reviewData: ReviewData
  formData: FormData
}) {
  return async function (dispatch: Dispatch<Action>) {
    try {
      const requestData = {
        mangrulloId: options.reviewData.mangrulloId,
        userId: options.reviewData.userId,
        comment: options.formData.comment,
        qualification: options.formData.qualification,
      }

      console.log(requestData)
      const url = "/reviewMangrullos/create"
      const response = await instance.post(url, requestData)

      dispatch({
        type: ReviewMangrullosType.POST,
        payload: response.data,
      })
    } catch (error) {
      console.error("Error creating review", error)
    }
  }
}
