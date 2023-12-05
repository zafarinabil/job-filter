import React from "react";
import "./Filter.css";

function Filter() {
  return (
    <>
      <div className="filter-container">
        <div className="chips">
          <div className="chip">Frontend</div>
          <div className="chip">CSS</div>
          <div className="chip">JavaScript</div>
        </div>
        <a className="clear" href="#">
          Clear
        </a>
      </div>
    </>
  );
}

export default Filter;
