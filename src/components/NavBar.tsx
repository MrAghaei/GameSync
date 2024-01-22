import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div
      className={
        "bg-black-secondary w-60 h-auto flex flex-col text-white gap-8 text-xl p-10 "
      }
    >
      <img src={"./logo.png"} />

      <NavLink
        to={"/landingpage"}
        className={({ isActive, isTransitioning }) =>
          [
            "flex gap-2 items-center ",
            isActive ? "text-purple" : "",
            isTransitioning ? "text-white" : "",
          ].join(" ")
        }
      >
        <img src={"./home-icon.svg"} className={"size-6 "} />
        <p>Home</p>
      </NavLink>
      <NavLink
        to={"/searchpage"}
        className={({ isActive, isTransitioning }) =>
          [
            "flex gap-2 items-center ",
            isActive ? "text-purple" : "",
            isTransitioning ? "text-white" : "",
          ].join(" ")
        }
      >
        <img src={"./search-icon.svg"} className={"size-6"} />
        <p>Search</p>
      </NavLink>

      <NavLink
        to={"/toplaypage"}
        className={({ isActive, isTransitioning }) =>
          [
            "flex gap-2 items-center ",
            isActive ? "text-purple" : "",
            isTransitioning ? "text-white" : "",
          ].join(" ")
        }
      >
        <img src={"./toplay-icon.svg"} className={"size-6"} />
        <p>To Play</p>
      </NavLink>
      <NavLink
        to={"/playingpage"}
        className={({ isActive, isTransitioning }) =>
          [
            "flex gap-2 items-center ",
            isActive ? "text-purple" : "",
            isTransitioning ? "text-white" : "",
          ].join(" ")
        }
      >
        <img src={"./playing-icon.svg"} className={"size-6"} />
        <p>Playing</p>
      </NavLink>
      <NavLink
        to={"/playedpage"}
        className={({ isActive, isTransitioning }) =>
          [
            "flex gap-2 items-center ",
            isActive ? "text-purple" : "",
            isTransitioning ? "text-white" : "",
          ].join(" ")
        }
      >
        <img src={"./played-icon.svg"} className={"size-6"} />
        <p>Played</p>
      </NavLink>
    </div>
  );
}

export default NavBar;
