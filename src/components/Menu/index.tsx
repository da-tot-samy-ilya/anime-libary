import "./style.scss";
import { Button, Grid, Link, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getCategories } from "../Categories/api/getCategories.ts";
import { useDispatch } from "react-redux";
import { CATEGORIES_ACTIONS } from "../Categories/store/categories.slice.ts";
import { DropDownList, MenuDropDown } from "../MenuDropDown";

export const MainMenu = () => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState<DropDownList[] | null>(null);

  useEffect(() => {
    const getData = async () => {
      const categories = await getCategories();
      dispatch(CATEGORIES_ACTIONS.setList(categories.data));

      setCategories(
        categories.data.map((el) => {
          return { name: el.attributes.title, link: String(el.id) };
        }),
      );
    };
    getData();
  }, []);

  return (
    <div className="menu">
      <Grid container gap="10px">
        <Link color="#ff1248" underline="none" href="/">
          <Typography>Anime Libary</Typography>
        </Link>

        <MenuDropDown name="Categories" list={categories} />

        <Button href="anime">Anime</Button>
        <Button href="manga">Manga</Button>
      </Grid>
    </div>
  );
};
