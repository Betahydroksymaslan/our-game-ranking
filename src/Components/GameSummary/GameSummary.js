import React, { useContext, useState, useEffect, useRef } from "react";
import firebase from "../../firebase/firebase";
import "firebase/database";
import "firebase/storage";
import { AppContext } from "../../store/store";
import Dialog from "../Dialog/Dialog";
import { gsap } from "gsap";
import { useHistory } from "react-router-dom";

const GameSummary = () => {
  const { users, games } = useContext(AppContext);
  let page = useRef(null);
  const history = useHistory();

  /* >>>>>>>>>>>>>>>>>>> ADDING PLAYERS AREA <<<<<<<<<<<<<<<<<<<<<< */

  const [usersPrompt, setUsersPrompt] = useState(false);
  const [choosenPlayer, setChoosenPlayer] = useState("");
  const [playersAdded, setPlayersAdded] = useState([]);
  const [imageUrl, setImageUrl] = useState("");

  const usersPromptOpenHandle = () => setUsersPrompt(true);

  const usersPromptExitHandle = () => {
    setPlayersAdded((prevState) => {
      if (playersAdded.find((item) => item.name === choosenPlayer)) {
        setIsDialogOpen(true);
        setDialogMessage("A user with this nickname has already been added");
        return [...prevState];
      } else {
        return [...prevState, { name: choosenPlayer, imgUrl: imageUrl }];
      }
    });
    setUsersPrompt(false);
  };

  const usersList = users.map((item) => (
    <option key={item.username} value={item.username} name={item.username}>
      {item.username}
    </option>
  ));

  const selectHandle = (e) => {
    const url = users.find((item) => item.username === e.target.value);
    setChoosenPlayer(e.target.value);
    setImageUrl(url.imageUrl);
  };

  const usersIcon = playersAdded.map((item) => (
    <div key={item.name} className="GameSummary__playerIcon">
      <img src={item.imgUrl} className="GameSummary__playerIconImg" />
    </div>
  ));

  /* >>>>>>>>>>>>>>>>>>> ADDING GAME AREA <<<<<<<<<<<<<<<<<<<<<< */

  const [currentGame, setCurrentGame] = useState([]);
  const [isGamePromptOpen, setIsGamePromptOpen] = useState(false);

  const gameValueHandle = (e) =>
    setCurrentGame(games.find((item) => item.name === e.target.value));

  const exitGamePrompt = () => setIsGamePromptOpen(false);

  const openGamePrompt = () => setIsGamePromptOpen(true);

  const gamesList = games.map((item) => (
    <option key={item.name} value={item.name} name={item.name}>
      {item.name}
    </option>
  ));

  /* >>>>>>>>>>>>>>>>>>> DIALOG WINDOW AREA <<<<<<<<<<<<<<<<<<<<<< */

  const [dialogMessage, setDialogMessage] = useState();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const closeDialog = () => setIsDialogOpen(false);

  /* >>>>>>>>>>>>>>>>>>> RANKING AREA <<<<<<<<<<<<<<<<<<<<<< */

  const [anotherRankingPlace, setAnotherRankingPlace] = useState(4);
  const [choosenPlayerPlace, setChoosenPlayerPlace] = useState();
  const [currentPlaceChecked, setCurrentPlaceChecked] = useState();
  const [finalPlace, setFinalPlace] = useState();
  const [anotherRankingBoxes, setAnotherRankingBoxes] = useState([]);
  const [choosenRankingPlayer, setChoosenRankingPlayer] = useState("");
  const [isPlayerInRankingAdded, setIsPlayerInRankingAdded] = useState(false);
  const [isAddingPlayerDialogOpen, setIsAddingPlayerDialogOpen] = useState(
    false
  );
  const [playersWithPoints, setPlayersWithPoints] = useState([]);
  const [data, setData] = useState([]);

  const addAnotherPlayerForRanking = () => {
    if (anotherRankingBoxes.length + 3 < playersAdded.length) {
      setAnotherRankingBoxes((prevState) => [
        ...prevState,
        { place: anotherRankingPlace },
      ]);
      setAnotherRankingPlace((prevState) => prevState + 1);
    } else {
      setDialogMessage(`You have only added ${playersAdded.length} players`);
      setIsDialogOpen(true);
      return;
    }
  };

  const playerAddingToRanking = (e) => {
    const player = users.find((item) => item.username === e.target.value);
    const pointsFromObject = Object.entries(currentGame);
    const pointsToAdd = pointsFromObject.find(
      ([key, value]) => key === currentPlaceChecked
    );
    setChoosenRankingPlayer({
      ...player,
      finalPlace: parseInt(finalPlace),
      newPoints: player.points + parseInt(pointsToAdd[1]),
      place: currentPlaceChecked,
      currentGame: currentGame.name,
      currentGameUrl: currentGame.imageUrl,
    });
  };

  const addPlayerToRanking = (e) => {
    setIsAddingPlayerDialogOpen(true);
    setCurrentPlaceChecked(e.target.dataset.place);
    setChoosenPlayerPlace(e.target.dataset.index);
    setFinalPlace(e.target.dataset.finalplace);
  };

  const addingPlayerToRankingPlace = () => {
    setIsAddingPlayerDialogOpen(false);
    setIsPlayerInRankingAdded(true);
    data.splice(choosenPlayerPlace, 1, choosenRankingPlayer);
    setPlayersWithPoints(data);
  };

  const renderRankingList = anotherRankingBoxes.map((item) => (
    <li key={item.place} className="GameSummary__addPointsLi">
      <span className="GameSummary__addPointsPlace">{item.place}</span>
      <span className="GameSummary__addPointsPointsForPlace">(0pkt)</span>
      {playersWithPoints[item.place - 1] ? (
        <>
          <div className="GameSummary__addPointsImageWrapper">
            <img
              src={
                playersWithPoints[item.place - 1] &&
                playersWithPoints[item.place - 1].imageUrl
              }
              alt="Player Photo"
              className="GameSummary__addPointsImage"
            />
          </div>
          <span className="GameSummary__addPointsNicknme">
            {playersWithPoints[item.place - 1] &&
              playersWithPoints[item.place - 1].username}
          </span>
        </>
      ) : (
        <span
          data-place="anotherPlace"
          data-finalplace={item.place}
          data-index={item.place - 1}
          onClick={addPlayerToRanking}
          className="GameSummary__addPlayerToRanking"
        >
          Add player
        </span>
      )}
    </li>
  ));

  const playersForRankingOptions = playersAdded.map((item) => (
    <option key={item.name} value={item.name} name={item.name}>
      {item.name}
    </option>
  ));

  /* >>>>>>>>>>>>>>> SENDING IMAGES <<<<<<<<<<<<<<< */

  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const handleImageOnChange = (e) => {
    if (e.target.files[0]) setImage(e.target.files[0]);
  };
  const handleSengingImage = () => {
    const uploadImage = firebase
      .storage()
      .ref(`images/${image.name}`)
      .put(image);

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => console.log(error),
      () => {}
    );
  };

  /* >>>>>>>>>>>>>>> ACTUALIZING RANKING DATABASE AREA <<<<<<<<<<<<<<< */

  const [confirmUpdate, setConfirmUpdate] = useState(false);

  const confirmUpdateHandle = () => setConfirmUpdate(true);
  const confirmUpdateExitHandle = () => setConfirmUpdate(false);

  const updateDB = () => {
    const date = new Date();

    const cuttedDate = date.toString().slice(4, 24);

    const cuttedDateShort = date.toString().slice(4, 21);

    const gamesHistoryRef = firebase
      .database()
      .ref(`/gameHistory/${currentGame.name} ${cuttedDateShort}`);
    gamesHistoryRef.set({
      date: cuttedDate,
      name: currentGame.name,
      gameUrl: currentGame.imageUrl,
      selfieImageUrl: `${image?.name.substring(
        -1,
        image.name.length - 4
      )}_1000x1000.webp`,
    });

    playersWithPoints.map((item) => {
      if (item) {
        const userRef = firebase.database().ref("/users/" + item.username);
        const lastGamesRef = firebase
          .database()
          .ref(
            `/users/${item.username}/lastPlayedGames/${item.currentGame} ${cuttedDate}`
          );

        userRef.update({
          points: item.newPoints,
          gamePlayed: item.gamePlayed + 1,
          firstPlaces:
            item.finalPlace === 1 ? item.firstPlaces + 1 : item.firstPlaces,
          secondPlaces:
            item.finalPlace === 2 ? item.secondPlaces + 1 : item.secondPlaces,
          thirdPlaces:
            item.finalPlace === 3 ? item.thirdPlaces + 1 : item.thirdPlaces,
          anotherPlaces:
            item.finalPlace > 3 ? item.anotherPlaces + 1 : item.anotherPlaces,
        });

        lastGamesRef.set({
          name: item.currentGame,
          place: item.finalPlace,
          imageUrl: item.currentGameUrl,
          date: cuttedDate,
        });

        firebase
          .database()
          .ref(`/gameHistory/${currentGame.name} ${cuttedDateShort}/players`)
          .push({
            name: item.username,
            place: item.finalPlace,
            imageUrl: item.imageUrl,
          });

        confirmUpdateExitHandle();
        history.push("/our-game-ranking");
      }
    });
  };
  //console.log(playersWithPoints);
  useEffect(() => {
    const temporaryData = [];
    users.map((item) => temporaryData.push(null));
    setData(temporaryData);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(page, { autoAlpha: 0 }, { duration: 0.3, autoAlpha: 1 });
  }, []);

  return (
    <div className="GameSummary" ref={(el) => (page = el)}>
      <h2 className="GameSummary__header">Game summary</h2>

      {/* >>>>>>>>>>>>>>>>> ADDING USERS <<<<<<<<<<<<<<<<<< */}

      <h2 className="GameSummary__header GameSummary__header--addPlayers">
        Add players
      </h2>

      <div className="GameSummary__usersIconWrapper">{usersIcon}</div>

      <div className="GameSummary__addPlayer" onClick={usersPromptOpenHandle}>
        +
      </div>

      {usersPrompt ? (
        <div className="GameSummary__usersPrompt">
          <div className="GameSummary__usersPromptUsers">
            <label className="GameSummary__usersPromptLabel">
              Select Player:
              <select
                onChange={selectHandle}
                className="GameSummary__usersPromptSelect"
                defaultValue={"DEFAULT"}
              >
                <option value="DEFAULT" disabled>
                  Select Player
                </option>
                {usersList}
              </select>
            </label>
          </div>
          <div
            className="GameSummary__usersPromptAdd"
            onClick={usersPromptExitHandle}
          >
            Add player
          </div>
        </div>
      ) : null}

      {/* >>>>>>>>>>>>>>>>>  ADDING GAME <<<<<<<<<<<<<<<<<< */}

      <h2 className="GameSummary__header GameSummary__header--chooseGame">
        Choose game
      </h2>

      <div className="GameSummary__currentGameWrapper">{currentGame.name}</div>

      <div onClick={openGamePrompt} className="GameSummary__addPlayer">
        +
      </div>

      {isGamePromptOpen ? (
        <div className="GameSummary__usersPrompt">
          <div className="GameSummary__usersPromptUsers">
            <label className="GameSummary__usersPromptLabel">
              Select Game:
              <select
                onChange={gameValueHandle}
                className="GameSummary__usersPromptSelect"
                defaultValue={"DEFAULT"}
              >
                <option value="DEFAULT" disabled>
                  Select game
                </option>
                {gamesList}
              </select>
            </label>
          </div>
          <div className="GameSummary__usersPromptAdd" onClick={exitGamePrompt}>
            Add game
          </div>
        </div>
      ) : null}

      {/* >>>>>>>>>>>>>>>>> ACTUALIZE POINTS <<<<<<<<<<<<<<<<<< */}

      <h2 className="GameSummary__header GameSummary__header--chooseGame">
        Add points
      </h2>

      {playersAdded.length && currentGame.name ? (
        <>
          <ul className="GameSummary__addPointsUl">
            <li className="GameSummary__addPointsLi">
              <span className="GameSummary__addPointsPlace">1</span>
              <span className="GameSummary__addPointsPointsForPlace">{`(${
                currentGame.name ? currentGame.firstPlace : "0"
              }pkt)`}</span>
              {playersWithPoints[0] ? (
                <>
                  <div className="GameSummary__addPointsImageWrapper">
                    <img
                      src={
                        playersWithPoints[0].username &&
                        playersWithPoints[0].imageUrl
                      }
                      alt="Player Photo"
                      className="GameSummary__addPointsImage"
                    />
                  </div>
                  <span className="GameSummary__addPointsNicknme">
                    {playersWithPoints[0].username &&
                      playersWithPoints[0].username}
                  </span>
                </>
              ) : (
                <span
                  data-place="firstPlace"
                  data-index={0}
                  data-finalplace={1}
                  onClick={addPlayerToRanking}
                  className="GameSummary__addPlayerToRanking"
                >
                  Add player
                </span>
              )}
            </li>

            <li className="GameSummary__addPointsLi">
              <span className="GameSummary__addPointsPlace">2</span>
              <span className="GameSummary__addPointsPointsForPlace">{`(${
                currentGame.name ? currentGame.secondPlace : "0"
              }pkt)`}</span>
              {playersWithPoints[1] ? (
                <>
                  <div className="GameSummary__addPointsImageWrapper">
                    <img
                      src={
                        playersWithPoints[1].username &&
                        playersWithPoints[1].imageUrl
                      }
                      alt="Player Photo"
                      className="GameSummary__addPointsImage"
                    />
                  </div>
                  <span className="GameSummary__addPointsNicknme">
                    {playersWithPoints[1].username &&
                      playersWithPoints[1].username}
                  </span>
                </>
              ) : (
                <span
                  data-place="secondPlace"
                  data-index={1}
                  data-finalplace={2}
                  onClick={addPlayerToRanking}
                  className="GameSummary__addPlayerToRanking"
                >
                  Add player
                </span>
              )}
            </li>

            <li className="GameSummary__addPointsLi">
              <span className="GameSummary__addPointsPlace">3</span>
              <span className="GameSummary__addPointsPointsForPlace">{`(${
                currentGame.name ? currentGame.thirdPlace : "0"
              }pkt)`}</span>
              {playersWithPoints[2] ? (
                <>
                  <div className="GameSummary__addPointsImageWrapper">
                    <img
                      src={
                        playersWithPoints[2].username &&
                        playersWithPoints[2].imageUrl
                      }
                      alt="Player Photo"
                      className="GameSummary__addPointsImage"
                    />
                  </div>
                  <span className="GameSummary__addPointsNicknme">
                    {playersWithPoints[2].username &&
                      playersWithPoints[2].username}
                  </span>
                </>
              ) : (
                <span
                  data-place="thirdPlace"
                  data-index={2}
                  data-finalplace={3}
                  onClick={addPlayerToRanking}
                  className="GameSummary__addPlayerToRanking"
                >
                  Add player
                </span>
              )}
            </li>
            {renderRankingList}
          </ul>

          <div
            onClick={addAnotherPlayerForRanking}
            className="GameSummary__addPointsAddAnother"
          >
            + Next Player
          </div>
        </>
      ) : null}

      {/* >>>>>>>>>>>>>>>>> ADDING PHOTO <<<<<<<<<<<<<<<<<< */}

      <h2 className="GameSummary__header GameSummary__header--chooseGame">
        Add photo
      </h2>
      <input
        className="GameSummary__selectFileButton"
        onChange={handleImageOnChange}
        type="file"
      />
      <span>{image?.name}</span>
      <progress value={progress} max="100" />
      <button
        className="GameSummary__sendPhotoButton"
        onClick={handleSengingImage}
      >
        Submit photo
      </button>
      <div className="GameSummary__line"></div>

      <div onClick={confirmUpdateHandle} className="GameSummary__updateButton">
        Update ranking!
      </div>

      {confirmUpdate ? (
        <div className="GameSummary__updateConfirmBox">
          <span className="GameSummary__updateConfirmMessage">
            Are you sure you want to update the ranking?
          </span>
          <div className="GameSummary__confirmBoxOptionsWrapper">
            <span
              onClick={confirmUpdateExitHandle}
              className="GameSummary__confirmBoxReject"
            >
              No
            </span>
            <span
              onClick={updateDB}
              className="GameSummary__confirmBoxAgreement"
            >
              Yes
            </span>
          </div>
        </div>
      ) : null}

      {/* >>>>>>>>>>>>>>>>>  DIALOG WINDOWS <<<<<<<<<<<<<<<<<< */}

      {isDialogOpen ? (
        <Dialog closeDialog={closeDialog} message={dialogMessage} />
      ) : null}

      {isAddingPlayerDialogOpen ? (
        <div className="GameSummary__usersPrompt">
          <div className="GameSummary__usersPromptUsers">
            <label className="GameSummary__usersPromptLabel">
              Select Player:
              <select
                onChange={playerAddingToRanking}
                className="GameSummary__usersPromptSelect"
                defaultValue={"DEFAULT"}
              >
                <option value="DEFAULT" disabled>
                  Select player
                </option>
                {playersAdded && playersForRankingOptions}
              </select>
            </label>
          </div>
          <div
            className="GameSummary__usersPromptAdd"
            onClick={addingPlayerToRankingPlace}
          >
            Add player
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default GameSummary;
