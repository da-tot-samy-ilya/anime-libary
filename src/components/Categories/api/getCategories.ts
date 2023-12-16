import { api } from "../../../api/config.ts";

export interface Category {
  id: number;
  attributes: {
    createdAt: string;
    updatedAt: string;
    title: string;
    description: string;
    slug: string;
    nsfw: boolean;
    childCount: number;
  };
}

export interface OuterCategories {
  data: Category[];
}

export const getCategories = async () => {
  const { data } = await api.get<OuterCategories>("categories");
  return data;
};
