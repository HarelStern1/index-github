import React from "react";
import "./styles.css";
import { AppBar, Toolbar, CssBaseline, Typography } from "@material-ui/core";
import gitHubIcon from "./../../images/github-logo.png";
import { Link } from "react-router-dom";
import LinkBtn from "./LinkBtn";

function Header() {
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar style={{ backgroundColor: "#282828" }}>
        <Typography variant="h6" className="logo">
          <Link to="/">
            <img src={gitHubIcon} alt="" className="img" />
          </Link>
          Index GitHub
        </Typography>
        <div className="links">
          <Link to="/">
            <LinkBtn>
              <Typography variant="h6" className="logo">
                Home
              </Typography>
            </LinkBtn>
          </Link>
          <Link to="/about">
            <LinkBtn>
              <Typography variant="h6" className="logo">
                About
              </Typography>
            </LinkBtn>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

/*
    <AppBar position="static">
      <CssBaseline />
      <Toolbar style={{ backgroundColor: "#282828" }}>
        <Logo>
          <Link to="/">
            <Img src={gitHubIcon} alt="" />
          </Link>
          Index GitHub
        </Logo>
        <Links>
          <Link to="/">
            <LinkBtn>
              <Logo>Home</Logo>
            </LinkBtn>
          </Link>
          <Link to="/about">
            <LinkBtn>
              <Logo>About</Logo>
            </LinkBtn>
          </Link>
        </Links>
      </Toolbar>
    </AppBar>
*/
