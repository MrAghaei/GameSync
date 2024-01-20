import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
function SearchBar({ handleSearch }) {
  return (
    <div className={"bg-gray-dark w-full h-16 p-8 "}>
      {/*<div className={"relative"}>*/}
      {/*  <input*/}
      {/*    type={"text"}*/}
      {/*    placeholder={"Search..."}*/}
      {/*    className={*/}
      {/*      "bg-black-secondary p-3 border border-gray-300 rounded-xl focus:outline-none w-2/3"*/}
      {/*    }*/}
      {/*  />*/}
      {/*  <div className="absolute left-0 top-0 bottom-0 flex items-center px-2 size-10">*/}
      {/*    <img src={"./search-icon.svg"} className={"size-10"} />*/}
      {/*  </div>*/}
      {/*</div>*/}
      <form>
        <TextField
          id="search-bar"
          className="bg-black-secondary rounded-3xl w-1/2"
          onInput={handleSearch}
          label=""
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color={"secondary"} />
              </InputAdornment>
            ),
            classes: {
              root: "focus:bg-black-secondary focus:outline-none",
              focused: "border-white",
            },
          }}
          variant="outlined"
          placeholder="Search..."
          size="small"
        />
      </form>
    </div>
  );
}

export default SearchBar;
