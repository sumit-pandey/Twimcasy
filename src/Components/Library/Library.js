import React from "react";
import "./Library.css";
import Insight from "./Insights/Insights";

const Library = () => {
  return (
    <div className="container">
      <div className="hero">
        <span id="insight" className="active tabs">
          Insight
        </span>
        <span id="podcast" className="inactive tabs">
          Podcast
        </span>
        <span id="reports" className="inactive tabs">
          Reports
        </span>
      </div>

      {/* router outlet */}
      <div className="library_content">
        <Insight />
      </div>
    </div>
  );
};
export default Library;
