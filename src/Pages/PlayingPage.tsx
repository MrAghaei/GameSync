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

function ToPlayPage({ handleLocalSearch }) {
  const toPlayPageTitle = "To Play";

  const [open, setOpen] = React.useState(false);
  const [currentGameId, setCurrentGameId] = React.useState("");
  const [dialogValue, setDialogValue] = React.useState("");
  const [playingGames, setPlayingGames] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const items = await fetchPlayingGames();
      setPlayingGames(items);
    };
    fetchdata();
  }, []);

  const handleClose = (value?: PageType) => {
    setOpen(false);
    if (!value) return;
    setDialogValue(value);
    transferItemFromPlayingPage(currentGameId, PageType.PLAYING);
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
          gameList: playingGames,
        }}
        handleOpenDialog={handleOpenDialog}
      />
    </>
  );
}

export default ToPlayPage;
