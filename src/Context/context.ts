import { createContext, useContext } from "react";

export const SetOpenContext = createContext<
  React.Dispatch<React.SetStateAction<boolean>> | undefined
>(undefined);

export function useUserContext(context: any) {
  const setOpen = useContext(context);
  if (setOpen === undefined) {
    throw new Error("set open undefined");
  }
  return setOpen;
}
