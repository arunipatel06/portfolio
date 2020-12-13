import React from "react";
import { Timeline } from "antd";
import { Typography, Grid, Divider } from "@material-ui/core";
import "antd/dist/antd.css";
import "./Education.css";
import SchoolIcon from "@material-ui/icons/School";
import SchoolOutlinedIcon from "@material-ui/icons/SchoolOutlined";
import WorkIcon from "@material-ui/icons/Work";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import { useStyles } from "./JssStyleSheet/JssEducation";

const Education = (props) => {
  const classes = useStyles();
  const mode = "left";
  return (
    <div>
      <Grid container>
        <Grid item xs={12} className={classes.container}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {/* work experience */}
            <Divider
              className={classes.divider}
              style={{ marginTop: "10px" }}
            />
            <Typography className={classes.heading1}>
              Work Experience
            </Typography>
            <Divider
              className={classes.divider}
              style={{ marginBottom: "30px" }}
            />

            <Timeline mode={mode}>
              <Timeline.Item
                label="Dec 2020 - Present"
                dot={<WorkIcon style={{ fontSize: "30px" }} />}
              >
                <Typography className={classes.heading}>
                  FrontEnd Developer
                </Typography>
                <Typography className={classes.content}>
                  Gale Partners, Toronto, Ontario
                </Typography>
                <Typography className={classes.paragraph}>
                  Collaborating closely with the team size of more than 6 people
                  to support projects during all phases of delivery. Testing to
                  identify bugs and technical issues before and after deploying.
                  Monitoring website performance and rectifying
                  front-end-related issues. Communicating technical issues in an
                  understandable manner to the team and clients.
                </Typography>
              </Timeline.Item>
              <Timeline.Item
                label="Jan 2020 - Dec 2020"
                dot={<WorkOutlineIcon style={{ fontSize: "30px" }} />}
              >
                <Typography className={classes.heading}>
                  Full Stack Developer
                </Typography>
                <Typography className={classes.content}>
                  Embers InfoTech, Gujarat, India.
                </Typography>
                <Typography className={classes.paragraph}>
                  Designed and build 50+ robust backend API in JavaScript using
                  GraphQL and REST API. Performed user authentication with JWT
                  token and account verification with e-mail/phone using
                  firebase sdk which raised overall application security by 30%.
                  Extensively utilized GitHub for version control and deployed
                  code regularly on server using Circle CI/CD. Adopted Agile
                  project management process with Daily Stand-ups and Sprint
                  Planning.
                </Typography>
              </Timeline.Item>
              <Timeline.Item
                label="June 2017 - March 2018"
                dot={<WorkIcon style={{ fontSize: "30px" }} />}
              >
                <Typography className={classes.heading}>
                  Web Developer
                </Typography>
                <Typography className={classes.content}>
                  Embers InfoTech, Gujarat, India.
                </Typography>
                <Typography className={classes.paragraph}>
                  Built optimized landing pages with React and Material-UI for
                  responsive design which support all types of devices and
                  raised cross-browser compatibility to 95%. Executed and
                  created 100+ reusable web components using React, jQuery and
                  CSS Styles to boost company’s marketing and promotional needs.
                  Revamped the existing website to improve user experience and
                  incorporated SEO techniques thereby increasing daily traffic
                  by 30%.
                </Typography>
              </Timeline.Item>
              <Timeline.Item
                label="May 2018 - Jan 2020"
                dot={<WorkOutlineIcon style={{ fontSize: "30px" }} />}
              >
                <Typography className={classes.heading}>
                  Customer Care Specialist
                </Typography>
                <Typography className={classes.content}>
                  IO Solutions, Montreal, QC.
                </Typography>
                <Typography className={classes.paragraph}>
                  Answered an average of 50 calls per day, addressing customer
                  inquiries, entering customer details with written
                  communication skills. Achieved revenue targets, document
                  problems and record solutions offered.
                </Typography>
              </Timeline.Item>
            </Timeline>
          </div>
        </Grid>

        {/* education */}
        <Grid item xs={12} className={classes.container}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Divider
              className={classes.divider}
              style={{ marginTop: "10px" }}
            />
            <Typography className={classes.heading1}>Education</Typography>
            <Divider
              className={classes.divider}
              style={{ marginBottom: "30px" }}
            />
            <Timeline mode={mode}>
              <Timeline.Item
                label="May 2018 - Dec 2019"
                dot={<SchoolIcon style={{ fontSize: "30px" }} />}
              >
                <Typography className={classes.heading}>
                  Masters of Software Engineering
                </Typography>
                <Typography className={classes.content}>
                  Concordia University, Montreal, QC.
                </Typography>
                <Typography className={classes.paragraph}>
                  Major Courses: Software Design Methodologies, Advance
                  Programming Practices, Software Requirements Specification,
                  Project Management, Cloud Networking and few more.
                  <br /> Along with the courses I have done several projects
                  individually and in team. For detailed description refer my
                  resume above.
                </Typography>
              </Timeline.Item>

              <Timeline.Item
                label="June 2013 - June 2017"
                dot={<SchoolOutlinedIcon style={{ fontSize: "30px" }} />}
              >
                <Typography className={classes.heading}>
                  Bachelors of Computer Engineering
                </Typography>
                <Typography className={classes.content}>
                  Gujarat Technological University, Gujarat, India.
                </Typography>
                <Typography className={classes.paragraph}>
                  Major Courses: Operating Sytem, C++, System Programming, Java,
                  Design Engineering, .NET, Software Engineering, Web
                  Technology, Data Mining, Python Programming.
                </Typography>
              </Timeline.Item>
            </Timeline>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Education;
