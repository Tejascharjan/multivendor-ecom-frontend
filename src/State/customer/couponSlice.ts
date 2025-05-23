import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../config/Api";
import { Cart } from "../../types/cartType";
import { CouponState } from "../../types/couponTypes";

const API_URL = "/api/coupons";

export const applyCoupon = createAsyncThunk<
     Cart,
     {
          apply: string;
          code: string;
          orderValue: number;
          jwt: string;
     },
     { rejectValue: string }
>("coupon/applyCoupon", async ({ apply, code, orderValue, jwt }, { rejectWithValue }) => {
     try {
          const response = await api.post(`${API_URL}/apply`, null, {
               params: { apply, code, orderValue },
               headers: { Authorization: `Bearer ${jwt}` },
          });
          console.log("applyCoupon", response.data);
          return response.data;
     } catch (error: any) {
          return rejectWithValue(error.response?.data.error || "Failed to apply coupon");
     }
});

//intial state
const initialState: CouponState = {
     coupons: [],
     cart: null,
     loading: false,
     error: null,
     couponCreated: false,
     couponApplied: false,
};

// slice

const couponSlice = createSlice({
     name: "coupon",
     initialState,
     reducers: {},
     extraReducers: (builder) => {
          builder
               .addCase(applyCoupon.pending, (state) => {
                    state.loading = true;
                    state.error = null;
                    state.couponApplied = false;
               })
               .addCase(applyCoupon.fulfilled, (state, action) => {
                    state.loading = false;
                    state.cart = action.payload;
                    if (action.meta.arg.apply === "true") {
                         state.couponApplied = true;
                    }
               })
               .addCase(
                    applyCoupon.rejected,
                    (state, action: PayloadAction<string | undefined>) => {
                         state.loading = false;
                         state.error = action.payload || "Failed to apply coupon";
                         state.couponApplied = false;
                    }
               );
     },
});

export default couponSlice.reducer;
