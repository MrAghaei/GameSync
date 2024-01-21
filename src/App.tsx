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

function App() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedValue = useDebounce(searchQuery);

  useEffect(() => {
    console.log("Searching");
    navigate(`/searchpage`);
    //api fetch here
  }, [debouncedValue]);

  function handleSearch(value: string) {
    setSearchQuery(value);
    if (value === "") {
      navigate("/landingpage");
    }
  }

  return (
    <div className={"flex flex-row"}>
      <NavBar />
      <div>
        <SearchBar data={{ handleSearch }} />
        <Routes>
          <Route path={"searchpage"} element={<SearchPage />}></Route>
          <Route path={"toplaypage"} element={<ToPlayPage />}></Route>
          <Route path={"playingpage"} element={<PlayingPage />}></Route>
          <Route path={"playedpage"} element={<PlayedPage />}></Route>
          <Route path={"landingpage"} element={<LandingPage />}></Route>
          <Route path={"*"} element={<NotFoundPage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
