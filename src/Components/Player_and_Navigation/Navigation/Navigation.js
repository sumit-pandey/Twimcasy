import React, { useEffect } from "react";
import "./Navigation.css";
import { Router, Link } from "@reach/router";
import home from "./navigation_icons/home.svg";
import search from "./navigation_icons/search.svg";
import library from "./navigation_icons/library.svg";
import menu from "./navigation_icons/menu.svg";

const Navigation = () => {
  useEffect(() => {
    const btns = document.querySelectorAll(".nav_btn_container");

    // adding and removeing btn active

    btns[0].addEventListener("click", function() {
      if ([...btns[0].classList].includes("active")) {
        btns[0].classList.remove("active");
      }
      btns[0].classList.add("active");
      btns[1].classList.remove("active");
      btns[2].classList.remove("active");
      btns[2].classList.remove("active");
      btns[3].classList.remove("active");
    });

    btns[1].addEventListener("click", function() {
      if ([...btns[1].classList].includes("active")) {
        btns[1].classList.remove("active");
      }
      btns[1].classList.add("active");
      btns[0].classList.remove("active");
      btns[2].classList.remove("active");
      btns[3].classList.remove("active");
    });
    btns[2].addEventListener("click", function() {
      if ([...btns[2].classList].includes("active")) {
        btns[2].classList.remove("active");
      }
      btns[2].classList.add("active");
      btns[1].classList.remove("active");
      btns[0].classList.remove("active");
      btns[3].classList.remove("active");
    });
    btns[3].addEventListener("click", function() {
      if ([...btns[3].classList].includes("active")) {
        btns[3].classList.remove("active");
      }
      btns[2].classList.remove("active");
      btns[1].classList.remove("active");
      btns[0].classList.remove("active");
      btns[3].classList.add("active");
    });
  });

  return (
    <div className="navigation_bar">
      <div className="nav_btn_container active">
        <Link to="#">
          <img src={home} alt="home" />
        </Link>
      </div>

      <div className="nav_btn_container">
        <Link to="search">
          <img src={search} alt="search" />
        </Link>
      </div>

      <div className="nav_btn_container">
        <img src={library} alt="library" />
      </div>
      <div className="nav_btn_container">
        <img src={menu} alt="menu" />
      </div>
    </div>
  );
};
export default Navigation;
