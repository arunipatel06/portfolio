import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: [
    'Material-Ui',
    'HTML',
    'NodeJS',
    'GitHub',

    'AWS',
    'Firebase',
    'VScode',
    'NoSQL',

    'Redux',
    'BigQuery',
    'CSS',
    'Circle Ci',

    'GRASP',
    'Python',
  ],
  datasets: [
    {
      data: [80, 120, 80, 60, 20, 30, 120, 70, 30, 80, 120, 20, 50, 20],
      backgroundColor: [
        '#d4f0ed',
        '#77d1c7',
        '#37bbad',
        '#138e81',
        '#0e655b',

        '#eeeab7',
        '#e0db95',
        '#beb97e',
        '#a29d6b',

        '#fccebd',
        '#faa181',
        '#f87445',

        '#ada9b8',
        '#827c92',
        '#5d5572',
      ],
      hoverBackgroundColor: [
        '#324b72',
        '#324b72',
        '#324b72',
        '#324b72',
        '#324b72',
        '#4a4a4a',
        '#4a4a4a',
        '#4a4a4a',
        '#4a4a4a',
        '#005454',
        '#005454',
        '#005454',
        '#f70046',
        '#f70046',
        '#f70046',
      ],
      labels: [
        'Material-Ui',
        'HTML',
        'NodeJS',
        'GitHub',

        'AWS',
        'Firebase',
        'VScode',
        'NoSQL',

        'Redux',
        'BigQuery',
        'CSS',
        'Circle Ci',

        'GRASP',
        'Python',
      ],
      label: 'Outer',
    },
    // 	{
    //   data: [300, 300, 250, 150],
    //   backgroundColor: ['#5b8ad2', '#007273', '#818181', '#cb5927'],
    //   hoverBackgroundColor: ['#5b8ad2', '#007273', '#818181', '#cb5927'],
    //   labels: ['Frontend Tech', 'Database', 'Languages', 'Development tools'],
    //   label: 'Inner',
    // },
  ],
};

const options = {
  responsive: true,
  legend: {
    position: 'bottom',
    labels: {
      fontColor: 'black',
    },
    boxWidth: '50',
    fontFamily: 'freight-sans-pro Helvetica Neue Helvetica Arial sans-serif',
    fontSize: '20px',
    display: true,
  },
  tooltips: {
    callbacks: {
      label: function (tooltipItem, data) {
        var dataset = data.datasets[tooltipItem.datasetIndex];
        var index = tooltipItem.index;
        return dataset.labels[index] + ': ' + dataset.data[index];
      },
    },
  },
};

class PieChart extends React.Component {
  // displayName: 'Skills';

  render() {
    return (
      <div>
        <Doughnut data={data} options={options} width={150} />
      </div>
    );
  }
}

export default PieChart;
