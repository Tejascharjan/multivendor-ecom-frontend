import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../config/Api";

export const sendLoginSignupOtp =createAsyncThunk("/auth/sendLoginSignupOtp", async({email}:{email:string},{rejectWithValue})=>{
    try {
        const response = api.post("/auth/send/login-signup-otp",{email})
        console.log("response:-",response);
    } catch (error) {
        console.log("error:-",error);
    }
} )

export const signin =createAsyncThunk<any, any>("/auth/signin", async(loginRequest,{rejectWithValue})=>{
    try {
        const response = api.post("/auth/signin",loginRequest)
        console.log("response:-",response);
    } catch (error) {
        console.log("error:-",error);
    }
} )