import React, { Component } from './node_modules/react';
import {HexGrid, Layout, Hexagon, Text } from './node_modules/react-hexgrid';
import './Hexx.css';

class Hexx extends Component {
  render() {
    const hexagonSize = { x: 7, y: 7 };
    // const moreHexas = GridGenerator.parallelogram(-2, 2, -2, 2);
    return (
      <div>
        <HexGrid width={1200} height={800} viewBox="-50 -50 100 100" >
          {/* Main grid with bit hexagons, all manual */}
          <Layout size={hexagonSize} spacing={1.1} origin={{ x: 0, y: 0 }}>
            
          <Hexagon q={4} r={0} ><Text>side</Text></Hexagon>
            

            <Hexagon  q={3} r={-3} s={0} ><Text>3,-3,0</Text></Hexagon>
            <Hexagon q={4} r={-3} s={-1} ><Text>4,-3,-1</Text></Hexagon>
            
            <Hexagon q={1} r={-2} s={1} ><Text>1-21</Text></Hexagon>
            <Hexagon q={2} r={-2} s={0} ><Text>2-20</Text></Hexagon>
            <Hexagon q={3} r={-2} s={-1} ><Text>3-21</Text></Hexagon>
            <Hexagon q={4} r={-2} s={-2} ><Text>4,-2,-2</Text></Hexagon>

            <Hexagon q={-1} r={-1} s={2} ><Text>-1-12</Text></Hexagon>
            <Hexagon q={0} r={-1} s={1} ><Text>0-11</Text></Hexagon>
            <Hexagon q={1} r={-1} s={0} ><Text>1-10</Text></Hexagon>
            <Hexagon q={2} r={-1} s={-1} ><Text>2-1-1</Text></Hexagon>
            {/* <Hexagon q={3} r={-1} s={-2} ><Text>3-1-2</Text></Hexagon> */}
            <Hexagon q={-2} r={0} s={3} ><Text>-203</Text></Hexagon>
            <Hexagon q={-1} r={0} s={2} ><Text>-102</Text></Hexagon>
            <Hexagon q={0} r={0} s={1} ><Text>001</Text></Hexagon>
          
            <Hexagon q={-2} r={1} s={1} ><Text>-211</Text></Hexagon>
           



          </Layout>
          {/* Additional small grid, hexagons generated with generator
          {/* <Layout size={{ x: 2, y: 2 }} origin={{ x: 50, y: -30 }}>
            { moreHexas.map((hex, i) => <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} />) }
          </Layout> */}
          {/* You can define multiple patterns and switch between them with "fill" prop on Hexagon */}
          {/* <Pattern id="pat-1" link="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg" size={hexagonSize} />
          <Pattern id="pat-2" link="http://lorempixel.com/400/400/cats/2/" size={hexagonSize} />  */}
        </HexGrid>
      </div>
    );
  }
}

export default Hexx;