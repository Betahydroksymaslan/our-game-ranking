import React, { useContext, useState, useEffect, useRef } from "react";
import firebase from "../../firebase/firebase";
import "firebase/database";
import Back from "../Back/Back";
import { AppContext } from "../../store/store";
import DetailsBox from "./DetailsBox";
import { gsap } from "gsap";

const calcPointsPerGames = (points, gamePlayed) => {
  if (gamePlayed === 0) return 0;
  return (points / gamePlayed).toFixed(2);
};

const calcWinningPercentage = (winnings, gamePlayed) => {
  if (gamePlayed === 0) return 0;
  return ((winnings / gamePlayed) * 100).toFixed(1);
};

const Profile = ({ match }) => {
  const { users } = useContext(AppContext);
  const [currentUser, setCurrentUser] = useState("");
  const [lastGames, setLastGames] = useState([]);
  let page = useRef(null);

  const circles = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
  ];

  const placeBgc = (place) => {
    if (place === 1)
      return "Profile__gameWrapper--firstPlace Profile__gameWrapper";
    if (place === 2)
      return "Profile__gameWrapper--secondPlace Profile__gameWrapper";
    if (place === 3)
      return "Profile__gameWrapper--thirdPlace Profile__gameWrapper";
    if (place > 3) return "Profile__gameWrapper";
  };

  const numberPlaceBgc = (place) => {
    if (place === 1) return "Profile__gamePlace--firstPlace Profile__gamePlace";
    if (place === 2)
      return "Profile__gamePlace--secondPlace Profile__gamePlace";
    if (place === 3) return "Profile__gamePlace--thirdPlace Profile__gamePlace";
    if (place > 3) return "Profile__gamePlace";
  };

  const gamesList = lastGames.map((item) => (
    <DetailsBox
      item={item}
      placeBgc={placeBgc}
      numberPlaceBgc={numberPlaceBgc}
    />
  ));

  const circlesLoop = circles.map((item) => (
    <div
      key={item}
      className={`Profile__circle Profile__circle--${item}`}
    ></div>
  ));

  useEffect(() => {
    const lastGamesRef = firebase
      .database()
      .ref(`/users/${match.params.name}/lastPlayedGames`);

    const watch = () => {
      lastGamesRef.on("value", (snapshot) => {
        const value = snapshot.val();
        const temoporaryData = [];
        for (let id in value) {
          temoporaryData.push(value[id]);
        }
        temoporaryData.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateB - dateA;
        });
        setLastGames(temoporaryData);
      });
    };

    const find = users.find((item) => item.username === match.params.name);
    watch();
    setCurrentUser(find);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(page, { autoAlpha: 0 }, { duration: 0.3, autoAlpha: 1 });
  }, []);

  return (
    <div className="Profile" ref={(el) => (page = el)}>
      <Back />
      <h2 className="Profile__header">Profile</h2>
      <div className="Profile__photoAndCirclesWrapper">
        <div className="Profile__photoWrapper">
          <img
            src={currentUser && currentUser.imageUrl}
            alt="profileImage"
            className="Profile__image"
          />
        </div>
        {circlesLoop}
      </div>
      <span className="Profile__name">{match.params.name}</span>
      <div className="Profile__stats">
        <div className="Profile__pointsBox">
          <span className="Profile__pointsLabel">points</span>
          <span className="Profile__points">
            {currentUser && currentUser.points}
          </span>
        </div>
        <div className="Profile__pointsPerGamesBox">
          <span className="Profile__pointsPerGamesLabel">average</span>
          <span className="Profile__pointsPerGames">
            {currentUser &&
              calcPointsPerGames(currentUser.points, currentUser.gamePlayed)}
          </span>
        </div>
        <div className="Profile__gamesPlayedBox">
          <span className="Profile__gamesPlayedLabel">games</span>
          <span className="Profile__gamesPlayed">
            {currentUser && currentUser.gamePlayed}
          </span>
        </div>
        <div className="Profile__gamesPlayedBox">
          <span className="Profile__gamesPlayedLabel">wins</span>
          <span className="Profile__gamesPlayed">
            {currentUser &&
              calcWinningPercentage(
                currentUser.firstPlaces,
                currentUser.gamePlayed
              )}
            %
          </span>
        </div>
      </div>

      <h2 className="Profile__headerGames">Last played</h2>

      {gamesList}
    </div>
  );
};

export default Profile;
