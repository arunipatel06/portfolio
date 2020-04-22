import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Contact from "./Contact";
import Skills from "./Skills";
import Education from "./Education";
// import EducationTimeline from "./EducationTimeline";
import Hexx from "./Hexx";
class App extends Component {

  render() {
    return (
      <div style={{ width: "100%", overflowX: "hidden" }}>
        <div>
          <BrowserRouter>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/skills" component={Skills}/>
                <Route exact path="/education" component={Education}/>
                {/* <Route exact path="/educationtimeline" component={EducationTimeline}/> */}
                <Route exact path="/hexskill" component={Hexx}/>

              </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
