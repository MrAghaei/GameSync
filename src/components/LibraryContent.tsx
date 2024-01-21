import { useState } from "react";
import Item from "../components/Item";
import SecondarySearchBar from "../components/SecondarySearchBar";

interface LibraryContentInputDataModel {
  handleLocalSearch: any;
  gameList: any;
}
interface LibraryContentInputModel {
  data: LibraryContentInputDataModel;
}
function LibraryContent(data: LibraryContentInputModel) {
  return (
    <div className={"bg-gray-dark"}>
      <SecondarySearchBar
        data={data.data.handleLocalSearch}
      ></SecondarySearchBar>
      <div
        className={
          "bg-gray-dark container w-full h-auto grid grid-cols-4 grid-rows-4 gap-10 p-8"
        }
      >
        {data.data.gameList.map((item) => (
          <div key={item.gameName}>
            <Item data={item} key={item.gameName} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LibraryContent;
