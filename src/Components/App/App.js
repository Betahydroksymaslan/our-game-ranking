import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Store from "../../store/store";
import HomePage from "../HomePage/HomePage";
import UserCog from '../UserCog/UserCog';
import Profile from '../Profile/Profile';
import GameHistory from '../GameHistory/GameHistory';
import AllGamesHistory from '../AllGamesHistory/AllGaamesHistory';

function App() {
  return (
    <Router>
      <Store>
        <div className="App">
          <Switch>
            <Route exact path="/our-game-ranking" component={HomePage} />
            <Route path="/our-game-ranking/user" component={UserCog} />
            <Route path="/our-game-ranking/users/:name" component={Profile} />
            <Route path="/our-game-ranking/gameHistory/:game" component={GameHistory} />
            <Route path="/our-game-ranking/allGamesHistory" component={AllGamesHistory} />
          </Switch>
        </div>
      </Store>
    </Router>
  );
}

export default App;
