import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../config/Api";
import { User } from "../../types/userTypes";
import { Order } from "../../types/orderTypes";
import { Seller } from "../../types/SellerTypes";

export interface Transaction {
     id: number;
     customer: User;
     order: Order;
     seller: Seller;
     date: string;
}

interface TransactionState {
     transactions: Transaction[];
     transaction: Transaction | null;
     loading: boolean;
     error: string | null;
}

// initialState
const initialState: TransactionState = {
     transactions: [],
     transaction: null,
     loading: false,
     error: null,
};

export const fetchTranssactionBySeller = createAsyncThunk<
     Transaction[],
     string,
     { rejectValue: string }
>("transactions/fetchTranssactionBySeller", async (jwt, { rejectWithValue }) => {
     try {
          const response = await api.get("/api/transacations/seller", {
               headers: { Authorization: `Bearer ${jwt}` },
          });
          console.log("fetchTranssactionBySeller", response.data);
          return response.data;
     } catch (error: any) {
          console.log("error", error.response);
          return rejectWithValue(error.response.data);
     }
});

// slice

const transactionSlice = createSlice({
     name: "transactions",
     initialState,
     reducers: {},
     extraReducers: (builder) => {
          builder
               .addCase(fetchTranssactionBySeller.pending, (state) => {
                    state.loading = true;
                    state.error = null;
               })
               .addCase(fetchTranssactionBySeller.fulfilled, (state, action) => {
                    state.loading = false;
                    state.transactions = action.payload;
               })
               .addCase(fetchTranssactionBySeller.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.payload as string;
               });
     },
});

export default transactionSlice.reducer;
