import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SmallCategory } from "../api/getCategories.ts";

export interface Categories {
  list: SmallCategory[] | null;
}

const initialState: Categories = {
  list: null,
};

export const categoriesSlice = createSlice({
  name: "categoriesSlice",
  initialState,
  reducers: {
    setList: (state, action: PayloadAction<SmallCategory[]>) => {
      state.list = action.payload;
    },
  },
});

export const CATEGORIES_ACTIONS = categoriesSlice.actions;

export default categoriesSlice.reducer;
