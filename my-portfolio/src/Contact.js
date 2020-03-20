import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button} from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailOutlineRoundedIcon from "@material-ui/icons/MailOutlineRounded";

const usestyles = makeStyles(theme => ({
  
  icons:{
    fontSize:'40px',
    width:'5em',
    height: '7em',
    margin:'15px',

  },
  div:{
    margin:'30px',
  },
  text: {
    margin: "auto",
    textAlign: "center",
    fontFamily: "freight-sans-pro Helvetica Neue Helvetica Arial sans-serif",
    fontSize: "60px",
    fontWeight: "bold",
    color: "white",
    justifyContent: "center",
    borderBottom:"3px solid #c3c9c5",
  },
  body: {
    backgroundColor: "#39373a",
    height: "100vh",
    width: "100%",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  circle:{
    borderRadius:'60%',
    height:'60px',
    width:'60px',
    padding:'0px',
    margin:'10px'
  },
}));
const Contact = props => {
  const classes = usestyles();

  return (
    <div>
      <Grid item={12}>
        <section className={classes.body}>
          <div>
            <p className={classes.text}>Thank You </p>
          </div>
          <div className={classes.div}>
            <Button variant="contained" className={classes.circle}>
              <LinkedInIcon  disableElevation={true} style={{ fontSize:"40px" , margin:'0px' }}/>
            </Button>

            <Button variant="contained" className={classes.circle}>
              <MailOutlineRoundedIcon  disableElevation={true} style={{ fontSize:"40px" , margin:'0px' }}/>
            </Button>

            <Button variant="contained" className={classes.circle}>
              <GitHubIcon  disableElevation={true} style={{ fontSize:"40px" , margin:'0px' }}/>
            </Button>

            <Button variant="contained" className={classes.circle}>
              <InstagramIcon  disableElevation={true} style={{ fontSize:"40px" , margin:'0px' }}/>
            </Button>
            
          </div>
        </section>
      </Grid>
    </div>
  );
};

export default Contact;
