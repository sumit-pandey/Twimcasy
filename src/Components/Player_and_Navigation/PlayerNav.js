import React from "react";
import Player from "./Player/Player";
import Navigation from "./Navigation/Navigation.js";
import "./PlayerNav.css";

const PlayerNav = () => {
  return (
    <div className="player_nav">
      <Player />
      <Navigation />
    </div>
  );
};
export default PlayerNav;
