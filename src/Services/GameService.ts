import { ItemInputDataModel } from "../components/Item";
import { games, playedGames, playingGames, toPlayGames } from "../mock/Games";
import { PageType } from "../models/PageType";
import {
  getGameIdsFromStorage,
  setGameIdsToLocalStorage,
} from "./LocalStorage";

export function transferItemFromToPlayPage(
  gameId: string,
  destinationPage: PageType,
): void {
  //remove item from the previous list
  const storedToPlayGamesIds = getGameIdsFromStorage("toplaypage");

  const idToRemove = storedToPlayGamesIds.find((id) => id === gameId);
  if (idToRemove === undefined) return;

  const updatedToPlayGames = storedToPlayGamesIds.filter((item) => {
    return item !== gameId;
  });
  setGameIdsToLocalStorage("toplaypage", updatedToPlayGames);

  // add item to the new list
  if (destinationPage === PageType.PLAYING) {
    const storedPlayingGamesIds = getGameIdsFromStorage("playingpage");
    const updatedPlayingGamesIds = [...storedPlayingGamesIds, idToRemove];
    setGameIdsToLocalStorage("playingpage", updatedPlayingGamesIds);
  } else if (destinationPage === PageType.PLAYED) {
    const storedPlayedGamesIds = getGameIdsFromStorage("playedpage");
    const updatedPlayedGamesIds = [...storedPlayedGamesIds, idToRemove];
    setGameIdsToLocalStorage("playedpage", updatedPlayedGamesIds);
  }
}
export function transferItemFromPlayingPage(
  gameId: string,
  destinationPage: string,
): void {
  const storedPlayingGamesIds = getGameIdsFromStorage("playingpage");

  const idToRemove = storedPlayingGamesIds.find((id) => id === gameId);
  if (idToRemove === undefined) return;

  const updatedPlayingGames = storedPlayingGamesIds.filter((item) => {
    return item !== gameId;
  });
  setGameIdsToLocalStorage("playingpage", updatedPlayingGames);

  // add item to the new list
  if (destinationPage === PageType.TO_PLAY) {
    const storedToPlayGamesIds = getGameIdsFromStorage("toplaypage");
    const updatedToPlayGamesIds = [...storedToPlayGamesIds, idToRemove];
    setGameIdsToLocalStorage("toplaypage", updatedToPlayGamesIds);
  } else if (destinationPage === PageType.PLAYED) {
    const storedPlayedGamesIds = getGameIdsFromStorage("playedpage");
    const updatedPlayedGamesIds = [...storedPlayedGamesIds, idToRemove];
    setGameIdsToLocalStorage("playedpage", updatedPlayedGamesIds);
  }
}
export function transferItemFromPlayedPage(
  gameId: string,
  destinationPage: string,
): void {
  const storedPlayedGamesIds = getGameIdsFromStorage("playedpage");

  const idToRemove = storedPlayedGamesIds.find((id) => id === gameId);
  if (idToRemove === undefined) return;

  const updatedPlayedGames = storedPlayedGamesIds.filter((item) => {
    return item !== gameId;
  });

  setGameIdsToLocalStorage("playedpage", updatedPlayedGames);

  // add item to the new list
  if (destinationPage === PageType.PLAYING) {
    const storedPlayingGamesIds = getGameIdsFromStorage("playingpage");
    const updatedPlayingGamesIds = [...storedPlayingGamesIds, idToRemove];
    setGameIdsToLocalStorage("playingpage", updatedPlayingGamesIds);
  } else if (destinationPage === PageType.TO_PLAY) {
    const storedToPlayGamesIds = getGameIdsFromStorage("toplaypage");
    const updatedToPlayGamesIds = [...storedToPlayGamesIds, idToRemove];
    setGameIdsToLocalStorage("toplaypage", updatedToPlayGamesIds);
  }
}
export function transferItemFromLandingPage(
  gameId: string,
  destinationPage: string,
): void {
  // const storedPlayedGamesIds = getGameIdsFromStorage("landingpage");

  const idToRemove = games.find((item) => item.id === gameId);
  if (idToRemove === undefined) return;

  // const updatedPlayedGames = storedPlayedGamesIds.filter((item) => {
  //   return item !== gameId;
  // });

  // add item to the new list
  if (destinationPage === PageType.PLAYING) {
    const storedPlayingGamesIds = getGameIdsFromStorage("playingpage");
    const updatedPlayingGamesIds = [...storedPlayingGamesIds, idToRemove.id];
    setGameIdsToLocalStorage("playingpage", updatedPlayingGamesIds);
  } else if (destinationPage === PageType.TO_PLAY) {
    const storedToPlayGamesIds = getGameIdsFromStorage("toplaypage");
    const updatedToPlayGamesIds = [...storedToPlayGamesIds, idToRemove.id];
    setGameIdsToLocalStorage("toplaypage", updatedToPlayGamesIds);
  } else if (destinationPage === PageType.PLAYED) {
    const storedPlayedGamesIds = getGameIdsFromStorage("playedpage");
    const updatedPlayedGamesIds = [...storedPlayedGamesIds, idToRemove.id];
    setGameIdsToLocalStorage("playedpage", updatedPlayedGamesIds);
  }
}
export function fetchToPlayGames(): Promise<ItemInputDataModel[]> {
  const storedToPlayGamesIds = getGameIdsFromStorage("toplaypage");
  const filteredItems = games.filter((item) =>
    storedToPlayGamesIds.includes(item.id),
  );

  return Promise.resolve(filteredItems);
}
export function fetchPlayingGames(): Promise<ItemInputDataModel[]> {
  const storedPlayingIds = getGameIdsFromStorage("playingpage");
  const filteredItems = games.filter((item) =>
    storedPlayingIds.includes(item.id),
  );

  return Promise.resolve(filteredItems);
}
export function fetchPlayedGames(): Promise<ItemInputDataModel[]> {
  const storePlayedIds = getGameIdsFromStorage("playedpage");
  const filteredItems = games.filter((item) =>
    storePlayedIds.includes(item.id),
  );

  return Promise.resolve(filteredItems);
}
export function fetchLandingPageGames(): Promise<ItemInputDataModel[]> {
  // const storedLandingPage = getGameIdsFromStorage("landingpage");
  // const filteredItems = games.filter((item) =>
  //   storedLandingPage.includes(item.id),
  // );

  return Promise.resolve(games);
}
export function fetchSearchGames(): Promise<ItemInputDataModel[]> {
  return Promise.resolve(games);
}
