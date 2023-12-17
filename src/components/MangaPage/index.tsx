import { MainMenu } from "../Menu";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMangaById } from "./api/getMangaById.ts";
import { Manga } from "../Manga/store/manga.slice.ts";
import { Grid, Rating, Typography } from "@mui/material";

export const MangaPage = () => {
  const { id } = useParams();

  const [manga, setManga] = useState<null | Manga>(null);

  useEffect(() => {
    const getData = async () => {
      const data = await getMangaById(String(id));
      setManga(data.data);
    };
    getData();
  }, []);

  return (
    <>
      <MainMenu />
      {manga ? (
        <Grid container gap="20px" style={{ padding: "40px" }}>
          <Grid item xs>
            <img
              style={{ width: "100%" }}
              src={manga.attributes.posterImage.large}
              alt=""
            />
          </Grid>
          <Grid item xs>
            <Rating
              name="half-rating-read"
              defaultValue={manga.attributes.averageRating / 20}
              precision={0.1}
              readOnly
              max={5}
              size="large"
            />
            <Typography>
              <h1>{manga.attributes.canonicalTitle} </h1>
            </Typography>
            <Typography>
              <p>{manga.attributes.description}</p>
            </Typography>
          </Grid>
        </Grid>
      ) : null}
    </>
  );
};
