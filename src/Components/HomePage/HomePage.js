import React, { useContext, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsersCog } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../../store/store";
import Leaders from "./Leaders/Leaders";
import {ReactComponent as GameHistoryIcon} from '../../assets/images/gameHistoryIcon.svg';
import { gsap } from "gsap";
import GameHistory from "../GameHistory/GameHistory";

const HomePage = () => {
  const {
    restOfUsers,
    firstThree,
    firstThreeByGames,
    restOfUsersByGames,
  } = useContext(AppContext);

  let page = useRef(null);

  const [isStandard, setIsStandard] = useState(true);

  const navStndardHandle = () => setIsStandard(true);

  const navPerGamesHandle = () => setIsStandard(false);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(page, { autoAlpha: 0 }, { duration: 0.3, autoAlpha: 1 });
  }, []);

  return (
    <>
      <div className="HomePage" ref={(el) => (page = el)}>
        <h2 className="HomePage__header">Leaderboard</h2>
        <Link to="/our-game-ranking/allGamesHistory" className="HomePage__gameHistoryIconWrapper">
          <GameHistoryIcon className="HomePage__gameHistoryIcon" />
        </Link>
        
        <Link to="/our-game-ranking/user" className="HomePage__userCogWrapper">
          <FontAwesomeIcon className="HomePage__userCog" icon={faUsersCog} />
        </Link>
        <nav className="HomePage__nav">
          <div
            onClick={navPerGamesHandle}
            className={
              !isStandard
                ? "HomePage__link HomePage__link--active"
                : "HomePage__link"
            }
          >
            per games
          </div>

          <div
            onClick={navStndardHandle}
            className={
              isStandard
                ? "HomePage__link HomePage__link--active"
                : "HomePage__link"
            }
          >
            standard
          </div>
        </nav>

        {isStandard ? (
          <Leaders
            isStandard={isStandard}
            data={firstThree}
            restOfData={restOfUsers}
          />
        ) : (
          <Leaders
            isStandard={isStandard}
            data={firstThreeByGames}
            restOfData={restOfUsersByGames}
          />
        )}
      </div>
    </>
  );
};

export default HomePage;
