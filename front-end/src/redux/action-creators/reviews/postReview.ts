import type { Action } from "@/redux/actions/reviewActions"
import type { Dispatch } from "@reduxjs/toolkit"
import { ReviewType } from "@/redux/action-types/reviewTypes"
import instance from "@/redux/axios/instance"

interface ReviewData {
  activityId?: string
  userId?: number | string | null
}

interface FormData {
  comment: string
  qualification: number
}

export function createReviewActividades(options: {
  token: string | null
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
      
      const response = await instance({
        method: "post",
        url: `/reviewActivity/create/`,
        headers: { tk: options.token },
        data: requestData
      })

      dispatch({
        type: ReviewType.POST,
        payload: response.data,
      })
      console.log(response.data);
      
    } catch (error) {
      console.error("Error creating review", error)
    }
  }
}
