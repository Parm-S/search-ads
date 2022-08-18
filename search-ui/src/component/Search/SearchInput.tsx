import React from "react";

import TextField from "@mui/material/TextField";

import eventEmitter from "../../helpers/event";
import { Event } from "../../helpers/enum";

import { headerSearchBoxStyles } from "./styles";

const Search: React.FC = () => {
  const [search, setSearch] = React.useState("");

  const changeHandler = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
    },
    []
  );

  const keyHandler = React.useCallback(
    (event:React.KeyboardEvent) => {
      if (event.key === "Enter") {
        eventEmitter.emit(Event.search, search);
      }
    },
    [search]
  );

  return (
    <TextField
      variant="outlined"
      placeholder={"Search Ads here..."}
      sx={headerSearchBoxStyles}
      InputLabelProps={{ shrink: true }}
      size="small"
      onKeyDown={keyHandler}
      onChange={changeHandler}
    />
  );
};

export default Search;
