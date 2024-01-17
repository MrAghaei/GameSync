function Button({ buttonType, handleButtonClick }) {
  return (
    <div
      className={
        " bg-purple flex items-center gap-4 justify-center cursor-pointer"
      }
      onClick={handleButtonClick}
    >
      <img
        src={`./${buttonType}.svg`}
        className={"size-6 inline items-center cursor-pointer"}
      />
      <button className={"bg-purple max-w-12 h-12 text-white text-xl"}>
        {buttonType}
      </button>
    </div>
  );
}

export default Button;
