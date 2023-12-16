import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Manga {
  id: number;
  attributes: {
    createdAt: string;
    updatedAt: string;
    slug: string;
    description: string;
    canonicalTitle: string;
    averageRating: string;
    startDate: string;
    endDate: string;
    posterImage: {
      tiny: string;
      large: string;
      medium: string;
    };
  };
}

export interface Mangas {
  list: Manga[] | null;
  isLoading: boolean;
}

const initialState: Mangas = {
  list: null,
  isLoading: false,
};

export const categoriesSlice = createSlice({
  name: "mangasSlice",
  initialState,
  reducers: {
    setList: (state, action: PayloadAction<Manga[]>) => {
      state.list = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const MANGAS_ACTIONS = categoriesSlice.actions;

export default categoriesSlice.reducer;
