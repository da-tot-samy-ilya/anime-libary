import { Button, Link, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

export interface DropDownList {
  name: string;
  link: string;
}

interface Props {
  name: string;
  list: DropDownList[] | null;
}

export function MenuDropDown({ name, list }: Props) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <>
        <Button
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onMouseEnter={handleClick}
        >
          {name}
        </Button>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          onMouseLeave={handleClose}
        >
          {list?.map((item) => (
            <Link
              component={RouterLink}
              to={`categories/${item.link}`}
              underline="none"
            >
              <MenuItem onClick={handleClose}>{item.name}</MenuItem>
            </Link>
          ))}
        </Menu>
      </>
    </div>
  );
}
