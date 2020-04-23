import React from "./node_modules/react";
import ReactDOM from "./node_modules/react-dom";
import Hexagon from "./Hexx/Hexagon";
import "./Hexx/HexxSkills.css";

class HexSkills extends React.Component {
  render() {

    return (
      <div>
            {/* <div style={{margin:"0 100px"}} size={hexagonSize}> */}
            {/* Simple image hexagon */}
            <Hexagon
              style={{ stroke: "red", fill:"white" }}
            //   backgroundImage="./assests/Avatar.jpg"
            //   backgroundScale={1.05}
            //   backgroundHeight="5px"
            />
            <Hexagon
              q={3}
              r={-3}
              s={0}
              style={{ stroke: "blue", fill: "pink" }}
            ></Hexagon>
            <Hexagon style={{ stroke: "blue", fill: "red" }} />
            <Hexagon style={{ stroke: "blue", fill: "red" }} />
      </div>
    );
  }
}

export default HexSkills;
// ReactDOM.render(<HexSkills />, document.getElementById("root"));
