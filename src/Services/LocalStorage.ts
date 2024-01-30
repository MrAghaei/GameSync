import { ItemInputDataModel } from "../components/Item";

// export function setGamesToStorage(
//   key: string,
//   value: ItemInputDataModel[],
// ): void {
//   localStorage.setItem(key, JSON.stringify(value));
// }
// export function getGamesFromStorage(key: string): ItemInputDataModel[] {
//   const storedItems = localStorage.getItem(key);
//   return storedItems ? JSON.parse(storedItems) : [];
// }
export function setGameIdsToLocalStorage(key: string, ids: string[]): void {
  localStorage.setItem(key, JSON.stringify(ids));
}
export function getGameIdsFromStorage(key: string): string[] {
  const storedIds = localStorage.getItem(key);
  return storedIds ? JSON.parse(storedIds) : [];
}
