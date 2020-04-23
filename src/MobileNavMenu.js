import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Clear } from '@material-ui/icons';
import { Button, Divider, IconButton } from '@material-ui/core';
import ContactMeForm from './ContactMeForm';

const useStyles = makeStyles((theme) => ({
  mobileButtonContainer: {
    textAlign: 'center',
  },
  mobileButton: {
    fontFamily: '"Mada", sans-serif',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 16,
    lineHeight: '53px',
  },
  buttonBottomNav: {
    margin: '8px 10px 0px 10px',
  },
  icon2: {
    height: '45px',
    width: '55px',
  },
}));

const MobileNavMenu = ({
  setMobileOverlay,
  setScrollToResources,
  setScrollToSkills,
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <IconButton
          onClick={() => setMobileOverlay((mobileOverlay) => !mobileOverlay)}
        >
          <Clear />
        </IconButton>
      </div>
      <Divider />
      <div>
        <div className={classes.mobileButtonContainer}>
          <Button
            className={classes.mobileButton}
            onClick={() => {
              setMobileOverlay((mobileOverlay) => !mobileOverlay);
              setScrollToSkills();
            }}
          >
            Skills
          </Button>

          <div className={classes.mobileButtonContainer}>
            <Button
              className={classes.mobileButton}
              onClick={() => {
                setMobileOverlay((mobileOverlay) => !mobileOverlay);
                setScrollToResources();
              }}
            >
              Projects
            </Button>
          </div>

          <div className={classes.mobileButtonContainer}>
            <Button
              className={classes.mobileButton}
              onClick={() => setOpen(true)}
            >
              Contact
            </Button>
          </div>
        </div>
        <Divider />
      </div>
      <ContactMeForm open={open} setOpen={setOpen} />
    </Fragment>
  );
};

export default MobileNavMenu;
