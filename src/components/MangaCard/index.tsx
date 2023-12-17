import { Grid, Link, Paper, Rating, Typography } from "@mui/material";
import { Manga } from "../Manga/store/manga.slice.ts";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";

interface Props {
  manga: Manga;
}

export const MangaCard = ({ manga }: Props) => {
  const [elevation, setElevation] = useState<number>(2);

  return (
    <Grid item xs={1}>
      <Link underline="none" component={RouterLink} to={`${manga.id}`}>
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
                src={manga.attributes.posterImage.tiny}
                alt=""
              />
            </Grid>

            <Grid item xs padding="10px">
              <Typography>
                <h3>{manga.attributes.canonicalTitle}</h3>
              </Typography>
              <Rating
                name="half-rating-read"
                defaultValue={manga.attributes.averageRating / 20}
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
