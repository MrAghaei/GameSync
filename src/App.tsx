import NavBar from "./components/NavBar";
import SearchPage from "./Pages/SearchPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ToPlayPage from "./Pages/ToPlayPage";
import PlayingPage from "./Pages/PlayingPage";
import PlayedPage from "./Pages/PlayedPage";
import NotFoundPage from "./Pages/NotFoundPage";
import LandingPage from "./Pages/LandingPage";
import SearchBar, { SearchBarInputModel } from "./components/SearchBar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      console.log("Performing search for:", searchQuery);
    }, 500);

    return () => clearTimeout(debounceTimeout);
  }, [searchQuery, navigate]);
  function handleSearch(value: string) {
    navigate(`/searchpage`);
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
//
export default App;
