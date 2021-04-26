import React from "react";
import NameCard from "../NameCard/NameCard";
import "./ResultsContainer.css";

const ResultsContainer = (props) => {
  const suggestNamesmod = props.suggestednames.map((suggestedname, i) => {
    return <NameCard suggestedname={suggestedname} key={i} />;
  });
  return <div className="results-container">{suggestNamesmod}</div>;
};

export default ResultsContainer;
