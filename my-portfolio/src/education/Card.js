import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: "18px",
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography>
          Concordia University
        </Typography>
        <Typography  className={classes.title} color="textSecondary" gutterBottom>
            Masters In Software Engineering
        </Typography>

        <Typography className={classes.pos} variant="body2" component="p" color="textSecondary">
          Major Courses: Sofware Design Methodologies, Software Architecture
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
