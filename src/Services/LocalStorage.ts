import { ItemInputDataModel } from "../components/Item";

export function setGamesToStorage(key: string, value: ItemInputDataModel[]) {
  localStorage.setItem(key, JSON.stringify(value));
}
export function getGamesFromStorage(key: string) {
  const storedItems = localStorage.getItem(key);
  return storedItems ? JSON.parse(storedItems) : null;
}
