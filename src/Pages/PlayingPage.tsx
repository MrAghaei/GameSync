import React, { useEffect, useState } from "react";
import LibraryContent from "../components/LibraryContent";
import {
  fetchPlayingGames,
  fetchToPlayGames,
  transferItemFromPlayingPage,
  transferItemFromToPlayPage,
} from "../Services/GameService";
import DialogBox from "../components/DialogBox";
import { PageType } from "../models/PageType";
import { getGameIdsFromStorage } from "../Services/LocalStorage";
import { ItemInputDataModel } from "../components/Item";

function PlayingPage({ handleLocalSearch }) {
  const title = "Playing";

  const [open, setOpen] = useState(false);
  const [currentGameId, setCurrentGameId] = useState("");
  const [dialogValue, setDialogValue] = useState("");
  const [gameIds, setGameIds] = useState(() =>
    getGameIdsFromStorage("playingpage"),
  );
  const [gameItems, setGameItems] = useState([] as ItemInputDataModel[]);
  useEffect(() => {
    const fetchdata = async () => {
      const items = await fetchPlayingGames();
      setGameItems(items);
    };
    fetchdata();
  }, [gameIds]);

  const handleClose = (value?: PageType) => {
    setOpen(false);
    if (!value) return;
    setDialogValue(value);
    transferItemFromPlayingPage(currentGameId, value);

    setGameIds(getGameIdsFromStorage("playingpage"));
  };

  const handleOpenDialog = (gameId: string) => {
    setCurrentGameId(gameId);
    setOpen(true);
  };

  return (
    <>
      <DialogBox data={{ open, dialogValue, handleClose }} />
      <LibraryContent
        data={{
          handleLocalSearch,
          pageTitle: title,
          gameList: gameItems,
        }}
        handleOpenDialog={handleOpenDialog}
      />
    </>
  );
}

export default PlayingPage;
