import { Action } from "@/redux/actions/reviewActions"
import { ReviewType } from "@/redux/action-types/reviewTypes"
import axios from "axios"
import { Dispatch } from "@reduxjs/toolkit"


const instance = axios.create({
    baseURL: "http://localhost:3001/api",
    //baseURL: "https://appguard-back.onrender.com/",
  })
  
  interface ReviewData{
    //  activityId: number
    // userId: number
      comment: string
      qualification: number
    } 
    
    export function createReviewActividades(ReviewData : ReviewData){
        return async function (dispatch: Dispatch <Action> ){
            try
            {
           console.log(ReviewData);
        const url= ("/reviewActivity/create")   
        const response = await instance.post(url, ReviewData)

        dispatch({
            type:ReviewType.POST,
            payload: response.data,
        })
      } catch (error){
        console.error("Error creating review", error)
      } 

    }
}
    