import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  skills: {
    textAlign: "center",
  },
  header: {
    textAlign: "center",
    fontFamily: '"Manrope", sans-serif',
    fontSize: "35px",
    lineHeight: "35px",
    color: "#260859",
    justifyContent: "center",
    display: "flex",
    margin: "30px 0px",
    [theme.breakpoints.up("sm")]: {
      margin: "50px 0px",
    },
  },
  divider: {
    height: "1px",
    backgroundColor: "#f0f2f5",
  },
  pieBody: {
    [theme.breakpoints.up("sm")]: {
      padding: "0px 150px",
    },
    [theme.breakpoints.up("md")]: {
      padding: "0px 50px 0px 250px",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "0px 0px 60px 350px",
    },
  },
  barBody: {
    [theme.breakpoints.up("sm")]: {
      padding: "0px 100px",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "17px 100px 0px 0px",
    },
  },
}));
