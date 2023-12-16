import { MainMenu } from "../Menu";
import { useEffect, useState } from "react";
import { getManga } from "./api/getManga.ts";
import { useDispatch, useSelector } from "react-redux";
import { MANGAS_ACTIONS } from "./store/manga.slice.ts";
import { selectIsLoading, selectMangas } from "./store/manga.selectors.ts";
import { Button, CircularProgress, Grid } from "@mui/material";
import { MangaCard } from "../MangaCard";

export const Manga = () => {
  const dispatch = useDispatch();
  const mangas = useSelector(selectMangas);
  const isLoading = useSelector(selectIsLoading);
  const [position, setPosition] = useState(0);
  const loadMoreManga = async () => {
    setPosition(position + 10);
    dispatch(MANGAS_ACTIONS.setIsLoading(true));

    const data = await getManga(10, position);
    dispatch(MANGAS_ACTIONS.setIsLoading(false));

    dispatch(
      MANGAS_ACTIONS.setList(mangas ? [...mangas, ...data.data] : data.data),
    );
  };

  useEffect(() => {
    const getData = async () => {
      dispatch(MANGAS_ACTIONS.setIsLoading(true));
      const data = await getManga(10, 0);
      dispatch(MANGAS_ACTIONS.setList(data.data));
      dispatch(MANGAS_ACTIONS.setIsLoading(false));
    };
    getData();
  }, []);

  return (
    <>
      <MainMenu />
      <div className="content" style={{ padding: "15px" }}>
        <Grid container spacing={2} columns={4}>
          {mangas?.map((manga) => <MangaCard manga={manga} />)}
        </Grid>

        {isLoading ? (
          <CircularProgress />
        ) : (
          <Button onClick={loadMoreManga}>Load more</Button>
        )}
      </div>
    </>
  );
};
