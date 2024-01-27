import { SetOpenContext, useUserContext } from "../Context/context";
import { getItemId } from "../App";

export default function useOpenDialog(id: string) {
  const setOpen: React.Dispatch<React.SetStateAction<boolean>> =
    useUserContext(SetOpenContext);
  getItemId(id);
  return () => {
    setOpen(true);
  };
}
