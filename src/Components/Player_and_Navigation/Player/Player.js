import React from "react";
import "./Player.css";
import pause from "./player_icons/pause.svg";
import like from "./player_icons/like.svg";

const Player = () => {
  return (
    <div className="player">
      <div className="text_box">
        <h6>Title of the Read</h6>
        <p>Playing from my list</p>
      </div>
      <div className="player_btn">
        <img src={pause} alt="pause" />
        <img src={like} alt="like" />
      </div>
    </div>
  );
};
export default Player;
