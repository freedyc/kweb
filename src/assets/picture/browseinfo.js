import React from "react";
import injectSheet, { jss, ThemeProvider } from "react-jss";
console.log(jss.version);
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
    width: "350px",
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
    <p className={classes.info}>{judgeBrowser()}</p>
    <h6 className={classes.title}>操作系统:</h6>
    <p className={classes.info}>{judgeSystem()}</p>
  </div>
);
const judgeBrowser = () => {
  const { userAgent } = navigator;
  if(userAgent.includes('Firefox')) {
    return 'Firefox';
  }
  if(userAgent.includes('Chrome') && navigator.vendor.includes("Google")) {
    return 'Chrome'
  }
  if(userAgent.includes('Trident')) {
    return 'IE'
  }
}
const judgeSystem = () => {
  return /\([\w\s.]+;/.exec(navigator.userAgent)[0].slice(1, -1);
}

const StyledNavigator = injectSheet(styles)(Navigator);

const theme = {
  background: "green",
  color: "#000"
};

const Browse = () => (
  <ThemeProvider theme={theme}>
    <StyledNavigator />
  </ThemeProvider>
);

export default Browse;
