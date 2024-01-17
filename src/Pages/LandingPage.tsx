import Item, { ItemInputDataModel } from "../components/Item";
import SwiperItemContainer from "../components/SwiperItemContainer";

function LandingPage() {
  const landingPageHeadline = ["Popular", "Top Games"];

  const gameList: ItemInputDataModel[] = [
    {
      imageAlt: "test",
      imageSource: "./testback.jpg",
      gameName: "Metro Exodus 2023",
      metacriticScore: 88,
      platforms: ["playstation", "xbox"],
      buttonType: "Add",
    },
    {
      imageAlt: "test",
      imageSource: "./testback.jpg",
      gameName: "GTA V",
      metacriticScore: 88,
      platforms: ["playstation", "xbox"],
      buttonType: "Add",
    },
    {
      imageAlt: "test",
      imageSource: "./testback.jpg",
      gameName: "Portal",
      metacriticScore: 88,
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
  ];
  return (
    <div className={"bg-amber-300 container mx-auto"}>
      <SwiperItemContainer
        headline={landingPageHeadline[0]}
        gameList={gameList}
      />
      <SwiperItemContainer
        headline={landingPageHeadline[1]}
        gameList={gameList}
      />
    </div>
  );
}

export default LandingPage;
