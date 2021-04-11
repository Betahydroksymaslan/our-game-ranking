import React, { useState, useEffect, useRef } from "react";
import firebase from "../../firebase/firebase";
import "firebase/database";
import { gsap } from "gsap";

const AddGame = () => {
  const [name, setName] = useState("");
  const [logo, setLogo] = useState("");
  const [firstPlace, setFirstPlace] = useState(4);
  const [secondPlace, setSecondPlace] = useState(2);
  const [thirdPlace, setThirdPlace] = useState(1);
  const [isUrl, setIsUrl] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  let page = useRef(null);

  const nameChangeHandle = (e) => setName(e.target.value);
  const logoChangeHandle = (e) => setLogo(e.target.value);
  const firstPlaceChangeHandle = (e) => setFirstPlace(e.target.value);
  const secondPlaceChangeHandle = (e) => setSecondPlace(e.target.value);
  const thirdPlaceChangeHandle = (e) => setThirdPlace(e.target.value);

  const getUrlHandle = () => {
    const listRef = firebase.storage().ref("/images");

    listRef
      .child(logo)
      .getDownloadURL()
      .then((item) => {
        setImageUrl(item);
        setIsUrl(true);
      })
      .catch((error) => console.log(error));
  };

  const submitHandle = () => {
    const gamesRef = firebase.database().ref("/games/" + name);
    if (name && logo && firstPlace && secondPlace && thirdPlace) {
      gamesRef.set({
        name,
        imageUrl,
        firstPlace,
        secondPlace,
        thirdPlace,
      });
      setIsUrl(false);
      setName("");
      setLogo("");
    }
  };

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(page, { autoAlpha: 0 }, { duration: 0.3, autoAlpha: 1 });
  }, []);

  return (
    <div className="AddGame" ref={(el) => (page = el)}>
      <h2 className="AddGame__header">Add Game</h2>

      <label className="AddGame__nicknameLabel">
        Name
        <input
          value={name}
          onChange={nameChangeHandle}
          type="text"
          className="AddGame__nicknameInput"
        />
      </label>

      <label className="AddGame__userImageLabel">
        Logo
        <input
          onChange={logoChangeHandle}
          value={logo}
          type="text"
          placeholder="example.jpg"
          className="AddGame__userImageInput"
        />
      </label>

      <h2 className="AddGame__pointsHeader">Points</h2>

      <label className="AddGame__pointsLabel">
        1st place
        <input
          onChange={firstPlaceChangeHandle}
          value={firstPlace}
          type="number"
          className="AddGame__pointsInput"
        />
      </label>
      <label className="AddGame__pointsLabel">
        2nd place
        <input
          onChange={secondPlaceChangeHandle}
          value={secondPlace}
          type="number"
          className="AddGame__pointsInput"
        />
      </label>

      <label className="AddGame__pointsLabel">
        3rd place
        <input
          onChange={thirdPlaceChangeHandle}
          value={thirdPlace}
          type="number"
          className="AddGame__pointsInput"
        />
      </label>

      <button onClick={getUrlHandle} className="AddGame__submit">
        Get Url
      </button>

      <button
        onClick={submitHandle}
        className={
          isUrl
            ? "AddGame__submit"
            : "AddGame__submit AddGame__submit--disabled"
        }
      >
        Add game
      </button>
    </div>
  );
};

export default AddGame;
