import React from "react";
import { Link } from "react-router-dom";
import CoronaImg from "../../../assets/images/coronaIcon.svg";
import SilverMedalIcon from "../../../assets/images/silverMedalIcon.svg";
import BronzeMedalIcon from "../../../assets/images/bronzeMedalIcon.svg";
import Loader from "../../Loader/Loader";

const countPoints = (points, gamePlayed) => {
  if (gamePlayed === 0) return 0;
  return (points / gamePlayed).toFixed(2);
};

const Leaders = ({ data, restOfData, isStandard }) => {
  let place = 3;

  const restOfUsersList = restOfData.map((item) => {
    place++
    
    return (
      <Link
        to={`/our-game-ranking/users/${item.username}`}
        key={item.username}
        className="HomePage__anotherPlaces"
      >
        <span className="HomePage__placeNumberSpan">{place}</span>
        <div className="HomePage__anotherPlacesBox">
          <div className="HomePage__anotherPlacesImageWrapper">
            <img
              src={item.imageUrl}
              alt="Profilowe"
              className="HomePage__anotherPlacesImage"
            />
          </div>
          <span className="HomePage__anotherPlacesNickname">
            {item.username}
          </span>
          <span className="HomePage__anotherPlacesPoints">
            {isStandard
              ? item.points
              : countPoints(item.points, item.gamePlayed)}
          </span>
        </div>
      </Link>
    );
  });

  return data.length ? (
    <>
      <div className="HomePage__leadersWrapper">
        <Link
          to={`/our-game-ranking/users/${data.length && data[2].username}`}
          className="HomePage__thirdPlace"
        >
          <span className="HomePage__placeNumber">3</span>
          <div className="HomePage__symbol">
            <img src={BronzeMedalIcon} className="HomePage__symbolImage" />
          </div>
          <div className="HomePage__image">
            <img
              className="HomePage__imageSrc"
              src={data.length && data[2].imageUrl}
            />
          </div>
          <span className="HomePage__nickname">
            {data.length && data[2].username}
          </span>
          <span className="HomePage__points">
            {data.length &&
              (isStandard
                ? data[2].points
                : (data[2].points / data[2].gamePlayed).toFixed(2))}
          </span>
        </Link>

        <Link
          to={`/our-game-ranking/users/${data.length && data[0].username}`}
          className="HomePage__firstPlace"
        >
          <span className="HomePage__placeNumber">1</span>
          <div className="HomePage__symbol">
            <img src={CoronaImg} className="HomePage__corona" alt="corona" />
          </div>
          <div className="HomePage__image HomePage__image--first">
            <img
              className="HomePage__imageSrc"
              src={data.length && data[0].imageUrl}
            />
          </div>
          <span className="HomePage__nickname">
            {data.length && data[0].username}
          </span>
          <span className="HomePage__points">
            {data.length &&
              (isStandard
                ? data[0].points
                : (data[0].points / data[0].gamePlayed).toFixed(2))}
          </span>
        </Link>

        <Link
          to={`/our-game-ranking/users/${data.length && data[1].username}`}
          className="HomePage__secondPlace"
        >
          <span className="HomePage__placeNumber">2</span>
          <div className="HomePage__symbol">
            <img src={SilverMedalIcon} className="HomePage__symbolImage" />
          </div>
          <div className="HomePage__image">
            <img
              className="HomePage__imageSrc"
              src={data.length && data[1].imageUrl}
            />
          </div>
          <span className="HomePage__nickname">
            {data.length && data[1].username}
          </span>
          <span className="HomePage__points">
            {data.length &&
              (isStandard
                ? data[1].points
                : (data[1].points / data[1].gamePlayed).toFixed(2))}
          </span>
        </Link>
      </div>

      {restOfData && restOfUsersList}
    </>
  ) : (
    <Loader />
  );
};

export default Leaders;
