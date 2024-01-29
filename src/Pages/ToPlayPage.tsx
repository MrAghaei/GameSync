import React, { useEffect, useState } from "react";
import LibraryContent from "../components/LibraryContent";
import {
  fetchToPlayGames,
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
  const [toPlayItems, setToPlayItems] = useState(
    getGamesFromStorage("toplaypage"),
  );
  useEffect(() => {
    const fetchdata = async () => {
      const items = await fetchToPlayGames();
      setToPlayItems(items);
    };
    fetchdata();
  }, []);

  const handleClose = (value?: PageType) => {
    setOpen(false);
    if (!value) return;
    setDialogValue(value);
    transferItemFromToPlayPage(currentGameId, value);
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
          gameList: toPlayItems,
        }}
        handleOpenDialog={handleOpenDialog}
      />
    </>
  );
}

export default ToPlayPage;
