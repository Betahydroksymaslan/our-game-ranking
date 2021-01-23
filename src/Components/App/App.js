import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Store from "../../store/store";
import HomePage from "../HomePage/HomePage";

function App() {
  return (
    <Router>
      <Store>
        <div className="App">
          <Switch>
            <Route exact path="/our-game-ranking" component={HomePage} />
          </Switch>
        </div>
      </Store>
    </Router>
  );
}

export default App;
