import React, { useEffect, useState } from "react";
import LibraryContent from "../components/LibraryContent";
import {
  fetchToPlayGames,
  transferItemFromToPlayPage,
} from "../Services/GameService";
import DialogBox from "../components/DialogBox";
import { PageType } from "../models/PageType";

function ToPlayPage({ handleLocalSearch }) {
  const toPlayPageTitle = "To Play";

  const [open, setOpen] = React.useState(false);
  const [currentGameId, setCurrentGameId] = React.useState("");
  const [dialogValue, setDialogValue] = React.useState("");
  const [toPlayItems, setToPlayItems] = useState([]);
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
    transferItemFromToPlayPage(currentGameId, PageType.TO_PLAY);
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
