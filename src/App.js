import React, { Fragment } from "react";
import { Router, Link } from "@reach/router";
import Home from "./Components/Home/Home";
import PlayerNav from "./Components/Player_and_Navigation/PlayerNav";
import Search from "./Components/Seach/Search";
import Library from "./Components/Library/Library";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Home path="/" />
        <Search path="search" />
        {/* <Library path="library" /> */}
      </Router>
      {/* <PlayerNav /> */}
    </Fragment>
  );
};

export default App;
