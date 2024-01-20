import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div
      className={
        "bg-black-secondary w-1/3 h-auto flex flex-col text-white gap-8 text-xl p-10"
      }
    >
      <img src={"./logo.png"} />

      <NavLink to={"/landingpage"} className={"flex gap-2 items-center"}>
        <img src={"./home-icon.svg"} className={"size-6"} />
        <p>Home</p>
      </NavLink>
      <NavLink to={"/searchpage"} className={"flex gap-2 items-center"}>
        <img src={"./search-icon.svg"} className={"size-6"} />
        <p>Search</p>
      </NavLink>

      <NavLink to={"/toplaypage"} className={"flex gap-2 items-center"}>
        <img src={"./toplay-icon.svg"} className={"size-6"} />
        <p>To Play</p>
      </NavLink>
      <NavLink to={"/playingpage"} className={"flex gap-2 items-center"}>
        <img src={"./playing-icon.svg"} className={"size-6"} />
        <p>Playing</p>
      </NavLink>
      <NavLink to={"/Played"} className={"flex gap-2 items-center"}>
        <img src={"./played-icon.svg"} className={"size-6"} />
        <p>Played</p>
      </NavLink>
    </div>
  );
}

export default NavBar;
