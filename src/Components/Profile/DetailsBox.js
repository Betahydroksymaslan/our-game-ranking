import React, { useState } from "react";
import { Link } from "react-router-dom";

const DetailsBox = ({ item, placeBgc, numberPlaceBgc }) => {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  const [detailsClickAnimation, setDetailsClickAnimation] = useState(false);

  const setDetailsVisible = () => {
    setIsDetailsVisible((prevState) => !prevState);
    setDetailsClickAnimation(true);
    setTimeout(() => setDetailsClickAnimation(false), 300);
  };

  return (
    <div key={item.date} className="Profile__gameAllWrapper">
      <span className={numberPlaceBgc(item.place)}>{item.place}</span>
      <div className={placeBgc(item.place)}>
        <div className="Profile__logoWrapper">
          <img src={item.imageUrl} className="Profile__logoImage" />
        </div>
        <span className="Profile__gameName">
          {item.name.length > 12 ? `${item.name.slice(0, 12)}...` : item.name}
        </span>
        <span className="Profile__gameDate">{item.date.slice(0, 17)}</span>
        <div
          className={
            detailsClickAnimation
              ? "Profile__detailsWrapper Profile__detailsWrapper--active"
              : "Profile__detailsWrapper"
          }
          onClick={setDetailsVisible}
        >
          <div className="Profile__details"></div>
          <div
            className={
              isDetailsVisible
                ? "Profile__moreDetailsBox Profile__moreDetailsBox--visible"
                : "Profile__moreDetailsBox"
            }
          >
            <Link
              to={`/our-game-ranking/gameHistory/${item.name} ${item.date.slice(
                0,
                17
              )}`}
              className="Profile__moreDetails"
            >
              more details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsBox;
