import { MainMenu } from "../Menu";
import { useEffect, useState } from "react";
import { getAnime } from "./api/getAnime.ts";
import { Button, CircularProgress, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectAnime, selectIsLoadingAnime } from "./store/anime.selectors.ts";
import { ANIME_ACTIONS } from "./store/anime.slice.ts";
import { AnimeCard } from "../AnimeCard";

export const Anime = () => {
  const dispatch = useDispatch();

  const [endCursor, setEndCursor] = useState<string | null>(null);
  const anime = useSelector(selectAnime);
  const isLoading = useSelector(selectIsLoadingAnime);

  useEffect(() => {
    const getData = async () => {
      dispatch(ANIME_ACTIONS.setIsLoading(true));
      const data = await getAnime();
      dispatch(ANIME_ACTIONS.setList(data.data.anime.edges));
      dispatch(ANIME_ACTIONS.setIsLoading(false));
      setEndCursor(data.data.anime.pageInfo.endCursor);
    };
    getData();
  }, []);

  const loadMoreAnime = async () => {
    dispatch(ANIME_ACTIONS.setIsLoading(true));

    const data = await getAnime(endCursor);
    dispatch(ANIME_ACTIONS.setIsLoading(false));

    dispatch(
      ANIME_ACTIONS.setList(
        anime ? [...anime, ...data.data.anime.edges] : data.data.anime.edges,
      ),
    );
    setEndCursor(data.data.anime.pageInfo.endCursor);
  };

  return (
    <>
      <MainMenu />
      <div className="content" style={{ padding: "15px" }}>
        <Grid container spacing={2} columns={4}>
          {anime?.map((anime) => (
            <AnimeCard key={anime.node.id} anime={anime} />
          ))}
        </Grid>

        {isLoading ? (
          <CircularProgress />
        ) : (
          <Button onClick={loadMoreAnime}>Load more</Button>
        )}
      </div>
    </>
  );
};
