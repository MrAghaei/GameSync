import { ItemInputDataModel } from "../components/Item";

export function setGamesToStorage(
  key: string,
  value: ItemInputDataModel[],
): void {
  localStorage.setItem(key, JSON.stringify(value));
}
export function getGamesFromStorage(key: string): ItemInputDataModel[] {
  const storedItems = localStorage.getItem(key);
  return storedItems ? JSON.parse(storedItems) : [];
}
