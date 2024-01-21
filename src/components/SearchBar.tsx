import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarInputDataModel {
  handleSearch: any;
}
export interface SearchBarInputModel {
  data: SearchBarInputDataModel;
}

function SearchBar(data: SearchBarInputModel) {
  return (
    <div className={"bg-gray-dark w-full h-16 p-8 "}>
      <form>
        <TextField
          id="search-bar"
          className="bg-black-secondary rounded-3xl w-1/2"
          onChange={(e) => data.data.handleSearch(e.target.value)}
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
