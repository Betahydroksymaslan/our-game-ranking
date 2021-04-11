import React, { createContext, useState, useEffect } from "react";
import firebase from "../firebase/firebase";
import "firebase/database";
import "firebase/storage";

export const AppContext = createContext();

const Store = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [firstThree, setFirstThree] = useState([]);
  const [restOfUsers, setRestOfUsers] = useState([]);
  const [games, setGames] = useState([]);
  const [usersByGames, setUsersByGames] = useState([]);
  const [firstThreeByGames, setFirstThreeByGames] = useState([]);
  const [restOfUsersByGames, setRestOfUsersByGames] = useState([]);

  useEffect(() => {
    const usersRef = firebase.database().ref("/users");
    const gamesRef = firebase.database().ref("/games");

    const watch = () => {
      usersRef.on("value", (snapshot) => {
        const value = snapshot.val();
        const temoporaryData = [];
        for (let id in value) {
          temoporaryData.push(value[id]);
        }

        /* >>>>>>>>>>> USERS BY POINTS <<<<<<<<<<<<<<<<<< */

        const data = temoporaryData.sort((a, b) =>
          a.points > b.points ? -1 : 1
        );
        setUsers(data);

        const firstUsers = temoporaryData.slice(0, 3);
        setFirstThree(firstUsers);

        const restUsers = temoporaryData.slice(3, temoporaryData.length);
        setRestOfUsers(restUsers);

        /* >>>>>>>>>>> USERS BY GAMES <<<<<<<<<<<<<<<<<< */

        const dataByGames = temoporaryData.sort((a, b) =>
          a.points / a.gamePlayed > b.points / b.gamePlayed ? -1 : 1
        );
        setUsersByGames(dataByGames);

        const firstUsersByGames = dataByGames.slice(0, 3);
        setFirstThreeByGames(firstUsersByGames);

        const restUsersByGames = dataByGames.slice(3, dataByGames.length);
        setRestOfUsersByGames(restUsersByGames);
      });
      
      /* >>>>>>>>>>> USERS BY WINS PERCENTAGE <<<<<<<<<<<<<<<<<< */
      
      gamesRef.on("value", (snapshot) => {
        const value = snapshot.val();
        const temoporaryData = [];
        for (let id in value) {
          temoporaryData.push(value[id]);
        }
        setGames(temoporaryData);
      });


    };

    watch();
  }, []);

  //console.log(gamesHistory);

  return (
    <AppContext.Provider
      value={{
        users,
        firstThree,
        restOfUsers,
        games,
        usersByGames,
        firstThreeByGames,
        restOfUsersByGames,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Store;
