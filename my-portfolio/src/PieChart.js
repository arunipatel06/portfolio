// import React from "react";

// import Paper from '@material-ui/core/Paper';
// import { Chart,PieSeries, Title,Tooltip,Legend } from '@devexpress/dx-react-chart-material-ui';
// import { Animation, HoverState, EventTracker} from '@devexpress/dx-react-chart';

// const data = [
//   { region: 'Asia', val: 4119626293 },
//   { region: 'Africa', val: 1012956064 },
//   { region: 'Northern America', val: 344124520 },
//   { region: 'Latin America and the Caribbean', val: 590946440 },
//   { region: 'Europe', val: 727082222 },
//   { region: 'Oceania', val: 35104756 },
// ];

//  class PieChart extends React.PureComponent {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data,
//       targetItem: undefined,
//     };

//     this.changeTargetItem = targetItem => this.setState({ targetItem });
//   }

//   render() {
//     const { data: chartData, targetItem } = this.state;

//     return (
//       <Paper>
//         <Chart
//           data={chartData}
//         >
//           <PieSeries
//             valueField="val"
//             argumentField="region"
//             innerRadius={0.4}
//           />
//           <EventTracker />
//            <HoverState />
//            <Tooltip targetItem={targetItem} onTargetItemChange={this.changeTargetItem} />
//             <Legend />
//           <Title
//             text="The Population of Continents and Regions"
//           />
          
//           <Animation duration= {1000} />
         
//         </Chart>
//       </Paper>
//     );
//   }
// }
// export default PieChart;


import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const legend={
        position: 'left'
};
const width={
  width: '200'
};
const data = {
 
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

class PieChart extends React.Component{
  // displayName: 'Skills';

  render() {
    return (
      <div>
        <h2>Skills</h2>
        <Doughnut data={data} legend={legend} width={width}/>
      </div>
    );
  }
};

export default PieChart;