import React from "react";
import "./Navigation.css";
import home from "./navigation_icons/home.svg";
import search from "./navigation_icons/search.svg";
import library from "./navigation_icons/library.svg";
import menu from "./navigation_icons/menu.svg";

const Navigation = () => {
  return (
    <div className="navigation_bar">
      <img src={home} alt="home" />
      <img src={search} alt="search" />
      <img src={library} alt="library" />
      <img src={menu} alt="menu" />
    </div>
  );
};
export default Navigation;
