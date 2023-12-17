import { Manga } from "../../Manga/store/manga.slice.ts";
import { api } from "../../../api/config.ts";

interface OuterMangaById {
  data: Manga;
}

export const getMangaById = async (id: string) => {
  const { data } = await api.get<OuterMangaById>(`manga/${id}`);
  return data;
};
