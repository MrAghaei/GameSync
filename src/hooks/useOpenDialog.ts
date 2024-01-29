import { SetOpenContext, useUserContext } from "../Context/context";

export default function useOpenDialog() {
  const setOpen: React.Dispatch<React.SetStateAction<boolean>> =
    useUserContext(SetOpenContext);

  return () => {
    setOpen(true);
  };
}
