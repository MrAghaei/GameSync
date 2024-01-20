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

function App() {
  const navigate = useNavigate();
  function handleSearch() {
    console.log("searching");
    navigate("/searchpage");
  }
  return (
    <div className={"flex flex-row"}>
      <NavBar />
      <div>
        <SearchBar handleSearch={handleSearch} />
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
