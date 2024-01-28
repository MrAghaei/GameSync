import { useState } from "react";
import { ItemInputDataModel } from "../components/Item";
import { playedGames, playingGames, toPlayGames } from "../mock/Games";
import { PageType } from "../models/PageType";

export function transferItemFromToPlayPage(
  gameId: string,
  destinationPage: PageType,
): void {
  console.log(gameId);
  console.log(destinationPage);
  //remove item from the previous list

  // add item to the new list
}

export function fetchToPlayGames(): ItemInputDataModel[] {
  return Promise.resolve(toPlayGames);
}
export function fetchPlayingGames(): ItemInputDataModel[] {
  return Promise.resolve(playingGames);
}
export function fetchPlayedGames(): ItemInputDataModel[] {
  return Promise.resolve(playedGames);
}
