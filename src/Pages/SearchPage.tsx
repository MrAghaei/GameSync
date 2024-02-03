import { PageType } from "../models/PageType";
import DialogBox from "../components/DialogBox";
import React, { useState } from "react";
import { transferItemFromLandingPage } from "../Services/GameService";
import { ItemInputDataModel } from "../components/Item";

function SearchPage() {
  const landingPageHeadline = ["Popular", "Top Games"];
  const [gameItems, setGameItems] = useState([] as ItemInputDataModel[]);
  const [open, setOpen] = useState(false);
  const [currentGameId, setCurrentGameId] = useState("");
  const [dialogValue, setDialogValue] = useState("");
  const handleOpenDialog = (gameId: string) => {
    setCurrentGameId(gameId);
    setOpen(true);
  };
  const handleClose = (value?: PageType) => {
    setOpen(false);
    if (!value) return;
    setDialogValue(value);
    transferItemFromLandingPage(currentGameId, value);
    // setGameIds(getGameIdsFromStorage("landingpage"));
  };
  return (
    <div>
      <DialogBox
        data={{ open, dialogValue, handleClose, pageType: PageType.SEARCH }}
      />
    </div>
  );
}

export default SearchPage;
