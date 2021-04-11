import React, { useRef, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserCogImage from "../../assets/images/userCogImage.svg";
import AddUser from "../AddUser/AddUser";
import AddGame from "../AddGame/AddGame";
import Buttons from "./Buttons/Buttons";
import AllGames from "../AllGames/AllGames";
import Back from "../Back/Back";
import GameSummary from "../GameSummary/GameSummary";
import { gsap } from "gsap";

const UserCog = () => {
  let page = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(page, { autoAlpha: 0 }, { duration: 0.3, autoAlpha: 1 });
  }, []);

  return (
    <Router>
      <div className="UserCog" ref={(el) => (page = el)}>
        <Back />
        <img src={UserCogImage} alt="image" className="UserCog__image" />

        <Switch>
          <Route path="/our-game-ranking/user" component={Buttons} />
          <Route path="/our-game-ranking/addUser" component={AddUser} />
          <Route path="/our-game-ranking/addGame" component={AddGame} />
          <Route path="/our-game-ranking/allGames" component={AllGames} />
          <Route path="/our-game-ranking/gameSummary" component={GameSummary} />
        </Switch>
      </div>
    </Router>
  );
};

export default UserCog;
