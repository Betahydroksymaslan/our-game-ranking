import React, { useContext, useRef, useEffect } from "react";
import { AppContext } from "../../store/store";
import Loader from "../Loader/Loader";
import { gsap } from "gsap";

const AllGames = () => {
  const { games } = useContext(AppContext);
  let page = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(page, { autoAlpha: 0 }, { duration: 0.3, autoAlpha: 1 });
  }, []);

  const gameList = games.map((item) => (
    <div key={item.name} className="AllGames__gameWrapper">
      <div className="AllGames__logoWrapper">
        <img src={item.imageUrl} className="AllGames__logoImage" />
      </div>
      <span className="AllGames__gameName">
        {item.name.length > 16 ? `${item.name.slice(0, 16)}..` : item.name}
      </span>
      <span className="AllGames__gamePoints">1st: {item.firstPlace}</span>
      <span className="AllGames__gamePoints">2nd: {item.secondPlace}</span>
      <span className="AllGames__gamePoints">3rd: {item.thirdPlace}</span>
    </div>
  ));

  return games ? (
    <div className="AllGames" ref={(el) => (page = el)}>
      <h2 className="AllGames__header">All Games</h2>
      {games.length && gameList}
    </div>
  ) : (
    <Loader />
  );
};

export default AllGames;
