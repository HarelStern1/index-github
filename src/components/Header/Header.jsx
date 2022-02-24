import React from "react";
import "./styles.css";
import { AppBar, Toolbar, CssBaseline, Typography } from "@material-ui/core";
import gitHubIcon from "./../../images/github-logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar style={{ backgroundColor: "#282828" }}>
        <Typography variant="h6" className="logo">
          <img src={gitHubIcon} alt="" className="img" />
          Index GitHub
        </Typography>
        <div className="links">
          <Link to="/">
            <button className="link-btn">
              <Typography variant="h6" className="logo">
                Home
              </Typography>
            </button>
          </Link>
          <Link to="/about">
            <button className="link-btn">
              <Typography variant="h6" className="logo">
                About
              </Typography>
            </button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
