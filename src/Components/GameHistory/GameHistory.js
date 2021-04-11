import React, { useEffect, useState, useRef } from "react";
import firebase from "../../firebase/firebase";
import "firebase/database";
import "firebase/storage";
import { useHistory, Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import { gsap } from "gsap";
import Back from "../Back/Back";

const GameHistory = ({ match }) => {
  const [game, setGame] = useState({});
  const [players, setPlayers] = useState([]);
  const [image, setImage] = useState(null);
  const history = useHistory();
  let page = useRef(null);

  const placeBgc = (place) => {
    if (place === 1)
      return "GameHistory__playerWrapper--firstPlace GameHistory__playerWrapper";
    if (place === 2)
      return "GameHistory__playerWrapper--secondPlace GameHistory__playerWrapper";
    if (place === 3)
      return "GameHistory__playerWrapper--thirdPlace GameHistory__playerWrapper";
    if (place > 3) return "GameHistory__playerWrapper";
  };

  const numberPlaceBgc = (place) => {
    if (place === 1)
      return "GameHistory__playerPlace--firstPlace GameHistory__playerPlace";
    if (place === 2)
      return "GameHistory__playerPlace--secondPlace GameHistory__playerPlace";
    if (place === 3)
      return "GameHistory__playerPlace--thirdPlace GameHistory__playerPlace";
    if (place > 3) return "GameHistory__playerPlace";
  };

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

  const circlesLoop = circles.map((item) => (
    <div
      key={item}
      className={`Profile__circle Profile__circle--${item}`}
    ></div>
  ));

  const playersList = players.map((player) => (
    <Link to={`/our-game-ranking/users/${player.name}`} key={player.name} className="GameHistory__playerAllWrapper">
      <span className={numberPlaceBgc(player.place)}>{player.place}</span>
      <div className={placeBgc(player.place)}>
        <div className="GameHistory__imageWrapper">
          <img src={player.imageUrl} className="GameHistory__playerImage" />
        </div>
        <span className="GameHistory__name">{player.name}</span>
      </div>
    </Link>
  ));

  useEffect(() => {
    const gamesHistoryRef = firebase
      .database()
      .ref(`/gameHistory/${match.params.game}`);
    gamesHistoryRef.on("value", (snapshot) => {
      const value = snapshot.val();

      if (value.selfieImageUrl)
        firebase
          .storage()
          .ref("images")
          .child(`${value.selfieImageUrl}`)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            setImage(url);
          });

      setGame(value);
      const temoporaryData = [];
      for (let id in value.players) {
        temoporaryData.push({ ...value.players[id] });
      }
      temoporaryData.sort((a, b) => a.place - b.place);
      setPlayers(temoporaryData);
    });
  }, []);
  //console.log(game, players);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(page, { autoAlpha: 0 }, { duration: 0.3, autoAlpha: 1 });
  }, []);

  return game && players ? (
    <div className="GameHistory" ref={(el) => (page = el)}>
      <Back />
      <h2 className="Profile__header">Game History</h2>
      <div className="Profile__photoAndCirclesWrapper">
        <div className="Profile__photoWrapper">
          <img src={game.gameUrl} alt="gameImage" className="Profile__image" />
        </div>
        {circlesLoop}
      </div>
      <span className="GameHistory__gameName">{game.name}</span>
      <div className="GameHistory__dateBox">
        <span className="GameHistory__dateDay">
          {game.date && game.date.slice(0, 11)}
        </span>
        <span className="GameHistory__dateHour">
          {game.date && game.date.slice(11, 17)}
        </span>
      </div>
      {players && playersList}

      {image && (
        <div className="GameHistory__selfieImageArea">
        <div className="GameHistory__selfieImageHeader"></div>
          <div className="GameHistory__selfieImageWrapper">
            <img className="GameHistory__selfieImage" src={image} alt="Image" />
          </div>
        </div>
      )}
      <button
        className="GameHistory__goBackButton"
        onClick={() => history.goBack()}
      >
        Go back
      </button>
    </div>
  ) : (
    <Loader />
  );
};

export default GameHistory;
