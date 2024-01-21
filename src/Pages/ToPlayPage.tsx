import { useState } from "react";
import Item from "../components/Item";

import SecondarySearchBar from "../components/SecondarySearchBar";

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
  return (
    <div className={"bg-gray-dark"}>
      <SecondarySearchBar data={handleLocalSearch}></SecondarySearchBar>
      <div
        className={
          "bg-gray-dark container w-full h-auto grid grid-cols-4 grid-rows-4 gap-10 p-8"
        }
      >
        {toPlayList.map((item) => (
          <div key={item.gameName}>
            <Item data={item} key={item.gameName} />
          </div>
        ))}

        <div>test</div>
      </div>
    </div>
  );
}

export default ToPlayPage;
