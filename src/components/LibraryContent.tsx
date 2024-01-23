import { useState } from "react";
import Item from "../components/Item";
import SecondarySearchBar from "../components/SecondarySearchBar";

interface LibraryContentInputDataModel {
  handleLocalSearch: any;
  pageTitle: string;
  gameList: any;
}
interface LibraryContentInputModel {
  data: LibraryContentInputDataModel;
}
function LibraryContent(data: LibraryContentInputModel) {
  return (
    <div className={"bg-gray-dark"}>
      <h2 className={"text-white text-4xl mt-10 ml-10"}>
        {data.data.pageTitle}
      </h2>
      <SecondarySearchBar
        data={data.data.handleLocalSearch}
      ></SecondarySearchBar>
      <div
        className={
          "container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-10 p-4 lg:p-8"
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
