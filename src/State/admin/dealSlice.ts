import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiResponse, DealsState } from "../../types/dealTypes";
import { api } from "../../config/Api";

const initialState: DealsState = {
     deals: [],
     loading: false,
     error: null,
     dealCreated: false,
     dealUpdated: false,
};

export const createDeal = createAsyncThunk(
     "deals/createDeal",
     async (deal: any, { rejectWithValue }) => {
          try {
               const response = await api.post("/admin/deals", deal, {
                    headers: {
                         "Content-Type": "application/json",
                         Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                    },
               });
               return response.data;
          } catch (error: any) {
               console.log("error:-", error.response);
               return rejectWithValue(error.response?.data?.message || "Failed to create deal");
          }
     }
);

export const getAllDeals = createAsyncThunk("deals/getAllDeals", async (_, { rejectWithValue }) => {
     try {
          const response = await api.get("/admin/deals", {
               headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
               },
          });
          console.log("get all deals:-", response.data);
          return response.data;
     } catch (error: any) {
          console.log("error:-", error.response);
          return rejectWithValue(error.response?.data?.message || "Failed to get deals");
     }
});

export const deleteDeal = createAsyncThunk<ApiResponse, number>(
     "deals/deleteDeal",
     async (id: number, { rejectWithValue }) => {
          try {
               const response = await api.delete(`/admin/deals/${id}`, {
                    headers: {
                         "Content-Type": "application/json",
                         Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                    },
               });
               return response.data;
          } catch (error: any) {
               console.log("error:-", error.response);
               return rejectWithValue(error.response?.data?.message || "Failed to delete deal");
          }
     }
);

const dealSlice = createSlice({
     name: "deals",
     initialState,
     reducers: {},
     extraReducers: (builder) => {
          builder
               .addCase(createDeal.fulfilled, (state, action) => {
                    state.dealCreated = true;
               })
               .addCase(getAllDeals.fulfilled, (state, action) => {
                    state.deals = action.payload;
               })
               .addCase(deleteDeal.fulfilled, (state, action) => {
                    state.dealUpdated = true;
               });
     },
});

export default dealSlice.reducer;
