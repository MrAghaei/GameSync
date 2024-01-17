function Item() {
  let imageAlt;
  let imageSource = "./testback.jpg";
  let gameName = "Metro Exodus 2023";
  let metacriticScore = 88;
  return (
    <div
      className={
        "bg-slate-800 w-80 h-96 rounded-md flex flex-col overflow-hidden"
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
        className={"bg-black-secondary  w-full h-full p-3 flex flex-col gap-4"}
      >
        <div className={"flex gap-36"}>
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
          <p className={""}>logo</p>
        </div>
        <h3 className={"font-bold text-2xl text-text-white"}>{gameName}</h3>
      </div>
    </div>
  );
}

export default Item;
