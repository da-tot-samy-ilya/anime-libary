import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "../components/Categories/store/categories.slice.ts";
import mangaSlice from "../components/Manga/store/manga.slice.ts";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    mangas: mangaSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
