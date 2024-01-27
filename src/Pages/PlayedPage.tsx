import LibraryContent from "../components/LibraryContent";
import { useState } from "react";

function ToPlayPage({ handleLocalSearch, playedList }) {
  let id = 0;
  function getUniqueId(): string {
    return id++ + "";
  }

  const playedPageTitle = "Played";
  return (
    <LibraryContent
      data={{
        handleLocalSearch,
        pageTitle: playedPageTitle,
        gameList: playedList,
      }}
    />
  );
}

export default ToPlayPage;
