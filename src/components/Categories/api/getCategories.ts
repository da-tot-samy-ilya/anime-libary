import axios from "axios";

export interface SmallCategory {
  node: {
    id: number;
    title: {
      en: string;
    };
  };
}

const apiUrl = "https://kitsu.io/api/graphql";

const query = `
  query {
    categories(first: 100) {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`;

export interface OuterCategories {
  data: {
    categories: {
      edges: SmallCategory[];
    };
  };
}

export const getCategories = async () => {
  // const { data } = await api.get<OuterCategories>("categories");
  // return data;
  const { data } = await axios.post<OuterCategories>(
    apiUrl,
    {
      query: query,
    },
    {
      headers: {
        "Content-Type": "application/json",
        // Добавьте заголовок авторизации, если это необходимо
        // 'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
      },
    },
  );
  return data;
};
