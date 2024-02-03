import { ItemInputDataModel } from "../components/Item";
import { games } from "../mock/Games";
import { PageType } from "../models/PageType";
import {
  getGameIdsFromStorage,
  setGameIdsToLocalStorage,
} from "./LocalStorage";

function addItemToPage(itemId: string, page: PageType): void {
  const storedDestinationPageIds = getGameIdsFromStorage(page);
  const updatedDestinationPageIds = [...storedDestinationPageIds, itemId];
  setGameIdsToLocalStorage(page, updatedDestinationPageIds);
}
function removeItemFromPage(
  itemId: string,
  page: PageType,
  storedIds: string[],
) {
  const updatedToPlayGames = storedIds.filter((item) => {
    return item !== itemId;
  });
  setGameIdsToLocalStorage(page, updatedToPlayGames);
}
export function transferItem(
  gameId: string,
  source: PageType,
  destinationPage: PageType,
) {
  //remove item from the previous list
  const storeIds = getGameIdsFromStorage(source);
  const idToRemove = storeIds.find((id) => id === gameId);
  if (idToRemove === undefined) return; //TODO make this show a dialog that data is not updated. refresh your browser
  removeItemFromPage(gameId, destinationPage, storeIds);
  if (destinationPage === PageType.DELETE) return;
  // add item to the new list
  addItemToPage(idToRemove, destinationPage);
}

export function transferItemFromToPlayPage(
  gameId: string,
  destinationPage: PageType,
): void {
  transferItem(gameId, PageType.TO_PLAY, destinationPage);
}
export function transferItemFromPlayingPage(
  gameId: string,
  destinationPage: PageType,
): void {
  transferItem(gameId, PageType.PLAYING, destinationPage);
}
export function transferItemFromPlayedPage(
  gameId: string,
  destinationPage: PageType,
): void {
  transferItem(gameId, PageType.PLAYED, destinationPage);
}
export function transferItemFromLandingPage(
  gameId: string,
  destinationPage: PageType,
): void {
  // add item to the new list
  addItemToPage(gameId, destinationPage);
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
