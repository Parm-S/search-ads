import { SxProps } from "@mui/system/styleFunctionSx";

const appbarStyles: SxProps = {
    backgroundColor: "common.white",
    color: "grey.900",
  };
  
  const toolbarStyles: SxProps = {
    display: "flex",
    justifyContent: "space-between",
    px: 2,
    py: 1,
  };
  
  const logoStyles: SxProps = {
    textDecoration: "none",
    color: "text.primary",
  };

  export {
    appbarStyles,toolbarStyles,logoStyles
  }