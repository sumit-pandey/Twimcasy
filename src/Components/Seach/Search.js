import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <div className="container">
      <div className="content">
        <h1 className="heading">Search</h1>
        <input
          type="text"
          id="search"
          placeholder="Insight, podcasts, or reports"
        />
        {/* top catagoreis */}

        <div className="top_categories">
          <h6 style={{ fontSize: 12 }}>Top categories</h6>
          <div className="top_grids">
            <div className="items">Customer Experience</div>
            <div className="items">Banking and Digital Transformation</div>
            <div className="items">Business Modles</div>
            <div className="items">Careers</div>
          </div>

          {/* ----xxxxxxxxxx---- */}

          {/* Browse all catagories */}

          <div className="browse_all_catgories">
            <h6 style={{ fontSize: 12 }}>Browse All Catagories</h6>
            <div className="browse_all_grids">
              <div className="items">Customer Experience</div>
              <div className="items">Banking and Digital Transformation</div>
              <div className="items">Business Modles</div>
              <div className="items">Careers</div>
              <div className="items">Careers</div>
              <div className="items">Careers</div>
              <div className="items">Careers</div>
              <div className="items">Careers</div>
              <div className="items">Careers</div>
              <div className="items">Careers</div>
              <div className="items">Careers</div>
            </div>
          </div>

          {/* ---xxxxxxxxxxxx--- */}
        </div>
      </div>
    </div>
  );
};
export default Search;
