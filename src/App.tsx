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
import { games } from "./mock/Games";

function App() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedValue = useDebounce(searchQuery);
  const [open, setOpen] = React.useState(false);
  const [dialogValue, setDialogValue] = React.useState("");

  const handleClose = (value: string) => {
    setOpen(false);
    setDialogValue(value);
  };

  useEffect(() => {
    console.log("Searching");
    navigate(`/searchpage`);
    // localStorage.setItem("toplaypage", JSON.stringify(["1", "3", "4", "9"]));
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

          <DialogBox data={{ open, dialogValue, handleClose }} />
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
