import axios from "axios";

export interface SmallAnime {
  node: {
    id: number;
    titles: {
      canonical: string;
    };
    description: {
      en: string;
    };
    startDate: string;
    averageRating: number | null;
    posterImage: {
      original: {
        url: string;
      };
    };
  };
}

const apiUrl = "https://kitsu.io/api/graphql";

export interface OuterAnimes {
  data: {
    anime: {
      edges: SmallAnime[];
      pageInfo: {
        endCursor: string;
      };
    };
  };
}

export const getAnime = async (endCursor: string | null = null) => {
  const query = `
  query {
    anime(first: 20${endCursor ? `, after: "${endCursor}"` : ""}) {
      edges {
        node {
          id
          titles {
            canonical
          }
          description
          startDate
          averageRating
          posterImage {
          original {
            url
          }
        }
        }
      }
      pageInfo {
        endCursor
      }
    }
  }
`;
  const { data } = await axios.post<OuterAnimes>(
    apiUrl,
    {
      query: query,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  return data;
};
