import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HomeCategory } from "../../types/homeCategoryTypes";
import { api } from "../../config/Api";

const API_URL = "/admin";

export const updateHomeCategory = createAsyncThunk<
     HomeCategory,
     { id: number; data: HomeCategory }
>("homeCategory/updateHomeCategory", async ({ id, data }, { rejectWithValue }) => {
     try {
          const response = await api.patch(`${API_URL}/home-category/${id}`, data);
          console.log("category updated", response);
          return response.data;
     } catch (error) {
          console.log("error", error);
          return rejectWithValue("Failed to update home category");
     }
});

export const fetchHomeCategories = createAsyncThunk<HomeCategory[]>(
     "homeCategory/fetchHomeCategories",
     async (_, { rejectWithValue }) => {
          try {
               const response = await api.get(`${API_URL}/home-category`);
               console.log("home categories", response.data);
               return response.data;
          } catch (error: any) {
               console.log("error", error.response);
               return rejectWithValue(
                    error.response?.data?.message || "Failed to fetch home categories"
               );
          }
     }
);

interface HomeCategoryState {
     categories: HomeCategory[];
     loading: boolean;
     error: string | null;
     categoryUpdated: boolean;
}

const initialState: HomeCategoryState = {
     categories: [],
     loading: false,
     error: null,
     categoryUpdated: false,
};

const homeCategorySlice = createSlice({
     name: "homeCategory",
     initialState,
     reducers: {},
     extraReducers: (builder) => {
          builder
               .addCase(updateHomeCategory.pending, (state) => {
                    state.loading = true;
                    state.error = null;
                    state.categoryUpdated = false;
               })
               .addCase(updateHomeCategory.fulfilled, (state, action) => {
                    state.loading = false;
                    state.categoryUpdated = true;
                    const index = state.categories.findIndex(
                         (category) => category.id === action.payload.id
                    );
                    if (index !== -1) state.categories[index] = action.payload;
                    else state.categories.push(action.payload);
               })
               .addCase(updateHomeCategory.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.payload as string;
               })
               .addCase(fetchHomeCategories.pending, (state) => {
                    state.loading = true;
                    state.error = null;
                    state.categoryUpdated = false;
               })
               .addCase(fetchHomeCategories.fulfilled, (state, action) => {
                    state.loading = false;
                    state.categories = action.payload;
               })
               .addCase(fetchHomeCategories.rejected, (state, action) => {
                    state.loading = false;
                    state.error = action.payload as string;
               });
     },
});

export default homeCategorySlice.reducer;
