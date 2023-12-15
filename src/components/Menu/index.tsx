import "./style.scss";
import { Grid, Link, Typography } from "@mui/material";

export const Menu = () => {
  return (
    <div className="menu">
      <Grid container gap="10px">
        <Link color="#ff1248" underline="none" href="/">
          <Typography>Anime Libary</Typography>
        </Link>
        <Link color="#4112ff" underline="none" href="categories">
          <Typography>Categories</Typography>
        </Link>
      </Grid>
    </div>
  );
};
