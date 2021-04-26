import React from "react";
import "./NameCard.css";

const nameCheapUrl =
  "https://www.namecheap.com/domains/registration/results/?domain=";
const NameCard = (props) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      className="card-link"
      href={`${nameCheapUrl}${props.suggestedname}`}
    >
      <div className="result-name-card">
        <p className="result-name">{props.suggestedname}</p>
      </div>
    </a>
  );
};

export default NameCard;
