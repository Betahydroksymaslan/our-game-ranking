import React from "react";
import Navigation from "../Navigation/Navigation";
import KacperPhoto from "../../assets/images/kacperPhoto.PNG";
import KarolPhoto from "../../assets/images/karolPhoto.PNG";
import JustynaPhoto from "../../assets/images/justynaPhoto.PNG";
import PaulinaPhoto from "../../assets/images/paulinaPhoto.PNG";
import CoronaImg from "../../assets/images/coronaIcon.svg";

const HomePage = () => {
  return (
    <div className="HomePage">
      <h2 className="HomePage__header">Leaderboard</h2>
      <Navigation />
      <div className="HomePage__leadersWrapper">
        <div className="HomePage__thirdPlace">
          <span className="HomePage__placeNumber">3</span>
          <div className="HomePage__symbol">></div>
          <div className="HomePage__image">
            <img className="HomePage__imageSrc" src={KacperPhoto} alt="" />
          </div>
          <span className="HomePage__nickname">Kacper</span>
          <span className="HomePage__points">43</span>
        </div>

        <div className="HomePage__firstPlace">
          <span className="HomePage__placeNumber">1</span>
          <div className="HomePage__symbol">
            <img src={CoronaImg} className="HomePage__corona" alt="corona" />
          </div>
          <div className="HomePage__image HomePage__image--first">
            <img className="HomePage__imageSrc" src={KarolPhoto} alt="" />
          </div>
          <span className="HomePage__nickname">Karol</span>
          <span className="HomePage__points">356</span>
        </div>

        <div className="HomePage__secondPlace">
          <span className="HomePage__placeNumber">2</span>
          <div className="HomePage__symbol">></div>
          <div className="HomePage__image">
            <img className="HomePage__imageSrc" src={JustynaPhoto} alt="" />
          </div>
          <span className="HomePage__nickname">Justyna</span>
          <span className="HomePage__points">124</span>
        </div>
      </div>

      <div className="HomePage__anotherPlaces">
        <span className="HomePage__placeNumberSpan">4</span>
        <div className="HomePage__anotherPlacesBox">
          <div className="HomePage__anotherPlacesImageWrapper">
            <img
              src={PaulinaPhoto}
              alt=""
              className="HomePage__anotherPlacesImage"
            />
          </div>
          <span className="HomePage__anotherPlacesNickname">Paulina</span>
          <span className="HomePage__anotherPlacesPoints">15</span>
        </div>
      </div>

      <div className="HomePage__anotherPlaces">
        <span className="HomePage__placeNumberSpan">5</span>
        <div className="HomePage__anotherPlacesBox">
          <div className="HomePage__anotherPlacesImageWrapper">
            <img
              src={KacperPhoto}
              alt=""
              className="HomePage__anotherPlacesImage"
            />
          </div>
          <span className="HomePage__anotherPlacesNickname">Eugeniusz</span>
          <span className="HomePage__anotherPlacesPoints">8</span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
