import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as AddUserIcon } from "../../../assets/images/addUserIcon.svg";
import { ReactComponent as ShowAllGamesIcon } from "../../../assets/images/showAllGamesIcon.svg";
import { ReactComponent as GameSummaryIcon } from "../../../assets/images/gameSummaryIcon.svg";
import { ReactComponent as AddGameIcon } from "../../../assets/images/addGameIcon.svg";
import { gsap } from "gsap";

const Buttons = () => {
  let page = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(page, { autoAlpha: 0 }, { duration: 0.3, autoAlpha: 1 });
  }, []);
  return (
    <div className="Buttons" ref={(el) => (page = el)}>
      <h2 className="Buttons__header">User options</h2>
      <Link to="/our-game-ranking/addUser" className="Buttons__addUser">
        <AddUserIcon />
        <span>Add user</span>
      </Link>
      <Link to="/our-game-ranking/addGame" className="Buttons__addGame">
        <AddGameIcon />
        <span>Add game</span>
      </Link>
      <Link
        to="/our-game-ranking/allGames"
        className="Buttons__addGame Buttons__addGame--allGames"
      >
        <ShowAllGamesIcon />
        <span>Show all games</span>
      </Link>
      <Link to="/our-game-ranking/gameSummary" className="Buttons__addGame">
        <GameSummaryIcon />
        <span>Game summary</span>
      </Link>
    </div>
  );
};

export default Buttons;
