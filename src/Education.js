import React from "react";
import { Grid, Divider, Typography , Card, CardContent} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LensRoundedIcon from "@material-ui/icons/LensRounded";
import NewNavbar from "./NewNavbar";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@material-ui/icons/School';

const usestyles = makeStyles(theme => ({
  page: {
    height: "100vh",
    // width: "100%",
    backgroundColor: "white",
    padding: "35px 20px"
  },
  title: {
    textAlign: "center",
    fontFamily: "freight-sans-pro Helvetica Neue Helvetica Arial sans-serif",
    textTransform: "uppercase",
    fontSize: "35px",
    fontWeight: 600,
    color: "grey",
    margin: "80px 0px 25px 0px",
  },
  border: {
    borderLeft: "5px solid #fcc93a",
    margin: "0px 0px 0px 20px ",
    height: "3"
    // padding:"30px"
  },
  icons: {
    // position: "absolute",
    color: "#fcc93a",
    fontSize: "25px",
    // margin: "0px 0px 40px 0px"
    // border: "3px solid grey",
    // borderRadius: "50%"

  },
  bullets: {
    display:"flex",
    flexDirection:"row",
    justifyContent:"left",
    alignItems:"center"
  },

  contentContainer: {
    paddingBottom:"25px"
  },
  heading: {
    textAlign: "center",
    fontSize: "20px",
    fontFamily: "freight-sans-pro Helvetica Neue Helvetica Arial sans-serif",
    overflow:"hidden"
  },
  year: {
    fontFamily: "Helvetica Neue Helvetica Arial",
    fontSize: "15px",
    color: "grey",
    fontStyle: "bold"
  },

  degree: {
    fontStyle: "italic",
    margin: "10px 0px 10px 15px",
    fontSize: "15px",
    fontFamily: "sans-serif"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  cardTitle: {
    fontSize: "18px",
  },
  pos: {
    marginBottom: 12,
  },
}));
const Education = props => {
  const classes = usestyles();

  const education = (
    <div style={{backgroundColor:"grey"}}>
      <VerticalTimeline layout={'1-column'}>
      <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="April 2013"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
    // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentStyle={{ borderTop: '4px solid  rgb(233, 30, 99)' }}
  >
    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
    <p>
      Strategy, Social Media
    </p>
  </VerticalTimelineElement >
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2002 - 2006"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
          contentStyle={{ borderTop: '4px solid  rgb(233, 30, 99)' }}
        >
          <h3 className="vertical-timeline-element-title" >
            Bachelor of Science in Interactive Digital Media Visual Imaging
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor Degree
          </h4>
          <p>Creative Direction, Visual Design</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
  const masterEducation = (
    <Card className={classes.root}>
      <CardContent>
        <Typography>
          Concordia University
        </Typography>
        <Typography  className={classes.cardTitle} color="textSecondary" gutterBottom>
            Masters In Software Engineering
        </Typography>

        {/* <Typography className={classes.pos} variant="body2" component="p" color="textSecondary">
          Major Courses: Sofware Design Methodologies, Software Architecture
        </Typography> */}
      </CardContent>
    </Card>
  );

  const BachelorEducation = (
    <Card className={classes.root}>
      <CardContent>
        <Typography>
          Gujarat Technological University
        </Typography>
        <Typography  className={classes.cardTitle} color="textSecondary" gutterBottom>
            Bachelors in Computer Engineering
        </Typography>

        {/* <Typography className={classes.pos} variant="body2" component="p" color="textSecondary">
        </Typography> */}
      </CardContent>
    </Card>
  );



  return (
    <div style={{overflow:'hidden' ,maxWidth:'70%'}} >
      <div><NewNavbar /></div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
          <Typography className={classes.title}>Education</Typography>
          {education}
          </Grid>
          
          <Grid item xs={3}>
            <div className={classes.heading}>Masters </div>
            <div className={classes.bullets}>
              <LensRoundedIcon className={classes.icons} />
              <Divider style={{height:"3px", width:"180px",  backgroundColor: "#fcc93a",}}/>
            </div>
          </Grid>

          <Grid item xs={9}>
            <div className={classes.contentContainer}>
              {masterEducation}
            </div>
          </Grid>

          <Grid item xs={3}>
            <div className={classes.heading}>Bachelors </div>
            <div className={classes.bullets}>
              <LensRoundedIcon className={classes.icons} />
              <Divider style={{height:"3px", width:"180px",  backgroundColor: "#fcc93a",}}/>
            </div>
          </Grid>

          <Grid item xs={9}>
            <div className={classes.contentContainer}>
              {BachelorEducation}
            </div>
          </Grid>
        </Grid>

    </div>
  );
};

export default Education;
