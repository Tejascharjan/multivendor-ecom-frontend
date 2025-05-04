import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../config/Api";

export const fetchSellerProfile =createAsyncThunk("/seller/fetchSellerProfile", async(jwt:string,{rejectWithValue})=>{
    try {
        const response = await api.get("/sellers/profile",{
            headers:{
                Authorization: `Bearer ${jwt}`
            }
        })
        console.log("response:-",response.data);
    } catch (error) {
        console.log("error:-",error);
    }
} )