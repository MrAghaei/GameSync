import NavBar from "./components/NavBar.jsx";
import SearchPage from "./Pages/SearchPage.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ToPlayPage from "./Pages/ToPlayPage.jsx";
import PlayingPage from "./Pages/PlayingPage.jsx";
import PlayedPage from "./Pages/PlayedPage.jsx";
import NotFoundPage from "./Pages/NotFoundPage.jsx";
import LandingPage from "./Pages/LandingPage.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"searchpage"} element={<SearchPage />}></Route>
          <Route path={"toplaypage"} element={<ToPlayPage />}></Route>
          <Route path={"playingpage"} element={<PlayingPage />}></Route>
          <Route path={"playedpage"} element={<PlayedPage />}></Route>
          <Route path={"landing"} element={<LandingPage />}></Route>
          <Route path={"*"} element={<NotFoundPage />}></Route>
        </Routes>
      </BrowserRouter>
      <NavBar />
    </>
  );
}

export default App;
