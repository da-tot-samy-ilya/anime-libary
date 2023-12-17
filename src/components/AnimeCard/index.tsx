import { SmallAnime } from "../Anime/api/getAnime.ts";
import { useState } from "react";
import { Grid, Link, Paper, Rating, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

interface Props {
  anime: SmallAnime;
}

export const AnimeCard = ({ anime }: Props) => {
  const [elevation, setElevation] = useState<number>(2);

  return (
    <Grid item xs={1}>
      <Link underline="none" component={RouterLink} to={`${anime.node.id}`}>
        <Paper
          onMouseEnter={() => setElevation(6)}
          onMouseLeave={() => setElevation(2)}
          elevation={elevation}
          style={{ overflow: "hidden" }}
        >
          <Grid container>
            <Grid item xs>
              <img
                style={{ width: "100%", height: "100%" }}
                className="mangaCard"
                src={anime.node.posterImage.original.url}
                alt=""
              />
            </Grid>

            <Grid item xs padding="10px">
              <Typography>
                <h3>{anime.node.titles.canonical}</h3>
              </Typography>
              <Rating
                name="half-rating-read"
                defaultValue={
                  anime.node.averageRating ? anime.node.averageRating / 20 : 0
                }
                precision={0.1}
                readOnly
                max={5}
                size="small"
              />
            </Grid>
          </Grid>
        </Paper>
      </Link>
    </Grid>
  );
};
