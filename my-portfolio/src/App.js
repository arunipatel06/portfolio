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
import PieChart from "./PieChart";
import Skills from "./Skills";
class App extends Component {

  render() {
    return (
      <div style={{ width: "100%", overflowX: "hidden" }}>
        <div>
          <BrowserRouter>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/contact/:no" component={Contact} />
                <Route path="/progressbar" component={Progressbar} />
                <Route path="/piechart" component={PieChart} />
                <Route path="/skills" component={Skills}/>

              </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
