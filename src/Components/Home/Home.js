import React, { useState } from "react";
import "./Home.css";
import threeDotNav from "./3dotnav/3_dot_nav.svg";
import img from "./placeholder/img.svg";
import right_arrow from "./placeholder/arrowhead-right.svg";
import book from "./placeholder/book.svg";

import SwipeableTextMobileStepper from "./carousel.js";
const Home = () => {
  const handleClick = e => {
    console.log(e.target.childNodes);
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

        <div className="trending" onClick={handleClick}>
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
      </div>
    </div>
  );
};
export default Home;
