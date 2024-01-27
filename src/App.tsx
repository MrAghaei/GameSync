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
  //*************************************************TO PLAY***********************************************
  const [toPlayList, setToPlayList] = useState([
    {
      imageAlt: "test",
      imageSource: "./testback.jpg",
      gameName: "Metro Exodus 2023",
      metacriticScore: 18,
      platforms: ["playstation", "xbox"],
      buttonType: "Add",
      id: getUniqueId(),
    },
    {
      imageAlt: "test",
      imageSource: "./testback.jpg",
      gameName: "GTA V",
      metacriticScore: 82,
      platforms: ["playstation", "xbox"],
      buttonType: "Add",
      id: getUniqueId(),
    },
    {
      imageAlt: "test",
      imageSource: "./testback.jpg",
      gameName: "Portal",
      metacriticScore: 85,
      platforms: ["playstation", "xbox"],
      buttonType: "Add",
      id: getUniqueId(),
    },
    {
      imageAlt: "test",
      imageSource: "./testback.jpg",
      gameName: "Alan Wake 2",
      metacriticScore: 88,
      platforms: ["playstation", "xbox"],
      buttonType: "Add",
      id: getUniqueId(),
    },
    {
      imageAlt: "test",
      imageSource: "./testback.jpg",
      gameName: "Rainbow Six Siege",
      metacriticScore: 30,
      platforms: ["playstation", "xbox"],
      buttonType: "Add",
      id: getUniqueId(),
    },
    {
      imageAlt: "test",
      imageSource: "./testback.jpg",
      gameName: "Forza Horizon 5",
      metacriticScore: 56,
      platforms: ["playstation", "xbox"],
      buttonType: "Add",
      id: getUniqueId(),
    },
    {
      imageAlt: "test",
      imageSource: "./testback.jpg",
      gameName: "Alan Wake 1",
      metacriticScore: 99,
      platforms: ["playstation", "xbox"],
      buttonType: "Add",
      id: getUniqueId(),
    },
    {
      imageAlt: "test",
      imageSource: "./testback.jpg",
      gameName: "Control",
      metacriticScore: 55,
      platforms: ["playstation", "xbox"],
      buttonType: "Add",
      id: getUniqueId(),
    },
    {
      imageAlt: "test",
      imageSource: "./testback.jpg",
      gameName: "GTA VI",
      metacriticScore: 32,
      platforms: ["playstation", "xbox"],
      buttonType: "Add",
      id: getUniqueId(),
    },
  ]);
  //*************************************************PLAYING***********************************************
  const [playingList, setPlayingList] = useState([
    {
      imageAlt: "test",
      imageSource: "./testback.jpg",
      gameName: "Metro Exodus 2023",
      metacriticScore: 18,
      platforms: ["playstation", "xbox"],
      buttonType: "Add",
      id: getUniqueId(),
    },
    {
      imageAlt: "test",
      imageSource: "./testback.jpg",
      gameName: "GTA V",
      metacriticScore: 82,
      platforms: ["playstation", "xbox"],
      buttonType: "Add",
      id: getUniqueId(),
    },
    {
      imageAlt: "test",
      imageSource: "./testback.jpg",
      gameName: "Portal",
      metacriticScore: 85,
      platforms: ["playstation", "xbox"],
      buttonType: "Add",
      id: getUniqueId(),
    },
    {
      imageAlt: "test",
      imageSource: "./testback.jpg",
      gameName: "Alan Wake 2",
      metacriticScore: 88,
      platforms: ["playstation", "xbox"],
      buttonType: "Add",
      id: getUniqueId(),
    },
    {
      imageAlt: "test",
      imageSource: "./testback.jpg",
      gameName: "Rainbow Six Siege",
      metacriticScore: 30,
      platforms: ["playstation", "xbox"],
      buttonType: "Add",
      id: getUniqueId(),
    },
    {
      imageAlt: "test",
      imageSource: "./testback.jpg",
      gameName: "Forza Horizon 5",
      metacriticScore: 56,
      platforms: ["playstation", "xbox"],
      buttonType: "Add",
      id: getUniqueId(),
    },
    {
      imageAlt: "test",
      imageSource: "./testback.jpg",
      gameName: "Alan Wake 1",
      metacriticScore: 99,
      platforms: ["playstation", "xbox"],
      buttonType: "Add",
      id: getUniqueId(),
    },
    {
      imageAlt: "Kill Zone",
      imageSource: "./testback.jpg",
      gameName: "Kill Zone",
      metacriticScore: 55,
      platforms: ["playstation", "xbox"],
      buttonType: "Add",
      id: getUniqueId(),
    },
  ]);
  //*************************************************PLAYED***********************************************
  const [playedList, setPlayedList] = useState([
    {
      imageAlt: "test",
      imageSource: "./testback.jpg",
      gameName: "Metro Exodus 2023",
      metacriticScore: 18,
      platforms: ["playstation", "xbox"],
      buttonType: "Add",
      id: getUniqueId(),
    },
    {
      imageAlt: "test",
      imageSource: "./testback.jpg",
      gameName: "GTA V",
      metacriticScore: 82,
      platforms: ["playstation", "xbox"],
      buttonType: "Add",
      id: getUniqueId(),
    },
    {
      imageAlt: "test",
      imageSource: "./testback.jpg",
      gameName: "Portal",
      metacriticScore: 85,
      platforms: ["playstation", "xbox"],
      buttonType: "Add",
      id: getUniqueId(),
    },
    {
      imageAlt: "test",
      imageSource: "./testback.jpg",
      gameName: "Alan Wake 2",
      metacriticScore: 88,
      platforms: ["playstation", "xbox"],
      buttonType: "Add",
      id: getUniqueId(),
    },
    {
      imageAlt: "test",
      imageSource: "./testback.jpg",
      gameName: "Rainbow Six Siege",
      metacriticScore: 30,
      platforms: ["playstation", "xbox"],
      buttonType: "Add",
      id: getUniqueId(),
    },
    {
      imageAlt: "test",
      imageSource: "./testback.jpg",
      gameName: "Forza Horizon 5",
      metacriticScore: 56,
      platforms: ["playstation", "xbox"],
      buttonType: "Add",
      id: getUniqueId(),
    },
    {
      imageAlt: "Farm Together",
      imageSource: "./testback.jpg",
      gameName: "Farm Together",
      metacriticScore: 99,
      platforms: ["playstation", "xbox"],
      buttonType: "Add",
      id: getUniqueId(),
    },
  ]);
  function getItemById(idToFind, items) {
    return items.find((item) => item.id === idToFind);
  }
  const handleClose = (value: string) => {
    setOpen(false);
    setDialogValue(value);

    if (value === "toplay") {
      const item = getItemById(itemId, playedList);

      console.log("added item to To Play page");
    }
    if (value === "playing") {
      console.log("added item to Playing page");
    }
    if (value === "played") {
      console.log("added item to Played page");
    }
  };

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

          <DialogBox data={{ open, dialogValue, handleClose }} />
          <Routes>
            <Route path={"searchpage"} element={<SearchPage />}></Route>
            <Route
              path={"toplaypage"}
              element={
                <ToPlayPage
                  handleLocalSearch={handleLocalSearch}
                  toPlayList={toPlayList}
                />
              }
            ></Route>
            <Route
              path={"playingpage"}
              element={
                <PlayingPage
                  handleLocalSearch={handleLocalSearch}
                  playingList={playingList}
                />
              }
            ></Route>
            <Route
              path={"playedpage"}
              element={
                <PlayedPage
                  handleLocalSearch={handleLocalSearch}
                  playedList={playedList}
                />
              }
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
