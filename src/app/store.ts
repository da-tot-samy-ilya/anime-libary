import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "../components/Categories/store/categories.slice.ts";
import mangaSlice from "../components/Manga/store/manga.slice.ts";
import animeSlice from "../components/Anime/store/anime.slice.ts";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    mangas: mangaSlice,
    anime: animeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
