import React, { useState } from "react";
import LibraryContent from "../components/LibraryContent";
function ToPlayPage({ handleLocalSearch }) {
  const [toPlayList, setToPlayList] = useState([
    {
      imageAlt: "test",
      imageSource: "./testback.jpg",
      gameName: "Metro Exodus 2023",
      metacriticScore: 18,
      platforms: ["playstation", "xbox"],
      buttonType: "Add",
    },
    {
      imageAlt: "test",
      imageSource: "./testback.jpg",
      gameName: "GTA V",
      metacriticScore: 82,
      platforms: ["playstation", "xbox"],
      buttonType: "Add",
    },
    {
      imageAlt: "test",
      imageSource: "./testback.jpg",
      gameName: "Portal",
      metacriticScore: 85,
      platforms: ["playstation", "xbox"],
      buttonType: "Add",
    },
    {
      imageAlt: "test",
      imageSource: "./testback.jpg",
      gameName: "Alan Wake 2",
      metacriticScore: 88,
      platforms: ["playstation", "xbox"],
      buttonType: "Add",
    },
    {
      imageAlt: "test",
      imageSource: "./testback.jpg",
      gameName: "Rainbow Six Siege",
      metacriticScore: 30,
      platforms: ["playstation", "xbox"],
      buttonType: "Add",
    },
    {
      imageAlt: "test",
      imageSource: "./testback.jpg",
      gameName: "Forza Horizon 5",
      metacriticScore: 56,
      platforms: ["playstation", "xbox"],
      buttonType: "Add",
    },
    {
      imageAlt: "test",
      imageSource: "./testback.jpg",
      gameName: "Alan Wake 1",
      metacriticScore: 99,
      platforms: ["playstation", "xbox"],
      buttonType: "Add",
    },
    {
      imageAlt: "test",
      imageSource: "./testback.jpg",
      gameName: "Control",
      metacriticScore: 55,
      platforms: ["playstation", "xbox"],
      buttonType: "Add",
    },
    {
      imageAlt: "test",
      imageSource: "./testback.jpg",
      gameName: "GTA VI",
      metacriticScore: 32,
      platforms: ["playstation", "xbox"],
      buttonType: "Add",
    },
  ]);
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
