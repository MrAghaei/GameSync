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
    <div className={"bg-gray-dark w-96 h-16 p-8 "}>
      <form>
        <TextField
          id="search-bar"
          className="bg-black-main rounded-2xl w-1/2"
          onChange={(e) => data.data.handleSearch(e.target.value)}
          label=""
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color={"action"} />
              </InputAdornment>
            ),
            classes: {
              root: "focus:bg-black-secondary focus:outline-none",
              focused: "border-white",
            },
          }}
          variant="outlined"
          placeholder="Search list"
          size="small"
        />
      </form>
    </div>
  );
}

export default SearchBar;
