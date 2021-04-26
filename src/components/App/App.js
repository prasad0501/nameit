import React from "react";
import Header from "../Header/Header";
import ResultsContainer from "../ResultsContainer/ResultsContainer";
import SearchBox from "../SearchBox/SearchBox";
import "./App.css";
const name = require("@rstacruz/startup-name-generator");
class App extends React.Component {
  state = {
    headerText: "this is cool",
    headerExpanded: true,
    suggestednames: [],
  };

  handleInputChange = (inputText) => {
    name(inputText);
    this.setState({
      headerExpanded: !inputText,
      suggestednames: inputText.length > 0 ? name(inputText) : [],
    });
  };
  render() {
    return (
      <div>
        <Header
          headerExpanded={this.state.headerExpanded}
          headtitle={this.state.headerText}
        />
        <SearchBox onInputChange={this.handleInputChange} />
        <ResultsContainer suggestednames={this.state.suggestednames} />
      </div>
    );
  }
}

export default App;
