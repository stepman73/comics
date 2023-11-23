import "./appBanner.scss";

import React from "react";
import avengers from "../../resources/img/Avengers.png";

import avengersLogo from "../../resources/img/Avengers_logo.png";

function AppBanner() {
  return (
    <div className="app__banner">
      <img src={avengers} loading="lazy" alt="Avengers" />

      <div className="app__banner-text">
        New comics every week!
        <br />
        Stay tuned!
      </div>

      <img src={avengersLogo} loading="lazy" alt="Avengers logo" />
    </div>
  );
}

export default AppBanner;
