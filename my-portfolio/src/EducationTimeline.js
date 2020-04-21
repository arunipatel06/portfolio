
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
import WorkIcon from '@material-ui/icons/Work';
import StarIcon from '@material-ui/icons/Star';

const EducationTimeline = (props) => {
//   const classes = usestyles();

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
  return (
    <div style={{ overflow: "hidden", maxWidth: "70%" }}>
      <div>
        <NewNavbar />
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography >Education</Typography>
          {education}
        </Grid>
      </Grid>
    </div>
  );
};

export default EducationTimeline;
