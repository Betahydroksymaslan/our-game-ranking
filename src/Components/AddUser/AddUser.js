import React, { useState, useEffect, useRef } from "react";
import firebase from "../../firebase/firebase";
import "firebase/database";
import "firebase/storage";
import { gsap } from "gsap";

const AddUser = () => {
  const [username, setUsername] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isUrl, setIsUrl] = useState(false);
  let page = useRef(null);

  const usernameChangeHandle = (e) => setUsername(e.target.value);

  const profileImageChangeHandle = (e) => setProfileImage(e.target.value);

  const getUrlHandle = () => {
    const listRef = firebase.storage().ref("/images");

    listRef
      .child(profileImage)
      .getDownloadURL()
      .then((item) => {
        setImageUrl(item);
        setIsUrl(true);
      })
      .catch((error) => console.log(error));
  };

  const submitHandle = async () => {
    const usersRef = firebase.database().ref("/users/" + username);

    if (isUrl) {
      usersRef.set({
        username,
        imageUrl,
        gamePlayed: 0,
        points: 0,
        firstPlaces: 0,
        secondPlaces: 0,
        thirdPlaces: 0,
        anotherPlaces: 0,
      });

      setUsername("");
      setProfileImage("");
      setIsUrl(false);
    }
  };

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(page, { autoAlpha: 0 }, { duration: 0.3, autoAlpha: 1 });
  }, []);

  return (
    <div className="AddUser" ref={(el) => (page = el)}>
      <h2 className="AddUser__header">Add User</h2>

      <label className="AddUser__nicknameLabel">
        Username
        <input
          value={username}
          onChange={usernameChangeHandle}
          type="text"
          className="AddUser__nicknameInput"
        />
      </label>

      <label className="AddUser__userImageLabel">
        User Image
        <input
          onChange={profileImageChangeHandle}
          value={profileImage}
          type="text"
          placeholder="example.jpg"
          className="AddUser__userImageInput"
        />
      </label>

      <button onClick={getUrlHandle} className="AddUser__submit">
        Get Url
      </button>

      <button
        onClick={submitHandle}
        className={
          isUrl
            ? "AddUser__submit"
            : "AddUser__submit AddUser__submit--disabled"
        }
      >
        Create
      </button>
    </div>
  );
};

export default AddUser;
