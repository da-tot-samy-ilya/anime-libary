import { RootState } from "../../../app/store.ts";

export const selectAnime = (state: RootState) => state.anime.list;

export const selectIsLoadingAnime = (state: RootState) => state.anime.isLoading;
