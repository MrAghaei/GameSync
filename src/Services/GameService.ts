import { useState } from "react";
import { ItemInputDataModel } from "../components/Item";
import { toPlayGames } from "../mock/Game";
import { PageType } from "../models/PageType";

export function transferItemFromToPlayPage(
  gameId: string,
  destinationPage: PageType,
): void {
  console.log(gameId);
  console.log(destinationPage);
  //remove item from the previous list
  toPlayGames;
  // add item to the new list
}

export function fetchToPlayGames(): ItemInputDataModel[] {
  return Promise.resolve(toPlayGames);
}
