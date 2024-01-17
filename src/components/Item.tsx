function Item() {
  let imageAlt;
  let imageSource = "./testback.jpg";
  let gameName = "Metro Exodus 2023";
  return (
    <div
      className={
        "bg-slate-800 size-96 rounded-md flex flex-col overflow-hidden"
      }
    >
      <div className={"w-full h-1/2  "}>
        <img
          alt={imageAlt}
          src={imageSource}
          className={"object-cover w-full h-full"}
        />
      </div>

      <div className={"bg-slate-700 text-white "}>
        <h3>{gameName}</h3>
      </div>
    </div>
  );
}

export default Item;
