import { SxProps } from "@mui/system/styleFunctionSx";

import { Theme } from "@mui/material/styles";

const DESKTOP_SEARCH_WIDTH = 400;
const MOBILE_SEARCH_WIDTH = 40;
const FOCUS_MOBILE_SEARCH_WIDTH = `calc(100vw - 1rem)`;
const FOCUS_MOBILE_TRANSFORM = "translateX(-140px) scale(1.0,1.0)";

const headerSearchBoxStyles: SxProps<Theme> = (theme) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: 10,
    pl: 1,
    width: MOBILE_SEARCH_WIDTH,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("md")]: {
      width: DESKTOP_SEARCH_WIDTH,
      pl: 2,
    },
  },
  "& .Mui-focused": {
    [theme.breakpoints.down("md")]: {
      width: FOCUS_MOBILE_SEARCH_WIDTH,
      transform: FOCUS_MOBILE_TRANSFORM,
      backgroundColor: theme.palette.background.paper,
      zIndex: theme.zIndex.appBar,
    },
  },
});

export { headerSearchBoxStyles };
