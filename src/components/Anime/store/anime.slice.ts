import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SmallAnime } from "../api/getAnime.ts";

export interface Anime {
  list: SmallAnime[] | null;
  isLoading: boolean;
}

const initialState: Anime = {
  list: null,
  isLoading: false,
};

export const animeSlice = createSlice({
  name: "animeSlice",
  initialState,
  reducers: {
    setList: (state, action: PayloadAction<SmallAnime[]>) => {
      state.list = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const ANIME_ACTIONS = animeSlice.actions;

export default animeSlice.reducer;
