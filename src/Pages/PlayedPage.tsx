import React, { useEffect, useState } from "react";
import LibraryContent from "../components/LibraryContent";
import {
  fetchPlayedGames,
  fetchPlayingGames,
  fetchToPlayGames,
  transferItemFromPlayedPage,
  transferItemFromPlayingPage,
  transferItemFromToPlayPage,
} from "../Services/GameService";
import DialogBox from "../components/DialogBox";
import { PageType } from "../models/PageType";
import { getGameIdsFromStorage } from "../Services/LocalStorage";
import { ItemInputDataModel } from "../components/Item";

function PlayedPage({ handleLocalSearch }) {
  const title = "Played";

  const [open, setOpen] = useState(false);
  const [currentGameId, setCurrentGameId] = useState("");
  const [dialogValue, setDialogValue] = useState("");
  const [gameIds, setGameIds] = useState(() =>
    getGameIdsFromStorage(PageType.PLAYED),
  );
  const [gameItems, setGameItems] = useState([] as ItemInputDataModel[]);
  useEffect(() => {
    const fetchdata = async () => {
      const items = await fetchPlayedGames();
      setGameItems(items);
    };
    fetchdata();
  }, [gameIds]);

  const handleClose = (value?: PageType) => {
    setOpen(false);
    if (!value) return;
    setDialogValue(value);
    transferItemFromPlayedPage(currentGameId, value);

    setGameIds(getGameIdsFromStorage(PageType.PLAYED));
  };

  const handleOpenDialog = (gameId: string) => {
    setCurrentGameId(gameId);
    setOpen(true);
  };

  return (
    <>
      <DialogBox
        data={{ open, dialogValue, handleClose, pageType: PageType.PLAYED }}
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

export default PlayedPage;
