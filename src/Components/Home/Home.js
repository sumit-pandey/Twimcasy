import React, { useState, useEffect } from "react";
import "./Home.css";
import threeDotNav from "./3dotnav/3_dot_nav.svg";
import img from "./placeholder/img.svg";
import right_arrow from "./placeholder/arrowhead-right.svg";
import book from "./placeholder/book.svg";
import { animateScroll as scroll } from "react-scroll";
import SwipeableViews from "react-swipeable-views";
import SwipeableTextMobileStepper from "./carousel.js";
import MediaCard from "./Card/Card";
import { VideoCard } from "./Card/Card";
import { grey } from "@material-ui/core/colors";
import { flex, gridTemplateColumns, backgroundRepeat } from "styled-system";
import { navigate } from "@reach/router";
import Player from "../MaxPlayer/MaxPlayer";

const Home = () => {
  const handleClick = e => {
    console.log(e.target.childNodes);
  };

  // runs immediatly after the component is mounted
  useEffect(() => {
    scroll.scrollToTop();
  });
  const Router = () => {
    navigate(`/Player/`);
    console.log("hello world");
  };
  return (
    <div className="home_container">
      <div className="home_content">
        <div className="greetigns">
          <header className="greetings_header">
            <h3>Hi, from Twimcast</h3>
            <img src={threeDotNav} />
          </header>
          {/* carousel starts */}

          <SwipeableTextMobileStepper />

          {/* carousel ends */}
        </div>

        {/* featured div starts */}

        <div className="featured">
          <h3>Featured</h3>

          {/* carousel starts */}
          <SwipeableTextMobileStepper />
          {/* carousel ends */}
        </div>

        {/* feature div ends */}

        {/* trending starts here */}

        <div className="trending" onClick={Router}>
          <h3>Trending</h3>
          <div className="trending_contents">
            <div className="item">
              <img src={img} alt="img" />
              <div className="item_content">
                <h4>Title to the read</h4>
                <p>
                  It is a long established fact that a reader will be
                  distracted.{" "}
                </p>
                <h6>Author name in Category</h6>
              </div>
              <div className="more">
                <img src={threeDotNav} />
              </div>
            </div>

            <div className="item">
              <img src={img} alt="img" />
              <div className="item_content">
                <h4>Title to the read</h4>
                <p>
                  It is a long established fact that a reader will be
                  distracted.{" "}
                </p>
                <h6>Author name in Category</h6>
              </div>
              <div className="more">
                <img src={threeDotNav} />
              </div>
            </div>
            <div className="item">
              <img src={img} alt="img" />
              <div className="item_content">
                <h4>Title to the read</h4>
                <p>
                  It is a long established fact that a reader will be
                  distracted.{" "}
                </p>
                <h6>Author name in Category</h6>
                {/* <span
                  style={{
                    color: "#A9A9A9",
                    fontSize: 12,
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-round"
                  }}
                >
                  07 May | 5min <img src={book} />{" "}
                </span> */}
              </div>
              <div className="more">
                <img src={threeDotNav} />
              </div>
            </div>

            <div className="item">
              <img src={img} alt="img" />
              <div className="item_content">
                <h4>Title to the read</h4>
                <p>
                  It is a long established fact that a reader will be
                  distracted.{" "}
                </p>
                <h6>Author name in Category</h6>
              </div>
              <div className="more">
                <img src={threeDotNav} />
              </div>
            </div>

            <div className="item">
              <img src={img} alt="img" />
              <div className="item_content">
                <h4>Title to the read</h4>
                <p>
                  It is a long established fact that a reader will be
                  distracted.{" "}
                </p>
                <h6>Author name in Category</h6>
              </div>
              <div className="more">
                <img src={threeDotNav} />
              </div>
            </div>
          </div>
          <footer>
            Explore all <img src={right_arrow} />
          </footer>
        </div>

        {/* trending ends here */}

        {/* latest div starts here */}

        <div className="latest">
          <h3>Latest</h3>
          <div className="latest_contents">
            <div className="item">
              <img src={img} alt="img" />
              <div className="item_content">
                <h4>Title to the read</h4>
                <p>
                  It is a long established fact that a reader will be
                  distracted.{" "}
                </p>
                <h6>Author name in Category</h6>
              </div>
              <div className="more">
                <img src={threeDotNav} />
              </div>
            </div>

            <div className="item">
              <img src={img} alt="img" />
              <div className="item_content">
                <h4>Title to the read</h4>
                <p>
                  It is a long established fact that a reader will be
                  distracted.{" "}
                </p>
                <h6>Author name in Category</h6>
              </div>
              <div className="more">
                <img src={threeDotNav} />
              </div>
            </div>

            <div className="item">
              <img src={img} alt="img" />
              <div className="item_content">
                <h4>Title to the read</h4>
                <p>
                  It is a long established fact that a reader will be
                  distracted.{" "}
                </p>
                <h6>Author name in Category</h6>
              </div>
              <div className="more">
                <img src={threeDotNav} />
              </div>
            </div>
          </div>
          <footer>
            Explore all <img src={right_arrow} />
          </footer>
        </div>

        {/* latest divs ends here */}

        {/* banking and financial services div starts here */}

        <div className="banking">
          <h3>Banking and Services</h3>
          <div className="latest_contents">
            <div className="item">
              <img src={img} alt="img" />
              <div className="item_content">
                <h4>Title to the read</h4>
                <p>
                  It is a long established fact that a reader will be
                  distracted.{" "}
                </p>
                <h6>Author name in Category</h6>
              </div>
              <div className="more">
                <img src={threeDotNav} />
              </div>
            </div>

            <div className="item">
              <img src={img} alt="img" />
              <div className="item_content">
                <h4>Title to the read</h4>
                <p>
                  It is a long established fact that a reader will be
                  distracted.{" "}
                </p>
                <h6>Author name in Category</h6>
              </div>
              <div className="more">
                <img src={threeDotNav} />
              </div>
            </div>

            <div className="item">
              <img src={img} alt="img" />
              <div className="item_content">
                <h4>Title to the read</h4>
                <p>
                  It is a long established fact that a reader will be
                  distracted.{" "}
                </p>
                <h6>Author name in Category</h6>
              </div>
              <div className="more">
                <img src={threeDotNav} />
              </div>
            </div>
          </div>
          <footer>
            Explore all <img src={right_arrow} />
          </footer>
        </div>

        {/* /banking and financial services div ends here */}

        {/* featured Reports starts*/}
        <div className="featured_reports">
          <h3>Featured Reports</h3>
          <SwipeableViews>
            <MediaCard />
            <MediaCard />
            <MediaCard />
          </SwipeableViews>
          <footer>
            Explore all <img src={right_arrow} />
          </footer>
        </div>
        {/* featured reports ends  */}

        {/* featured collection */}
        <div className="featured_collection">
          <h3
            style={{
              fontSize: 17,
              fontWeight: 100,
              color: "#494949",
              padding: ".8rem",
              margin: 0
            }}
          >
            Featured Collection
          </h3>
          {/* <SwipeableViews> */}
          <div
            style={{
              width: "100vw",
              overflowX: "scroll",
              scrollSnapType: "x mandatory",
              display: "grid",
              gridTemplateColumns: "repeat(4, 200px)",
              gridGap: 10
            }}
          >
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
          </div>

          {/* </SwipeableViews> */}
          <footer>
            Explore all <img src={right_arrow} />
          </footer>
        </div>

        {/* home page component starts*/}
        <div className="footer">
          <div className="footer_content">
            <h5
              style={{
                fontSize: 18,
                fontWeight: "normal"
              }}
            >
              This is how you did today
            </h5>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div>
                <h6 style={{ margin: 0, letterSpacing: 0.8 }}>Time spent</h6>
                <h1
                  style={{
                    fontWeight: 300,
                    textAlign: "center",
                    margin: 2,
                    fontSize: 45,
                    color: "#494949"
                  }}
                >
                  24 <span style={{ fontSize: 12 }}>mins</span>
                </h1>
              </div>
              <div>
                <h6 style={{ margin: 0 }}>Content Captured</h6>
                <h1
                  style={{
                    textAlign: "center",
                    fontWeight: 300,
                    margin: 2,
                    fontSize: 45,
                    color: "#494949"
                  }}
                >
                  7
                </h1>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "90%",
              height: "20%",
              display: "flex",
              justifyContent: "center"
            }}
          >
            <div style={{ width: "80%", color: "#494949" }}>
              <h6
                style={{
                  textAlign: "left",
                  fontWeight: "100",
                  lineHeight: "25px"
                }}
              >
                <i>"Time ins't the main thing.</i>
              </h6>
              <h6 style={{ textAlign: "center", fontWeight: "100" }}>
                <i>It's the only thing".</i>
              </h6>
              <h6 style={{ textAlign: "right", fontWeight: "100" }}>
                <i>-Miles Davis</i>
              </h6>
            </div>
          </div>
          <div style={{ width: "90%", textAlign: "center" }}>
            <span style={{ fontSize: "25px", color: "#4d4545" }}>Twimcast</span>
          </div>
        </div>

        {/* home page component ends */}
      </div>
    </div>
  );
};
export default Home;
