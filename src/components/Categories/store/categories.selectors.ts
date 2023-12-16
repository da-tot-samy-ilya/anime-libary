import { RootState } from "../../../app/store.ts";

export const selectCategoires = (state: RootState) => state.categories.list;
