import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const legend={
		position: 'left',
		labels: {
			fontColor: 'black'
		},
		boxWidth:'30',
			fontFamily: 'freight-sans-pro Helvetica Neue Helvetica Arial sans-serif',
			fontSize: '10px'
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
		],
	}]
};

class PieChart extends React.Component{
  // displayName: 'Skills';

  render() {
    return (
      <div>
        <Doughnut data={data} legend={legend} />
      </div>
    );
  }
};

export default PieChart;