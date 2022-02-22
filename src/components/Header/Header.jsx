import React from "react";
import "./styles.css";
import { AppBar, Toolbar, CssBaseline, Typography } from "@material-ui/core";
import gitHubIcon from "./../../images/github-logo.png";

function Header() {
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar style={{ backgroundColor: "rgb(36, 36, 37)" }}>
        <Typography variant="h6" className="logo">
          <img src={gitHubIcon} alt="" className="img" />
          Index GitHub
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
