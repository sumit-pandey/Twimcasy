import React from "react";
import insight_svg from "./insights_svg/insight.svg";
import bookmark_svg from "./insights_svg/bookmark.svg";
import list_svg from "./insights_svg/list.svg";
import commented_svg from "./insights_svg/commented.svg";
import exclusive_svg from "./insights_svg/exclusive.svg";
import read_svg from "./insights_svg/read.svg";
import share_svg from "./insights_svg/share.svg";

import "./Insights.css";

const Insight = () => {
  return (
    <div className="insights">
      <img src={insight_svg} />
      <span>Create Collection</span>
      <img src={bookmark_svg} />
      <span>Bookmarked</span>
      <img src={list_svg} />
      <span>List</span>
      <img src={commented_svg} />
      <span>Commented</span>
      <img src={exclusive_svg} />
      <span>Exclusive</span>
      <img src={read_svg} />
      <span>Read</span>
      <img src={share_svg} />
      <span>Share</span>
    </div>
  );
};
export default Insight;
