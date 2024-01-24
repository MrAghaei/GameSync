import { SetOpenContext, useUserContext } from "../Context/context";
import useOpenDialog from "../hooks/useOpenDialog";

interface ButtonInputDataModel {
  buttonType: string;
}
interface ButtonInputModel {
  data: ButtonInputDataModel;
}
function Button(data: ButtonInputModel) {
  const handleOpenDialog = useOpenDialog();
  return (
    <div
      className={
        " bg-purple flex items-center h-full gap-4 justify-center cursor-pointer"
      }
      onClick={handleOpenDialog}
    >
      <img
        src={`./${data.data.buttonType}.svg`}
        className={"size-6 inline items-center cursor-pointer"}
      />
      <button className={"bg-purple max-w-12 h-full text-white text-xl"}>
        {data.data.buttonType}
      </button>
    </div>
  );
}

export default Button;
