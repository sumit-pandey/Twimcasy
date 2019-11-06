import React, { useState, useEffect } from "react";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./MaxPlayer.css";
import SkipNextRoundedIcon from "@material-ui/icons/SkipNextRounded";
import SkipPreviousRoundedIcon from "@material-ui/icons/SkipPreviousRounded";
import PlayCircleFilledWhiteRoundedIcon from "@material-ui/icons/PlayCircleFilledWhiteRounded";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import Tooltip from "@material-ui/core/Tooltip";

import PauseCircleFilledRoundedIcon from "@material-ui/icons/PauseCircleFilledRounded";
import sound from "./audio.wav";
import intro from "./intro.wav";

import Slider from "@material-ui/core/Slider";
function ValueLabelComponent(props) {
  const { children, open, value } = props;

  const popperRef = React.useRef(null);
  React.useEffect(() => {
    if (popperRef.current) {
      popperRef.current.update();
    }
  });

  return (
    <Tooltip
      PopperProps={{
        popperRef
      }}
      open={open}
      enterTouchDelay={0}
      placement="top"
      title={value}
    >
      {children}
    </Tooltip>
  );
}
// time stamp converter
const convertSeconds = sec => {
  let h = Math.floor(sec / 3600);
  let m = Math.floor((sec % 3600) / 60);
  let s = Math.floor(sec % 60);

  let hDisplay = h <= 0 ? "" : `${h}:`;
  let mDisplay = m < 10 ? `0${m}` : m;
  let sDisplay = s < 10 ? `0${s}` : s;

  return `${hDisplay}${mDisplay}:${sDisplay}`;
};
const Player = props => {
  //  state management

  let [isPlaying, updateIsPlaying] = useState("true");
  let [value, setValue] = useState(0);
  const handlePlayNPause = () => {
    const audio = document.querySelector("audio");
    console.log(audio);
    const method = audio.paused ? "play" : "pause";
    audio[method]();
    updateIsPlaying(!isPlaying);
  };

  // runs after the component mounts

  useEffect(() => {
    const audio = document.querySelector("audio");

    const currentTime = document.getElementById("current_time");
    const duration = document.getElementById("duration_time");
    console.log(currentTime);
    const handleChange = (event, value) => {
      const percent = (audio.currentTime / audio.duration) * 100;
      setValue((value = percent.toFixed(0)));
      currentTime.innerText = convertSeconds(audio.currentTime);
      duration.innerText = convertSeconds(audio.duration);
      if (audio.currentTime === audio.duration) {
        updateIsPlaying(!isPlaying);
      }
    };
    audio.addEventListener("timeupdate", handleChange);
  }, []);

  return (
    <div className="max_player_container">
      <header className="max_player_header">
        <ExpandMoreRoundedIcon fontSize="large" onClick={props.handleClose} />
        <MoreVertIcon />
      </header>
      <div className="max_player_content">
        <div className="max_player_cover">
          <header className="max_player_cover_header">
            <h6 style={{ textAlign: "center", marginBottom: 10 }}>
              Auto poadcast
            </h6>
          </header>
          <div className="max_player_cover_img">
            <PlayCircleFilledWhiteIcon
              fontSize="large"
              color="primary"
              style={{
                position: "relative",
                top: "85%",
                left: "65%",
                color: "#0D1C2E",
                width: 60,
                height: 60
              }}
            />
          </div>
        </div>
        <div className="max_player_text">
          <header className="max_player_text_header">
            <h3
              style={{
                marginBottom: 10,
                color: "#494949"
              }}
            >
              5 CFO Priorities to be a Digi
            </h3>
          </header>
          <div className="max_player_text_content">
            Chief Financial Officers (CFOs), now, have a strong ambition and
            influence to drive business along with digital changes for
            delivering growth. They are predicting the future rather than
            reporting the past, creating new value from data, enabling digital
            transformation across the enterprise, and using the power of data to
            align with tomorrow’s business. An overwhelming 53% of our
            respondents are grappling with two key dilemmas at the workplace of
            today. The question we had asked was – What is the biggest dilemma
            you are facing at work today? The first, ‘not enough learning at the
            workplace’ is something we shared our insights on last week. The
            second, ‘your company not being able to adapt to digital times’ is
            the inspiration for this particular insight. Why is your company not
            able to adapt to digital times? Imagine. You are driving on a long
            stretch of a free highway. At night. No, this is not a horror story.
            It’s a normal day in your life. On that drive, it just happens that
            due to a technical glitch, the streetlights are flickering for a
            5-mile stretch. Flickering streetlamps illuminating the highway!
            Welcome, digital transformation. What? Right. The highway is your
            business. Each lamppost a business process, handshake, stakeholder
            and a node in your business infrastructure. Each flicker of the
            lamppost gives birth to light, shadows, and mirages as an outcome.
            As you maneuver all the horses under your hood through each
            lamppost, you can’t tell the difference between the light and
            shadows created from one to the other. It’s all interconnected.
            Flowing into, with and for each other. That’s digital transformation
            for a business. When every aspect of your business is integrated
            with the use of technology. To deliver real-time and on-demand
            decisions. Collective insights and foresights that help you
            understand your business, customer (destination(s)). But what allows
            this integration to happen? Well, it’s the two critical dimensions
            of Data and Co-ordinated networks.
          </div>
        </div>
      </div>
      <audio src={intro} autoPlay={true} />
      <div className="max_player_controls">
        <div className="max_player_progressbar">
          <Slider
            ValueLabelComponent={ValueLabelComponent}
            id="progressBar"
            aria-label="custom thumb label"
            value={value}
            onChange={(event, newValue) => setValue(newValue)}
            style={{ color: "#9D9283" }}
          />
        </div>
        <div
          style={{
            width: "80%",
            marginTop: ".8rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "11px",
            color: "#A9A9A9",
            fontWeight: "700"
          }}
        >
          <span id="current_time">00:00</span>
          <span id="duration_time">00:00</span>
        </div>
        <div className="max_player_buttons">
          <div className="likesvg">
            {/* #regionstart verbose svg */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16.41"
              height="20.067"
              viewBox="0 0 16.41 20.067"
            >
              <path
                id="_Icon_Сolor"
                data-name="🎨 Icon Сolor"
                d="M8.206,0a1.106,1.106,0,0,0-.772.313,1.128,1.128,0,0,0-.337.879c.009.155.009.31.009.474a17.468,17.468,0,0,1-.495,4.476c-.187.567-.362,1.167-.364,1.173A14.434,14.434,0,0,1,5.3,4.956a1.084,1.084,0,0,0-1.057-.835,1.086,1.086,0,0,0-.781.328L2.392,5.56a8.73,8.73,0,0,0,0,12.007,7.985,7.985,0,0,0,5.8,2.5H8.2a8.024,8.024,0,0,0,5.818-2.5A8.719,8.719,0,0,0,14.007,5.56L8.982.33A1.061,1.061,0,0,0,8.206,0Zm-2.2,8.915c1.594,0,2.777-1.943,3.165-5.2l3.27,3.4a6.456,6.456,0,0,1,.01,8.887,5.85,5.85,0,0,1-8.5,0,6.5,6.5,0,0,1-.141-8.748C4.529,8.628,5.4,8.915,6.011,8.915Z"
                fill="#0d1c2e"
              />
            </svg>
            {/* #regionend */}
          </div>
          <SkipPreviousRoundedIcon style={{ fontSize: "2rem" }} />
          {/* toggle bwt paly and pause btn */}
          {isPlaying ? (
            <PauseCircleFilledRoundedIcon
              style={{ fontSize: "3.5rem" }}
              onClick={handlePlayNPause}
            />
          ) : (
            <PlayCircleFilledWhiteRoundedIcon
              style={{ fontSize: "3.5rem" }}
              onClick={handlePlayNPause}
            />
          )}
          {/* ---------- */}
          <SkipNextRoundedIcon style={{ fontSize: "2rem" }} />
          <MoreVertIcon fontSize="medium" />
        </div>
      </div>
    </div>
  );
};
export default Player;
