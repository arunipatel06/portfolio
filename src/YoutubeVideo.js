import React, { useEffect, Fragment } from "react";
import { IconButton, Grid, useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import YouTube from "react-youtube";
import { Clear } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#FAFAFA",
  },
  body: {
    position: "relative",
    width: "365px",
    backgroundColor: theme.palette.background.default,
    margin: "100px auto 0px",
    outline: 0,
    overflow: "hidden",
    [theme.breakpoints.up("md")]: {
      width: "920px",
    },
  },
  button: {
    color: "white",
    background: "black",
    padding: "7px 27px",
    textTransform: "none",
    width: "250px",
  },
  playVideo: {
    padding: "40px 10px 10px",
    [theme.breakpoints.up("md")]: {
      padding: "40px 40px",
    },
  },
  closeButton: {
    position: "absolute",
    top: "2px",
    right: "2px",
    [theme.breakpoints.up("md")]: {
      top: "8px",
      right: "8px",
    },
  },
}));

const YoutubeVideo = ({ isVideoPlaying, setIsVideoPlaying, videoId }) => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:972px)");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const videoPlayer = {
    height: matches ? "650px" : "350px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const modal1 = (
    <Modal open={isVideoPlaying} onClose={() => setIsVideoPlaying(false)}>
      <div className={classes.body}>
        <IconButton
          onClick={() => setIsVideoPlaying(false)}
          className={classes.closeButton}
        >
          <Clear />
        </IconButton>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <YouTube
              videoId={videoId}
              opts={videoPlayer}
              className={classes.playVideo}
            />
          </Grid>
        </Grid>
      </div>
    </Modal>
  );

  return <Fragment>{modal1}</Fragment>;
};

export default YoutubeVideo;
