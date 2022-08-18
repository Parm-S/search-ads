import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Search from "../Search";

import { appbarStyles, logoStyles, toolbarStyles } from "./styles";

const Header: React.FC = () => {
  return (
    <AppBar sx={appbarStyles}>
      <Toolbar disableGutters sx={toolbarStyles}>
        <Typography variant="h5" sx={logoStyles}>
          Search Ads
        </Typography>

        <Search />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
