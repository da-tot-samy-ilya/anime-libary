import { api } from "../../../api/config.ts";
import { Manga } from "../store/manga.slice.ts";

export interface OuterManga {
  data: Manga[];
}

export const getManga = async (limit: number, offset: number) => {
  const { data } = await api.get<OuterManga>(
    `manga?page[limit]=${limit}&page[offset]=${offset}`,
  );
  return data;
};
