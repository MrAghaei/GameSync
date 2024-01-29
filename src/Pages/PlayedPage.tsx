import React, { useEffect, useState } from "react";
import LibraryContent from "../components/LibraryContent";
import {
  fetchPlayedGames,
  fetchToPlayGames,
  transferItemFromPlayedPage,
  transferItemFromToPlayPage,
} from "../Services/GameService";
import DialogBox from "../components/DialogBox";
import { PageType } from "../models/PageType";
import { getGamesFromStorage } from "../Services/LocalStorage";

function ToPlayPage({ handleLocalSearch }) {
  const toPlayPageTitle = "To Play";

  const [open, setOpen] = React.useState(false);
  const [currentGameId, setCurrentGameId] = React.useState("");
  const [dialogValue, setDialogValue] = React.useState("");
  const [playedGames, setPlayedGames] = useState(
    getGamesFromStorage("playedpage"),
  );
  useEffect(() => {
    const fetchdata = async () => {
      const items = await fetchPlayedGames();
      setPlayedGames(items);
    };
    fetchdata();
  }, []);

  const handleClose = (value?: PageType) => {
    setOpen(false);
    if (!value) return;
    setDialogValue(value);
    transferItemFromPlayedPage(currentGameId, PageType.PLAYED);
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
          pageTitle: toPlayPageTitle,
          gameList: playedGames,
        }}
        handleOpenDialog={handleOpenDialog}
      />
    </>
  );
}

export default ToPlayPage;
