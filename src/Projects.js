import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Divider, Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import YoutubeVideo from "./YoutubeVideo";
//images
import Project1 from "../src/assests/Project1.jpg";
import Project2 from "../src/assests/Project2.png";
import Project3 from "../src/assests/Project3.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title2: {
    color: "#5e98dc",
    textAlign: "center",
    fontFamily: '"Mada", sans-serif',
    fontSize: "50px",
    lineHeight: "65px",
    fontWeight: "normal",
    marginTop: "40px",
    [theme.breakpoints.up("lg")]: {
      fontSize: "65px",
      lineHeight: "84px",
      marginTop: "80px",
    },
  },
  heading1: {
    textAlign: "center",
    fontFamily: '"Manrope", sans-serif',
    fontSize: "35px",
    lineHeight: "35px",
    display: "flex",
    color: "#260859",
    justifyContent: "center",
    margin: "30px 0px",
    [theme.breakpoints.up("sm")]: {
      margin: "50px 0px",
    },
  },
  divider: {
    height: "1px",
    backgroundColor: "#f0f2f5",
  },
  content: {
    fontFamily: "sans-serif",
    fontWeight: "normal",
    fontStyle: "normal",
    color: "#4f4f4f",
    fontSize: "19px",
    lineHeight: "30px",
  },
  paper: {
    height: 400,
    width: 320,
    // backgroundColor: '#e8e8ed',
    textAlign: "left",
    // padding: theme.spacing(5),
  },
  cardHeading: {
    fontFamily: '"Mada", sans-serif',
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "24px",
    lineHeight: "36px",
    color: "#000000",
    marginTop: "20px",
  },
  cardContent: {
    fontFamily: "sans-serif",
    marginTop: "10px",
    fontWeight: "normal",
    fontStyle: "normal",
    color: "#4f4f4f",
    fontSize: "13px",
    lineHeight: "15px",
    padding: "0px 65px",
  },
  cardButton: {
    fontFamily: "sans-serif",
    margin: theme.spacing(1),
    padding: "2px 27px",
    textTransform: "none",
    fontSize: "19px",
    borderRadius: "25px",
    color: "#5e98dc",
  },
  cardImage: {
    width: "100%",
  },
}));

const Project = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const body1 = (
    <div>
      <Grid
        container
        style={{
          flexGrow: 1,
          margin: "25px 0px 100px",
        }}
        spacing={2}
      >
        <Grid item xs={12}>
          <Divider className={classes.divider} style={{ marginTop: "10px" }} />
          <Typography className={classes.heading1}>Projects</Typography>
          <Divider
            className={classes.divider}
            style={{ marginBottom: "20px" }}
          />
          <Grid container justify="center" spacing={4}>
            <Grid key={4} item>
              <Card className={classes.paper}>
                <CardActionArea>
                  <CardMedia
                    className={classes.cardImage}
                    image={Project1}
                    title="React DashBoard"
                    style={{
                      height: "194px",
                      Border: "3px solid black",
                    }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      React-DashBoard
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      React DashBoard with date picker and calender component
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="outlined"
                      className={classes.cardButton}
                      style={{ marginTop: "29px" }}
                      size="large"
                      onClick={() =>
                        window.open(
                          "https://arunipatel06.github.io/React-DashBoard/"
                        )
                      }
                    >
                      View Here
                    </Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid key={4} item>
              <Card className={classes.paper}>
                <CardActionArea>
                  <CardMedia
                    className={classes.cardImage}
                    image={Project2}
                    title="User Authentication"
                    style={{
                      height: "194px",
                    }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      User Authentication
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      React App with User Authentication implemented with
                      MongoDB and GraphQl Server.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="outlined"
                      className={classes.cardButton}
                      size="large"
                      onClick={() => setIsVideoPlaying(true)}
                    >
                      View Here
                    </Button>
                    <YoutubeVideo
                      isVideoPlaying={isVideoPlaying}
                      setIsVideoPlaying={setIsVideoPlaying}
                      videoId="RTuheX7aMNw"
                    />
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>
            {/* **************************** */}
            <Grid key={4} item>
              <Card className={classes.paper}>
                <CardActionArea>
                  <CardMedia
                    className={classes.cardImage}
                    image={Project3}
                    title="SiteList App"
                    style={{
                      height: "194px",
                      Border: "3px solid black",
                    }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      SiteList App
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      React App that opens list of sites and the related cient
                      information page.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="outlined"
                      className={classes.cardButton}
                      style={{ marginTop: "29px" }}
                      size="large"
                      onClick={() =>
                        window.open(
                          "https://arunipatel06.github.io/SiteList-App/"
                        )
                      }
                    >
                      View Here
                    </Button>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );

  return <div className={classes.root}>{body1}</div>;
};

export default Project;
