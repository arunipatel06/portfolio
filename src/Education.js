import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Timeline } from 'antd';
import {Typography} from '@material-ui/core';
import 'antd/dist/antd.css';
import './Education.css';

//Icons
import { ClockCircleOutlined } from '@ant-design/icons';

const usestyles = makeStyles((theme) => ({
  title: {
    textAlign: 'left',
    fontFamily: '"Manrope",sans-serif',
    fontSize: '22px',
    lineHeight: '30px',
    fontWeight: 'normal',
    color: 'grey',
  },
  contentBody: {
    paddingBottom: '25px',
  },
  heading: {
    textAlign: 'left',
    fontFamily: '"Manrope",sans-serif',
    fontSize: '20px',
    lineHeight: '30px',
    fontWeight: 600,
    color: 'grey',
  },
  content: {
    textAlign: 'left',
    fontFamily: '"Manrope",sans-serif',
    fontSize: '18px',
    lineHeight: '25px',
    fontWeight: 'normal',
    color: 'grey',
  },
  icons: {
    color: '#fcc93a',
    fontSize: '25px',
  },
}));

const Education = (props) => {
  const classes = usestyles();
  const mode = 'left';
  return (
    <div style={{ width: '100%', marginTop: '200px' }}>
      <Timeline mode={mode}>
        <Timeline.Item
          label="2015-2017"
          dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}
          color="red"
        >
          <Typography className={classes.heading}>
            Solve initial network problems
          </Typography>
          <Typography className={classes.content}>
            Solve initial network problems
          </Typography>
        </Timeline.Item>
        <Timeline.Item
          label="2015-2017"
          dot={<ClockCircleOutlined style={{ fontSize: '26px' }} />}
          color="red"
        >
          <Typography className={classes.heading}>
            Solve initial network problems
          </Typography>
          <Typography className={classes.content}>
            Solve initial network problems
          </Typography>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default Education;
