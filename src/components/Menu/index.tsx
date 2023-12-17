import "./style.scss";
import { Button, Grid, Link, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getCategories } from "../Categories/api/getCategories.ts";
import { useDispatch } from "react-redux";
import { CATEGORIES_ACTIONS } from "../Categories/store/categories.slice.ts";
import { DropDownList, MenuDropDown } from "../MenuDropDown";
import { Link as RouterLink } from "react-router-dom";

export const MainMenu = () => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState<DropDownList[] | null>(null);

  useEffect(() => {
    const getData = async () => {
      const categories = await getCategories();
      dispatch(CATEGORIES_ACTIONS.setList(categories.data.categories.edges));

      setCategories(
        categories.data.categories.edges.map((el) => {
          return { name: el.node.title.en, link: String(el.node.id) };
        }),
      );
    };
    getData();
  }, []);

  return (
    <div className="menu">
      <Grid container gap="10px">
        <Link component={RouterLink} to="/" underline="none" color="red">
          <Typography>Anime Libary</Typography>
        </Link>

        <MenuDropDown name="Categories" list={categories} />

        <Button component={RouterLink} to="/anime">
          Anime
        </Button>
        <Button component={RouterLink} to="/manga">
          Manga
        </Button>
      </Grid>
    </div>
  );
};
