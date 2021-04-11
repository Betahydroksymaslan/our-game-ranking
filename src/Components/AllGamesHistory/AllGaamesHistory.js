import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import firebase from "../../firebase/firebase";
import "firebase/database";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import Back from "../Back/Back";

const AllGaamesHistory = (props) => {
  const [games, setGames] = useState([]);
  let page = useRef(null);

  const gamesList = games.map((item) => (
    <Link
      to={`/our-game-ranking/gameHistory/${item.name} ${item.date.slice(
        0,
        17
      )}`}
      className="AllGamesHistory__gameWrapper"
    >
      <div className="AllGamesHistory__imageWrapper">
        <img
          src={item.gameUrl}
          alt="game photo"
          className="AllGamesHistory__image"
        />
      </div>
      <div className="AllGamesHistory__restWrapper">
        <span className="AllGamesHistory__tittle">{item.name}</span>
        <div className="AllGamesHistory__playersWrapper">
          {item.playersList.map((item) => (
            <div className="AllGamesHistory__playerImageWrapper">
              <img
                src={item.imageUrl}
                alt="player image"
                className="AllGamesHistory__playerImage"
              />
            </div>
          ))}
        </div>
      </div>
    </Link>
  ));

  useEffect(() => {
    const gamesHistoryRef = firebase.database().ref(`/gameHistory/`);
    gamesHistoryRef.on("value", (snapshot) => {
      const value = snapshot.val();
      const temporaryDatas = [];
      for (let id in value) {
        const data = [];
        for (let ids in value[id].players) {
          data.push({ ...value[id].players[ids] });
        }
        temporaryDatas.push({ ...value[id], playersList: data });
        temporaryDatas.sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateB - dateA;
        });
      }
      setGames(temporaryDatas);
    });
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(page, { autoAlpha: 0 }, { duration: 0.3, autoAlpha: 1 });
  }, []);

  console.log(games);

  return (
    <div className="AllGamesHistory" ref={(el) => (page = el)}>
      <Back />
      <h2 className="AllGames__header">Games History</h2>
      {games && gamesList}
    </div>
  );
};

AllGaamesHistory.propTypes = {};

export default AllGaamesHistory;
