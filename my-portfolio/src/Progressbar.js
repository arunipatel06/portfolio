// import React, { Component } from "react";
// import ProgressBar from 'react-bootstrap/ProgressBar';



// class Progressbar extends Component {
//     let now = 60;
//     let progressInstance = <ProgressBar now={now} label={`${now}%`} />;
//     render() {
//      (progressInstance)
//      return (
//               <div>
//             <div>HELLLO</div>
//             <div><ProgressBar now={60} /></div>

//             </div>
//      );
//     }
//   }

// const Progressbar = props => {
//     const now = 60;
//     const progressInstance = (<div> <ProgressBar now={now} label={`${now}%`} /></div>);

//     return <div>{progressInstance}</div>;
// };

// export default Progressbar;

import React from 'react';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';


const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten('#ff6c5c', 0.5),
  },
  bar: {
    borderRadius: 10,
    backgroundColor: '#ff6c5c',
  },
})(LinearProgress);

// Inspired by the Facebook spinners.
const useStylesFacebook = makeStyles({
  root: {
    position: 'relative',
  },
  top: {
    color: '#eef3fd',
  },
  bottom: {
    color: '#6798e5',
    animationDuration: '550ms',
    position: 'relative',
    left: 0,
  },
});


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function CustomizedProgressBars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <BorderLinearProgress
        className={classes.margin}
        variant="determinate"
        color="secondary"
        value={50}
      />
    </div>
  );
}
