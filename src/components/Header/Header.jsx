import React from "react";
import { AppBar, Toolbar, CssBaseline, Typography } from "@material-ui/core";
import gitHubIcon from "./../../images/github-logo.png";
import { Link } from "react-router-dom";
import {
  ToolbarWrraper,
  Logo,
  LinksWrraper,
  Img,
  LinkBtn,
} from "./Header.styled";

function Header() {
  return (
    <AppBar position="static">
      <CssBaseline />
      <ToolbarWrraper>
        <Toolbar>
          <Logo>
            <Typography variant="h6">
              <Link to="/">
                <Img src={gitHubIcon} />
              </Link>
              Index Github
            </Typography>
          </Logo>
          <LinksWrraper>
            <Link to="/">
              <LinkBtn>
                <Logo>
                  <Typography variant="h6">Home</Typography>
                </Logo>
              </LinkBtn>
            </Link>
            <Link to="/about">
              <LinkBtn>
                <Logo>
                  <Typography variant="h6">About</Typography>
                </Logo>
              </LinkBtn>
            </Link>
          </LinksWrraper>
        </Toolbar>
      </ToolbarWrraper>
    </AppBar>
  );
}

export default Header;
