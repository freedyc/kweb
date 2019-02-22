import React from "react";
import injectSheet, { ThemeProvider } from "react-jss";

const styles = theme => ({
  wrapper: () => ({
    padding: "5px",
    background: "rgba(146, 119, 78, 0.74)",
    border: "1px solid #555",
    borderRadius: '6px',
    textAlign: "left",
    position: "absolute",
    right: 0,
    bottom: 0,
    color: "#fff",
    display: "inline-block",
    width: "300px",
  }),
  title: {
  	paddingLeft: "10px",
  	display:"inline-block",
  	margin: 0,
    font: {
      size: "14px",
      weight: "bold"
    },
    color: theme.color
  },
  info: {
  	margin: 0,
  	display: 'inline-block',
  	paddingLeft: "4px",
    color: theme.color,
  }
})

const Navigator = ({ classes }) => (
  <div className={classes.wrapper}>
    <h6 className={classes.title}>浏览器名称:</h6>
    <p className={classes.info}>{navigator.appName}</p>
    <h6 className={classes.title}>操作系统:</h6>
    <p className={classes.info}>{navigator.platform}</p>
  </div>
);

const StyledNavigator = injectSheet(styles)(Navigator);

const theme = {
  background: "green",
  color: "#000"
};

export default Browse = () => (
  <ThemeProvider theme={theme}>
    <StyledNavigator />
  </ThemeProvider>
);
