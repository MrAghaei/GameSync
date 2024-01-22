import PlatformImages from "./PlatformImages";
import Button from "./Button";
export interface ItemInputDataModel {
  imageAlt: string;
  imageSource: string;
  gameName: string;
  metacriticScore: number;
  platforms: string[];
  buttonType: string;
}

export interface ItemInputModel {
  data: ItemInputDataModel;
}

function Item(data: ItemInputModel) {
  return (
    <div className="bg-black-secondary max-w-full md:max-w-72 h-auto md:h-96 rounded-2xl flex flex-col overflow-hidden">
      <div className="w-full h-1/2">
        <img
          alt={data.data.imageAlt}
          src={data.data.imageSource}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="bg-black-secondary w-full h-auto md:h-44 p-3 flex flex-col gap-4 p-5">
        <div className="flex flex-col sm:flex-row gap-4 md:items-center">
          <p
            className={`border-2 inline p-1 w-max rounded ${
              data.data.metacriticScore >= 75
                ? "text-green"
                : data.data.metacriticScore >= 50
                  ? "text-yellow"
                  : "text-red"
            }`}
          >
            {data.data.metacriticScore}
          </p>
          <PlatformImages data={{ platforms: data.data.platforms }} />
        </div>
        <h3 className="font-bold text-2xl text-white">{data.data.gameName}</h3>
      </div>

      <Button data={{ buttonType: data.data.buttonType }} />
    </div>
  );
}

export default Item;
