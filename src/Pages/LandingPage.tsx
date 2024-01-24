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
    <div className={"bg-gray-dark p-10 flex flex-col gap-10"}>
      <SwiperItemContainer
        data={{ headline: landingPageHeadline[0], gameList }}
      />
      <SwiperItemContainer
        data={{ headline: landingPageHeadline[1], gameList }}
      />
    </div>
  );
}

export default LandingPage;
