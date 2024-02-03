import React, { useEffect, useState } from "react";
import LibraryContent from "../components/LibraryContent";
import {
  fetchToPlayGames,
  transferItemFromToPlayPage,
} from "../Services/GameService";
import DialogBox from "../components/DialogBox";
import { PageType } from "../models/PageType";
import { getGameIdsFromStorage } from "../Services/LocalStorage";
import { ItemInputDataModel } from "../components/Item";

function ToPlayPage({ handleLocalSearch }) {
  const title = "To Play";

  const [open, setOpen] = useState(false);
  const [currentGameId, setCurrentGameId] = useState("");
  const [dialogValue, setDialogValue] = useState("");
  const [gameIds, setGameIds] = useState(() =>
    getGameIdsFromStorage("toplaypage"),
  );
  const [gameItems, setGameItems] = useState([] as ItemInputDataModel[]);
  useEffect(() => {
    const fetchdata = async () => {
      const items = await fetchToPlayGames();
      setGameItems(items);
    };
    fetchdata();
  }, [gameIds]);

  const handleClose = (value?: PageType) => {
    setOpen(false);
    if (!value) return;
    setDialogValue(value);
    transferItemFromToPlayPage(currentGameId, value);

    setGameIds(getGameIdsFromStorage("toplaypage"));
  };

  const handleOpenDialog = (gameId: string) => {
    setCurrentGameId(gameId);
    setOpen(true);
  };

  return (
    <>
      <DialogBox
        data={{ open, dialogValue, handleClose, pageType: PageType.TO_PLAY }}
      />
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

export default ToPlayPage;
