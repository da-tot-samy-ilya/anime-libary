import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category } from "../api/getCategories.ts";

export interface Categories {
  list: Category[] | null;
}

const initialState: Categories = {
  list: null,
};

export const categoriesSlice = createSlice({
  name: "categoriesSlice",
  initialState,
  reducers: {
    setList: (state, action: PayloadAction<Category[]>) => {
      state.list = action.payload;
    },
  },
});

export const CATEGORIES_ACTIONS = categoriesSlice.actions;

export default categoriesSlice.reducer;
