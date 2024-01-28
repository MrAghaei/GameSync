import NavBar from "./components/NavBar";
import SearchPage from "./Pages/SearchPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ToPlayPage from "./Pages/ToPlayPage";
import PlayingPage from "./Pages/PlayingPage";
import PlayedPage from "./Pages/PlayedPage";
import NotFoundPage from "./Pages/NotFoundPage";
import LandingPage from "./Pages/LandingPage";
import SearchBar from "./components/SearchBar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useDebounce from "./hooks/useDebounce";

import * as React from "react";
import DialogBox from "./components/DialogBox";
import useOpenDialog from "./hooks/useOpenDialog";
import { SetOpenContext } from "./Context/context";
let itemId;
export function getItemId(id: string) {
  itemId = id;
}
function App() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedValue = useDebounce(searchQuery);
  const [open, setOpen] = React.useState(false);
  const [dialogValue, setDialogValue] = React.useState("");

  let id = 0;
  function getUniqueId(): string {
    return id++ + "";
  }

  function getItemById(idToFind, items) {
    return items.find((item) => item.id === idToFind);
  }

  useEffect(() => {
    console.log("Searching");
    navigate(`/searchpage`);
    //api fetch here
  }, [debouncedValue]);

  function handleAPISearch(value: string) {
    setSearchQuery(value);
  }
  function handleLocalSearch() {
    console.log("local searching");
  }

  return (
    <div className={"bg-gray-dark flex flex-row min-h-screen"}>
      <div className={"hidden md:block w-[30vw]"}>
        <NavBar />
      </div>

      <div className={"w-[70vw]"}>
        <SetOpenContext.Provider value={setOpen}>
          <SearchBar data={{ handleSearch: handleAPISearch }} />

          <Routes>
            <Route path={"searchpage"} element={<SearchPage />}></Route>
            <Route
              path={"toplaypage"}
              element={<ToPlayPage handleLocalSearch={handleLocalSearch} />}
            ></Route>
            <Route
              path={"playingpage"}
              element={<PlayingPage handleLocalSearch={handleLocalSearch} />}
            ></Route>
            <Route
              path={"playedpage"}
              element={<PlayedPage handleLocalSearch={handleLocalSearch} />}
            ></Route>
            <Route path={"landingpage"} element={<LandingPage />}></Route>
            <Route path={"*"} element={<NotFoundPage />}></Route>
          </Routes>
        </SetOpenContext.Provider>
      </div>
    </div>
  );
}

export default App;
