import React from 'react';
import { Timeline } from 'antd';
import { Typography, Grid, Divider } from '@material-ui/core';
import 'antd/dist/antd.css';
import './Education.css';
import SchoolIcon from '@material-ui/icons/School';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import WorkIcon from '@material-ui/icons/Work';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import {useStyles} from './JssStyleSheet/JssEducation';

const Education = (props) => {
  const classes = useStyles();
  const mode = 'left';
  return (
    <div>
      <Grid container>
        <Grid item xs={12} className={classes.container}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            {/* work experience */}
            <Divider
              className={classes.divider}
              style={{ marginTop: '10px' }}
            />
            <Typography className={classes.heading1}>
              Work Experience
            </Typography>
            <Divider
              className={classes.divider}
              style={{ marginBottom: '30px' }}
            />

            <Timeline mode={mode}>
              <Timeline.Item
                label="June 2017 - March 2018"
                dot={<WorkIcon style={{ fontSize: '30px' }} />}
              >
                <Typography className={classes.heading}>
                  Web Developer
                </Typography>
                <Typography className={classes.content}>
                  Embers InfoTech, Gujarat, India.
                </Typography>
                <Typography className={classes.paragraph}>
                  Revamped existing website to improve user experience.
                  Extensively utilized Github for version control in agile
                  environment. Created GraphQL endpoints to handle client-side
                  request. Designed and implemented web components with React
                  and Material Ui.
                </Typography>
              </Timeline.Item>
              <Timeline.Item
                label="May 2018 - Jan 2020"
                dot={<WorkOutlineIcon style={{ fontSize: '30px' }} />}
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
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Divider
              className={classes.divider}
              style={{ marginTop: '10px' }}
            />
            <Typography className={classes.heading1}>Education</Typography>
            <Divider
              className={classes.divider}
              style={{ marginBottom: '30px' }}
            />
            <Timeline mode={mode}>
              <Timeline.Item
                label="May 2018 - Dec 2019"
                dot={<SchoolIcon style={{ fontSize: '30px' }} />}
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
                dot={<SchoolOutlinedIcon style={{ fontSize: '30px' }} />}
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
