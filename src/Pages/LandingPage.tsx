import Item, { ItemInputDataModel } from "../components/Item";
import SwiperItemContainer from "../components/SwiperItemContainer";
import React, { useEffect, useState } from "react";
import {
  fetchLandingPageGames,
  fetchToPlayGames,
  transferItemFromLandingPage,
  transferItemFromToPlayPage,
} from "../Services/GameService";
import DialogBox from "../components/DialogBox";
import { PageType } from "../models/PageType";
import { getGameIdsFromStorage } from "../Services/LocalStorage";

function LandingPage() {
  const landingPageHeadline = ["Popular", "Top Games"];
  const [gameItems, setGameItems] = useState([] as ItemInputDataModel[]);
  const [open, setOpen] = useState(false);
  const [currentGameId, setCurrentGameId] = useState("");
  const [dialogValue, setDialogValue] = useState("");
  const [gameIds, setGameIds] = useState(() =>
    getGameIdsFromStorage("toplaypage"),
  );
  useEffect(() => {
    const fetchdata = async () => {
      const items = await fetchLandingPageGames();
      setGameItems(items);
    };
    fetchdata();
  }, [gameIds]);
  const handleOpenDialog = (gameId: string) => {
    setCurrentGameId(gameId);
    setOpen(true);
  };
  const handleClose = (value?: PageType) => {
    setOpen(false);
    if (!value) return;
    setDialogValue(value);
    transferItemFromLandingPage(currentGameId, value);
    setGameIds(getGameIdsFromStorage("landingpage"));
  };
  return (
    <div className={"bg-gray-dark p-10 flex flex-col gap-10"}>
      <DialogBox data={{ open, dialogValue, handleClose }} />
      <SwiperItemContainer
        data={{ headline: landingPageHeadline[0], gameList: gameItems }}
        handleOpenDialog={handleOpenDialog}
      />
      <SwiperItemContainer
        data={{ headline: landingPageHeadline[1], gameList: gameItems }}
        handleOpenDialog={handleOpenDialog}
      />
    </div>
  );
}

export default LandingPage;
