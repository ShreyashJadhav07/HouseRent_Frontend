import axios from "axios";

export const ENDPOINT ={
    //auth
    login: "/auth/login", 
    signup:"/auth/signup"


}
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const api=axios.create({
    baseURL:API_BASE_URL,
    withCredentials:true,
})