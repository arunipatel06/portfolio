// import React from 'react';

// function App() {
//   return <div>Hello there</div>;
// }

// export default App;
import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Contact from "./Contact";
import Progressbar from "./Progressbar";
class App extends Component {

  render() {
    return (
      <div style={{ width: "100%", overflowX: "hidden" }}>
        <div>
          <BrowserRouter>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/contact/:no" component={Contact} />
                <Route path="/progressBar" component={Progressbar} />
              </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
