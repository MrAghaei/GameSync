import LibraryContent from "../components/LibraryContent";
import { useState } from "react";

function ToPlayPage({ handleLocalSearch }) {
  const [playedList, setPlayedList] = useState([
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
      imageAlt: "Kill Zone",
      imageSource: "./testback.jpg",
      gameName: "Kill Zone",
      metacriticScore: 55,
      platforms: ["playstation", "xbox"],
      buttonType: "Add",
    },
  ]);
  const playingPageTitle = "Playing";
  return (
    <LibraryContent
      data={{
        handleLocalSearch,
        pageTitle: playingPageTitle,
        gameList: playedList,
      }}
    />
  );
}

export default ToPlayPage;
