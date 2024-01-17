import PlatformImages from "./PlatformImages";
import Button from "./Button";

function Item() {
  let imageAlt;
  let imageSource = "./testback.jpg";
  let gameName = "Metro Exodus 2023";
  let metacriticScore = 88;
  let platforms = ["playstation", "xbox"];
  const buttoneType = "Add";
  function handleButtonClick() {
    console.log("button clicked");
  }
  return (
    <div
      className={
        "bg-black-secondary w-80 h-96 rounded-2xl flex flex-col overflow-hidden"
      }
    >
      <div className={"w-full h-1/2  "}>
        <img
          alt={imageAlt}
          src={imageSource}
          className={"object-cover w-full h-full"}
        />
      </div>

      <div
        className={
          "bg-black-secondary  w-full h-44 p-3 flex flex-col gap-4 p-5"
        }
      >
        <div className={"flex gap-36 items-center"}>
          <p
            className={`border-2 inline p-1 w-max rounded ${
              metacriticScore >= 75
                ? "text-green"
                : metacriticScore >= 50
                  ? "text-yellow"
                  : metacriticScore < 50
                    ? "text-red "
                    : ""
            }`}
          >
            {metacriticScore}
          </p>
          <PlatformImages platforms={platforms} />
        </div>
        <h3 className={"font-bold text-2xl text-white"}>{gameName}</h3>
      </div>

      <Button buttonType={buttoneType} handleButtonClick={handleButtonClick} />
    </div>
  );
}

export default Item;
