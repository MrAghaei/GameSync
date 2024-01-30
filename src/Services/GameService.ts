import { ItemInputDataModel } from "../components/Item";
import { playedGames, playingGames, toPlayGames } from "../mock/Games";
import { PageType } from "../models/PageType";
import { getGamesFromStorage, setGamesToStorage } from "./LocalStorage";

export function transferItemFromToPlayPage(
  gameId: string,
  destinationPage: PageType,
): void {
  //remove item from the previous list
  const storedToPlayGames = getGamesFromStorage("toplaypage");
  const itemToRemove = storedToPlayGames.find((item) => item.id === gameId);
  const updatedToPlayGames = storedToPlayGames.filter((item) => {
    console.log(item);
    return item.id !== gameId;
  });
  console.log(gameId);
  console.log(updatedToPlayGames);
  setGamesToStorage("toplaypage", updatedToPlayGames);

  // add item to the new list
  if (destinationPage === PageType.PLAYING) {
    const storedPlayingGames = getGamesFromStorage("playingpage");
    const updatedPlayingGames = [...storedPlayingGames, itemToRemove];
    console.log(updatedPlayingGames);
    setGamesToStorage("playingpage", updatedPlayingGames);
  } else if (destinationPage === PageType.PLAYED) {
    const updatedPlayedGames = [...playedGames, itemToRemove];
    console.log(updatedPlayedGames);
    setGamesToStorage("playedpage", updatedPlayedGames);
  }
}
export function transferItemFromPlayingPage(
  gameId: string,
  destinationPage: string,
): void {
  //remove item from the previous list
  // add item to the new list
}
export function transferItemFromPlayedPage(
  gameId: string,
  destinationPage: string,
): void {
  //remove item from the previous list
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
