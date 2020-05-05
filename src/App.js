import React, { Component } from "react";
import HomePage from "./HomePage";

class App extends Component {

  render() {
    return (
      <div style={{ width: "100%", overflowX: "hidden" }}>
        <div>
          <HomePage />
        </div>
      </div>
    );
  }
}

export default App;
