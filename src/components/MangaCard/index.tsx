import { Grid, Paper, Typography } from "@mui/material";
import { Manga } from "../Manga/store/manga.slice.ts";

interface Props {
  manga: Manga;
}

export const MangaCard = ({ manga }: Props) => {
  return (
    <Grid item xs={1}>
      <Paper elevation={2} style={{ overflow: "hidden" }}>
        <Grid container columns={2}>
          <Grid item>
            <img
              className="mangaCard"
              src={manga.attributes.posterImage.tiny}
              alt=""
            />
          </Grid>

          <Grid item padding="10px">
            <Typography>{manga.attributes.canonicalTitle}</Typography>
            <Typography>{manga.attributes.averageRating}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};
