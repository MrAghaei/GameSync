import LibraryContent from "../components/LibraryContent";
import { useState } from "react";

function ToPlayPage({ handleLocalSearch, playingList }) {
  let id = 0;
  function getUniqueId(): string {
    return id++ + "";
  }

  const playingPageTitle = "Playing";
  return (
    <LibraryContent
      data={{
        handleLocalSearch,
        pageTitle: playingPageTitle,
        gameList: playingList,
      }}
    />
  );
}

export default ToPlayPage;
