import { RootState } from "../../../app/store.ts";

export const selectMangas = (state: RootState) => state.mangas.list;

export const selectIsLoading = (state: RootState) => state.mangas.isLoading;
