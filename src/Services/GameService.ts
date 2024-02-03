import { ItemInputDataModel } from "../components/Item";
import { games } from "../mock/Games";
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
  const storedToPlayGamesIds = getGameIdsFromStorage(PageType.TO_PLAY);

  const idToRemove = storedToPlayGamesIds.find((id) => id === gameId);
  if (idToRemove === undefined) return;

  const updatedToPlayGames = storedToPlayGamesIds.filter((item) => {
    return item !== gameId;
  });
  setGameIdsToLocalStorage(PageType.TO_PLAY, updatedToPlayGames);

  // add item to the new list
  if (destinationPage === PageType.PLAYING) {
    const storedPlayingGamesIds = getGameIdsFromStorage(PageType.PLAYING);
    const updatedPlayingGamesIds = [...storedPlayingGamesIds, idToRemove];
    setGameIdsToLocalStorage(PageType.PLAYING, updatedPlayingGamesIds);
  } else if (destinationPage === PageType.PLAYED) {
    const storedPlayedGamesIds = getGameIdsFromStorage(PageType.PLAYED);
    const updatedPlayedGamesIds = [...storedPlayedGamesIds, idToRemove];
    setGameIdsToLocalStorage(PageType.PLAYED, updatedPlayedGamesIds);
  } else if (destinationPage === PageType.DELETE) {
    const idToRemove = storedToPlayGamesIds.find((id) => id === gameId);
    if (idToRemove === undefined) return;
    const updatedToPlayGames = storedToPlayGamesIds.filter((item) => {
      return item !== gameId;
    });
    setGameIdsToLocalStorage(PageType.TO_PLAY, updatedToPlayGames);
  }
}
export function transferItemFromPlayingPage(
  gameId: string,
  destinationPage: string,
): void {
  const storedPlayingGamesIds = getGameIdsFromStorage(PageType.PLAYING);

  const idToRemove = storedPlayingGamesIds.find((id) => id === gameId);
  if (idToRemove === undefined) return;

  const updatedPlayingGames = storedPlayingGamesIds.filter((item) => {
    return item !== gameId;
  });
  setGameIdsToLocalStorage(PageType.PLAYING, updatedPlayingGames);

  // add item to the new list
  if (destinationPage === PageType.TO_PLAY) {
    const storedToPlayGamesIds = getGameIdsFromStorage(PageType.TO_PLAY);
    const updatedToPlayGamesIds = [...storedToPlayGamesIds, idToRemove];
    setGameIdsToLocalStorage(PageType.TO_PLAY, updatedToPlayGamesIds);
  } else if (destinationPage === PageType.PLAYED) {
    const storedPlayedGamesIds = getGameIdsFromStorage(PageType.PLAYED);
    const updatedPlayedGamesIds = [...storedPlayedGamesIds, idToRemove];
    setGameIdsToLocalStorage(PageType.PLAYED, updatedPlayedGamesIds);
  } else if (destinationPage === PageType.DELETE) {
    const idToRemove = storedPlayingGamesIds.find((id) => id === gameId);
    if (idToRemove === undefined) return;
    const updatedToPlayGames = storedPlayingGamesIds.filter((item) => {
      return item !== gameId;
    });
    setGameIdsToLocalStorage(PageType.PLAYING, updatedToPlayGames);
  }
}
export function transferItemFromPlayedPage(
  gameId: string,
  destinationPage: string,
): void {
  const storedPlayedGamesIds = getGameIdsFromStorage(PageType.PLAYED);

  const idToRemove = storedPlayedGamesIds.find((id) => id === gameId);
  if (idToRemove === undefined) return;

  const updatedPlayedGames = storedPlayedGamesIds.filter((item) => {
    return item !== gameId;
  });

  setGameIdsToLocalStorage(PageType.PLAYED, updatedPlayedGames);

  // add item to the new list
  if (destinationPage === PageType.PLAYING) {
    const storedPlayingGamesIds = getGameIdsFromStorage(PageType.PLAYING);
    const updatedPlayingGamesIds = [...storedPlayingGamesIds, idToRemove];
    setGameIdsToLocalStorage(PageType.PLAYING, updatedPlayingGamesIds);
  } else if (destinationPage === PageType.TO_PLAY) {
    const storedToPlayGamesIds = getGameIdsFromStorage(PageType.TO_PLAY);
    const updatedToPlayGamesIds = [...storedToPlayGamesIds, idToRemove];
    setGameIdsToLocalStorage(PageType.TO_PLAY, updatedToPlayGamesIds);
  } else if (destinationPage === PageType.DELETE) {
    const idToRemove = storedPlayedGamesIds.find((id) => id === gameId);
    if (idToRemove === undefined) return;
    const updatedToPlayGames = storedPlayedGamesIds.filter((item) => {
      return item !== gameId;
    });
    setGameIdsToLocalStorage(PageType.PLAYING, updatedToPlayGames);
  }
}
export function transferItemFromLandingPage(
  gameId: string,
  destinationPage: string,
): void {
  const idToRemove = games.find((item) => item.id === gameId);
  if (idToRemove === undefined) return;

  // add item to the new list
  if (destinationPage === PageType.PLAYING) {
    const storedPlayingGamesIds = getGameIdsFromStorage(PageType.PLAYING);
    const updatedPlayingGamesIds = [...storedPlayingGamesIds, idToRemove.id];
    setGameIdsToLocalStorage(PageType.PLAYING, updatedPlayingGamesIds);
  } else if (destinationPage === PageType.TO_PLAY) {
    const storedToPlayGamesIds = getGameIdsFromStorage(PageType.TO_PLAY);
    const updatedToPlayGamesIds = [...storedToPlayGamesIds, idToRemove.id];
    setGameIdsToLocalStorage(PageType.TO_PLAY, updatedToPlayGamesIds);
  } else if (destinationPage === PageType.PLAYED) {
    const storedPlayedGamesIds = getGameIdsFromStorage(PageType.PLAYED);
    const updatedPlayedGamesIds = [...storedPlayedGamesIds, idToRemove.id];
    setGameIdsToLocalStorage(PageType.PLAYED, updatedPlayedGamesIds);
  }
}
export function fetchToPlayGames(): Promise<ItemInputDataModel[]> {
  const storedToPlayGamesIds = getGameIdsFromStorage(PageType.TO_PLAY);
  const filteredItems = games.filter((item) =>
    storedToPlayGamesIds.includes(item.id),
  );

  return Promise.resolve(filteredItems);
}
export function fetchPlayingGames(): Promise<ItemInputDataModel[]> {
  const storedPlayingIds = getGameIdsFromStorage(PageType.PLAYING);
  const filteredItems = games.filter((item) =>
    storedPlayingIds.includes(item.id),
  );

  return Promise.resolve(filteredItems);
}
export function fetchPlayedGames(): Promise<ItemInputDataModel[]> {
  const storePlayedIds = getGameIdsFromStorage(PageType.PLAYED);
  const filteredItems = games.filter((item) =>
    storePlayedIds.includes(item.id),
  );

  return Promise.resolve(filteredItems);
}
export function fetchLandingPageGames(): Promise<ItemInputDataModel[]> {
  return Promise.resolve(games);
}
export function fetchSearchGames(): Promise<ItemInputDataModel[]> {
  return Promise.resolve(games);
}
