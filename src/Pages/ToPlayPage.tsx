import React, { useState } from "react";
import LibraryContent from "../components/LibraryContent";
function ToPlayPage({ handleLocalSearch, toPlayList }) {
  const toPlayPageTitle = "To Play";

  return (
    <LibraryContent
      data={{
        handleLocalSearch,
        pageTitle: toPlayPageTitle,
        gameList: toPlayList,
      }}
    />
  );
}

export default ToPlayPage;
