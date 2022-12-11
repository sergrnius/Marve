import './appBanner.scss';

import AvengersLogo from '../../resources/img/Avengers_logo.png';
import Avengers from '../../resources/img/Avengers.png';

let AppBanner = () => {

    return (
    <div className="app__banner">
        <img src={Avengers} alt="Avengers"/>
        <div className="app__banner-text">
            New comics every week!<br/>
            Stay tuned!
        </div>
        <img src={AvengersLogo} alt="Avengers logo"/>
    </div>
    )
}

export default AppBanner;