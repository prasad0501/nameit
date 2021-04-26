import React from "react";
import "./Header.css";
import nameitpic from "../../assets/nameit.png";
const Header = (props) => {
  return (
    <div className="head-container">
      <img
        src={nameitpic}
        className={`head-image ${
          props.headerExpanded ? "head-image-expanded" : "head-image-contracted"
        }`}
        alt="headerImage"
      />
      <h1
        className={`head-text ${
          props.headerExpanded ? "head-text-expanded" : "head-text-contracted"
        }`}
      >
        Name It!
      </h1>
    </div>
  );
};

export default Header;
