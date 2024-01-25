import LibraryContent from "../components/LibraryContent";
import { useState } from "react";

function ToPlayPage({ handleLocalSearch }) {
  let id = 0;
  function getUniqueId(): string {
    return id++ + "";
  }

  const [playedList, setPlayedList] = useState([
    {
      imageAlt: "test",
      imageSource: "./testback.jpg",
      gameName: "Metro Exodus 2023",
      metacriticScore: 18,
      platforms: ["playstation", "xbox"],
      buttonType: "Add",
      id: getUniqueId(),
    },
    {
      imageAlt: "test",
      imageSource: "./testback.jpg",
      gameName: "GTA V",
      metacriticScore: 82,
      platforms: ["playstation", "xbox"],
      buttonType: "Add",
      id: getUniqueId(),
    },
    {
      imageAlt: "test",
      imageSource: "./testback.jpg",
      gameName: "Portal",
      metacriticScore: 85,
      platforms: ["playstation", "xbox"],
      buttonType: "Add",
      id: getUniqueId(),
    },
    {
      imageAlt: "test",
      imageSource: "./testback.jpg",
      gameName: "Alan Wake 2",
      metacriticScore: 88,
      platforms: ["playstation", "xbox"],
      buttonType: "Add",
      id: getUniqueId(),
    },
    {
      imageAlt: "test",
      imageSource: "./testback.jpg",
      gameName: "Rainbow Six Siege",
      metacriticScore: 30,
      platforms: ["playstation", "xbox"],
      buttonType: "Add",
      id: getUniqueId(),
    },
    {
      imageAlt: "test",
      imageSource: "./testback.jpg",
      gameName: "Forza Horizon 5",
      metacriticScore: 56,
      platforms: ["playstation", "xbox"],
      buttonType: "Add",
      id: getUniqueId(),
    },
    {
      imageAlt: "Farm Together",
      imageSource: "./testback.jpg",
      gameName: "Farm Together",
      metacriticScore: 99,
      platforms: ["playstation", "xbox"],
      buttonType: "Add",
      id: getUniqueId(),
    },
  ]);
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
