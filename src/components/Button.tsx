interface ButtonInputDataModel {
  buttonType: string;
  handleButtonClick: any;
}
interface ButtonInputModel {
  data: ButtonInputDataModel;
}
function Button(data: ButtonInputModel) {
  return (
    <div
      className={
        " bg-purple flex items-center gap-4 justify-center cursor-pointer"
      }
      onClick={data.data.handleButtonClick}
    >
      <img
        src={`./${data.data.buttonType}.svg`}
        className={"size-6 inline items-center cursor-pointer"}
      />
      <button className={"bg-purple max-w-12 h-12 text-white text-xl"}>
        {data.data.buttonType}
      </button>
    </div>
  );
}

export default Button;
