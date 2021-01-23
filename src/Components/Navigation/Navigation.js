import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return ( 
        <nav className="Nav">
            <Link className="Nav__link" to="/our-game-ranking/ppg">
                PPG
            </Link>

            <Link className="Nav__link Nav__link--active" to="/our-game-ranking/ppg">
                standard
            </Link>

            <Link className="Nav__link" to="/our-game-ranking/ppg">
                PPS
            </Link>
        </nav>
     );
}
 
export default Navigation;